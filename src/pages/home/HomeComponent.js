import React, { Component } from "react";
import Header from "../../components/header/Header";
import Greeting from "../../containers/greeting/Greeting";
import Skills from "../../containers/skills/Skills";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import ErrorBoundary from "../../components/common/ErrorBoundary";

class Home extends Component {
  render() {
    const { theme } = this.props;
    return (
      <div>
        <ErrorBoundary label="Header">
          <Header theme={theme} />
        </ErrorBoundary>

        <ErrorBoundary label="Greeting">
          <Greeting theme={theme} />
        </ErrorBoundary>

        <ErrorBoundary label="Skills">
          <Skills theme={theme} />
        </ErrorBoundary>

        <ErrorBoundary label="Footer">
          <Footer theme={theme} />
        </ErrorBoundary>

        <TopButton theme={theme} />
      </div>
    );
  }
}
export default Home;
