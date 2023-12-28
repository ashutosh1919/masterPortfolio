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
            <div style={{ width: "90%", margin: "0 auto" }}>
              <h2
                style={{
                  color: theme.highlight,
                  padding: "1.5rem",
                  backgroundColor: theme.imageHighlight,
                  borderRadius: "2rem",
                  maxWidth: "100%",
                }}
              >
                Enterprise Projects
              </h2>
            </div>

            <div className="repo-cards-div-main">
              {ProjectsData.data.enterprise.map((project) => {
                return (
                  <GithubRepoCard
                    key={project.id}
                    repo={project}
                    theme={theme}
                  />
                );
              })}
            </div>
            {/*display personal projects*/}
            <div style={{ width: "90%", margin: "0 auto" }}>
              <h2
                style={{
                  color: theme.highlight,
                  padding: "1.5rem",
                  backgroundColor: theme.imageHighlight,
                  borderRadius: "2rem",
                  maxWidth: "100%",
                  marginTop: "3rem",
                }}
              >
                Personal Projects
              </h2>
            </div>
            {Object.entries(projectsByType).map(([type, projects]) => (
              <div key={type} className="project-type-section">
                <h2>{type.toLocaleUpperCase()}</h2>
                <div className="repo-cards-div-main">
                  {projects.map((repo) => (
                    <GithubRepoCard key={repo.id} repo={repo} theme={theme} />
                  ))}
                </div>
              </div>
            ))}
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
