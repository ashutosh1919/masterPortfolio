import React, { Component } from "react";
import Header from "../components/header/Header";
import Greeting from "./greeting/Greeting";
import Skills from "./skills/Skills";
import Projects from "./projects/Projects";
import StartupProject from "./StartupProjects/StartupProject";
import Achievement from "./achievement/Achievement";
import Blogs from "./blogs/Blogs";
import Contact from "./contact/Contact";
import Footer from "../components/footer/Footer";
import Talks from "./talks/Talks";
import Podcast from "./podcast/Podcast";
import { BrowserRouter, Route, Switch, Redirect, HashRouter } from "react-router-dom";
import Home from "../pages/home/HomeComponent";
import Splash from "../pages/splash/Splash";
import Education from "../pages/education/EducationComponent";
import Experience from "../pages/experience/Experience";
import Opensource from "../pages/opensource/Opensource";

export default class Main extends Component {
	render() {
		return (
			<div>
				<HashRouter basename='/'>
					<Switch>
            <Route exact path="/"  component={Splash} />
						<Route path="/home" component={Home} />
            <Route path="/experience" component={Experience} />
						<Route path="/education" component={Education} />
						<Route path="/opensource" component={Opensource} />
						<Route path="/splash" component={Splash} />
						{/* <Redirect from="/" to="/splash" /> */}
					</Switch>
					{/* <Switch></Switch> */}
				</HashRouter>
			</div>
			// <div>
			//   <Header />
			//   <Greeting />
			//   <Skills />
			//   {/* <Projects />
			//   <StartupProject />
			//   <Achievement />
			//   <Blogs />
			//   <Talks />
			//   <Podcast />
			//   <Contact /> */}
			//   <Footer />
			// </div>
		);
	}
}
