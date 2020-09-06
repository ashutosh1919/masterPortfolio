import React from "react";
import "./PatentCard.css";
import { Fade } from "react-reveal";

export default function PatentCard({ patent, theme }) {
  function openRepoinNewTab(url) {
    var win = window.open(url, "_blank");
    win.focus();
  }

  return (
    <div>
      <Fade bottom duration={2000} distance="40px">
        <div
          className="repo-card-div"
          key={patent.id}
          onClick={() => openRepoinNewTab(patent.Url)}
          style={{ backgroundColor: theme.highlight }}
        >
          <div className="repo-name-div">
            <p className="repo-name" style={{ color: theme.text }}>
              {patent.id.Title} - App. No. {patent.id["Application Number"]}
            </p>
          </div>
          <p className="repo-description" style={{ color: theme.text }}>
            {patent.id.Description}
          </p>
          <div className="repo-details">
            <p
              className="repo-creation-date subTitle"
              style={{ color: theme.secondaryText }}
            >
              Issued on {patent.id["Issued On"]}
            </p>
          </div>
        </div>
      </Fade>
    </div>
  );
}
