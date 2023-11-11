import React from "react";
import { Fade } from "react-reveal";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import "./OrganizationList.css";

const OrganizationList = (props) => {
    const open= (url) => {
      const win = window.open(url, "_blank");
      win.focus();
    }
    return (
      <div className="organizations-main-div">
        <ul className="dev-icons-orgs">
          {props.logos.map((logo) => {
            return (
              <OverlayTrigger
                key={logo["login"]}
                placement={"top"}
                style={{ marginBottom: "5px" }}
                overlay={
                  <Tooltip id={`tooltip-top`}>
                    <strong>{logo["login"]}</strong>
                  </Tooltip>
                }
              >
                <li className="organizations-inline" name={logo["login"]}>
                  <Fade bottom duration={2000} distance="40px">
                    <img
                      className="organizations-img"
                      onClick={()=>open(logo["url"])}
                      src={logo["avatarUrl"]}
                      alt={logo["login"]}
                    />
                  </Fade>
                </li>
              </OverlayTrigger>
            );
          })}
        </ul>
      </div>
    );
}

export default OrganizationList;
