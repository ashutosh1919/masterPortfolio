import React, { Component } from "react";
import "./ProjectDetails.css";
import { Fade } from "react-reveal";
import { projects } from "../../portfolio";
import ProjectCard from "../../components/projectCard/ProjectCard";

class ProjectDetails extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="main" id="certs">
        <div className="certs-header-div">
          <Fade bottom duration={2000} distance="20px">
            <h1 className="certs-header" style={{ color: theme.text }}>
              Projects
            </h1>
          </Fade>
        </div>
        <div className="certs-body-div">
          {projects.certifications.map((cert) => {
            return <ProjectCard certificate={cert} theme={theme} />;
          })}
        </div>
      </div>
    );
  }
}

export default ProjectDetails;
