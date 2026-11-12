const fs = require("fs");
const os = require("os");
const path = require("path");
const { spawnSync } = require("child_process");

const script = path.join(
  process.cwd(),
  ".github/scripts/check-datadog-config.sh"
);

describe("Datadog CI configuration", () => {
  let dir;
  let output;
  let summary;

  beforeEach(() => {
    dir = fs.mkdtempSync(path.join(os.tmpdir(), "portfolio-datadog-"));
    output = path.join(dir, "output");
    summary = path.join(dir, "summary");
    fs.writeFileSync(output, "");
    fs.writeFileSync(summary, "");
  });

  afterEach(() => {
    fs.rmSync(dir, { recursive: true, force: true });
  });

  function run(apiKey, appKey) {
    const result = spawnSync("bash", [script], {
      encoding: "utf8",
      env: {
        ...process.env,
        DD_API_KEY: apiKey,
        DD_APP_KEY: appKey,
        GITHUB_OUTPUT: output,
        GITHUB_STEP_SUMMARY: summary,
      },
    });
    const log =
      result.stdout +
      result.stderr +
      fs.readFileSync(output, "utf8") +
      fs.readFileSync(summary, "utf8");
    for (const secret of [apiKey, appKey].filter(Boolean)) {
      expect(log).not.toContain(secret);
    }
    return result;
  }

  it("clearly skips optional tests when neither secret is available", () => {
    const result = run("", "");
    expect(result.status).toBe(0);
    expect(fs.readFileSync(output, "utf8")).toBe("configured=false\n");
    expect(fs.readFileSync(summary, "utf8")).toContain("tests skipped");
  });

  it.each([
    ["test-only-api-key", ""],
    ["", "test-only-app-key"],
  ])("fails when only one Datadog secret is configured", (apiKey, appKey) => {
    const result = run(apiKey, appKey);
    expect(result.status).toBe(1);
    expect(result.stderr).toContain("Configure both DD_API_KEY and DD_APP_KEY");
    expect(fs.readFileSync(output, "utf8")).toBe("");
  });

  it("enables the integration when both secrets are available", () => {
    const result = run("test-only-api-key", "test-only-app-key");
    expect(result.status).toBe(0);
    expect(fs.readFileSync(output, "utf8")).toBe("configured=true\n");
  });
});
