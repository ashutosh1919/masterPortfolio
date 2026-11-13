import React from "react";
import "./StartupProjects.css";

export default function StartupProject({ section }) {
  if (!section) return null;
  const projects = Array.isArray(section.projects) ? section.projects : [];
  return (
    <div className="main" id="projects">
      <div>
        <h1 className="skills-heading">{section.title}</h1>
        <p className="subTitle project-subtitle">{section.subtitle}</p>
        <div className="startup-projects-main">
          <div className="startup-project-text">
            {projects.map((project, index) => (
              <a
                key={`${project.link}-${index}`}
                className="saaya-health-div"
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img alt={project.title || "Project"} src={project.image} />
              </a>
            ))}
          </div>
          <div className="starup-project-image"></div>
        </div>
      </div>
    </div>
  );
}
