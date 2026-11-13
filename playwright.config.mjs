import { defineConfig } from "@playwright/test";

// A custom executable is useful in restricted environments; normally run
// `npx playwright install chromium` and let Playwright manage its browser.
const executablePath = process.env.PLAYWRIGHT_CHROMIUM_EXECUTABLE;
const pagesSubpath = process.env.E2E_SUBPATH === "1";
const pagesRoot = process.env.E2E_PAGES_ROOT === "1";
const pagesTest = pagesSubpath || pagesRoot;

export default defineConfig({
  testDir: "./e2e",
  testMatch: pagesTest ? "pages.spec.js" : "portfolio.spec.js",
  timeout: 30_000,
  workers: 1,
  retries: 0,
  reporter: "list",
  use: {
    baseURL: "http://127.0.0.1:4173",
    browserName: "chromium",
    trace: "retain-on-failure",
    launchOptions: executablePath
      ? { executablePath, args: ["--no-sandbox"] }
      : {},
  },
  webServer: {
    command: pagesTest
      ? "node e2e/pages-server.mjs"
      : `npm run ${process.env.E2E_DEV === "1" ? "start" : "preview"} -- --host 0.0.0.0 --port 4173 --strictPort`,
    url: pagesSubpath
      ? "http://127.0.0.1:4173/test-site/"
      : "http://127.0.0.1:4173",
    reuseExistingServer: !process.env.CI,
    timeout: 30_000,
  },
});
