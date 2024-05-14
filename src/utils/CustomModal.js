import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import React from "react";
import Countdown from "react-countdown";

const CustomModal = ({
  title,
  body,
  show,
  setShow,
  showProgress = false,
  progressPeriod = 0,
}) => {
  const handleClose = () => setShow(false);

  // Renderer callback with condition
  const renderer = ({ hours, minutes, seconds, completed }) => {
    if (completed) {
      return (
        <Button
          variant="success"
          onClick={() => {
            window.location.reload();
          }}
        >
          <b>Refresh</b>
        </Button>
      );
    } else {
      return (
        <Button variant="danger">
          <b>Deploying in {minutes * 60 + seconds} seconds </b>
        </Button>
      );
    }
  };

  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        {showProgress === true ? (
          <Modal.Header>
            <Modal.Title>{title}</Modal.Title>
          </Modal.Header>
        ) : (
          <Modal.Header closeButton>
            <Modal.Title>{title}</Modal.Title>
          </Modal.Header>
        )}
        <Modal.Body>{body}</Modal.Body>
        <Modal.Footer>
          {showProgress === true ? (
            <Countdown
              date={Date.now() + progressPeriod * 1000}
              renderer={renderer}
            />
          ) : (
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          )}
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default CustomModal;
