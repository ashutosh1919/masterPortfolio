import { Icon } from "@iconify/react";
import React, { Component } from "react";
import "./IssueCard.css";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { Fade } from "../animation/Reveal";

class IssueCard extends Component {
  render() {
    const issue = this.props.issue;
    var iconPR;
    var bgColor;
    if (issue["closed"] === false) {
      iconPR = {
        iconifyClass: "octicon:issue-opened",
        style: { color: "#1b7133" },
      };
      bgColor = "#dcffe4";
    } else {
      iconPR = {
        iconifyClass: "octicon:issue-closed",
        style: { color: "#a82334" },
      };
      bgColor = "#ffdce0";
    }

    var subtitleString =
      "#" + issue["number"] + " opened on " + issue["createdAt"].split("T")[0];
    var assignee;
    if (issue["assignees"]["nodes"].length > 0) {
      const person = issue["assignees"]["nodes"][0];
      const name = person.name || person.login || "GitHub user";
      assignee = (
        <OverlayTrigger
          key={name}
          placement={"top"}
          flip
          style={{ marginBottom: "5px" }}
          overlay={
            <Tooltip id={`tooltip-top`}>
              <strong>{`Assigned to ${name}`}</strong>
            </Tooltip>
          }
        >
          <a
            href={person.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Assigned to ${name}`}
          >
            <img className="assigned-to-img" src={person.avatarUrl} alt="" />
          </a>
        </OverlayTrigger>
      );
    } else {
      assignee = <noscript></noscript>;
    }

    return (
      /* Tooltip anchors should not move during the reveal. */
      <Fade duration={2000}>
        <div
          className="issue-card"
          style={{
            backgroundColor: bgColor,
            border: `1px solid ${iconPR.style.color}`,
          }}
        >
          <div className="issue-top">
            <div className="issue-header">
              <Icon
                className="iconify issue-icons"
                icon={iconPR.iconifyClass}
                style={iconPR.style}
                aria-hidden="true"
              />
              <div className="issue-title-header">
                <p className="issue-title">
                  <a
                    href={issue["url"]}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {issue["title"]}
                  </a>
                </p>
                <p className="issue-subtitle">{subtitleString}</p>
              </div>
            </div>
            {/* <div className="files-changed-header">
							<p
								className="files-changed-text"
								style={{ backgroundColor: iconPR.style.color }}
							>
								{pullRequest["changedFiles"]}
							</p>
							<p className="files-changed-text-2">Files Changed</p>
						</div> */}
          </div>
          <div className="issue-down">
            <div className="assignee-repo">
              <p className="parent-repo">
                Repository:{" "}
                <a
                  style={{ color: iconPR.style.color }}
                  href={issue["repository"]["url"]}
                >
                  {issue["repository"]["owner"]["login"]}/
                  {issue["repository"]["name"]}
                </a>
              </p>
              <div className="assignee-info">
                {/* <p className="additions-files">
									<strong>{pullRequest["additions"]} + </strong>
								</p>
								<p className="deletions-files">
									<strong>{pullRequest["deletions"]} - </strong>
								</p> */}
                {assignee}
              </div>
            </div>
            <div className="owner-img-div">
              <a
                href={issue["repository"]["owner"]["url"]}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${issue["repository"]["owner"]["login"]} on GitHub`}
              >
                <img
                  className="owner-img"
                  src={issue["repository"]["owner"]["avatarUrl"]}
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

export default IssueCard;
