import React from "react";
import ReactDOM from "react-dom/client";
import App from "@/app/App";
import { ThemeProvider } from "@/components/theme-provider";
import "@/styles/index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

postMessage({ payload: "removeLoading" }, "*");

window.ipcRenderer.on("main-process-message", (_event, message) => {
  console.log(message);
});
