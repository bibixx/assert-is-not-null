import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import * as Sentry from "@sentry/react";
import App from "./App.tsx";
import "./index.css";

Sentry.init({
  dsn: "https://6215b5ad4a3f94c2bd238e70567c30c4@o516797.ingest.us.sentry.io/4508089236586496",
  integrations: [],
  debug: true,
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
