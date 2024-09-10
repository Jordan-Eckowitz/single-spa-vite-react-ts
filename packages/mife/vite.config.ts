import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import vitePluginSingleSpa from "vite-plugin-single-spa";
import externalize from "vite-plugin-externalize-dependencies";

/** single-spa entry point which contains references to lifecycles and shared exports */
const ENTRY_POINT = "src/spa.tsx";

/** Port for running local server and build previews */
const PORT = 5001;

/** These are other single-spa applications, that are imported inside this application, as dependencies.
 * These externals are made available within this application via the root config import map.
 * For more details on why this is required see here: https://github.com/WJSoftware/vite-plugin-single-spa/discussions/160  */
const APPLICATION_EXTERNALS: string[] = ["@demo/util"];

/** These are NPM packages, which are imported via the root config import map, in the built environment */
const NPM_EXTERNALS: string[] = ["react", "react-dom"];

// TODO: replace this with the actual CDN URL
const BASE_URL_DEPLOYMENT = `http://localhost:${PORT}/`;

// https://vitejs.dev/config/
export default defineConfig(({ command }) => ({
  // the base url is injected into any assets to ensure they're http references in production (not relative paths)
  base: command === "serve" ? "/" : BASE_URL_DEPLOYMENT,
  plugins: [
    react(),
    // command === "serve" ensures this plugin is only used during development (excluded from builds)
    command === "serve" && {
      // this ensures that React Fast Refresh (HMR) is properly setup in the development environment.
      // https://github.com/WJSoftware/vite-plugin-single-spa/issues/74#issuecomment-2315823945
      name: "inject-react-refresh-preamble",
      transform(code, id) {
        if (id.includes(ENTRY_POINT)) {
          return react.preambleCode.replace("__BASE__", "/") + code;
        }
      },
    },
    vitePluginSingleSpa({
      type: "mife",
      serverPort: PORT,
      spaEntryPoints: ENTRY_POINT,
    }),
    externalize({ externals: APPLICATION_EXTERNALS }),
  ],
  build: {
    rollupOptions: { external: [...APPLICATION_EXTERNALS, ...NPM_EXTERNALS] },
  },
}));
