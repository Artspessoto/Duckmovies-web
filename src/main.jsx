import React from "react";
import ReactDOM from "react-dom/client";
// import { Home } from "./pages/Home";
// import { MoviePreview } from "./pages/MoviePreview";
import { SignIn } from "./pages/SignIn";
import GlobalStyles from "./styles/global";
import { ThemeProvider } from "styled-components";

import theme from "./styles/theme";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <SignIn />
      {/* <Home /> */}
      {/* <MoviePreview /> */}
    </ThemeProvider>
  </React.StrictMode>
);
