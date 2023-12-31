import React, { Component } from "react";
import {
  blueTheme,
  blackTheme,
  pinkTheme,
  tealTheme,
  materialDarkTheme,
  materialLightTheme,
  setChosenTheme,
  getChosenTheme,
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

class ColorPicker extends Component {
  render() {
    const handleColorClick = (selectedTheme) => {
      setChosenTheme(selectedTheme);
      console.log("chosen" + getChosenTheme().name);
    };

    return (
      <div className="flexlayout invisible">
        <Square
          color={blueTheme.secondaryText}
          onClick={() => handleColorClick(blueTheme)}
        />

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
  }

  //
}

export default ColorPicker;
