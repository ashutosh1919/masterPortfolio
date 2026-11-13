// A minimal GitHub Pages-style server for testing 404 redirects locally.
// It serves only a temporary build, never repository source files.
import { createServer } from "node:http";
import { createReadStream, existsSync, statSync } from "node:fs";
import { extname, resolve, sep } from "node:path";

const isRoot = process.env.E2E_PAGES_ROOT === "1";
const root = resolve(
  process.env.E2E_PAGES_DIR ||
    (isRoot ? "dist" : "/tmp/masterportfolio-subpath"),
);
const base = isRoot ? "/" : "/test-site/";
const types = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".mjs": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".json": "application/json",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".gif": "image/gif",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
  ".ttf": "font/ttf",
  ".pdf": "application/pdf",
};

createServer((request, response) => {
  let pathname;
  try {
    pathname = decodeURIComponent(
      new URL(request.url, "http://localhost").pathname,
    );
  } catch {
    response.writeHead(400).end();
    return;
  }
  // Test-only workers let the browser exercise migration from a legacy CRA
  // registration and confirm that unrelated, broader-scope workers are kept.
  if (
    pathname === `${base}service-worker.js` ||
    pathname === "/unrelated-worker.js"
  ) {
    response.writeHead(200, {
      "content-type": "text/javascript",
      "cache-control": "no-store",
    });
    response.end(
      'self.addEventListener("install", () => self.skipWaiting()); self.addEventListener("activate", (event) => event.waitUntil(self.clients.claim()));',
    );
    return;
  }
  if (!pathname.startsWith(base)) {
    response.writeHead(404).end();
    return;
  }
  const file = resolve(root, pathname.slice(base.length) || "index.html");
  if (file !== root && !file.startsWith(root + sep)) {
    response.writeHead(403).end();
    return;
  }
  const exists = existsSync(file) && statSync(file).isFile();
  const target = exists ? file : resolve(root, "404.html");
  response.writeHead(exists ? 200 : 404, {
    "content-type": types[extname(target)] || "application/octet-stream",
    "cache-control": "no-store",
  });
  createReadStream(target).pipe(response);
}).listen(4173, "0.0.0.0", () =>
  console.log("Pages test server listening on port 4173"),
);
