import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import "./Experience.css";
import { Fade } from "react-reveal";

class Experience extends Component {
	render() {
		return (
			<div className="experience-main">
				<Header />
				<div className="basic-experience">
					<Fade bottom duration={1000} distance="40px">
						<div className="experience-heading-div">
							<div className="experience-heading-img-div">
								<img src={require("../../assests/images/experience.svg")} />
							</div>
							<div className="experience-heading-text-div">
								<h1 className="experience-heading-text">Experience</h1>
								<h3 className="experience-heading-sub-text">
									Work, Internship and Volunteership
								</h3>
							</div>
						</div>
					</Fade>
				</div>
				<Footer />
			</div>
		);
	}
}

export default Experience;
