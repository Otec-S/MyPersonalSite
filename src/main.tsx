import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import "./utils/i18n/i18n";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Suspense fallback="...is loading">
      <App />
    </Suspense>
  </StrictMode>
);
