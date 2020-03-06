import React, { Component } from "react";
import "./Educations.css";
import { Fade } from "react-reveal";

class Educations extends Component {
  render() {
    return (
      <div className="main" id="educations">
        <div className="educations-header-div">
          <Fade bottom duration={2000} distance="20px">
            <h1 className="educations-header">Degrees Received</h1>
          </Fade>
        </div>
      </div>
    );
  }
}

export default Educations;
