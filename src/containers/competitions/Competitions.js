import React, { Component } from "react";
import "./Certifications.css";
import { Fade } from "react-reveal";
import { competitions } from "../../portfolio";
import CompetitionCard from "../../components/competitionCard/CompetitionCard";

class Competitions extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="main" id="certs">
        <div className="certs-header-div">
          <Fade bottom duration={2000} distance="20px">
            <h1 className="certs-header" style={{ color: theme.text }}>
              Competitions
            </h1>
          </Fade>
        </div>
        <div className="certs-body-div">
          {competitions.certifications.map((cert) => {
            return <CompetitionCard certificate={cert} theme={theme} />;
          })}
        </div>
      </div>
    );
  }
}

export default Competitions;
