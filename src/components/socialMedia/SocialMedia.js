import React from "react";
import "./SocialMedia.css";
import { socialMediaLinks } from "../../portfolio";

export default function socialMedia() {
  return (
    <div className="social-media-div">
      {socialMediaLinks.map((media) => {
        return (
          <a
            href={media.link}
            className={`icon-button ${media.className}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className={`fab ${media.fontAwesomeIcon}`}></i>
            <span></span>
          </a>
        );
      })}
    </div>
  );
}
