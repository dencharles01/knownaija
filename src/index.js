// src/index.js
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import "./index.css";

/* App root */
import App from "./App";
import reportWebVitals from "./reportWebVitals";

/* context providers */
import { ThemeProvider } from "./contexts/ThemeContext";
import { RadioProvider } from "./contexts/RadioContext";   // 🆕  global radio state

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RadioProvider>
      <ThemeProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ThemeProvider>
    </RadioProvider>
  </React.StrictMode>
);

/* optional performance measuring */
reportWebVitals();
