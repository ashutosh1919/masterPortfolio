import React from "react";
import "./Skills.css";
import SkillSection from "./SkillSection";
import { Fade } from "react-reveal";
import { skills } from "../../portfolio";
import SoftwareSkill from "../../components/softwareSkills/SoftwareSkill";

export default function Skills(props) {
  const theme = props.theme;
  return (
    <div className="main" id="skills">
      <div className="skills-header-div">
        <Fade bottom duration={2000} distance="20px">
          <h1 className="skills-header" style={{ color: theme.text }}>
            My Tools:
          </h1>

          {skills.data.map((skill) => (
            <SoftwareSkill
              logos={skill.softwareSkills}
              key={skill.softwareSkills}
            />
          ))}
        </Fade>
      </div>
      <SkillSection theme={theme} />
    </div>
  );
}
