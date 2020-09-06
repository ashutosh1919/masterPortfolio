import React, { Component } from "react";
import "./ExperienceCard.css";

class ExperienceCard extends Component {
  render() {
    const experience = this.props.experience;
    const theme = this.props.theme;
    const renderDuration = () => {
      if ("Issued On" in experience) return experience["Issued On"];
      else
        return `${experience["Started On"]}  - ${
          experience["Finished On"] || "Present"
        } `;
    };
    return (
      <div
        className="experience-card"
        style={{ border: `1px solid ${experience["color"]}` }}
      >
        <div className="experience-card-body-div">
          <div className="experience-card-header-div">
            <div className="experience-card-heading-left">
              <h3
                className="experience-card-title"
                style={{ color: theme.text }}
              >
                {experience["Company Name"]}
              </h3>
              <p
                className="experience-card-company"
                style={{ color: theme.text }}
              >
                <a
                  href={experience["company_url"]}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {experience["Title"]}
                </a>
              </p>
            </div>
            <div className="experience-card-heading-right">
              <p
                className="experience-card-duration"
                style={{ color: theme.secondaryText }}
              >
                {renderDuration()}
              </p>
              <p
                className="experience-card-location"
                style={{ color: theme.secondaryText }}
              >
                {experience["Location"]}
              </p>
            </div>
          </div>
          <p
            className="experience-card-description"
            style={{ color: theme.text }}
          >
            {experience["Description"]}
          </p>
        </div>
      </div>
    );
  }
}

export default ExperienceCard;
