import React from "react";
import ReactDOM from "react-dom/client";
import GlobalStyles from "./styles/global";
import { ThemeProvider } from "styled-components";
import { AlertProvider } from "./context/AlertContext";

import { Routes } from "./routes";

import theme from "./styles/theme";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <AlertProvider>
        <Routes />
      </AlertProvider>
    </ThemeProvider>
  </React.StrictMode>
);
