import React, { Component } from "react";
import ExperienceCard from "../../components/experienceCard/ExperienceCard.js";
import "./ExperienceAccordion.css";
import { Accordion, Panel } from "baseui/accordion";

class ExperienceAccordion extends Component {
  render() {
    const theme = this.props.theme;
    const renderHonors = () => {
      if (this.props.achievements.length > 0)
        return (
          <Panel
            className="accord-panel"
            title="Honors and Achievements"
            key="honors"
          >
            {this.props.achievements.map((experience) => {
              return <ExperienceCard experience={experience} theme={theme} />;
            })}
          </Panel>
        );
      else return <> </>;
    };
    const renderWork = () => {
      if (this.props.work.length > 0)
        return (
          <Panel
            className="accord-panel"
            title="Work Experience"
            key="work"
            expanded
          >
            {this.props.work.map((experience) => {
              return <ExperienceCard experience={experience} theme={theme} />;
            })}
          </Panel>
        );
      else return <> </>;
    };

    return (
      <div className="experience-accord">
        <Accordion>
          {renderWork()}
          {renderHonors()}
        </Accordion>
      </div>
    );
  }
}

export default ExperienceAccordion;
