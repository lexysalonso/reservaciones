import React, { useState, useContext } from "react";
import { Container,Breadcrumb, Form, Row, Col, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import ReservacionContext from "context/ReservacionesContext";
import getReservacionesxViaje from "./servicesreservar";
import { useDispatch } from "react-redux";

const Reservar = () => {
  let history = useHistory();
  const [cant, setCant] = useState(null);
  // const {cantPersonViajar} = useContext(ReservacionContext)
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setCant(e.target.value);
  };

  const SenData = () => {
    dispatch(getReservacionesxViaje(cant));
    history.push(`/admin/realizar-reservar/${cant}`);
    console.log("presionaste");
  };

  return (
    <Container>
      <Breadcrumb>
        <Breadcrumb.Item>Reservaciones </Breadcrumb.Item>
      </Breadcrumb>
      <Form onSubmit={SenData}>
        <Row className="">
          <Col xs={12} md={8}>
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Text id="passwordHelpBlock" muted>
                Your password must be 8-20 characters long, contain letters and
                numbers, and must not contain spaces, special characters, or
                emoji.
              </Form.Text>
              <Form.Label>
                <b>Cantidad de Personas a viajar</b>
              </Form.Label>
              <Form.Control
                type="number"
                min="1"
                placeholder="Personas a Viajar"
                onChange={handleChange}
              />
            </Form.Group>
          </Col>
          <Col className=" align-self-md-end" xs={12} md={2}>
            <Form.Group as={Col}>
              <Button
                className=" btn btn-fill"
                as="input"
                variant="success"
                type="submit"
                value="Aceptar"
              />
            </Form.Group>
          </Col>
        </Row>
      </Form>
    </Container>
  );
};

export default Reservar;
