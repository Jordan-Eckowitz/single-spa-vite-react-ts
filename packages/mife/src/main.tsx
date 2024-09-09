import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    Standalone mode has been disabled for this application since it requires
    imports via the root config import map. For more details see this
    discussion:{" "}
    <a href="https://github.com/WJSoftware/vite-plugin-single-spa/discussions/116">
      https://github.com/WJSoftware/vite-plugin-single-spa/discussions/116
    </a>
    {/* <App /> */}
  </StrictMode>
);
