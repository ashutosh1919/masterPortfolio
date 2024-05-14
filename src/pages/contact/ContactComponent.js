import React, { Component, useState } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import BlogsImg from "./BlogsImg";
import AddressImg from "./AddressImg";
import { Fade } from "react-reveal";
import "./ContactComponent.css";
import { greeting, contactPageData } from "../../portfolio.js";
import ResumeModal from "../../components/ResumeModal/ResumeModal.js";

const ContactData = contactPageData.contactSection;
const blogSection = contactPageData.blogSection;
const addressSection = contactPageData.addressSection;
const phoneSection = contactPageData.phoneSection;

const Contact = ({ theme, onToggle }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="contact-main">
      <ResumeModal
        show={showModal}
        setShow={setShowModal}
        resumeLink={greeting.resumeLink}
      />
      <Header theme={theme} />
      <div className="basic-contact">
        <Fade bottom duration={1000} distance="40px">
          <div className="contact-heading-div">
            <div className="contact-heading-img-div">
              <img
                src={require(`../../assests/images/${ContactData["profile_image_path"]}`)}
                alt=""
                width="500px"
                height="500px"
                style={{ borderRadius: "100%" }}
              />
            </div>
            <div className="contact-heading-text-div">
              <h1
                className="contact-heading-text"
                style={{ color: theme.text }}
              >
                {ContactData["title"]}
              </h1>
              <p
                className="contact-header-detail-text subTitle"
                style={{ color: theme.secondaryText }}
              >
                {ContactData["description"]}
              </p>
              <SocialMedia theme={theme} />
              <div className="resume-btn-div">
                <Button
                  text="See My Resume"
                  newTab={true}
                  onClick={() => {
                    setShowModal(true);
                  }}
                  theme={theme}
                />
              </div>
            </div>
          </div>
        </Fade>
      </div>
      <Footer theme={theme} onToggle={onToggle} />
      <TopButton theme={theme} />
    </div>
  );
};

export default Contact;
