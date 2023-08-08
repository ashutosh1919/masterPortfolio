import { defineConfig } from "vite";
import reactRefresh from "@vitejs/plugin-react-refresh";
import { resolve } from "path";
import { fileURLToPath, URL } from "url";

export default defineConfig({
  // Specify the root directory of project
  root: resolve(__dirname, "./"),
  base: "./",

  // Define process, global variables for project
  /*define: {
      process: {
        ...process,
        env: {
          ...import.meta.env,
          ...{ VITE_VITE_PUBLIC_URL: import.meta.env.VITE_VITE_VITE_PUBLIC_URL || '' },
        },
      },
      global: 'window',
    },*/
  // -> Dùng define này không build được

  // Specify the alias for ../ statement
  resolve: {
    alias: [
      {
        // For Sass module
        find: /^~(.*)$/,
        replacement: "$1",
      },
      {
        find: "@",
        replacement: fileURLToPath(new URL("./src", import.meta.url)),
      },
      {
        find: "@assests",
        replacement: fileURLToPath(new URL("./src/assests", import.meta.url)),
      },
      {
        find: "@components",
        replacement: fileURLToPath(
          new URL("./src/components", import.meta.url)
        ),
      },
      {
        find: "@containers",
        replacement: fileURLToPath(
          new URL("./src/containers", import.meta.url)
        ),
      },
      {
        find: "@pages",
        replacement: fileURLToPath(new URL("./src/pages", import.meta.url)),
      },
      {
        find: "@shared",
        replacement: fileURLToPath(new URL("./src/shared", import.meta.url)),
      },
    ],
  },
  // Specify build mode

  // Specify the output directory for built files and build options
  build: {
    outDir: "build",
    sourcemap: false,
  },

  // Specify plugins to use with Vite
  plugins: [reactRefresh()],

  // Specify the server port and whether to open the browser automatically
  server: {
    port: 3000,
    open: true,
  },

  // Specify build options for TypeScript and React
  optimizeDeps: {
    include: ["react", "react-dom"],
  },

  // Specify Esbuild options
  esbuild: {
    jsxFactory: "React.createElement",
    jsxFragment: "React.Fragment",
  },

  // Specify Vite preview options (use: yarn serve)
  preview: {
    host: true,
    port: 6868,
    https: false,
    open: true,
  },
});

// FANTAL ERROR: ran out of heap memmory
// <Unix> export NODE_OPTIONS=--max-old-space-size=<size in MB>
// export NODE_OPTIONS=--max_old_space_size=8192 -> OK
// export NODE_OPTIONS=--max_old_space_size=6144 -> OK
// export NODE_OPTIONS=--max_old_space_size=4096 -> OK
// export NODE_OPTIONS=--max_old_space_size=3072 -> OK
// export NODE_OPTIONS=--max_old_space_size=2048 -> Fail
// <Win> set NODE_OPTIONS=--max-old-space-size=<size in MB>
