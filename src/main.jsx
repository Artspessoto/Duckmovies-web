import React from "react";
import ReactDOM from "react-dom/client";
import GlobalStyles from "./styles/global";
import { ThemeProvider } from "styled-components";
import { AlertProvider } from "./context/AlertContext/AlertContext";
import { AuthProvider } from "./context/AuthContext/AuthContext";
import { AlertMessage } from "./components/AlertMessage";

import { Routes } from "./routes";

import theme from "./styles/theme";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <AlertProvider>
          <GlobalStyles />
          <AlertMessage />
          <Routes />
        </AlertProvider>
      </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>
);
