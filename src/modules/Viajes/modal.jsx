import { Container, Modal } from "react-bootstrap";
import { useContext } from "react";

import ViajeContext from 'context/ViajesContext';

function Modal1({ children }) {
  const { dataToEdit, isOpen } = useContext(ViajeContext);
  const handleModalContainerClick = (e) => e.stopPropagation();
  return (
    <Modal show={isOpen} aria-labelledby="contained-modal-title-vcenter">
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {dataToEdit ? "Editar Viaje" : "Adicionar Viaje"}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Container>{children}</Container>
      </Modal.Body>
      <Modal.Footer>Este el Footer del Modal</Modal.Footer>
    </Modal>
  );
}
export default Modal1;
