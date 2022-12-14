import React, { useContext } from "react";
import { Button, Card, Breadcrumb, Container, Row, Col } from "react-bootstrap";
import TableReservacionesHead from "./TableReservacionesHead";
import TableReservacionesBody from "./TableReservacionesBody";
//import ViajeContext from "context/ViajesContext";
import TableReservacionesViajeros from "./TableReservacionesViajeros";
import ReservacionContext from "context/ReservacionesContext";
import { useHistory } from "react-router-dom";
import Loading from "components/Loading/loading";

const TableReservaciones = () => {
  let history = useHistory();
  const { reservaciones, loading } = useContext(ReservacionContext);
  const RedirectReservar = () => {
    history.push("/admin/reservar");
  };
  return (
    <>
      <Container style={{ maxWidth: "100%" }} fluid>
        <Row>
          <Col md="12">
            <Breadcrumb>
              <Breadcrumb.Item>Reservaciones </Breadcrumb.Item>
              <Breadcrumb.Item active>Lista</Breadcrumb.Item>
            </Breadcrumb>
            {loading && <Loading />}
            {!loading && (
              <Card className="strpied-tabled-with-hover">
                <Card.Header className="d-flex justify-content-between">
                  <TableReservacionesHead />
                  <Button
                    type="Submit"
                    onClick={RedirectReservar}
                    className="btn btn-fill"
                    variant="success"
                  >
                    Adicionar Reservacion
                  </Button>
                </Card.Header>
                <Card.Body className="table-full-width table-responsive px-0">
                  {reservaciones.length > 0 ? (
                    <TableReservacionesBody />
                  ) : (
                    <h3>No existen Reservaciones Disponibles</h3>
                  )}
                </Card.Body>
              </Card>
            )}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default TableReservaciones;
