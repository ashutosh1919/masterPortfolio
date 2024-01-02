import React from "react";
import "./Skills.css";
import { skills } from "../../portfolio";
import { Fade } from "react-reveal";
import DataScienceImg from "./DataScienceImg";
import FullStackImg from "./FullStackImg";
import CloudInfraImg from "./CloudInfraImg";
import DesignImg from "./DesignImg";
import { HighlightedSentence } from "../../components/highlightSentence/HighlightSentence";

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

const SkillSection = ({ theme }) => {
  const allTools = [
    "HTML5",
    "CSS3",
    "Angular",
    "TypeScript",
    "ReactJS",
    "Flask",
    "Python",
    "Java",
    "Spring",
    "Python",
    "NPM",
    "Maven",
    "Git",
    "MySQL",
    "MongoDB",
  ];

  return (
    <div>
      {skills.data.map((skill) => {
        return (
          <div key={skill.title} className="skills-main-div">
            {/*Main Image*/}

            <Fade left duration={2000}>
              <div className="skills-image-div" style={{ paddingTop: "2rem" }}>
                <GetSkillSvg fileName="CloudInfraImg" theme={theme} />
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

              {/*list of skills and tools */}
              <Fade right duration={2000}>
                <ul style={{ fontSize: "1.7rem", lineHeight: "2.3rem" }}>
                  {skill.skills.map((skillObject) => {
                    const sentence = skillObject.skill;
                    return (
                      <HighlightedSentence
                        key={sentence}
                        sentence={sentence}
                        allTools={allTools}
                        theme={theme}
                      />
                    );
                  })}
                </ul>
              </Fade>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SkillSection;
