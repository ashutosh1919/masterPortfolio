import React, { Component } from "react";
import { Doughnut } from "react-chartjs-2";
import "../chartSetup";
import { Fade } from "../animation/Reveal";
import "./PullRequestChart.css";
import PullRequestData from "../../shared/opensource/pull_requests.json";

class PullRequestChart extends Component {
  render() {
    const data = {
      labels: ["Open", "Merged", "Closed"],
      datasets: [
        {
          data: [
            PullRequestData["open"],
            PullRequestData["merged"],
            PullRequestData["closed"],
          ],
          backgroundColor: ["#1b7133", "#6f42c1", "#a82334"],
          hoverBackgroundColor: ["#1b7133dd", "#6f42c1dd", "#a82334dd"],
        },
      ],
    };

    return (
      <div className="pr-chart">
        <Fade bottom duration={2000} distance="20px">
          <h2 className="pr-chart-header">Pull Request Distribution</h2>
        </Fade>
        <Doughnut
          data={data}
          aria-label={`Pull request distribution: ${PullRequestData.open} open, ${PullRequestData.merged} merged, ${PullRequestData.closed} closed`}
          options={{
            padding: "0",
            margin: "0",
            responsive: true,
            maintainAspectRatio: true,
            animation: {
              duration: 4000,
            },
          }}
        />
      </div>
    );
  }
}

export default PullRequestChart;
