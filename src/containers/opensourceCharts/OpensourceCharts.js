import React from "react";
import PullRequestChart from "../../components/pullRequestChart/PullRequestChart.js";
import IssueChart from "../../components/issueChart/IssueChart.js";
import { Fade } from "react-reveal";
import "./OpensourceCharts.css";

const OpenSourceCharts = ({ theme, statsData }) => {
  return (
    <div className="main-div">
      <div className="os-charts-header-div">
        <Fade bottom duration={2000} distance="20px">
          <h1 className="os-charts-header" style={{ color: theme.text }}>
            Contributions
          </h1>
        </Fade>
      </div>
      <div className="os-charts-body-div">
        <PullRequestChart statsData={statsData} />
        <IssueChart statsData={statsData} />
      </div>
    </div>
  );
};

export default OpenSourceCharts;
