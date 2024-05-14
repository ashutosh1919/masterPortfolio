import React, { Component, useEffect, useState } from "react";
import { Doughnut } from "react-chartjs-2";
import { Fade } from "react-reveal";
import "./PullRequestChart.css";

const PullRequestChart = ({ statsData }) => {
  const [prData, setPRData] = useState(null);

  useEffect(() => {
    let cropped = { data: [] };
    cropped["data"] = statsData["User"]["PullRequests"]["nodes"];

    var open = 0;
    var closed = 0;
    var merged = 0;
    for (var i = 0; i < cropped["data"].length; i++) {
      if (cropped["data"][i]["state"] === "OPEN") open++;
      else if (cropped["data"][i]["state"] === "MERGED") merged++;
      else closed++;
    }

    cropped["open"] = open;
    cropped["closed"] = closed;
    cropped["merged"] = merged;
    cropped["totalCount"] = cropped["data"].length;

    const data = {
      labels: ["Open", "Merged", "Closed"],
      datasets: [
        {
          data: [cropped["open"], cropped["merged"], cropped["closed"]],
          backgroundColor: ["#28a745", "#6f42c1", "#d73a49"],
          hoverBackgroundColor: ["#28a745dd", "#6f42c1dd", "#d73a49dd"],
        },
      ],
    };

    setPRData(data);
  }, []);

  return (
    <div className="pr-chart">
      {prData ? (
        <>
          <Fade bottom duration={2000} distance="20px">
            <h2 className="pr-chart-header">Pull Request Distribution</h2>
          </Fade>
          <Doughnut
            data={prData}
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
        </>
      ) : null}
    </div>
  );
};

export default PullRequestChart;
