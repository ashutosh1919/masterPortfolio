import { test, expect } from "@playwright/test";

const origin = "http://127.0.0.1:4173";
const base = process.env.E2E_PAGES_ROOT === "1" ? "/" : "/test-site/";

test.beforeEach(async ({ page }) => {
  await page.route("**/*", (route) =>
    route.request().url().startsWith(`${origin}/`)
      ? route.continue()
      : route.abort(),
  );
});

test("GitHub Pages deep links preserve the route, query, assets, and PDF worker", async ({
  page,
}) => {
  const errors = [];
  const failedAssets = [];
  page.on("pageerror", (error) => errors.push(error.message));
  page.on("response", (response) => {
    if (
      response.url().startsWith(`${origin}/`) &&
      response.status() >= 400 &&
      response.request().resourceType() !== "document"
    ) {
      failedAssets.push(`${response.url()}: HTTP ${response.status()}`);
    }
  });

  await page.goto(`${base}education?source=deep&view=all#section`);
  await expect(page.locator(".education-main")).toBeAttached();
  await expect(page).toHaveURL(
    `${origin}${base}education?source=deep&view=all#section`,
  );
  await expect(
    page.getByRole("link", { name: "Projects", exact: true }),
  ).toHaveAttribute("href", `${base}projects`);
  expect(await page.locator('link[rel="manifest"]').getAttribute("href")).toBe(
    `${base}manifest.json`,
  );
  const manifest = await page.evaluate(async () => {
    const response = await fetch(
      document.querySelector('link[rel="manifest"]').href,
    );
    const data = await response.json();
    return {
      startPath: new URL(data.start_url, response.url).pathname,
      iconStatus: (await fetch(new URL(data.icons[0].src, response.url)))
        .status,
    };
  });
  expect(manifest.startPath).toBe(base);
  expect(manifest.iconStatus).toBe(200);

  await page.goto(`${base}contact`);
  const resumeLink = page.getByRole("link", { name: "See My Resume" });
  await expect(resumeLink).toHaveAttribute("href", `${base}resume`);
  const worker = page.waitForResponse((response) =>
    /pdf\.worker.*\.mjs/.test(response.url()),
  );
  await resumeLink.click();
  await expect(page.locator(".react-pdf__Page__canvas")).toBeVisible({
    timeout: 20_000,
  });
  const workerResponse = await worker;
  expect(workerResponse.status()).toBe(200);
  expect(
    new URL(workerResponse.url()).pathname.startsWith(`${base}assets/`),
  ).toBe(true);
  await expect(page.locator(".resume-error")).toHaveCount(0);
  await page.goto(`${base}resume?source=direct#view`);
  await expect(page).toHaveURL(`${origin}${base}resume?source=direct#view`);
  await expect(page.locator(".react-pdf__Page__canvas")).toBeVisible({
    timeout: 20_000,
  });
  expect(errors).toEqual([]);
  expect(failedAssets).toEqual([]);
});

test("a previous app service worker is unregistered", async ({ page }) => {
  await page.goto(`${base}home`);
  const scope = await page.evaluate(async (script) => {
    const registration = await navigator.serviceWorker.register(script);
    await navigator.serviceWorker.ready;
    return registration.scope;
  }, `${base}service-worker.js`);
  expect(scope).toBe(`${origin}${base}`);
  await page.reload();
  await expect(page.locator(".greet-main")).toBeAttached();
  await expect
    .poll(() =>
      page.evaluate(
        async (scopeUrl) =>
          Boolean(await navigator.serviceWorker.getRegistration(scopeUrl)),
        scope,
      ),
    )
    .toBe(false);
});

test("an unrelated service worker on the same origin is left registered", async ({
  page,
}) => {
  await page.goto(`${base}home`);
  const scope = await page.evaluate(async () => {
    const registration = await navigator.serviceWorker.register(
      "/unrelated-worker.js",
    );
    await navigator.serviceWorker.ready;
    return registration.scope;
  });
  expect(scope).toBe(`${origin}/`);
  await page.reload();
  await expect(page.locator(".greet-main")).toBeAttached();
  await expect
    .poll(() =>
      page.evaluate(async (scopeUrl) => {
        const registration =
          await navigator.serviceWorker.getRegistration(scopeUrl);
        return registration?.active?.scriptURL;
      }, `${origin}${base}`),
    )
    .toBe(`${origin}/unrelated-worker.js`);
  // The app's asynchronous cleanup must not remove it after rendering either.
  await page.waitForTimeout(300);
  expect(
    await page.evaluate(
      async (scopeUrl) =>
        Boolean(await navigator.serviceWorker.getRegistration(scopeUrl)),
      `${origin}${base}`,
    ),
  ).toBe(true);
});
