import React, { Component } from "react";
import "./Skills.css";
import SoftwareSkill from "../../components/softwareSkills/SoftwareSkill";
import { skills } from "../../portfolio";
import { Flip, Fade } from "react-reveal";

class SkillSection extends Component {
  render() {
    return (
      <div>
        {skills.data.map(skill => {
          return (
            <div className="skills-main-div">
              <Flip left duration={2000}>
                <div className="skills-image-div">
                  <img
                    alt="Ashutosh is Analysing Data"
                    src={require(`../../assests/images/${skill.imagePath}`)}
                  ></img>
                </div>
              </Flip>

              <div className="skills-text-div">
                <Fade right duration={1000}>
                  <h1 className="skills-heading">{skill.title}</h1>
                </Fade>
                <Fade right duration={1500}>
                  <SoftwareSkill logos={skill.softwareSkills} />
                </Fade>
                <Fade right duration={2000}>
                  <div>
                    {skill.skills.map(skillSentence => {
                      return (
                        <p className="subTitle skills-text">{skillSentence}</p>
                      );
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
