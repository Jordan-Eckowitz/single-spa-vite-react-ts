import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    This is a utility application and so does not need to render anything in
    standalone mode.
  </StrictMode>
);
