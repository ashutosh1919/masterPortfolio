import React, { Component } from "react";
import Header from "../../components/header/Header";
import Greeting from "../../containers/greeting/Greeting";
import Skills from "../../containers/skills/Skills";
import Footer from "../../components/footer/Footer";

class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <Greeting />
        <Skills />
        <Footer />
      </div>
    );
  }
}

export default Home;
