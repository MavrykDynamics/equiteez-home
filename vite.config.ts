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

export default defineConfig(({ mode }) => {
  // Load .env, .env.local, .env.[mode] (e.g. .env.production) into process.env
  // (empty prefix => all vars, not just VITE_-prefixed).
  const fileEnv = loadEnv(mode, process.cwd(), "");

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
    "process.env": { ...process.env, ...fileEnv },
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
