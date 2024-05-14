import React from "react";
import { Modal, Button, ModalHeader } from "react-bootstrap";
import "./ResumeModal.css";

const ResumeModal = ({ show, setShow, resumeLink }) => {
  return (
    <>
      <Modal
        show={show}
        onHide={() => {
          setShow(false);
        }}
        backdrop="static"
        size="xl"
      >
        <ModalHeader>
          <div
            style={{
              boxSizing: "border-box",
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
              padding: "2%",
              fontSize: "1.4rem",
            }}
          >
            <b>Sharan's Resume</b>
            <div
              style={{
                display: "flex",
                justifyContent: "space-evenly",
                width: "100px",
                fontSize: "1.4rem",
              }}
            >
              <i
                className="fa fa-download"
                onClick={() => {
                  const link = document.createElement("a");
                  link.href = "/SharanSaiReddy_Konda.pdf";
                  link.download = "SharanSaiReddy_Konda_Resume.pdf";
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);
                }}
              />
              <i
                className="fa fa-close"
                onClick={() => {
                  setShow(false);
                }}
              />
            </div>
          </div>
        </ModalHeader>
        <Modal.Body>
          <iframe
            src={resumeLink}
            style={{
              width: "100%",
              height: "80vh",
            }}
            frameborder="0"
            title="asdas"
          ></iframe>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ResumeModal;
