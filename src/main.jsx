import React from "react";
import ReactDOM from "react-dom/client";
import { MoviePreview } from "./pages/MoviePreview";
import GlobalStyles from "./styles/global";
import { ThemeProvider } from "styled-components";

import theme from "./styles/theme";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <MoviePreview />
    </ThemeProvider>
  </React.StrictMode>
);
