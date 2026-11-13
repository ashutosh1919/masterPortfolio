import React from "react";
import "./Project.css";
import GithubRepoCard from "../../components/githubRepoCard/GithubRepoCard";
import Button from "../../components/button/Button";
import { greeting } from "../../portfolio.js";
import { chosenTheme } from "../../theme";
import projectsData from "../../shared/opensource/projects.json";

// The standalone legacy section uses the same generated, public data as the
// projects page. It must not ship a GitHub token in the browser bundle.
export default function Projects({ theme = chosenTheme }) {
  const projects = Array.isArray(projectsData.data) ? projectsData.data : [];
  return (
    <div className="main" id="opensource">
      <h1 className="project-title">Open Source Projects</h1>
      <div className="repo-cards-div-main">
        {projects.map((repo) => (
          <GithubRepoCard repo={repo} theme={theme} key={repo.id} />
        ))}
      </div>
      <Button
        text="More Projects"
        className="project-button"
        href={greeting.githubProfile}
        newTab={true}
        theme={theme}
      />
    </div>
  );
}
