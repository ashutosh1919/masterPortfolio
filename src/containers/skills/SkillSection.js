import React, { Component } from "react";
import "./Skills.css";
import SoftwareSkill from "../../components/softwareSkills/SoftwareSkill";
import { skills } from "../../portfolio";
import { Fade } from "react-reveal";
import DataScienceImg from "./DataScienceImg";
import FullStackImg from "./FullStackImg";
import CloudInfraImg from "./CloudInfraImg";
import DesignImg from "./DesignImg";

// This Component loop over the skills inside protfolio.js and is resposible
// for what's beneth what do I do senction on the main page'
function GetSkillSvg(props) {
  if (props.fileName === "DataScienceImg")
    return <DataScienceImg theme={props.theme} />;
  else if (props.fileName === "FullStackImg")
    return <FullStackImg theme={props.theme} />;
  else if (props.fileName === "CloudInfraImg")
    return <CloudInfraImg theme={props.theme} />;
  return <DesignImg theme={props.theme} />;
}

function hashCode(s) {
  let hash = 0;
  for (let i = 0; i < s.length; i++) {
    const char = s.charCodeAt(i);
    hash = (hash << 5) - hash + char;
  }
  return hash;
}

class SkillSection extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div>
        {skills.data.map((skill) => {
          return (
            <div key={skill.title} className="skills-main-div">
              {/*Main Image*/}

              <Fade left duration={2000}>
                <div className="skills-image-div">
                  <GetSkillSvg fileName={skill.fileName} theme={theme} />
                </div>
              </Fade>
              {/*****/}

              <div className="skills-text-div">
                {/*the title*/}

                <Fade right duration={1000}>
                  <h1
                    className="skills-heading"
                    style={{ color: theme.text }}
                  ></h1>
                </Fade>
                {/****/}

                {/*the stack icons */}
                <Fade right duration={1500}>
                  <SoftwareSkill logos={skill.softwareSkills} />
                </Fade>
                {/*****/}
                {/*list of skills */}
                <Fade right duration={2000}>
                  <div>
                    {skill.skills.map((skillSentence) => {
                      if (skillSentence.includes(":")) {
                        return (
                          <h1
                            key={hashCode(skillSentence)}
                            className="subTitle skills-text"
                            style={{ color: theme.secondaryText }}
                          >
                            {skillSentence}
                          </h1>
                        );
                      } else {
                        return (
                          <p
                            key={hashCode(skillSentence)}
                            className="subTitle skills-text"
                            style={{ color: theme.secondaryText }}
                          >
                            {skillSentence}
                          </p>
                        );
                      }
                    })}
                  </div>
                </Fade>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default SkillSection;
