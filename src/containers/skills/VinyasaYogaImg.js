import React, { Component } from "react";

const styles = {
  roundedShadow: {
    width: "80%",
    height: "auto",
    borderRadius: "10px",
    boxShadow:
      "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
  },
  circle: {
    width: "150px",
    height: "150px",
    borderRadius: "50%",
    objectFit: "cover",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  },
  borderShadow: {
    width: "100%",
    height: "auto",
    border: "5px solid #f3f3f3",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  },
  grayscaleHover: {
    width: "100%",
    height: "auto",
    filter: "grayscale(100%)",
    transition: "filter 0.3s",
  },
  sepia: {
    width: "100%",
    height: "auto",
    filter: "sepia(100%)",
  },
  blurredEdges: {
    width: "100%",
    height: "auto",
    filter: "blur(2px)",
  },
  roundedBorder: {
    width: "80%",
    height: "auto",
    borderRadius: "20px",
    border: "2px solid #ddd",
  },
  shadowBorderPadding: {
    width: "100%",
    height: "auto",
    borderRadius: "5px",
    border: "1px solid #ccc",
    padding: "10px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  },
  polaroid: {
    width: "90%",
    height: "auto",
    background: "#fff",
    padding: "10px",
    boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)",
    transform: "rotate(-5deg)",
  },
  transparentBackground: {
    width: "100%",
    height: "auto",
    background: "rgba(255, 255, 255, 0.8)",
    padding: "10px",
    borderRadius: "10px",
  },
};

export default class VinyasaYogaImg extends Component {
  render() {
    const { styleName = "roundedShadow", theme } = this.props; // Default to 'roundedShadow' if no styleName is provided

    return (
      <div>
        <img
          src="https://www.ekhartyoga.com/media/image/articles/Davud-Lurey-Arm-balance.jpg"
          alt="Vinyasa Yoga"
          style={{ ...styles[styleName], ...theme }} // Merge selected style and theme
        />
      </div>
    );
  }
}
