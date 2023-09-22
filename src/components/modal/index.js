import React from "react";
import { Modal, Button, Form } from "react-bootstrap";

export default function BasicModal(props) {
  const { showModal, handleModalClose, title, body, hideSecond } = props;
  return (
    <>
      <Modal show={showModal} onHide={handleModalClose}>
        <Modal.Header closeButton>
          <Modal.Title>{title ?? "Modal Title"}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{body ?? <p>This is the modal content.</p>}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleModalClose}>
            Close
          </Button>
          {!hideSecond ?? (
            <Button variant="secondary" onClick={handleModalClose}>
              Ok
            </Button>
          )}
        </Modal.Footer>
      </Modal>
    </>
  );
}
