import React from "react";
import ProjectLanguages from "../../components/projectLanguages/ProjectLanguages";
import "./GithubRepoCard.css";
import { Fade } from "react-reveal";
import IconifyIcon from "../iconify/IconifyIcon";

export default function GithubRepoCard({ repo, theme }) {
  function openRepoinNewTab(url) {
    const win = window.open(url, "_blank");
    win.focus();
  }

  return (
    <div
      className="repo-card-div"
      style={{ backgroundColor: theme.imageHighlight }}
    >
      <Fade bottom duration={2000} distance="40px">
        <div key={repo.id} onClick={() => openRepoinNewTab(repo.url)}>
          {/*the title and icons*/}
          <div
            className="repo-name-div"
            style={{
              backgroundColor: theme.highlight,
              padding: "0.5rem",
              borderRadius: "2rem",
            }}
          >
            <p className="repo-name" style={{ color: theme.text }}>
              {repo.name}
            </p>
            {repo.languages.map((lang, i) => {
              console.log(lang);
              return (
                <IconifyIcon
                  key={i}
                  fontAwesomeClassname={lang.iconifyClass}
                  size="1rem"
                />
              );
            })}

            {/*<ProjectLanguages*/}
            {/*  className="repo-languages"*/}
            {/*  logos={repo.languages}*/}
            {/*/>*/}
          </div>
          {/*the desc*/}
          <div className="repo-description">
            <p style={{ color: theme.text, fontSize: "1.5rem" }}>
              {repo.description}
            </p>
          </div>
          {/*the subtitles*/}
          <div className="repo-details">
            {repo.subtitle && (
              <p
                className="card-subtitle"
                style={{ color: theme.secondaryText }}
              >
                {repo.subtitle}
              </p>
            )}
          </div>
        </div>
      </Fade>
    </div>
  );
}
