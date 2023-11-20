import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import "rsuite/dist/rsuite-no-reset.min.css";
import "rsuite/dist/rsuite.min.css";
import { ReactQueryDevtools } from "react-query/devtools";
// PWA Configuration
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";

import "./i18.js";
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <QueryClientProvider client={queryClient}>
      <Suspense fallback="loading">
        <App />
      </Suspense>
      <ReactQueryDevtools />
    </QueryClientProvider>
  </BrowserRouter>
);

serviceWorkerRegistration.register();
