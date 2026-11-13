import { test, expect } from "@playwright/test";

let pageErrors;
let failedLocalRequests;

test.beforeEach(async ({ page }) => {
  pageErrors = [];
  failedLocalRequests = [];
  page.on("pageerror", (error) => pageErrors.push(error.message));
  page.on("requestfailed", (request) => {
    const failure = request.failure()?.errorText || "unknown";
    if (
      request.url().startsWith("http://127.0.0.1:4173/") &&
      failure !== "net::ERR_ABORTED"
    ) {
      failedLocalRequests.push(`${request.url()}: ${failure}`);
    }
  });
  page.on("response", (response) => {
    if (
      response.url().startsWith("http://127.0.0.1:4173/") &&
      response.status() >= 400
    ) {
      failedLocalRequests.push(`${response.url()}: HTTP ${response.status()}`);
    }
  });

  // Keep tests independent of analytics and third-party services. Supply a
  // deterministic Iconify response so icons and tooltip layout are exercised.
  await page.route("**/*", (route) => {
    const url = route.request().url();
    if (
      url.startsWith("http://127.0.0.1:4173/") ||
      url.startsWith("data:") ||
      url.startsWith("blob:")
    ) {
      return route.continue();
    }
    const parsed = new URL(url);
    if (
      /^(api\.iconify\.design|api\.simplesvg\.com|api\.unisvg\.com)$/.test(
        parsed.hostname,
      )
    ) {
      const prefix = parsed.pathname.replace(/^\//, "").replace(/\.json$/, "");
      const names = (parsed.searchParams.get("icons") || "")
        .split(",")
        .filter(Boolean);
      const icons = Object.fromEntries(
        names.map((name) => [name, { body: '<path d="M2 2h20v20H2z"/>' }]),
      );
      return route.fulfill({
        status: 200,
        contentType: "application/json",
        headers: { "access-control-allow-origin": "*" },
        body: JSON.stringify({ prefix, icons, width: 24, height: 24 }),
      });
    }
    return route.abort();
  });
});

test.afterEach(() => {
  expect(pageErrors, "uncaught browser exceptions").toEqual([]);
  expect(failedLocalRequests, "local asset failures").toEqual([]);
});

test("the splash screen transitions to the home page", async ({ page }) => {
  await page.goto("/");
  await expect(page.locator(".logo_wrapper")).toBeAttached();
  await expect(page).toHaveURL(/\/home$/, { timeout: 12_000 });
  await expect(page.locator(".greet-main")).toBeAttached();
});

test("all routes render with the real application dependencies", async ({
  page,
}) => {
  for (const [path, selector] of [
    ["/home", ".greet-main"],
    ["/education", ".education-main"],
    ["/experience", ".experience-main"],
    ["/projects", ".projects-main"],
    ["/opensource", ".opensource-main"],
    ["/contact", ".contact-main"],
    ["/resume", ".resume-main"],
    ["/not-found", ".error-main"],
  ]) {
    await page.goto(path);
    await expect(page.locator(selector).first()).toBeAttached();
  }
});

test("mobile navigation remains in view on every route when remote images fail", async ({
  page,
}) => {
  await page.setViewportSize({ width: 320, height: 850 });
  for (const [path, selector] of [
    ["/home", ".greet-main"],
    ["/education", ".education-main"],
    ["/experience", ".experience-main"],
    ["/projects", ".projects-main"],
    ["/opensource", ".opensource-main"],
    ["/contact", ".contact-main"],
    ["/resume", ".resume-main"],
    ["/not-found", ".error-main"],
  ]) {
    await page.goto(path);
    await expect(page.locator(selector).first()).toBeAttached();
    const root = await page.locator("#root").boundingBox();
    const menu = await page
      .getByRole("button", { name: "Toggle navigation menu" })
      .boundingBox();
    expect(root.width, path).toBeLessThanOrEqual(321);
    expect(menu.x + menu.width, path).toBeLessThanOrEqual(321);
  }
});

test("mobile navigation opens, follows a route, and closes", async ({
  page,
}) => {
  await page.setViewportSize({ width: 320, height: 850 });
  await page.goto("/home");
  const toggle = page.getByRole("button", { name: "Toggle navigation menu" });
  await toggle.click();
  await expect(toggle).toHaveAttribute("aria-expanded", "true");
  await page
    .getByRole("navigation", { name: "Main navigation" })
    .getByRole("link", { name: "Projects", exact: true })
    .click();
  await expect(page).toHaveURL(/\/projects$/);
  await expect(page.locator(".projects-main")).toBeAttached();
  await expect(
    page.getByRole("button", { name: "Toggle navigation menu" }),
  ).toHaveAttribute("aria-expanded", "false");
});

test("skill icons, the local font, and the tooltip work", async ({ page }) => {
  await page.goto("/home");
  const heading = page.getByRole("heading", { name: "Data Science & AI" });
  await heading.scrollIntoViewIfNeeded();
  await expect
    .poll(
      () => heading.evaluate((element) => getComputedStyle(element).opacity),
      { timeout: 5000 },
    )
    .toBe("1");
  const skill = page.locator(".software-skill-inline").first();
  await skill.scrollIntoViewIfNeeded();
  await expect(skill.locator(".software-skill-label")).toHaveText("Tensorflow");
  await expect(skill.locator("svg.iconify")).toBeAttached();
  await skill.hover();
  await expect(page.getByRole("tooltip").first()).toBeAttached();
  const font = await page
    .locator(".social-media-div i")
    .first()
    .evaluate((element) => ({
      content: getComputedStyle(element, "::before").content,
      family: getComputedStyle(element).fontFamily,
    }));
  expect(font.content).not.toBe("none");
  expect(font.family).toContain("Font Awesome");
});

test("certification cards retain their desktop grid and mobile width", async ({
  page,
}) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.setViewportSize({ width: 1280, height: 850 });
  await page.goto("/education");
  await expect(page.getByRole("link", { name: "LeetCode" })).toBeAttached();
  const cards = page.locator(".certs-body-div > .cert-card");
  await expect(cards.first()).toBeAttached();
  expect(
    await cards
      .first()
      .evaluate((element) => getComputedStyle(element).opacity),
  ).toBe("1");
  expect(await cards.count()).toBeGreaterThanOrEqual(4);
  const desktop = await cards.evaluateAll((nodes) =>
    nodes.slice(0, 4).map((node) => {
      const rect = node.getBoundingClientRect();
      return {
        x: rect.x,
        y: rect.y,
        width: rect.width,
        parentWidth: node.parentElement.getBoundingClientRect().width,
      };
    }),
  );
  expect(desktop[0].width).toBeGreaterThan(desktop[0].parentWidth * 0.25);
  expect(Math.abs(desktop[0].y - desktop[1].y)).toBeLessThan(2);
  expect(Math.abs(desktop[0].y - desktop[2].y)).toBeLessThan(2);
  expect(desktop[3].y).toBeGreaterThan(desktop[0].y);

  await page.setViewportSize({ width: 375, height: 850 });
  const mobile = await cards.evaluateAll((nodes) =>
    nodes.slice(0, 2).map((node) => {
      const rect = node.getBoundingClientRect();
      return {
        y: rect.y,
        width: rect.width,
        parentWidth: node.parentElement.getBoundingClientRect().width,
      };
    }),
  );
  expect(mobile[0].width).toBeGreaterThan(mobile[0].parentWidth * 0.9);
  expect(mobile[1].y).toBeGreaterThan(mobile[0].y);
  expect(
    await page.evaluate(() => document.documentElement.scrollWidth),
  ).toBeLessThanOrEqual(376);
});

test("both upgraded doughnut charts paint on canvas", async ({ page }) => {
  await page.goto("/opensource");
  for (const selector of [".pr-chart canvas", ".issue-chart canvas"]) {
    const canvas = page.locator(selector);
    await expect(canvas).toBeAttached();
    await expect
      .poll(
        () =>
          canvas.evaluate((element) => {
            if (!element.width || !element.height) return false;
            const data = element
              .getContext("2d")
              .getImageData(0, 0, element.width, element.height).data;
            for (let index = 3; index < data.length; index += 4)
              if (data[index] > 0) return true;
            return false;
          }),
        { timeout: 10_000 },
      )
      .toBe(true);
  }
});

test("experience panels open independently without mobile overflow", async ({
  page,
}) => {
  for (const width of [320, 375, 768, 1280]) {
    await page.setViewportSize({ width, height: 850 });
    await page.goto("/experience");
    const panels = page.locator(".accord-panel");
    await expect(panels).toHaveCount(3);
    for (let index = 0; index < 3; index++)
      await panels.nth(index).locator("summary").click();
    expect(
      await panels.evaluateAll(
        (nodes) => nodes.filter((node) => node.open).length,
      ),
    ).toBe(3);
    const dimensions = await page.evaluate(() => ({
      scroll: document.documentElement.scrollWidth,
      viewport: innerWidth,
    }));
    expect(dimensions.scroll).toBeLessThanOrEqual(dimensions.viewport + 1);
  }
});

test("résumé renders using the matching local PDF and worker", async ({
  page,
}) => {
  const workerResponse = page.waitForResponse((response) =>
    /pdf\.worker.*\.mjs/.test(response.url()),
  );
  const pdfResponse = page.waitForResponse((response) =>
    /Resume.*\.pdf$/.test(response.url()),
  );
  await page.goto("/resume");
  const canvas = page.locator(".react-pdf__Page__canvas");
  await expect(canvas).toBeVisible({ timeout: 20_000 });
  expect((await workerResponse).status()).toBe(200);
  expect((await pdfResponse).status()).toBe(200);
  await expect
    .poll(() =>
      canvas.evaluate((element) => element.width > 0 && element.height > 0),
    )
    .toBe(true);
  await expect(page.locator(".resume-error")).toHaveCount(0);
  await page.setViewportSize({ width: 375, height: 850 });
  await expect(canvas).toBeVisible();
});
