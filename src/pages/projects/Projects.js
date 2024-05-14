import React, { Component, useCallback, useEffect, useState } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import GithubRepoCard from "../../components/githubRepoCard/GithubRepoCard";
import PublicationCard from "../../components/publicationsCard/PublicationCard";
import Button from "../../components/button/Button";
import TopButton from "../../components/topButton/TopButton";
import { Fade } from "react-reveal";
import { greeting, projectsHeader } from "../../portfolio.js";
import "./Projects.css";
import ProjectsImg from "./ProjectsImg";
import axios from "axios";
import { repos } from "../../portfolio";
import ProjectCard from "./ProjectCard.js";
import { Container, Row } from "react-bootstrap";

const Projects = ({ theme, onToggle }) => {
  const [projectsArray, setProjectsArray] = useState([]);

  const fetchRepos = useCallback(async () => {
    let repoList = [];
    let langList = [];
    try {
      // getting all repos
      const response1 = await axios.get(repos.repoURL);
      const response2 = await axios.get(repos.languagesURL);
      // slicing to the length
      repoList = [...response1.data.slice(0, repos.length)];
      langList = [...response2.data.slice(0, repos.reposLength)];
      for (let i = 0; i < repoList.length; i++) {
        for (let j = 0; j < langList.length; j++) {
          if (repoList[i]["name"] === langList[j]["name"]) {
            repoList[i]["languages"] = langList[j]["data"];
          }
        }
      }
      setProjectsArray(repoList);
    } catch (error) {
      console.error(error.message);
    }
  }, [repos.repoURL, repos.reposLength]);

  useEffect(() => {
    fetchRepos();
  }, [fetchRepos]);

  return (
    <div>
      <div className="projects-main">
        <Header theme={theme} />
        <div className="basic-projects">
          <Fade bottom duration={2000} distance="40px">
            <div className="projects-heading-div">
              <div className="projects-heading-img-div">
                {/* <img
											src={require(`../../assests/images/${projectsHeader["avatar_image_path"]}`)}
											alt=""
										/> */}
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
      </div>
      <div className="projects-main">
        <Container className="cardcontainer">
          <Row>
            {projectsArray.length
              ? projectsArray.map((project, index) => (
                  <ProjectCard
                    key={`project-card-${index}`}
                    id={`project-card-${index}`}
                    value={project}
                    deployURL={repos.deployURL}
                    hostedURL={repos.hostedURL}
                    theme={theme}
                  />
                ))
              : null}
          </Row>
        </Container>
        <Button
          text={"More Projects"}
          className="project-button"
          href={greeting.githubProfile}
          newTab={true}
          theme={theme}
        />

        <Footer theme={theme} onToggle={onToggle} />
        <TopButton theme={theme} />
      </div>
    </div>
  );
};

export default Projects;
