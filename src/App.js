import React from "react";
import "./App.css";
import Main from "./containers/Main";
import { ThemeProvider } from "styled-components";
import { HelmetProvider } from "react-helmet-async";
import { chosenTheme } from "./theme";
import { GlobalStyles } from "./global";

function App() {
  return (
    <HelmetProvider>
      <ThemeProvider theme={chosenTheme}>
        <GlobalStyles />
        <div>
          <Main theme={chosenTheme} />
        </div>
      </ThemeProvider>
    </HelmetProvider>
  );
}

export default App;
