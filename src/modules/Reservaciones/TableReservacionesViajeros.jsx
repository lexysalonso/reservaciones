import React, { useContext } from "react";
import "./grid.css";
import { Container, Row, Table, Col, Card, Button } from "react-bootstrap";
import ReservacionContext from "context/ReservacionesContext";
import { useSelector } from "react-redux";
import { useHistory } from 'react-router-dom';


const TableReservacionesViajeros = () => {
  const con = useContext(ReservacionContext);
  let history = useHistory()
  /*  console.log("ver contect en vaijeros", con)
  const { reservaciones } = useContext(ReservacionContext); 
  console.log("ver viajeros reservaciones", reservaciones);
  const { viajeros } = useContext(ReservacionContext);
  console.log("ver viajeros viajerosjsx", viajeros);
  */
  const ReservacionesList =()=>{
      history.push("/admin/reservaciones");
  }
  const state = useSelector((state) => state);
  const { viajeros } = state.reservacion;
  return (
    <Container>
      <Row>
        <Col md="12">
          <div style={{ marginBottom: "2rem" }}>
            <b>Estas son las personas que reservaron</b>
          </div>
          <Card className="strpied-tabled-with-hover">
            <Card.Header className="d-flex justify-content-between">
              Nombre del head
            </Card.Header>
            <Card.Body className="table-full-width table-responsive px-0">
              <Table className="table-hover table-striped">
                <thead>
                  <tr>
                    <th className="border-0">pk</th>
                    <th className="border-0">CI</th>
                  </tr>
                </thead>
                <tbody>
                  {viajeros &&
                    viajeros.map((viaje, index) => (
                      <tr key={index}>
                        <td>{1}</td>
                        <td>{viaje}</td>
                      </tr>
                    ))}
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Button
          onClick={()=>ReservacionesList()}
          className=" left btn btn-fill"
          as="input"
          variant="danger"
          type="submit"
          value="Aceptar"
        />
      </Row>
    </Container>
  );
};

export default TableReservacionesViajeros;
