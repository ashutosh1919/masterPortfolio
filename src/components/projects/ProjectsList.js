import React from "react";
import GithubRepoCard from "../githubRepoCard/GithubRepoCard"; // Assuming the component file is in the same directory

const ProjectSection = ({ theme, projects, title }) => {
  return (
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
        {title}
      </h2>

      <div className="repo-cards-div-main">
        {projects.map((project) => (
          <GithubRepoCard key={project.id} repo={project} theme={theme} />
        ))}
      </div>
    </div>
  );
};

export default ProjectSection;
