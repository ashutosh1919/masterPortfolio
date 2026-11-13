import React, { Component } from "react";
import { Doughnut } from "react-chartjs-2";
import "../chartSetup";
import { Fade } from "../animation/Reveal";
import "./IssueChart.css";
import IssueData from "../../shared/opensource/issues.json";

class IssueChart extends Component {
  render() {
    const data = {
      labels: ["Open", "Closed"],
      datasets: [
        {
          data: [IssueData["open"], IssueData["closed"]],
          backgroundColor: ["#1b7133", "#a82334"],
          hoverBackgroundColor: ["#1b7133dd", "#a82334dd"],
        },
      ],
    };

    return (
      <div className="issue-chart">
        <Fade bottom duration={2000} distance="20px">
          <h2 className="issue-chart-header">Issue Distribution</h2>
        </Fade>
        <Doughnut
          data={data}
          aria-label={`Issue distribution: ${IssueData.open} open, ${IssueData.closed} closed`}
          options={{
            margin: "0",
            padding: "0",
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

export default IssueChart;
