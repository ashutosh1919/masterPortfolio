import React, { useEffect, useState } from "react";
import { Doughnut } from "react-chartjs-2";
import { Fade } from "react-reveal";
import "./IssueChart.css";

const IssueChart = ({ statsData }) => {
  const [prData, setPRData] = useState(null);

  useEffect(() => {
    let cropped = { data: [] };
    cropped["data"] = statsData["User"]["Issues"]["nodes"];

    let open = 0;
    let closed = 0;
    for (let i = 0; i < cropped["data"].length; i++) {
      if (cropped["data"][i]["closed"] === false) open++;
      else closed++;
    }

    cropped["open"] = open;
    cropped["closed"] = closed;
    cropped["totalCount"] = cropped["data"].length;

    const data = {
      labels: ["Open", "Closed"],
      datasets: [
        {
          data: [cropped["open"], cropped["closed"]],
          backgroundColor: ["#28a745", "#d73a49"],
          hoverBackgroundColor: ["#28a745dd", "#d73a49dd"],
        },
      ],
    };

    setPRData(data);
  }, []);

  return (
    <div className="issue-chart">
      {prData ? (
        <>
          <Fade bottom duration={2000} distance="20px">
            <h2 className="issue-chart-header">Issue Distribution</h2>
          </Fade>
          <Doughnut
            data={prData}
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
        </>
      ) : null}
    </div>
  );
};

export default IssueChart;
