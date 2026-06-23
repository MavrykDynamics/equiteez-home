import {
  vitePlugin as remix,
  cloudflareDevProxyVitePlugin as remixCloudflareDevProxy,
} from "@remix-run/dev";
import { installGlobals } from "@remix-run/node";
import { defineConfig, loadEnv } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import svgr from "vite-plugin-svgr";
import { nodePolyfills } from "vite-plugin-node-polyfills";
import path from "path";
// import { visualizer } from 'rollup-plugin-visualizer';

installGlobals();

export default defineConfig(({ mode, command, isSsrBuild }) => {
  // Load .env, .env.local, .env.[mode] (e.g. .env.production) (empty prefix =>
  // all vars, not just VITE_-prefixed).
  const fileEnv = loadEnv(mode, process.cwd(), "");
  const fullEnv = { ...process.env, ...fileEnv };

  // Vars that are safe to inline into the CLIENT bundle. SECRETS (e.g.
  // MONDAY_API_TOKEN) must NEVER appear here — they belong only to the server.
  // `process.env` is replaced wholesale by `define`, so a broad value would bake
  // every secret into any client chunk that references process.env.
  const PUBLIC_ENV_KEYS = [
    "NODE_ENV",
    "API_URL",
    "GRAPHQL_API",
    "GRAPHQL_WSS_API",
    "EXPLORE_APP_URL",
    "BASE_URL",
    "REACT_APP_MAINTANCE_MODE",
  ];
  const publicEnv = Object.fromEntries(
    PUBLIC_ENV_KEYS.filter((key) => key in fullEnv).map((key) => [
      key,
      fullEnv[key],
    ])
  );

  // Only the production CLIENT build is shipped publicly, so that's the one that
  // must exclude secrets. The SSR build and the dev server keep the full env.
  const isClientBuild = command === "build" && !isSsrBuild;

  return {
  resolve: {
    alias: {
      styles: path.resolve(__dirname, "app/styles"),
    },
  },
  plugins: [
    remixCloudflareDevProxy(),
    remix({ ssr: true }),
    tsconfigPaths(),
    svgr(),
    nodePolyfills({ exclude: ["fs", "util"] }),
    // visualizer({ open: false }),
  ],
  define: {
    "process.env": isClientBuild ? publicEnv : fullEnv,
  },
  build: {
    minify: "esbuild",
    cssMinify: true,
    ssr: true,
    rollupOptions: {
      plugins: [
        // visualizer({
        //   filename: 'stats.html',
        //   template: 'treemap', // or 'sunburst', 'network'
        // }),
      ],
    },
  },
  };
});
