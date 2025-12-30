import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import { Fade } from "react-reveal";
import "./Resume.css";
import myResumePdf from "../../assets/docs/Ashutosh_Hathidara_Resume_ML (2).pdf";

import { Document, Page, pdfjs } from "react-pdf";
import Button from "../../components/button/Button";
import { greeting } from "../../portfolio";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

export default class ResumePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pageWidth: null,
    };
  }

  componentDidMount() {
    this.setPageWidth();
    window.addEventListener("resize", this.setPageWidth);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.setPageWidth);
  }

  setPageWidth = () => {
    const width = window.innerWidth;
    let pageWidth;

    if (width > 1200) {
      pageWidth = 950; // Large desktop
    } else if (width > 768) {
      pageWidth = 700; // Desktop/tablet
    } else {
      pageWidth = width * 0.9; // Mobile - 90% of screen width
    }

    this.setState({ pageWidth });
  };

  render() {
    const theme = this.props.theme;
    const { pageWidth } = this.state;

    return (
      <div className="resume-main">
        <Header theme={theme} />
        <div className="resume-view">
          <Fade bottom duration={2000} distance="40px">
            <div className="download-btn">
              <Button
                text="📃 Download Resume"
                newTab={true}
                href={greeting.resumeLink}
                theme={theme}
              />
            </div>
            <div className="resume-page">
              <Document file={myResumePdf}>
                {pageWidth && <Page pageNumber={1} width={pageWidth} />}
              </Document>
            </div>
          </Fade>
        </div>
        <Footer theme={theme} />
      </div>
    );
  }
}