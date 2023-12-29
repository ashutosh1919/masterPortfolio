import React from "react";
import "./ImageCard.css";

const ProjectCard = ({ imageSrc, projectName, projectDescription }) => {
  return (
    <div className="project-card">
      <img src={imageSrc} alt="Project" className="project-image" />
      <div className="project-details">
        <h3 className="project-name">{projectName}</h3>
        <p className="project-description">{projectDescription}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
