import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import React, { Component } from "react";
import { Fade } from "react-reveal";
import TopButton from "../../containers/topbutton/TopButton";
import "./MemoriesComponent.css";
/* eslint-disable jsx-a11y/accessible-emoji */

class Memories extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div>
        <Header theme={theme} />
        <Fade bottom duration={2000} distance="20px">
          <div className="heading-div">
            <h1 className="headingtext" style={{ color: theme.text }}>
              Some Precious Moments <span role="img">😇</span>
            </h1>
          </div>
          <div className="img-div">
            <img src={require("../../assests/images/img1.jpg")} alt="" />

            <img src={require("../../assests/images/m.jpg")} alt="" />
          </div>
          <div className="img-div">
            <img src={require("../../assests/images/img3.jpg")} alt="" />

            <img src={require("../../assests/images/img4.jpg")} alt="" />
          </div>

          <div className="heading-img-div">
            <img src={require("../../assests/images/img5.jpeg")} alt="" />
          </div>
          <div className="heading-img-div">
            <img src={require("../../assests/images/img6.jpg")} alt="" />
          </div>
          <div className="heading-img-div">
            <img src={require("../../assests/images/img7.jpg")} alt="" />
          </div>
          <div className="img-div">
            <img src={require("../../assests/images/img8.jpg")} alt="" />
            <img src={require("../../assests/images/img9.jpg")} alt="" />
          </div>
          <div className="img-div">
            <img src={require("../../assests/images/img13.JPG")} alt="" />
            <img src={require("../../assests/images/img11.jpeg")} alt="" />
          </div>
          <div className="heading-img-div">
            <img src={require("../../assests/images/img12.jpg")} alt="" />
          </div>
        </Fade>
        <Footer theme={this.props.theme} onToggle={this.props.onToggle} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default Memories;
