import React from "react";
import "./App.css";
import Main from "./containers/Main";
import { ThemeProvider } from "styled-components";
import { chosenTheme } from "./theme";
import { GlobalStyles } from "./global";
import { BrowserRouter } from "react-router-dom";

function App() {
  // local dev = "/", GitHub Pages = "/duongportfolio-1"
  const basename =
    process.env.NODE_ENV === "production" ? "/duongportfolio-1" : "/";

  return (
    <ThemeProvider theme={chosenTheme}>
      <>
        <GlobalStyles />
        <BrowserRouter basename={basename}>
          <Main theme={chosenTheme} />
        </BrowserRouter>
      </>
    </ThemeProvider>
  );
}
export default App;
