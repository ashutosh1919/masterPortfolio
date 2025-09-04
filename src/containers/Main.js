import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Home from "../pages/home/HomeComponent";
import Splash from "../pages/splash/Splash";
import Education from "../pages/education/EducationComponent";
import Experience from "../pages/experience/Experience";
import Opensource from "../pages/opensource/Opensource";
import Contact from "../pages/contact/ContactComponent";
import Projects from "../pages/projects/Projects";
import { settings } from "../portfolio.js";
import Error404 from "../pages/errors/error404/Error";

export default class Main extends Component {
  render() {
    return (
      <Switch>
        <Route
          exact
          path="/"
          render={(props) =>
            settings.isSplash ? (
              <Splash {...props} theme={this.props.theme} />
            ) : (
              <Home {...props} theme={this.props.theme} />
            )
          }
        />

        {/* keep /home working */}
        <Route exact path="/home" render={() => <Redirect to="/" />} />

        <Route
          exact
          path="/experience"
          render={(props) => <Experience {...props} theme={this.props.theme} />}
        />
        <Route
          exact
          path="/education"
          render={(props) => <Education {...props} theme={this.props.theme} />}
        />
        <Route
          exact
          path="/opensource"
          render={(props) => <Opensource {...props} theme={this.props.theme} />}
        />
        <Route
          exact
          path="/contact"
          render={(props) => <Contact {...props} theme={this.props.theme} />}
        />
        {settings.isSplash && (
          <Route
            exact
            path="/splash"
            render={(props) => <Splash {...props} theme={this.props.theme} />}
          />
        )}
        <Route
          exact
          path="/projects"
          render={(props) => <Projects {...props} theme={this.props.theme} />}
        />
        <Route
          exact
          path="/_test"
          render={() => <h1 style={{ padding: 20 }}>It works</h1>}
        />

        {/* Catch-all */}
        <Route
          render={(props) => <Error404 {...props} theme={this.props.theme} />}
        />
      </Switch>
    );
  }
}
