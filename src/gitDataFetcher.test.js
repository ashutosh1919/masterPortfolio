import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { spawnSync } from "node:child_process";
import { parse } from "graphql";

const files = [
  "pull_requests.json",
  "issues.json",
  "organizations.json",
  "projects.json",
];
const token = "test-only-secret-token";

// Run the real CLI in a temporary directory with a deterministic GitHub API.
const fakeFetch = `
const fs = require("fs");
globalThis.fetch = async (_url, options) => {
  const request = JSON.parse(options.body);
  fs.appendFileSync("requests.ndjson", JSON.stringify(request) + "\\n");
  const scenario = process.env.FETCHER_TEST_SCENARIO;
  if (scenario === "network") {
    const error = new Error("network error " + process.env.GITHUB_TOKEN);
    error.code = "ECONNRESET";
    throw error;
  }
  if (scenario === "http") {
    return { ok: false, status: 401, json: async () => ({}) };
  }
  if (scenario === "invalid-json") {
    return { ok: true, status: 200, json: async () => { throw new Error("bad JSON"); } };
  }
  if (scenario === "graphql") {
    return { ok: true, status: 200, json: async () => ({ errors: [{ message: "forbidden" }] }) };
  }
  if (scenario === "missing-user") {
    return { ok: true, status: 200, json: async () => ({ data: { user: null } }) };
  }
  if (scenario === "partial" && request.query.includes("pullRequests")) {
    return { ok: false, status: 503, json: async () => ({}) };
  }
  return {
    ok: true,
    status: 200,
    json: async () => ({
      data: { user: {
        pullRequests: { nodes: [
          { id: "pr1", state: "OPEN", baseRepository: { isPrivate: false } },
          { id: "pr2", state: "MERGED", baseRepository: { isPrivate: false } },
          { id: "pr3", state: "CLOSED", baseRepository: { isPrivate: false } },
          { id: "private-pr", state: "OPEN", baseRepository: { isPrivate: true } },
          { id: "unknown-pr", state: "OPEN", baseRepository: null },
        ] },
        issues: { nodes: [
          { id: "issue1", closed: false, repository: { isPrivate: false } },
          { id: "issue2", closed: true, repository: { isPrivate: false } },
          { id: "private-issue", closed: false, repository: { isPrivate: true } },
          { id: "unknown-issue", closed: false, repository: null },
        ] },
        repositoriesContributedTo: { nodes: [
          { owner: { login: "org", avatarUrl: "https://example.com/a", __typename: "Organization" } },
          { owner: { login: "org", avatarUrl: "https://example.com/a", __typename: "Organization" } },
          { owner: { login: "person", __typename: "User" } },
        ] },
        pinnedItems: { nodes: [
          { id: "project1", isPrivate: false, languages: { nodes: [{ name: "JavaScript" }, { name: "Unknown" }] } },
          { id: "private-project", isPrivate: true, languages: { nodes: [] } },
          { id: "unknown-project", languages: { nodes: [] } },
        ] },
      } },
    }),
  };
};
`;

describe("GitHub data fetcher", () => {
  let dir;
  let outputDir;

  beforeEach(() => {
    dir = fs.mkdtempSync(path.join(os.tmpdir(), "portfolio-fetcher-"));
    outputDir = path.join(dir, "src", "shared", "opensource");
    fs.mkdirSync(outputDir, { recursive: true });
    fs.copyFileSync(
      path.join(process.cwd(), "git_data_fetcher.mjs"),
      path.join(dir, "git_data_fetcher.mjs")
    );
    for (const file of files) {
      fs.writeFileSync(path.join(outputDir, file), '{"before":true}');
    }
    fs.writeFileSync(path.join(dir, "fetch-mock.cjs"), fakeFetch);
    for (const [name, source] of [
      ["dotenv", "module.exports = { config: () => ({}) };"],
    ]) {
      const moduleDir = path.join(dir, "node_modules", name);
      fs.mkdirSync(moduleDir, { recursive: true });
      fs.writeFileSync(path.join(moduleDir, "index.js"), source);
      fs.writeFileSync(
        path.join(moduleDir, "package.json"),
        JSON.stringify({ name, main: "index.js" })
      );
    }
  });

  afterEach(() => {
    fs.rmSync(dir, { recursive: true, force: true });
  });

  function run(scenario, overrides = {}) {
    return spawnSync(process.execPath, ["--require", "./fetch-mock.cjs", "git_data_fetcher.mjs"], {
      cwd: dir,
      encoding: "utf8",
      timeout: 10000,
      env: {
        ...process.env,
        GITHUB_TOKEN: token,
        GITHUB_USERNAME: "test-user",
        FETCHER_TEST_SCENARIO: scenario,
        ...overrides,
      },
    });
  }

  function read(file) {
    return JSON.parse(fs.readFileSync(path.join(outputDir, file), "utf8"));
  }

  function expectOriginalData() {
    for (const file of files) expect(read(file)).toEqual({ before: true });
  }

  it("fails before making requests when credentials are missing", () => {
    const result = run("success", { GITHUB_TOKEN: "" });
    expect(result.status).toBe(1);
    expect(result.stderr).toContain("Set GITHUB_TOKEN and GITHUB_USERNAME");
    expect(fs.existsSync(path.join(dir, "requests.ndjson"))).toBe(false);
    expectOriginalData();
  });

  it.each([
    ["network", "ECONNRESET"],
    ["http", "HTTP 401"],
    ["invalid-json", "invalid JSON"],
    ["graphql", "GraphQL error"],
    ["missing-user", "user not found"],
  ])("reports %s errors without exposing the token", (scenario, message) => {
    const result = run(scenario);
    expect(result.status).toBe(1);
    expect(result.stderr).toContain(message);
    expect(result.stderr).not.toContain(token);
    expectOriginalData();
  });

  it("writes the expected data and sends the login as a GraphQL variable", () => {
    const username = 'test") { injectedField } #';
    const result = run("success", { GITHUB_USERNAME: username });
    expect(result.status).toBe(0);
    expect(result.stderr).toBe("");
    expect(read("pull_requests.json")).toMatchObject({
      open: 1,
      merged: 1,
      closed: 1,
      totalCount: 3,
    });
    expect(read("issues.json")).toMatchObject({ open: 1, closed: 1, totalCount: 2 });
    expect(read("organizations.json").data).toHaveLength(1);
    expect(read("projects.json").data).toHaveLength(1);
    expect(read("projects.json").data[0].languages).toEqual([
      { name: "JavaScript", iconifyClass: "logos-javascript" },
    ]);
    for (const file of files) {
      const contents = fs.readFileSync(path.join(outputDir, file), "utf8");
      expect(contents).not.toMatch(/private-(pr|issue|project)/);
      expect(contents).not.toMatch(/unknown-(pr|issue|project)/);
    }

    const requests = fs
      .readFileSync(path.join(dir, "requests.ndjson"), "utf8")
      .trim()
      .split("\n")
      .map(JSON.parse);
    expect(requests).toHaveLength(4);
    const pullRequestsQuery = requests.find((request) =>
      request.query.includes("pullRequests")
    ).query;
    const issuesQuery = requests.find((request) =>
      request.query.includes("issues(")
    ).query;
    expect(pullRequestsQuery).toMatch(/pullRequests\(first:\s*100/);
    expect(pullRequestsQuery).toMatch(/baseRepository\s*\{\s*isPrivate/);
    expect(issuesQuery).toMatch(/issues\(first:\s*100/);
    expect(issuesQuery).toMatch(/repository\s*\{\s*isPrivate/);
    expect(
      requests.find((request) => request.query.includes("repositoriesContributedTo"))
        .query
    ).toMatch(/privacy:\s*PUBLIC/);
    expect(requests.find((request) => request.query.includes("pinnedItems")).query)
      .toMatch(/isPrivate/);

    for (const request of requests) {
      expect(request.variables.login).toBe(username);
      expect(request.query).not.toContain(username);
      expect(() => parse(request.query)).not.toThrow();
    }
  });

  it("returns failure when any request fails, even if other data is written", () => {
    const result = run("partial");
    expect(result.status).toBe(1);
    expect(result.stderr).toContain("HTTP 503");
    expect(read("pull_requests.json")).toEqual({ before: true });
    expect(read("issues.json").totalCount).toBe(2);
  });

  it("returns failure if output files cannot be written", () => {
    fs.rmSync(outputDir, { recursive: true });
    const result = run("success");
    expect(result.status).toBe(1);
    expect(result.stderr).toContain("Could not write");
    expect(result.stderr).not.toContain(token);
  });
});
