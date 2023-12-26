import React, { Component } from "react";
import "./CertificationCard.css";
import { Fade } from "react-reveal";
import { skills } from "../../portfolio";
// The Course  card
class CertificationCard extends Component {
  render() {
    const certificate = this.props.certificate;
    const title = certificate.MainSubject;
    const link = certificate.Link;
    const softwareSkills = skills.data[0].softwareSkills;
    const currentSkill = softwareSkills.find(
      (skill) => skill.skillName === title
    );
    const theme = this.props.theme;

    return (
      <Fade bottom duration={2000} distance="20px">
        <div className="cert-card">
          <div style={{ padding: "5px", width: "95%" }}>
            <div className="icon">
              {/*icon left*/}
              <li className="software-skill-inline">
                {currentSkill.fontAwesomeClassname && (
                  <span
                    className="iconify bigger"
                    data-icon={currentSkill.fontAwesomeClassname}
                    style={currentSkill.style}
                    data-inline="false"
                  ></span>
                )}
              </li>
            </div>
            <div className="cert-body">
              <h2 className="cert-body-title" style={{ color: theme.text }}>
                {certificate.Title}
              </h2>
              <div style={{ paddingBottom: "20px" }}>
                {link && (
                  <a
                    style={{
                      display: "inline-block",
                      padding: "10px",
                      backgroundColor: currentSkill.style.color,
                      color: "#fff",
                      textDecoration: "none",
                      borderRadius: "5px",
                      cursor: "pointer",
                      transition: "background-color 0.3s ease",
                      alignSelf: "flex-end",
                    }}
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Course
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </Fade>
    );
  }
}

export default CertificationCard;
