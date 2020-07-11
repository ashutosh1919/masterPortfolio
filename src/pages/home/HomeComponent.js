import React, { Component } from "react";
import Header from "../../components/header/Header";
import Greeting from "../../containers/greeting/Greeting";
import Skills from "../../containers/skills/Skills";
import Footer from "../../components/footer/Footer";

class Home extends Component {
  render() {
    console.log(this.props.theme);
    return (
			<div>
				<Header theme={this.props.theme} />
				<Greeting theme={this.props.theme} />
				<Skills theme={this.props.theme} />
				<Footer theme={this.props.theme} />
			</div>
		);
  }
}

export default Home;
