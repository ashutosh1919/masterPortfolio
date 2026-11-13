import { Icon } from "@iconify/react";
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
                flip
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
                    aria-label={logo.siteName}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {logo.iconifyClassname && (
                      <Icon
                        className="iconify"
                        icon={logo.iconifyClassname}
                        style={logo.style}
                        aria-hidden="true"
                      />
                    )}
                    {!logo.iconifyClassname && logo.imageSrc && (
                      <img
                        className="skill-image"
                        style={logo.style}
                        src={`${import.meta.env.BASE_URL}skills/${logo.imageSrc}`}
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
