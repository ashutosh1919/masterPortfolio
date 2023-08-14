import React, { Component } from "react";
import "./Splash.css";
import { Redirect } from "react-router-dom";
import SplashScreen from "../../components/splashScreen/splashScreen.js";

function AnimatedSplash(props) {
  return (
    <div className="logo_wrapper">
      {/* <div className="screen" style={{ backgroundColor: props.theme.splashBg }}> */}
      <div className="screen">
        {/* <SplashScreen id="logo" theme={props.theme} /> */}
        <SplashScreen />
      </div>
    </div>
  );
}

class Splash extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false,
    };
  }

  componentDidMount() {
    this.id = setTimeout(() => this.setState({ redirect: true }), 5500);
  }

  componentWillMount() {
    clearTimeout(this.id);
  }

  render() {
    return this.state.redirect ? (
      <Redirect to="/home" />
    ) : (
      <AnimatedSplash theme={this.props.theme} />
    );
  }
}

export default Splash;
