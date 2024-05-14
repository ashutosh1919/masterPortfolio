import React, { Component } from "react";
import "./Issues.css";
import { Fade } from "react-reveal";
import IssueCard from "../../components/issueCard/IssueCard";

const Issues = ({ theme, statsData }) => {
  return (
    <div>
      <div className="issues-header-div">
        <Fade bottom duration={2000} distance="20px">
          <h1 className="issues-header" style={{ color: theme.text }}>
            Issues
          </h1>
        </Fade>
      </div>
      <div className="issues-body-div">
        {statsData["User"]["Issues"]["nodes"].map((issue) => {
          return <IssueCard issue={issue} />;
        })}
      </div>
    </div>
  );
};

export default Issues;
