import { Container, Modal, Button } from "react-bootstrap";

function Modal1({
  show,
  datadel,
  deletech,
  children,
  setdatatodelclose,
  setdatatodel,
}) {
  const delData = () => {
    deletech(datadel);
    setdatatodelclose();
    setdatatodel(null);
  };

  const handleModalContainerClick = (e) => e.stopPropagation();
  return (
    <Modal show={show}>
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">
          <div>Elminar Chofer</div>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Container>{children}</Container>
      </Modal.Body>
      <Modal.Footer>
        <Button
          style={{ marginLeft: "auto" }}
          className="btn-fill"
          variant="danger"
          onClick={setdatatodelclose}
        >
          Cancelar
        </Button>
        <Button
          style={{ marginLeft: "6px" }}
          className="btn-fill"
          variant="info"
          onClick={() => delData()}
        >
          Aceptar
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
export default Modal1;
