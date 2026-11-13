import React from "react";
import contactImage from "../../assets/images/contactMail.png";
import "./Contact.css";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import { contactPageData, socialMediaLinks } from "../../portfolio";
import { chosenTheme } from "../../theme";

export default function Contact({ contactInfo, theme = chosenTheme }) {
  const email = socialMediaLinks
    .find((link) => link?.link?.startsWith("mailto:"))
    ?.link?.slice(7);
  const info = contactInfo || {
    title: contactPageData.contactSection.title,
    subtitle: contactPageData.contactSection.description,
    number: contactPageData.phoneSection?.subtitle,
    email_address: email,
  };
  return (
    <div className="main contact-margin-top" id="contact">
      <div className="contact-div-main">
        <div className="contact-header">
          <h1 className="heading contact-title">{info.title}</h1>
          <p className="subTitle contact-subtitle">{info.subtitle}</p>
          <div className="contact-text-div">
            {info.number && (
              <p>
                <a className="contact-detail" href={`tel:${info.number}`}>
                  {info.number}
                </a>
              </p>
            )}
            {info.email_address && (
              <p>
                <a
                  className="contact-detail-email"
                  href={`mailto:${info.email_address}`}
                >
                  {info.email_address}
                </a>
              </p>
            )}
            <SocialMedia theme={theme} />
          </div>
        </div>
        <div className="contact-image-div">
          <img alt="" src={contactImage} />
        </div>
      </div>
    </div>
  );
}
