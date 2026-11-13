import { test, expect } from "@playwright/test";

let pageErrors;
let failedLocalRequests;

// Exercise layout with actual image dimensions and deterministic icons without
// depending on the network services used by the deployed site.
test.beforeEach(async ({ page }) => {
  pageErrors = [];
  failedLocalRequests = [];
  page.on("pageerror", (error) => pageErrors.push(error.message));
  page.on("requestfailed", (request) => {
    if (
      request.url().startsWith("http://127.0.0.1:4173/") &&
      request.failure()?.errorText !== "net::ERR_ABORTED"
    ) {
      failedLocalRequests.push(request.url());
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
    if (/^avatars\d*\.githubusercontent\.com$/.test(parsed.hostname)) {
      return route.fulfill({
        status: 200,
        contentType: "image/png",
        path: "src/assets/images/github_logo.png",
      });
    }
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
        names.map((name) => [
          name,
          { body: '<path fill="currentColor" d="M2 2h20v20H2z"/>' },
        ]),
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

async function recordReveals(page) {
  // Retain references to the real Web Animations so the entrance can be
  // replayed deterministically after the target is scrolled into view.
  await page.addInitScript(() => {
    window.auditAnimations = [];
    const animate = Element.prototype.animate;
    Element.prototype.animate = function (...args) {
      const animation = animate.apply(this, args);
      window.auditAnimations.push({ element: this, animation });
      return animation;
    };
  });
}

for (const { name, path, selector, width = 1280 } of [
  {
    name: "education icons on mobile",
    path: "/education",
    selector: ".competitive-sites-inline",
    width: 375,
  },
  {
    name: "education icons on desktop",
    path: "/education",
    selector: ".competitive-sites-inline",
  },
  { name: "home skills", path: "/home", selector: ".software-skill-inline" },
  {
    name: "project languages",
    path: "/projects",
    selector: ".software-skill-inline-languages",
  },
  {
    name: "organization avatars",
    path: "/opensource",
    selector: ".organizations-img",
  },
  {
    name: "pull request avatars",
    path: "/opensource",
    selector: ".merge-by-img",
  },
  { name: "issue avatars", path: "/opensource", selector: ".assigned-to-img" },
]) {
  test(`reveal anchors stay still while hovering ${name}`, async ({ page }) => {
    await page.emulateMedia({ reducedMotion: "no-preference" });
    await page.setViewportSize({ width, height: 850 });
    await recordReveals(page);
    await page.goto(path);
    const target = page.locator(selector).first();
    await expect(target).toBeVisible();
    await target.scrollIntoViewIfNeeded();
    await expect
      .poll(() =>
        target.evaluate((element) =>
          window.auditAnimations.some(({ element: animated }) =>
            animated.contains(element),
          ),
        ),
      )
      .toBe(true);
    await target.evaluate((element) => {
      for (
        let ancestor = element;
        ancestor;
        ancestor = ancestor.parentElement
      ) {
        const entry = window.auditAnimations.find(
          ({ element: animated }) => animated === ancestor,
        );
        if (entry) {
          entry.animation.pause();
          entry.animation.currentTime = 25;
          entry.animation.play();
          return;
        }
      }
      throw new Error("No reveal animation was recorded for the target");
    });
    const initial = await target.boundingBox();
    await page.mouse.move(
      initial.x + initial.width / 2,
      initial.y + initial.height / 2,
    );
    await expect(page.getByRole("tooltip")).toBeVisible();
    // Allow the deliberate organization-image hover lift to finish, then
    // measure the entrance animation without relying on its start timing.
    await page.waitForTimeout(250);
    const before = await target.boundingBox();
    await page.waitForTimeout(800);
    const after = await target.boundingBox();
    expect(Math.abs(after.x - before.x), "horizontal movement").toBeLessThan(1);
    expect(Math.abs(after.y - before.y), "vertical movement").toBeLessThan(1);
    await expect(page.getByRole("tooltip")).toBeVisible();
  });
}

test("education tooltip stays stable and looks the same after route changes", async ({
  page,
}) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.setViewportSize({ width: 1280, height: 850 });
  await page.goto("/education");
  const icon = page.locator(".competitive-sites-inline").first();
  await expect(icon.locator("svg")).toBeAttached();
  await icon.evaluate((element) => {
    window.educationHover = { enters: 0, leaves: 0 };
    element.addEventListener(
      "mouseenter",
      () => window.educationHover.enters++,
    );
    element.addEventListener(
      "mouseleave",
      () => window.educationHover.leaves++,
    );
  });
  const rootWidth = await page
    .locator("#root")
    .evaluate((element) => element.getBoundingClientRect().width);
  const box = await icon.boundingBox();
  await page.mouse.move(box.x + box.width / 2, box.y + box.height - 1);
  const tooltip = page.getByRole("tooltip");
  await expect(tooltip).toHaveText("LeetCode");
  await expect(tooltip).toBeVisible();
  await page.waitForTimeout(500);
  expect(await page.evaluate(() => window.educationHover)).toEqual({
    enters: 1,
    leaves: 0,
  });
  expect(
    await page
      .locator("#root")
      .evaluate((element) => element.getBoundingClientRect().width),
  ).toBe(rootWidth);
  const readStyle = () =>
    tooltip.locator(".tooltip-inner").evaluate((element) => {
      const style = getComputedStyle(element);
      return {
        background: style.backgroundColor,
        color: style.color,
        padding: style.padding,
        border: style.border,
      };
    });
  const initialStyle = await readStyle();
  expect(initialStyle.background).not.toBe("rgba(0, 0, 0, 0)");
  await page
    .getByRole("navigation")
    .getByRole("link", { name: "Open Source" })
    .click();
  await expect(page.locator(".opensource-main")).toBeAttached();
  await page
    .getByRole("navigation")
    .getByRole("link", { name: "Education" })
    .click();
  await page.locator(".competitive-sites-inline").first().hover();
  await expect(tooltip).toBeVisible();
  expect(await readStyle()).toEqual(initialStyle);
});

test("tooltips flip into view when their target is near the viewport edge", async ({
  page,
}) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  for (const width of [375, 1280]) {
    await page.setViewportSize({ width, height: 850 });
    await page.goto("/education");
    const icon = page.locator(".competitive-sites-inline").first();
    await expect(icon.locator("svg")).toBeAttached();
    await page.evaluate(() => document.fonts.ready);
    await icon.evaluate((element) =>
      window.scrollTo({
        top: element.getBoundingClientRect().top + window.scrollY - 8,
        behavior: "instant",
      }),
    );
    const rect = await icon.boundingBox();
    expect(rect.y).toBeGreaterThanOrEqual(0);
    expect(rect.y).toBeLessThan(15);
    await page.mouse.move(rect.x + rect.width / 2, rect.y + rect.height / 2);
    const tooltip = page.getByRole("tooltip");
    await expect(tooltip).toBeVisible();
    await expect(tooltip).toHaveAttribute("data-popper-placement", /^bottom/);
    const tooltipRect = await tooltip.boundingBox();
    expect(tooltipRect.y, `${width}px tooltip top`).toBeGreaterThanOrEqual(0);
    expect(
      tooltipRect.y + tooltipRect.height,
      `${width}px tooltip bottom`,
    ).toBeLessThanOrEqual(850);
  }
});

test("mobile header keeps its logo and menu button on the same row", async ({
  page,
}) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  for (const width of [320, 375, 414, 768]) {
    await page.setViewportSize({ width, height: 850 });
    await page.goto("/education");
    const logo = page.locator(".header .logo");
    await expect(logo).toBeVisible();
    await page.evaluate(() => document.fonts.ready);
    const toggle = page.getByRole("button", { name: "Toggle navigation menu" });
    const logoBox = await logo.boundingBox();
    const toggleBox = await toggle.boundingBox();
    expect(logoBox.x, `${width}px logo`).toBeGreaterThanOrEqual(0);
    expect(
      toggleBox.x + toggleBox.width,
      `${width}px toggle`,
    ).toBeLessThanOrEqual(width);
    expect(logoBox.x + logoBox.width, `${width}px logo`).toBeLessThanOrEqual(
      toggleBox.x + 1,
    );
    expect(
      Math.min(logoBox.y + logoBox.height, toggleBox.y + toggleBox.height) -
        Math.max(logoBox.y, toggleBox.y),
      `${width}px vertical overlap`,
    ).toBeGreaterThan(20);
    await toggle.click();
    await expect(toggle).toHaveAttribute("aria-expanded", "true");
    await page.keyboard.press("Escape");
    await expect(toggle).toHaveAttribute("aria-expanded", "false");
  }
});

test("long contribution repository names and titles wrap within narrow cards", async ({
  page,
}) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  for (const width of [320, 375]) {
    await page.setViewportSize({ width, height: 850 });
    await page.goto("/opensource");
    await expect(page.locator(".pull-request-card").first()).toBeAttached();
    await expect(page.locator(".issue-card").first()).toBeAttached();
    const overflow = await page
      .locator(".parent-repo, .pr-title, .issue-title")
      .evaluateAll((elements) =>
        elements
          .filter((element) => element.scrollWidth > element.clientWidth + 1)
          .slice(0, 5)
          .map((element) => ({
            text: element.textContent.trim(),
            width: element.clientWidth,
            scroll: element.scrollWidth,
          })),
      );
    expect(overflow, `contribution text at ${width}px`).toEqual([]);
  }
});

test("back-to-top works by keyboard and cleans up its scroll handler", async ({
  page,
}) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/education");
  await expect(
    page.getByRole("heading", { name: "Degrees Received" }),
  ).toBeVisible();
  await page.keyboard.press("Tab");
  await page.evaluate(() => window.scrollTo(0, 600));
  const button = page.getByRole("button", { name: "Back to top" });
  await expect(button).toBeVisible();
  await button.focus();
  await expect(button).toHaveCSS("outline-style", "solid");
  await page.keyboard.press("Enter");
  await expect.poll(() => page.evaluate(() => window.scrollY)).toBe(0);
  await page.evaluate(() => window.scrollTo(0, 600));
  await expect(button).toBeVisible();
  await page.locator(".header .logo").evaluate((element) => element.click());
  await expect(page).toHaveURL(/\/splash$/);
  await page.evaluate(() => window.dispatchEvent(new Event("scroll")));
  await page.waitForTimeout(100);
});

test("resume shows a single loading indicator and renders once the PDF arrives", async ({
  page,
}) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  let releasePdf;
  const pdfGate = new Promise((resolve) => {
    releasePdf = resolve;
  });
  await page.route(/Resume.*\.pdf$/, async (route) => {
    await pdfGate;
    await route.continue();
  });
  try {
    await page.goto("/resume", { waitUntil: "domcontentloaded" });
    await expect(page.locator(".resume-loading")).toBeVisible();
    const loadingText = page.getByText("Loading resume...", { exact: true });
    await expect(loadingText).toHaveCount(1);
    await expect(loadingText).toBeVisible();
    await expect(page.locator(".loading-spinner")).toHaveCSS(
      "animation-name",
      "none",
    );
    await expect(page.locator("html")).toHaveCSS("scroll-behavior", "auto");
  } finally {
    releasePdf();
  }
  await expect(page.locator(".react-pdf__Page__canvas")).toBeVisible({
    timeout: 20_000,
  });
  await expect(page.locator(".resume-loading")).toHaveCount(0);
});

test("a damaged resume shows a stable, keyboard-accessible retry instead of a blank page", async ({
  page,
}) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  let requests = 0;
  await page.route(/Resume.*\.pdf$/, (route) => {
    requests++;
    return requests === 1
      ? route.fulfill({
          status: 200,
          contentType: "application/pdf",
          body: "not a PDF",
        })
      : route.continue();
  });
  await page.goto("/resume", { waitUntil: "domcontentloaded" });
  const retry = page.getByRole("button", { name: "Reload resume" });
  await expect(retry).toBeVisible({ timeout: 10_000 });
  await expect(
    page.getByText("Failed to load resume. Please try again later."),
  ).toBeVisible();
  await retry.scrollIntoViewIfNeeded();
  await retry.evaluate((element) => {
    window.retryHover = { enters: 0, leaves: 0 };
    element.addEventListener("mouseenter", () => window.retryHover.enters++);
    element.addEventListener("mouseleave", () => window.retryHover.leaves++);
  });
  const box = await retry.boundingBox();
  await page.mouse.move(box.x + box.width / 2, box.y + box.height - 0.5);
  await page.waitForTimeout(700);
  expect(await page.evaluate(() => window.retryHover)).toEqual({
    enters: 1,
    leaves: 0,
  });
  expect(await retry.boundingBox()).toEqual(box);
  await page.keyboard.press("Tab");
  await retry.focus();
  await expect(retry).toHaveCSS("outline-style", "solid");
  await retry.click();
  await expect(page.locator(".react-pdf__Page__canvas")).toBeVisible({
    timeout: 20_000,
  });
  expect(requests).toBeGreaterThanOrEqual(2);
});

test("contribution avatars and charts have accessible names", async ({
  page,
}) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/opensource");
  await expect(page.locator(".issue-card").first()).toBeAttached();
  const unnamed = await page
    .locator(".owner-img, .merge-by-img, .assigned-to-img")
    .evaluateAll((images) =>
      images
        .filter((image) => {
          const link = image.closest("a");
          return (
            !link?.getAttribute("aria-label") &&
            !image.getAttribute("alt") &&
            !link?.textContent.trim()
          );
        })
        .slice(0, 5)
        .map((image) => image.outerHTML),
    );
  expect(unnamed).toEqual([]);
  await expect(page.locator(".pr-chart canvas")).toHaveAccessibleName(
    /pull request distribution/i,
  );
  await expect(page.locator(".issue-chart canvas")).toHaveAccessibleName(
    /issue distribution/i,
  );
});

test("default secondary text and contribution status text have readable contrast", async ({
  page,
}) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/opensource");
  await expect(page.locator(".issue-card").first()).toBeAttached();
  const failures = await page.evaluate(() => {
    function luminance(color) {
      const channels = color
        .match(/[\d.]+/g)
        .slice(0, 3)
        .map(Number)
        .map((value) => {
          const c = value / 255;
          return c <= 0.04045 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4;
        });
      return channels[0] * 0.2126 + channels[1] * 0.7152 + channels[2] * 0.0722;
    }
    function contrast(foreground, background) {
      const values = [luminance(foreground), luminance(background)].sort(
        (a, b) => b - a,
      );
      return (values[0] + 0.05) / (values[1] + 0.05);
    }
    const failures = [];
    for (const card of document.querySelectorAll(
      ".pull-request-card, .issue-card",
    )) {
      const cardBackground = getComputedStyle(card).backgroundColor;
      for (const text of card.querySelectorAll(
        ".pr-subtitle, .issue-subtitle, .parent-repo a, .additions-files, .deletions-files, .files-changed-text",
      )) {
        const style = getComputedStyle(text);
        const background = text.classList.contains("files-changed-text")
          ? style.backgroundColor
          : cardBackground;
        const ratio = contrast(style.color, background);
        if (ratio < 4.5)
          failures.push({
            text: text.textContent.trim(),
            ratio: Math.round(ratio * 100) / 100,
          });
      }
    }
    const footer = document.querySelector(".footer-text");
    const ratio = contrast(
      getComputedStyle(footer).color,
      getComputedStyle(document.body).backgroundColor,
    );
    if (ratio < 4.5)
      failures.push({ text: "footer", ratio: Math.round(ratio * 100) / 100 });
    return failures.slice(0, 10);
  });
  expect(failures).toEqual([]);
});
