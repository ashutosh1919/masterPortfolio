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
            <a href={certificate.Url} target="_blank" rel="noopener noreferrer">
              <div className="content-overlay"></div>
              <div
                className="cert-header"
                style={{ backgroundColor: theme.headerColor }}
              >
                <img
                  className="logo_img"
                  // src={require(`../../assests/images/certi.png`)}
                  src={`https://logo.clearbit.com/${certificate.Authority}.com`}
                  onerror={() => {
                    this.onerror = null;
                    this.src = require(`../../assests/images/certi.png`);
                  }}
                  alt={certificate.Title}
                />
              </div>
              <div className="content-details fadeIn-top">
                <h3 className="content-title" style={{ color: theme.body }}>
                  Certificate
                </h3>
              </div>
            </a>
          </div>
          <div className="cert-body">
            <h2 className="cert-body-title" style={{ color: theme.text }}>
              {certificate.Name}
            </h2>
            <h3
              className="cert-body-subtitle"
              style={{ color: theme.secondaryText }}
            >
              {certificate.Authority}
            </h3>
          </div>
        </div>
      </Fade>
    );
  }
}

export default CertificationCard;
