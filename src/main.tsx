import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./App.css";
async function deferRender() {
  const { worker } = await import("./mocks/browser");

  if (process.env.NODE_ENV === "development") {
    // `worker.start()` returns a Promise that resolves
    // once the Service Worker is up and ready to intercept requests.
    return worker.start({ onUnhandledRequest: "bypass" });
  }
}

deferRender().then(() => {
  ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
});
