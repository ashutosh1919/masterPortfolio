import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import GithubRepoCard from "../../components/githubRepoCard/GithubRepoCard";
import PublicationCard from "../../components/publicationsCard/PublicationCard";
import TopButton from "../../components/topButton/TopButton";
import ProjectModal from "./ProjectModal";
import { Fade } from "react-reveal";
import {
  projectsHeader,
  publicationsHeader,
  publications,
} from "../../portfolio.js";
import ProjectsData from "../../shared/opensource/projects.json";
import "./Projects.css";
import ProjectsImg from "./ProjectsImg";

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedRepo: null,
      isModalOpen: false,
    };
  }

  openModal = (repo) => {
    this.setState({ selectedRepo: repo, isModalOpen: true });
  };

  closeModal = () => {
    this.setState({ selectedRepo: null, isModalOpen: false });
  };

  render() {
    const { theme } = this.props;
    const { selectedRepo, isModalOpen } = this.state;

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

        {/* Projects Grid Layout */}
        <div className="max-w-screen-lg mx-auto p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ProjectsData.data.map((repo) => (
            <div onClick={() => this.openModal(repo)} key={repo.id} className="standard-card">
              <GithubRepoCard repo={repo} theme={theme} />
            </div>
          ))}
        </div>

        {/* Publications  */}
        {publications.data.length > 0 ? (
          <div className="basic-projects">
            <Fade bottom duration={2000} distance="40px">
              <div className="publications-heading-div">
                <div className="publications-heading-text-div">
                  <h1
                    className="publications-heading-text"
                    style={{ color: theme.text }}
                  >
                    {publicationsHeader.title}
                  </h1>
                  <br/>
                  <p
                    className="projects-header-detail-text subTitle"
                    style={{ color: theme.secondaryText }}
                  >
                    {publicationsHeader["description"]}
                  </p>
                </div>
              </div>
            </Fade>
          </div>
        ) : null}

        <div className="repo-cards-div-main">
          {publications.data.map((pub) => {
            return <PublicationCard pub={pub} theme={theme} />;
          })}
        </div>

        <Footer theme={theme} onToggle={this.props.onToggle} />
        <TopButton theme={theme} />

        {/* Render the modal */}
        {selectedRepo && (
          <ProjectModal
            repo={selectedRepo}
            isOpen={isModalOpen}
            onClose={this.closeModal}
            theme={theme}
          />
        )}
      </div>
    );
  }
}

export default Projects;
