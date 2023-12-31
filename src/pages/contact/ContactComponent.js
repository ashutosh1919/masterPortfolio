import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import AddressImg from "./AddressImg";
import { Fade } from "react-reveal";
import "./ContactComponent.css";
import { contactPageData, greeting } from "../../portfolio.js";

const ContactData = contactPageData.contactSection;

const Contact = ({ theme, onToggle }) => {
  const email = contactPageData.email;
  const handleCopyEmail = () => {
    console.log(email);
    // Create a temporary element (input) to copy the email address
    const tempInput = document.createElement("input");
    tempInput.value = email;
    console.log(tempInput.value);
    document.body.appendChild(tempInput);

    // Select the email address
    tempInput.select();
    tempInput.setSelectionRange(0, 99999); // For mobile devices

    // Execute copy command
    document.execCommand("copy");

    // Remove the temporary input
    document.body.removeChild(tempInput);

    // Optionally, provide feedback to the user (e.g., show a tooltip)
    // You can set a state to manage the tooltip visibility
  };

  return (
    <div className="contact-main">
      <Header theme={theme} />
      <div className="basic-contact">
        <Fade bottom duration={1000} distance="40px">
          <div className="contact-heading-div">
            <Fade bottom duration={1000} distance="40px">
              <div className="address-heading-div">
                <div className="contact-heading-img-div">
                  <AddressImg theme={theme} />
                </div>
              </div>
            </Fade>

            <div className="contact-heading-text-div">
              <h1
                className="contact-heading-text"
                style={{ color: theme.text }}
              >
                {ContactData["title"]}
              </h1>
              <p
                className="section-description"
                style={{ color: theme.secondaryText }}
              >
                {ContactData["description"]}
              </p>
              {/*social media*/}
              <SocialMedia theme={theme} />
              <div className="resume-btn-div">
                {/*see my resume*/}
                <Button
                  text="See My Resume"
                  newTab={true}
                  href={greeting.resumeLink}
                  theme={theme}
                />
              </div>
            </div>
          </div>
        </Fade>
        <div className="contact-heading-img-div">
          {/*face image*/}
          <img
            src={require(`../../assests/images/${ContactData["profile_image_path"]}`)}
            alt=""
          />
        </div>
      </div>
      <Footer theme={theme} onToggle={onToggle} />
      <TopButton theme={theme} />
    </div>
  );
};

export default Contact;
