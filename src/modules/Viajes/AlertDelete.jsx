import { Container, Modal, Button } from "react-bootstrap";
import { useContext } from "react";
import ViajeContext from "context/ViajesContext";

import React from "react";

const AlertDelete = ({ children }) => {
  const { isOpenDel, delDataViajes, setDataToDelClose } =
    useContext(ViajeContext);

  return (
    <Modal show={isOpenDel}>
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
          onClick={setDataToDelClose}
        >
          Cancelar
        </Button>
        <Button
          style={{ marginLeft: "6px" }}
          className="btn-fill"
          variant="info"
          onClick={() => delDataViajes()}
        >
          Aceptar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AlertDelete;
