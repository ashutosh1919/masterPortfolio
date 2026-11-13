import React, { Component } from "react";
import "./Splash.css";
import { Navigate } from "react-router-dom";
import LoaderLogo from "../../components/Loader/LoaderLogo.js";

function AnimatedSplash(props) {
  return (
    <div className="logo_wrapper">
      <div className="screen" style={{ backgroundColor: props.theme.splashBg }}>
        <LoaderLogo id="logo" theme={props.theme} />
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

  componentWillUnmount() {
    clearTimeout(this.id);
  }

  render() {
    return this.state.redirect ? (
      <Navigate to="/home" replace />
    ) : (
      <AnimatedSplash theme={this.props.theme} />
    );
  }
}

export default Splash;
