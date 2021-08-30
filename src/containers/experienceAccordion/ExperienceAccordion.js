import React, { Component } from "react";
import ExperienceCard from "../../components/experienceCard/ExperienceCard.js";
import "./ExperienceAccordion.css";
import { Accordion, Panel } from "baseui/accordion";

class ExperienceAccordion extends Component {

  constructor(props) {
    super(props);
    this.state = {
      Work: true,
      Interships: true,
      Volunteerships: true
    }
 }

  render() {
    const theme = this.props.theme;
    return (
      <div className="experience-accord">
        <Accordion onPanelChange={(key, onChange) => {console.log('Key: ' + key)}} >
          {this.props.sections.map((section, index) => {
            return (
              <Panel
                className="accord-panel"
                title={section["title"]}
                key={index}
                value={section["title"]}
                expanded={
                  index == 0 ? this.state.Work : (index == 1 ? this.state.Internships : false) 
                }
              
                onClick={(event) => {
                  console.log('Event', event)
          
                  switch(index) {
                    case 0: {
                      this.setState({Work: this.state.Word})
                    }
                    case 1: {
                      this.setState({Interships: !this.state.Interships})
                    }
                    case 2: {
                      this.setState({Volunteerships: !this.state.Volunteerships})
                    }
                  }
                }}
              >
                {section["experiences"].map((experience) => {
                  return (
                    <ExperienceCard experience={experience} theme={theme} />
                  );
                })}
              </Panel>
            );
          })}
        </Accordion>
      </div>
    );
  }
}

export default ExperienceAccordion;
