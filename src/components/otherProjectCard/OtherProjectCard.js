import React from "react";
import "./OtherProjectCard.css";
import { Fade } from "react-reveal";

export default function PatentCard({ project, theme }) {
  function openRepoinNewTab(url) {
    var win = window.open(url, "_blank");
    win.focus();
  }

  return (
    <div>
      <Fade bottom duration={2000} distance="40px">
        <div
          className="repo-card-div"
          key={project.id}
          onClick={() => openRepoinNewTab(project.Url)}
          style={{ backgroundColor: theme.highlight }}
        >
          <div className="repo-name-div">
            <p className="repo-name" style={{ color: theme.text }}>
              {project.Title}
            </p>
          </div>
          <p className="repo-description" style={{ color: theme.text }}>
            {project.Description}
          </p>
          <div className="repo-details">
            <p
              className="repo-creation-date subTitle"
              style={{ color: theme.secondaryText }}
            >
              Started on {project["Started On"]}
            </p>
          </div>
        </div>
      </Fade>
    </div>
  );
}
