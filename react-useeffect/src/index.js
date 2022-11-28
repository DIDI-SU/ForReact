import React from "react";
import ReactDOM from "react-dom/client";
import { AuthConetextProvider } from "./components/Context/auth-context";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AuthConetextProvider>
    <App />
  </AuthConetextProvider>
);
