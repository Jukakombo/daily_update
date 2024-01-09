import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import ErrorBoundary from "../ErrorBoundary";
import store from "./store.js";
import { BrowserRouter } from "react-router-dom";

const root = document.getElementById("root");

if (root) {
  const rootInstance = createRoot(root);
  rootInstance.render(
    <ErrorBoundary>
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    </ErrorBoundary>
  );
} else {
  console.error("Root element with id 'root' not found in the document.");
}
