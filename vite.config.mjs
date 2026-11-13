import { readFileSync, writeFileSync } from "node:fs";
import { createRequire } from "node:module";
import { resolve } from "node:path";
import { fileURLToPath } from "node:url";
import react from "@vitejs/plugin-react";
import { defineConfig, loadEnv, transformWithOxc } from "vite";

const require = createRequire(import.meta.url);
// Resolve the worker from react-pdf itself, so it always matches its PDF.js API.
const requireFromReactPdf = createRequire(
  require.resolve("react-pdf/package.json"),
);
const pdfWorker = requireFromReactPdf.resolve(
  "pdfjs-dist/build/pdf.worker.min.mjs",
);
const srcDir = fileURLToPath(new URL("./src/", import.meta.url));

// Existing source files use JSX in .js files. Keep their public import paths
// stable while migrating the build tool.
const jsxInJs = {
  name: "portfolio-jsx-in-js",
  enforce: "pre",
  async transform(code, id) {
    const file = id.split("?", 1)[0];
    if (file.startsWith(srcDir) && file.endsWith(".js")) {
      return transformWithOxc(code, file, { lang: "jsx" });
    }
  },
};

// GitHub Pages serves 404.html for a deep link. Its redirect needs the same
// base-path segment count as the built app, including for project pages.
function githubPages404() {
  let config;
  return {
    name: "portfolio-github-pages-404",
    apply: "build",
    configResolved(resolved) {
      config = resolved;
      if (!/^\/(?:[A-Za-z0-9._~-]+\/)*$/.test(config.base)) {
        throw new Error(
          "The app base must be an absolute path such as / or /repository/.",
        );
      }
    },
    writeBundle() {
      const target = resolve(config.root, config.build.outDir, "404.html");
      const html = readFileSync(target, "utf8");
      const marker =
        /(var pathSegmentsToKeep = )\d+(; \/\/ PORTFOLIO_BASE_SEGMENTS)/;
      if (!marker.test(html))
        throw new Error("GitHub Pages 404 base marker is missing.");
      const count = config.base.split("/").filter(Boolean).length;
      writeFileSync(target, html.replace(marker, `$1${count}$2`));
    },
  };
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "VITE_BASE_PATH");
  return {
    base: env.VITE_BASE_PATH || "/",
    plugins: [jsxInJs, react(), githubPages404()],
    resolve: {
      alias: { "@portfolio-pdf-worker": `${pdfWorker}?url` },
    },
    optimizeDeps: {
      // Keep the worker as an asset URL in dev instead of prebundling it as JS.
      exclude: ["@portfolio-pdf-worker"],
      rolldownOptions: { moduleTypes: { ".js": "jsx" } },
    },
    server: { allowedHosts: [".e2b.app"] },
    preview: { allowedHosts: [".e2b.app"] },
    test: {
      environment: "jsdom",
      globals: true,
      setupFiles: ["./src/testSetup.js"],
      include: ["src/**/*.{test,spec}.{js,jsx}"],
    },
  };
});
