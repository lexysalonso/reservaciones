import { Container,Modal } from "react-bootstrap";

function Modal1(props) {
  const handleModalContainerClick = (e) => e.stopPropagation();
  return (
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter">
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {props.datatoedit ? "Editar Chofer" : "Adicionar Chofer"}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Container>{props.children}</Container>
      </Modal.Body>
      <Modal.Footer>Este el Footer del Modal</Modal.Footer>
    </Modal>
  );
}
export default Modal1;
