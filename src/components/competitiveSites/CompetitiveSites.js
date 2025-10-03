import React from "react";
import "./CompetitiveSites.css";
import { OverlayTrigger, Tooltip } from "react-bootstrap";

class CompetitiveSites extends React.Component {
  render() {
    return (
      <div className="competitive-sites-main-div">
        <ul className="dev-icons">
          {this.props.logos.map((logo) => {
            return (
              <OverlayTrigger
                key={logo.siteName}
                placement={"top"}
                style={{ marginBottom: "5px" }}
                overlay={
                  <Tooltip id={`tooltip-top`}>
                    <strong>{logo.siteName}</strong>
                  </Tooltip>
                }
              >
                <li className="competitive-sites-inline" name={logo.siteName}>
                  <a
                    href={logo.profileLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {logo.iconifyClassname && (
                      <span
                        className="iconify"
                        data-icon={logo.iconifyClassname}
                        style={logo.style}
                        data-inline="false"
                      ></span>
                    )}
                    {!logo.iconifyClassname && logo.imageSrc && (
                      <img
                        className="skill-image"
                        style={logo.style}
                        src={`${process.env.PUBLIC_URL}/skills/${logo.imageSrc}`}
                        alt={logo.siteName}
                      />
                    )}
                  </a>
                </li>
              </OverlayTrigger>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default CompetitiveSites;
