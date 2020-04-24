import React from "react";
import "./SocialMedia.css";
import { socialMediaLinks } from "../../portfolio";

export default function socialMedia() {
  return (
		<div className="social-media-div">
			<a
				href={socialMediaLinks.github}
				className="icon-button github"
				target="_blank"
				rel="noopener noreferrer"
			>
				<i className="fab fa-github"></i>
				<span></span>
			</a>
			<a
				href={socialMediaLinks.linkedin}
				className="icon-button linkedin"
				target="_blank"
				rel="noopener noreferrer"
			>
				<i className="fab fa-linkedin-in"></i>
				<span></span>
			</a>
			<a
				href={`mailto:${socialMediaLinks.gmail}`}
				className="icon-button google"
				target="_blank"
				rel="noopener noreferrer"
			>
				<i className="fab fa-google"></i>
				<span></span>
			</a>
			<a
				href={socialMediaLinks.twitter}
				className="icon-button twitter"
				target="_blank"
				rel="noopener noreferrer"
			>
				<i className="fab fa-twitter"></i>
				<span></span>
			</a>
			<a
				href={socialMediaLinks.facebook}
				className="icon-button facebook"
				target="_blank"
				rel="noopener noreferrer"
			>
				<i className="fab fa-facebook-f"></i>
				<span></span>
			</a>
		</div>
	);
}
