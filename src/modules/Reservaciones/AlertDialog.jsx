import { Container, Modal, Button } from "react-bootstrap";
import { useContext } from "react";
import ReservacionContext from "context/ReservacionesContext";

const AlertDelete = ({ children }) => {
  const { isOpen, setCloseModal, DelReservations } =
    useContext(ReservacionContext);

  return (
    <Modal show={isOpen}>
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">
          <div>Elminar Reservacion</div>
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
          onClick={setCloseModal}
        >
          Cancelar
        </Button>
        <Button
          style={{ marginLeft: "6px" }}
          className="btn-fill"
          variant="info"
          onClick={()=>DelReservations()}
        >
          Aceptar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AlertDelete;
