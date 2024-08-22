import GlobalStyles from "../styles/global";
import { ThemeProvider } from "styled-components";
import { AlertProvider } from "../context/AlertContext/AlertContext";
import { AuthProvider } from "../context/AuthContext/AuthContext";
import { AlertMessage } from "../components/AlertMessage";

import theme from "../styles/theme";
import { Routes } from "../routes";

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <AlertProvider>
        <AuthProvider>
          <GlobalStyles />
          <AlertMessage />
          <Routes />
        </AuthProvider>
      </AlertProvider>
    </ThemeProvider>
  );
};
