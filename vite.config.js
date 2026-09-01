import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "./",
  plugins: [react({ jsxRuntime: "classic" })],
  server: {
    host: true,
    port: 3000,
  },
  build: {
    outDir: "dist",
  },
});
