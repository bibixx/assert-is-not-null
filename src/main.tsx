import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import * as Sentry from "@sentry/react";
import App from "./App.tsx";
import "./index.css";
import { AssertionError } from "./utils.ts";

Sentry.init({
  dsn: "https://6215b5ad4a3f94c2bd238e70567c30c4@o516797.ingest.us.sentry.io/4508089236586496",
  integrations: [],
  debug: true,
  beforeSend(event, hint) {
    if (AssertionError.isAssertionError(hint.originalException)) {
      event.level = "warning";
    }

    return event;
  },
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
