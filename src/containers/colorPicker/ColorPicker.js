import React from "react";
import {
  blueTheme,
  blackTheme,
  pinkTheme,
  tealTheme,
  materialDarkTheme,
  materialLightTheme,
} from "../../theme";
import "./colorPicker.css";
const Square = ({ color, onClick }) => {
  const style = {
    width: "2vw",
    height: "2vw",
    backgroundColor: color,
    padding: "1vw",
    cursor: "pointer",
    borderRadius: "50%",
    margin: "10px",
  };

  return <div style={style} onClick={onClick}></div>;
};

const ColorPicker = ({ changeColor }) => {
  const handleColorClick = (selectedTheme) => {
    console.log("inside color picker " + selectedTheme.name);
    changeColor(selectedTheme);
  };

  return (
    <div className="flexlayout">
      <Square
        color={blueTheme.secondaryText}
        onClick={() => handleColorClick(blueTheme)}
      />
      {/*<Square color={brownTheme.jacketColor} onClick={() => handleColorClick(brownTheme)} />*/}
      {/*<Square color={purpleTheme.jacketColor} onClick={() => handleColorClick(purpleTheme)} />*/}
      {/*<Square color={greenTheme.jacketColor} onClick={() => handleColorClick(greenTheme)} />*/}
      {/*<Square color={redTheme.jacketColor} onClick={() => handleColorClick(redTheme)} />*/}
      <Square
        color={blackTheme.secondaryText}
        onClick={() => handleColorClick(blackTheme)}
      />
      <Square
        color={pinkTheme.secondaryText}
        onClick={() => handleColorClick(pinkTheme)}
      />
      {/*<Square color={violetTheme.jacketColor} onClick={() => handleColorClick(violetTheme)} />*/}
      <Square
        color={tealTheme.secondaryText}
        onClick={() => handleColorClick(tealTheme)}
      />
      {/*<Square color={orangeTheme.jacketColor} onClick={() => handleColorClick(orangeTheme)} />*/}
      {/*<Square color={yellowTheme.jacketColor} onClick={() => handleColorClick(yellowTheme)} />*/}
      <Square
        color={materialDarkTheme.secondaryText}
        onClick={() => handleColorClick(materialDarkTheme)}
      />
      <Square
        color={materialLightTheme.secondaryText}
        onClick={() => handleColorClick(materialLightTheme)}
      />
    </div>
  );
};

export default ColorPicker;
