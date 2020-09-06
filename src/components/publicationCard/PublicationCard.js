import React from "react";
import "./PublicationCard.css";
import { Fade } from "react-reveal";

export default function PatentCard({ publication, theme }) {
  function openRepoinNewTab(url) {
    var win = window.open(url, "_blank");
    win.focus();
  }

  return (
    <div>
      <Fade bottom duration={2000} distance="40px">
        <div
          className="repo-card-div"
          key={publication.id}
          onClick={() => openRepoinNewTab(publication.Url)}
          style={{ backgroundColor: theme.highlight }}
        >
          <div className="repo-name-div">
            <p className="repo-name" style={{ color: theme.text }}>
              {publication.Name}
            </p>
          </div>
          <p className="repo-description" style={{ color: theme.text }}>
            {publication.Description}
          </p>
          <div className="repo-details">
            <p
              className="repo-creation-date subTitle"
              style={{ color: theme.secondaryText }}
            >
              {publication["Publisher"]} {publication["Published On"]}
            </p>
          </div>
        </div>
      </Fade>
    </div>
  );
}
