import React, { Component } from "react";
import { Route, Switch, HashRouter } from "react-router-dom";
import Home from "../pages/home/HomeComponent";
import Splash from "../pages/splash/Splash";
import Education from "../pages/education/EducationComponent";
import Experience from "../pages/experience/Experience";
import Opensource from "../pages/opensource/Opensource";
import Contact from '../pages/contact/ContactComponent';
import Projects from '../pages/projects/Projects';

export default class Main extends Component {
	render() {
		return (
			<div>
				<HashRouter basename="/">
					<Switch>
						<Route path="/" exact component={Splash} />
						<Route path="/home" component={Home} />
						<Route path="/experience" exact component={Experience} />
						<Route path="/education" component={Education} />
						<Route path="/opensource" component={Opensource} />
						<Route path="/contact" component={Contact} />
						<Route path="/splash" component={Splash} />
						<Route path="/projects" component={Projects} />
					</Switch>
				</HashRouter>
			</div>
		);
	}
}
