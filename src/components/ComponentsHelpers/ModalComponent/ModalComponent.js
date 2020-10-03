import React from "react";
import { Modal } from "react-bootstrap";

//CSS
import "./ModalComponent.css";

const ModalComponent = (props) => {
  const { showModal, closeModal, modalTitle, children } = props;
  return (
    <>
      <Modal
        show={showModal}
        onHide={() => {
          closeModal(false);
        }}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            {modalTitle}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>{children}</Modal.Body>
      </Modal>
    </>
  );
};

export default ModalComponent;
