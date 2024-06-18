import React, { Component } from "react";

export default class FullStackImg extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div>
        <img
          alt="hata yoga"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6EdJmQLLud7gPy1rw7T0Aq5CXjLjtoMaASw&s"
          style={{ theme }}
        ></img>
      </div>
    );
  }
}
