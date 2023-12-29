import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import GithubRepoCard from "../../components/githubRepoCard/GithubRepoCard";
import Button from "../../components/button/Button";
import TopButton from "../../components/topButton/TopButton";
import { Fade } from "react-reveal";
import { greeting, projectsHeader } from "../../portfolio.js";
import ProjectsData from "../../shared/opensource/projects.json";
import "./Projects.css";
import ProjectsImg from "./ProjectsImg";
import ProjectsList from "../../components/projects/ProjectsList";

class Projects extends Component {
  render() {
    // Group projects by type
    const projectsByType = ProjectsData.data.personal.reduce((acc, project) => {
      const { subtype } = project;
      if (!acc[subtype]) {
        acc[subtype] = [];
      }
      acc[subtype].push(project);
      return acc;
    }, {});
    const theme = this.props.theme;
    return (
      <div className="projects-main">
        {/*Header - useless repetition*/}
        <Header theme={theme} />
        {/*image on the left*/}
        <div className="basic-projects">
          <Fade bottom duration={2000} distance="40px">
            <div className="projects-heading-div">
              <div className="projects-heading-img-div">
                <ProjectsImg theme={theme} />
              </div>

              {/*projects title*/}
              <div className="projects-heading-text-div">
                <h1
                  className="projects-heading-text"
                  style={{ color: theme.text }}
                >
                  {projectsHeader.title}
                </h1>

                {/*projects section subtitle for entrprise and personal projects*/}
                {projectsHeader.description.map((element) => (
                  <div key={element.title}>
                    <h2>{element.title}</h2>
                    <p
                      className="section-description"
                      style={{ color: theme.secondaryText }}
                    >
                      {element.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Fade>
        </div>

        {/*project demonstraiton section*/}
        <div className="repo-cards-div-main">
          <div className="projects-by-type">
            {/*display entrperise projects*/}
            <ProjectsList
              theme={theme}
              title="Entreprise"
              projects={ProjectsData.data.enterprise}
            />
            {/*display personal projects*/}
            <ProjectsList
              theme={theme}
              title="Personal"
              projects={ProjectsData.data.personal}
            />
          </div>
        </div>
        <Button
          text={"More Projects"}
          className="project-button"
          href={greeting.githubProfile}
          newTab={true}
          theme={theme}
        />

        <Footer theme={this.props.theme} onToggle={this.props.onToggle} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default Projects;
