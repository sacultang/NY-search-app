import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { UseClipProvider } from "./context/useClipContext";
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <UseClipProvider>
    <App />
  </UseClipProvider>
);
