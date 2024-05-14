import React from "react";
import { Modal, Button } from "react-bootstrap";
import { Res } from "../../portfolio";

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
        <Modal.Header closeButton>
          <Modal.Title>Sharan's Resume</Modal.Title>
        </Modal.Header>
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
