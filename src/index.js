import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

//This assignment took me ~8 hours
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
