import "./index.css";

import { CssBaseline, ThemeProvider } from "@mui/material";

import App from "./App";
import React from "react";
import ReactDOM from "react-dom/client";
import { theme } from "./mui_theme/theme";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
