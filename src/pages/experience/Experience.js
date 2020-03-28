import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import ExperienceAccordion from '../../containers/experienceAccordion/ExperienceAccordion.js';
import {experience as ExperienceData} from '../../shared/experience.js';
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
								<img src={require(`../../assests/images/${ExperienceData.header_image_path}`)} />
							</div>
							<div className="experience-heading-text-div">
								<h1 className="experience-heading-text">{ExperienceData.title}</h1>
								<h3 className="experience-heading-sub-text">
									{ExperienceData.subtitle}
								</h3>
								<p className="experience-header-detail-text subTitle">
									{ExperienceData.description}
								</p>
							</div>
						</div>
					</Fade>
				</div>
                <ExperienceAccordion />
				<Footer />
			</div>
		);
	}
}

export default Experience;
