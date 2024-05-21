import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "{{url_for}}";

import App from "./App";

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);