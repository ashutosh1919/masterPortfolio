import React, { Component }from "react";
import './ExperienceAccordion.css';
import {Accordion, Panel} from 'baseui/accordion';
import {Slide} from 'react-reveal';

class ExperienceAccordion extends Component {
    render(){
        return (
					<div className="experience-accord">
						<Accordion onChange={({ expanded }) => console.log(expanded)}>
							<Slide right>
								<Panel className="accord-panel" title="Work">
									Content 1
								</Panel>
							</Slide>
							<Slide right>
								<Panel className="accord-panel" title="Internships">
									Content 2
								</Panel>
							</Slide>
							<Slide right>
								<Panel className="accord-panel" title="Volunteerships">
									Content 3
								</Panel>
							</Slide>
						</Accordion>
					</div>
				);
    }
}

export default ExperienceAccordion;