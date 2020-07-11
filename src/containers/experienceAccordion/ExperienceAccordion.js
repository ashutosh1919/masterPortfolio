import React, { Component } from "react";
import ExperienceCard from '../../components/experienceCard/ExperienceCard.js';
import "./ExperienceAccordion.css";
import { Accordion, Panel } from "baseui/accordion";

class ExperienceAccordion extends Component {
	render() {
		const theme = this.props.theme;
		return (
			<div className="experience-accord">
				<Accordion onChange={({ expanded }) => console.log(expanded)}>
					{this.props.sections.map((section) => {
						return (
							<Panel className="accord-panel" title={section["title"]} key={section["title"]}>
								{section["experiences"].map((experience) => {
									return (
										<ExperienceCard experience={experience} theme={theme} />
									);
								})}
							</Panel>
						);
					})}
				</Accordion>
			</div>
		);
	}
}

export default ExperienceAccordion;
