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
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Home from "../pages/home/HomeComponent.js";
import Splash from "../pages/splash/Splash.js";
import Education from "../pages/education/EducationComponent.js";

export default class Main extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route path="/home" component={Home} />
            <Route path="/education" component={Education} />
            <Route path="/splash" component={Splash} />
            <Redirect from="/" to="/splash" />
          </Switch>
        </BrowserRouter>
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
