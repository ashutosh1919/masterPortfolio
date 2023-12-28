import React, { Component } from "react";
import "./CertificationCard.css";
import { Fade } from "react-reveal";
import { getTechIcon } from "../../shared/tools";
import IconifyIcon from "../iconify/IconifyIcon";
// The Course  card
class CertificationCard extends Component {
  render() {
    const certificate = this.props.certificate;
    const title = certificate.MainSubject;
    const link = certificate.Link;
    const description = certificate.Description;
    const currentSkill = getTechIcon(title);
    const theme = this.props.theme;

    return (
      <Fade bottom duration={2000} distance="20px">
        <div className="cert-card">
          {/*for the padding*/}
          <div style={{ padding: "5px", width: "95%" }}>
            {/*div for the title: flex*/}
            <div className="flexlayout between">
              {/*title on the right*/}
              <h2 className="cert-body-title" style={{ color: theme.text }}>
                {certificate.Title}
              </h2>
              {/*icon right*/}
              {currentSkill.fontAwesomeClassname && (
                <div className="cert-body-title">
                  <IconifyIcon
                    fontAwesomeClassname={currentSkill.fontAwesomeClassname}
                    size="5rem"
                  />
                </div>
              )}
            </div>

            {/*div for the subtitle*/}
            <div className="subTitle">
              <p>{description}</p>
            </div>
            <div style={{ paddingBottom: "1rem" }}>
              {link && (
                <a
                  className="center-horizontal"
                  style={{
                    display: "inline-block",
                    padding: "10px",
                    backgroundColor: currentSkill.style.color,
                    color: "#fff",
                    textDecoration: "none",
                    borderRadius: "5px",
                    cursor: "pointer",
                    transition: "background-color 0.3s ease",
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
      </Fade>
    );
  }
}

export default CertificationCard;
