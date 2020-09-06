import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import GithubRepoCard from "../../components/githubRepoCard/GithubRepoCard";
import Button from "../../components/button/Button";
import TopButton from "../../components/topButton/TopButton";
import { Fade } from "react-reveal";
import { projectsHeader, settings } from "../../portfolio.js";
import ProjectsData from "../../shared/opensource/projects.json";
import "./Projects.css";
import ProjectsImg from "./ProjectsImg";
import patents from "../../shared/profile/patents.json";
import projects from "../../shared/profile/projects.json";
import publications from "../../shared/profile/publications.json";
import PatentCard from "../../components/patentCard/PatentCard";
import PublicationCard from "../../components/publicationCard/PublicationCard";
import OtherProjectCard from "../../components/otherProjectCard/OtherProjectCard";

class Projects extends Component {
  render() {
    const renderProjects = () => {
      if (projects.length > 0)
        return (
          <>
            <div className="basic-projects">
              <Fade bottom duration={2000} distance="40px">
                <div className="projects-heading-div">
                  <div className="projects-heading-text-div">
                    <h1
                      className="projects-heading-text"
                      style={{ color: theme.text }}
                    >
                      Other projects
                    </h1>
                  </div>
                </div>
              </Fade>
            </div>
            <Fade bottom duration={2000} distance="40px">
              <div className="repo-cards-div-main">
                {projects.map((pat) => (
                  <OtherProjectCard theme={theme} project={pat} />
                ))}
              </div>
            </Fade>
          </>
        );
      else return <> </>;
    };
    const renderPatents = () => {
      if (patents.length > 0)
        return (
          <>
            <div className="basic-projects">
              <Fade bottom duration={2000} distance="40px">
                <div className="projects-heading-div">
                  <div className="projects-heading-text-div">
                    <h1
                      className="projects-heading-text"
                      style={{ color: theme.text }}
                    >
                      Patent
                    </h1>
                  </div>
                </div>
              </Fade>
            </div>

            <Fade bottom duration={2000} distance="40px">
              <div className="repo-cards-div-main">
                {patents.map((i, pat) => (
                  <PatentCard theme={theme} patent={{ ...pat, id: i }} />
                ))}
              </div>
            </Fade>
          </>
        );
      else return <> </>;
    };
    const renderPublications = () => {
      if (publications.length > 0)
        return (
          <>
            <div className="basic-projects">
              <Fade bottom duration={2000} distance="40px">
                <div className="projects-heading-div">
                  <div className="projects-heading-text-div">
                    <h1
                      className="projects-heading-text"
                      style={{ color: theme.text }}
                    >
                      Publications
                    </h1>
                  </div>
                </div>
              </Fade>
            </div>
            <Fade bottom duration={2000} distance="40px">
              <div className="repo-cards-div-main">
                {publications.map((pat) => (
                  <PublicationCard theme={theme} publication={pat} />
                ))}
              </div>
            </Fade>
          </>
        );
      else return <> </>;
    };
    const theme = this.props.theme;
    return (
      <div className="projects-main">
        <Header theme={theme} />
        <div className="basic-projects">
          <Fade bottom duration={2000} distance="40px">
            <div className="projects-heading-div">
              <div className="projects-heading-img-div">
                <ProjectsImg theme={theme} />
              </div>
              <div className="projects-heading-text-div">
                <h1
                  className="projects-heading-text"
                  style={{ color: theme.text }}
                >
                  {projectsHeader.title}
                </h1>
                <p
                  className="projects-header-detail-text subTitle"
                  style={{ color: theme.secondaryText }}
                >
                  {projectsHeader["description"]}
                </p>
              </div>
            </div>
          </Fade>
        </div>
        {renderPatents()}
        {renderPublications()}
        <div className="basic-projects">
          <Fade bottom duration={2000} distance="40px">
            <div className="projects-heading-div">
              <div className="projects-heading-text-div">
                <h1
                  className="projects-heading-text"
                  style={{ color: theme.text }}
                >
                  Projects
                </h1>
              </div>
            </div>
          </Fade>
        </div>
        <div className="repo-cards-div-main">
          {ProjectsData.data.map((repo) => {
            return <GithubRepoCard repo={repo} theme={theme} />;
          })}
        </div>
        {renderProjects()}
        <Button
          text={"More Projects"}
          className="project-button"
          href={settings.githubUrl}
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
