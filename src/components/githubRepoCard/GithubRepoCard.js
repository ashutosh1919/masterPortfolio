import React from "react";
import "./GithubRepoCard.css";
import { Fade } from "react-reveal";
import IconifyIcon from "../iconify/IconifyIcon";

export default function GithubRepoCard({ repo, theme }) {
  function openRepoinNewTab(url) {
    const win = window.open(url, "_blank");
    win.focus();
  }

  return (
    <div className="repo-card-div" style={{ backgroundColor: "white" }}>
      <Fade bottom duration={2000} distance="40px">
        <div key={repo.id} onClick={() => openRepoinNewTab(repo.url)}>
          {/*the title and icons*/}
          <div
            className="repo-name-div"
            style={{
              backgroundColor: theme.highlight,
              paddingLeft: "0.8rem",
              paddingRight: "0.8rem",
              borderRadius: "0.7rem",
            }}
          >
            <div>
              <p className="repo-name" style={{ color: theme.text }}>
                {repo.name}
              </p>
            </div>

            {repo.languages.map((lang, i) => {
              return (
                <div
                  style={{ display: "flex", justifyContent: "space-evenly" }}
                >
                  <IconifyIcon
                    key={i}
                    fontAwesomeClassname={lang.iconifyClass}
                    size="2.5rem"
                  />
                </div>
              );
            })}
          </div>
          {/*the desc*/}
          <div className="repo-description">
            <p className="text-inside-card" style={{ color: theme.text }}>
              {repo.description}
            </p>
          </div>
        </div>
      </Fade>
    </div>
  );
}
