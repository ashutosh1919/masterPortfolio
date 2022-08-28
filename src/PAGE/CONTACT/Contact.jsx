import { Spacer } from "@chakra-ui/react";
import React from "react";
import { Fade } from "react-reveal";
import About from "../../components/About/About";
import Blog from "../../components/Blog/Blog";
import ContactIntro from "../../components/ContactIntro/ContactIntro";
import { contactPageData } from "../../portfolio";

const Contact = () => {
  const about = {
    ...contactPageData.addressSection,
    ...contactPageData.phoneSection,
  };
  // console.log(about)
  return (
    <div id="Contact Me">
      <br />
      <br />
      <br />
      <Fade bottom duration={3000} distance={"60px"}>
        <ContactIntro {...contactPageData.contactSection} />
      </Fade>
      <Spacer />
      <br />
      <br />
      <br />
      <Fade bottom duration={3000} distance={"60px"}>
        <Blog {...contactPageData.blogSection} />
      </Fade>

      <br />
      <br />
      <br />
      <Fade bottom duration={3000} distance={"60px"}>
        <About {...about} />
      </Fade>
    </div>
  );
};

export default Contact;
