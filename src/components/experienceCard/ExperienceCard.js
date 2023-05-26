import React, { Component } from 'react';
import './ExperienceCard.css';
import { Fade } from "react-reveal";

class ExperienceCard extends Component {
  render() {
    const experience = this.props.experience;
    const index = this.props.index;
    const totalCards = this.props.totalCards;
    const theme = this.props.theme;
    return (
      <div className="experience-list-item" style={{ marginTop: (index === 0 ? 30 : 50) }}>
        <Fade left duration={2000} distance="40px">
          <div className="experience-card-logo-div">
            <img
              className="experience-card-logo"
              src={require(`../../assests/images/${experience["logo_path"]}`)}
              alt=""
            />
          </div>
        </Fade>
        <div className="experience-card-stepper">
          <div style={{ width: 20, height: 20, backgroundColor: `${theme.headerColor}`, borderRadius: 50, zIndex: 100 }} />
          {
            index !== (totalCards - 1) &&
            <div style={{ height: 190, width: 2, backgroundColor: `${theme.headerColor}`, position: 'absolute', marginTop: 20 }} />
          }
        </div>
        <Fade right duration={2000} distance="40px">
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            <div className="arrow-left" style={{ borderRight: `10px solid ${theme.body}` }}></div>
            <div className="experience-card" style={{ background: `${theme.body}` }}>
              <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                <div>
                  <h3 className="experience-card-title" style={{ color: theme.text }}>{experience["title"]}</h3>
                  <p className="experience-card-company" style={{ color: theme.text }}>
                    <a href={experience["company_url"]} target="_blank" rel="noopener noreferrer">
                      {experience["company"]}
                    </a>
                  </p>
                </div>
                <div>
                  <div className="experience-card-heading-right">
                    <p className="experience-card-duration" style={{ color: theme.secondaryText }}>{experience["duration"]}</p>
                    <p className="experience-card-location" style={{ color: theme.secondaryText }}>{experience["location"]}</p>
                  </div>

                </div>
              </div>
              <div style={{ display: 'flex', justifyContent: 'flex-start', marginTop: 20 }}>
                <div
                  className="repo-description"
                />
                {experience["description"]}
              </div>

            </div>

          </div>
        </Fade>
      </div>

    );
  }
}

export default ExperienceCard;
