import React, { Component } from "react";
import "./CertificationCard.css";
import { Fade } from "react-reveal";

class CertificationCard extends Component {
  render() {
    const certificate = this.props.certificate;
    const theme = this.props.theme;
    return (
      <Fade bottom duration={2000} distance="20px">
        <div className="cert-card">
          <div className="content">
            <div className="content-overlay"></div>
            <div className="cert-header"></div>
            <div className="content-details fadeIn-top">
              <h3 className="content-title" style={{ color: theme.body }}>
                Certificate
              </h3>
            </div>
          </div>
          <div className="cert-body">
            <h2 className="cert-body-title" style={{ color: theme.text }}>
              {certificate.Title}
            </h2>
            <h3
              className="cert-body-subtitle"
              style={{ color: theme.secondaryText }}
            >
              {certificate.MainSubject}
            </h3>
          </div>
        </div>
      </Fade>
    );
  }
}

export default CertificationCard;
