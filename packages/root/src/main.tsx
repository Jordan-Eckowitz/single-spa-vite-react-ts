// pkg
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { registerApplication, start, getAppNames } from "single-spa";

// utils
import apps from "./apps";

apps.forEach(({ name, activeWhen }) =>
  registerApplication({
    name,
    activeWhen,
    app: () => import(/* @vite-ignore */ name),
  })
);

if (process.env.NODE_ENV === "development") {
  console.log("APPLICATIONS", getAppNames());
}
start();

createRoot(document.getElementById("root")!).render(
  <StrictMode>{/* INSERT ANY COMPONENTS TO MOUNT HERE */}</StrictMode>
);
