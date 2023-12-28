import React, { useEffect, useState } from "react";
import "./App.css";
import Main from "./containers/Main";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./global";
import {
  chosenTheme,
  getChosenTheme,
  blueTheme,
  brownTheme,
  purpleTheme,
  greenTheme,
  redTheme,
  blackTheme,
  pinkTheme,
  violetTheme,
  tealTheme,
  orangeTheme,
  yellowTheme,
  materialDarkTheme,
  materialLightTheme,
  frozenDreams,
} from "./theme";

function App() {
  // Create a mapping of theme names to theme objects
  const themeMap = {
    blueTheme,
    brownTheme,
    purpleTheme,
    greenTheme,
    redTheme,
    blackTheme,
    pinkTheme,
    violetTheme,
    tealTheme,
    orangeTheme,
    yellowTheme,
    materialDarkTheme,
    materialLightTheme,
    frozenDreams,
  };

  const [theme, setTheme] = useState(chosenTheme);

  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <div>
          <Main theme={theme} setTheme={setTheme} />
        </div>
      </>
    </ThemeProvider>
  );
}

export default App;
