import { Icon } from "@iconify/react";
import React, { Component } from "react";
import "./PullRequestCard.css";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { Fade } from "../animation/Reveal";

class PullRequestCard extends Component {
  render() {
    const pullRequest = this.props.pullRequest;
    var iconPR;
    var bgColor;
    if (pullRequest["state"] === "OPEN") {
      iconPR = {
        iconifyClass: "octicon:git-pull-request",
        style: { color: "#1b7133" },
      };
      bgColor = "#dcffe4";
    } else if (pullRequest["state"] === "MERGED") {
      iconPR = {
        iconifyClass: "octicon:git-merge",
        style: { color: "#6f42c1" },
      };
      bgColor = "#f5f0ff";
    } else {
      iconPR = {
        iconifyClass: "octicon:git-pull-request",
        style: { color: "#a82334" },
      };
      bgColor = "#ffdce0";
    }

    var subtitleString =
      "#" +
      pullRequest["number"] +
      " opened on " +
      pullRequest["createdAt"].split("T")[0];
    var mergedBy;
    if (pullRequest["mergedBy"] !== null) {
      const name = pullRequest["mergedBy"]["login"];
      mergedBy = (
        <OverlayTrigger
          key={name}
          placement={"top"}
          flip
          style={{ marginBottom: "5px" }}
          overlay={
            <Tooltip id={`tooltip-top`}>
              <strong>{`Merged by ${name}`}</strong>
            </Tooltip>
          }
        >
          <a
            href={pullRequest["mergedBy"]["url"]}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Merged by ${name}`}
          >
            <img
              className="merge-by-img"
              src={pullRequest["mergedBy"]["avatarUrl"]}
              alt=""
            />
          </a>
        </OverlayTrigger>
      );
    } else {
      mergedBy = <noscript></noscript>;
    }

    return (
      /* Tooltip anchors should not move during the reveal. */
      <Fade duration={2000}>
        <div
          className="pull-request-card"
          style={{
            backgroundColor: bgColor,
            border: `1px solid ${iconPR.style.color}`,
          }}
        >
          <div className="pr-top">
            <div className="pr-header">
              <Icon
                className="iconify pr-icons"
                icon={iconPR.iconifyClass}
                style={iconPR.style}
                aria-hidden="true"
              />
              <div className="pr-title-header">
                <p className="pr-title">
                  <a
                    href={pullRequest["url"]}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {pullRequest["title"]}
                  </a>
                </p>
                <p className="pr-subtitle">{subtitleString}</p>
              </div>
            </div>
            <div className="files-changed-header">
              <p
                className="files-changed-text"
                style={{ backgroundColor: iconPR.style.color }}
              >
                {pullRequest["changedFiles"]}
              </p>
              <p className="files-changed-text-2">Files Changed</p>
            </div>
          </div>
          <div className="pr-down">
            <div className="changes-repo">
              <p className="parent-repo">
                Repository:{" "}
                <a
                  style={{ color: iconPR.style.color }}
                  href={pullRequest["baseRepository"]["url"]}
                >
                  {pullRequest["baseRepository"]["owner"]["login"]}/
                  {pullRequest["baseRepository"]["name"]}
                </a>
              </p>
              <div className="changes-files">
                <p className="additions-files">
                  <strong>{pullRequest["additions"]} + </strong>
                </p>
                <p className="deletions-files">
                  <strong>{pullRequest["deletions"]} - </strong>
                </p>
                {mergedBy}
              </div>
            </div>
            <div className="owner-img-div">
              <a
                href={pullRequest["baseRepository"]["owner"]["url"]}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${pullRequest["baseRepository"]["owner"]["login"]} on GitHub`}
              >
                <img
                  className="owner-img"
                  src={pullRequest["baseRepository"]["owner"]["avatarUrl"]}
                  alt=""
                />
              </a>
            </div>
          </div>
        </div>
      </Fade>
    );
  }
}

export default PullRequestCard;
