import React, { Component } from "react";
import "./Certifications.css";
import { Fade } from "react-reveal";
import { certifications } from "../../portfolio";
import CertificationCard from "../../components/certificationCard/CertificationCard";

class Certifications extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="main" id="certs">
        <div className="certs-header-div">
          <Fade bottom duration={2000} distance="20px">
            <h1 className="certs-header" style={{ color: theme.text }}>
              Courses
            </h1>
            <p className="subTitle" style={{ fontSize: "1.5rem" }}>
              {certifications.description}
            </p>
          </Fade>
        </div>
        <div className="certs-body-div">
          {certifications.courses
            .sort((a, b) => a.MainSubject.localeCompare(b.MainSubject))
            .map((cert) => {
              return (
                <CertificationCard
                  key={cert.Title}
                  certificate={cert}
                  theme={theme}
                />
              );
            })}
        </div>
      </div>
    );
  }
}

export default Certifications;
