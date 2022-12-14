import React, { useState, useEffect, useContext } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import {
  Container,
  Button,
  Form,
  Col,
  Row,
  Breadcrumb,
  ButtonToolbar,
} from "react-bootstrap";
import "./grid.css";
import useReservciones from "../../hooks/useReservciones";

let reserva = {
  fecha: "",
  viajes: "",
  create_by: Number(1),
  members: [1],
  cis: null,
  asientos: "",
};
const validationsFormCI = (ci, setDisable) => {
  let errores = {};
  let regexCI = /^[0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9]$/;
  if (ci === "") {
    errores.cis = "El campo CI es requerido.";
  } else if (!regexCI.test(ci)) {
    errores.cis = "El campo 'CI' no es una CI valido Ej 93102611328.";
  }

  if (Object.keys(errores).length === 0) {
    setDisable(false);
  } else {
    setDisable(true);
  }

  return errores;
};
const validationsForm = (form, ci, setDisable) => {
  let errores = {};
  let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
  let regexNumero = /^[0-9].{3}$/;
  let regexCapacidad = /^[0-9].{1}$/;
  let regexChapa = /^[A-Z][0-9][0-9][0-9][0-9][0-9][0-9]$/;
  let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
  let regexComments = /^.{1,255}$/;

  console.log("ver form importante", form);
  if (form.fecha === "") {
    errores.fecha = "El campo 'Fecha' es requerido";
  }

  if (form.viajes === "") {
    errores.viajes = "El campo 'Viajes' es requerido";
  }

  if (form.asientos === "") {
    errores.asientos = "El campo 'Asientos' es requerido";
  }

  if (Object.keys(errores).length === 0) {
    setDisable(false);
  } else {
    setDisable(true);
  }

  return errores;
};

let styles = {
  fontWeight: "bold",
  color: "#dc3545",
};
const RealizarReservacion = () => {
  const {
    ci,
    disable,
    errores,
    erroscis,
    cantidad,
    viajes,
    res,
    cant,
    handleOnKeyUp,
    hanledsubmit,
    handleChange,
    handleChangeCIS,
    Regresar,
  } = useReservciones(reserva, validationsForm, validationsFormCI);
  return (
    <Container>
      <Breadcrumb>
        <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
        <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
          Libra
        </Breadcrumb.Item>
        <Breadcrumb.Item active>Data</Breadcrumb.Item>
      </Breadcrumb>
      <div>
        <p>
          <b>{`Desean Viajar ${cant} personas.`}</b>
        </p>
      </div>
      <Form onSubmit={hanledsubmit}>
        <Row>
          <Col xs={12} md={6}>
            <Form.Group>
              <Form.Label className="label">
                <b>Fecha</b>
              </Form.Label>
              <Form.Control
                onBlur={handleOnKeyUp}
                type="date"
                name="fecha"
                value={res.fecha}
                onChange={handleChange}
                placeholder="Entre La fecha"
                required
              ></Form.Control>
              {errores.fecha && <span style={styles}>{errores.fecha}</span>}
            </Form.Group>
          </Col>
          <Col xs={12} md={6}>
            <Form.Group>
              <Form.Label className="label">
                <b>Viaje</b>
              </Form.Label>
              <Form.Control
                onBlur={handleOnKeyUp}
                as="select"
                name="viajes"
                onChange={handleChange}
                placeholder="Entre La fecha"
                required
              >
                <option value="">------</option>
                {viajes.map((viaje, index) => (
                  <option key={index} value={viaje.pk}>
                    {`${viaje.origen}-${viaje.destino}`}
                  </option>
                ))}
              </Form.Control>
              {errores.viajes && <span style={styles}>{errores.viajes}</span>}
            </Form.Group>
          </Col>
        </Row>

        <div className="grid">
          {cantidad.map((cant, index) => (
            <Form.Group keys={index}>
              <Form.Label className="label">
                <b>CI {index + 1}:</b>
              </Form.Label>
              <Form.Control
                data-id={`${index}`}
                //onKeyPress={handleOnKeyUp}
                name="cis"
                onChange={handleChangeCIS}
                placeholder="Entre la fecha"
                required
              ></Form.Control>
              <Form.Text></Form.Text>
            </Form.Group>
          ))}
        </div>
         {erroscis.cis && <span style={styles}>{erroscis.cis}</span>} 
        <Row>
          <>
            <Button
              className="btn-fill ml-auto mr-2"
              variant="danger"
              //onClick={setModalClose}
              onClick={() => Regresar()}
            >
              Cancelar
            </Button>{" "}
          </>

          <Button
            className=" btn btn-fill "
            disabled={disable}
            type="submit"
            variant="info"
          >
            Acceptar
          </Button>
        </Row>
      </Form>
    </Container>
  );
};

export default RealizarReservacion;
