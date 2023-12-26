import React, { useEffect, useState } from "react";
import "./App.css";
import Main from "./containers/Main";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./global";
import {
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

  // Retrieve the theme name from localStorage
  const storedThemeName = localStorage.getItem("chosenTheme");

  const defaultTheme = blueTheme;

  const currentColor = storedThemeName
    ? themeMap[storedThemeName]
    : defaultTheme;
  console.log(currentColor);
  // Define a default theme in case the stored theme name is not found

  // Set the initial theme based on the stored theme name or default to blueTheme
  const [theme, setTheme] = useState(currentColor || defaultTheme);

  // useEffect to update the theme when the stored theme name changes
  useEffect(() => {
    console.log("use effect");
    setTheme(themeMap[storedThemeName] || defaultTheme);
  }, [storedThemeName]);

  // Function to change the theme
  function changeColor(color) {
    console.log("change color");
    localStorage.setItem("chosenTheme", color["name"]);
    setTheme(color);
  }

  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <div>
          <Main theme={theme} changeColor={changeColor} />
        </div>
      </>
    </ThemeProvider>
  );
}

export default App;
