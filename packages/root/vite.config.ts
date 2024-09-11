import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import vitePluginSingleSpa from "vite-plugin-single-spa";

const PORT = 3000;

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: PORT,
  },
  preview: {
    port: PORT,
  },
  define: {
    "process.env": process.env,
  },
  plugins: [
    react(),
    vitePluginSingleSpa({
      type: "root",
      imo: "3.1.1",
      imoUi: {
        variant: "full",
        buttonPos: "bottom-right",
      },
      importMaps: {
        dev: ["src/importMap.dev.json", "src/importMap.shared.json"],
        build: ["src/importMap.json", "src/importMap.shared.json"],
      },
    }),
  ],
});
