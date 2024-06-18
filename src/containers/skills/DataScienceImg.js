import React, { Component } from "react";

export default class DataScienceImg extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div>
        <img
          src="https://www.ekhartyoga.com/media/image/articles/Davud-Lurey-Arm-balance.jpg"
          alt="Vinyasa Yoga"
          style={{ theme }}
        />
      </div>
    );
  }
}
