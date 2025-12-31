import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import { Fade } from "react-reveal";
import "./Resume.css";
import myResumePdf from "../../assets/docs/Ashutosh_Hathidara_Resume_ML.pdf";
import { Document, Page, pdfjs } from "react-pdf";
import Button from "../../components/button/Button";
import { greeting } from "../../portfolio";
import TopButton from "../../components/topButton/TopButton";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

export default class ResumePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pageWidth: null,
      numPages: null,
      currentPage: 1,
      isLoading: true,
      error: null,
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
      pageWidth = 930;
    } else if (width > 768) {
      pageWidth = 700;
    } else {
      pageWidth = width * 0.9;
    }

    this.setState({ pageWidth });
  };

  onDocumentLoadSuccess = ({ numPages }) => {
    this.setState({
      numPages,
      isLoading: false,
      error: null,
    });
  };

  onDocumentLoadError = (error) => {
    console.error("Error loading PDF:", error);
    this.setState({
      error: "Failed to load resume. Please try again later.",
      isLoading: false,
    });
  };

  goToPreviousPage = () => {
    this.setState((prevState) => ({
      currentPage: Math.max(prevState.currentPage - 1, 1),
    }));
  };

  goToNextPage = () => {
    this.setState((prevState) => ({
      currentPage: Math.min(prevState.currentPage + 1, prevState.numPages),
    }));
  };

  render() {
    const theme = this.props.theme;
    const { pageWidth, numPages, currentPage, isLoading, error } = this.state;

    return (
      <div className="resume-main">
        <Header theme={theme} />
        <div className="resume-view">
          <Fade bottom duration={2000} distance="40px">
            <div>
              {/* Download Button */}
              <div className="download-btn">
                <Button
                  text="📃 Download Resume"
                  newTab={true}
                  href={greeting.resumeLink}
                  theme={theme}
                />
              </div>

              {/* Loading State */}
              {isLoading && !error && (
                <div className="resume-loading">
                  <div className="loading-spinner"></div>
                  <p>Loading resume...</p>
                </div>
              )}

              {/* Error State */}
              {error && (
                <div className="resume-error">
                  <svg
                    className="error-icon"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    width="48"
                    height="48"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <p>{error}</p>
                  <button
                    onClick={() => window.location.reload()}
                    className="retry-btn"
                    aria-label="Reload resume"
                  >
                    Try Again
                  </button>
                </div>
              )}

              {/* PDF Document */}
              {!error && (
                <div className="resume-page">
                  <Document
                    file={myResumePdf}
                    onLoadSuccess={this.onDocumentLoadSuccess}
                    onLoadError={this.onDocumentLoadError}
                    loading={
                      <div className="resume-loading">
                        <div className="loading-spinner"></div>
                        <p>Loading resume...</p>
                      </div>
                    }
                  >
                    {pageWidth && (
                      <Page
                        pageNumber={currentPage}
                        width={pageWidth}
                        loading={
                          <div className="page-loading">
                            <div className="loading-spinner"></div>
                          </div>
                        }
                      />
                    )}
                  </Document>

                  {/* Pagination Controls */}
                  {numPages && numPages > 1 && (
                    <div className="pagination-controls">
                      <button
                        onClick={this.goToPreviousPage}
                        disabled={currentPage === 1}
                        className="pagination-btn"
                        aria-label="Previous page"
                      >
                        ← Previous
                      </button>
                      <span className="page-info" aria-live="polite">
                        Page {currentPage} of {numPages}
                      </span>
                      <button
                        onClick={this.goToNextPage}
                        disabled={currentPage === numPages}
                        className="pagination-btn"
                        aria-label="Next page"
                      >
                        Next →
                      </button>
                    </div>
                  )}
                </div>
              )}
            </div>
          </Fade>
        </div>
        <Footer theme={theme} onToggle={this.props.onToggle}/>
        <TopButton theme={theme} />
      </div>
    );
  }
}