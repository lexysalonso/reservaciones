import React, { useContext, useEffect, useState } from "react";
import { Col, Container, Form, Row, Button } from "react-bootstrap";
import OmnibusContext from "context/OmnibusContext";
import useOmnibus from "hooks/useOmnibus";

const objnew = {
  pk: null,
  numero: "",
  chapa: "",
  disponible: false,
  capacidad: "",
  create_by: Number(1),
};

const validationsForm = (form, setDisable) => {
  let errores = {};
  let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
  let regexNumero = /^[0-9].{3}$/;
  let regexCapacidad = /^[0-9].{1}$/;
  let regexChapa = /^[A-Z][0-9][0-9][0-9][0-9][0-9][0-9]$/;
  let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
  let regexComments = /^.{1,255}$/;
  console.log("ver form importante", form);
  if (form.numero === "") {
    errores.numero = "El campo 'Numero' es requerido";
  } else if (!regexNumero.test(form.numero)) {
    errores.numero = "El campo 'Numero' es un Numero hasta 4 digitos ";
  }

  if (form.chapa === "") {
    errores.chapa = "El campo 'Chapa' es requerido";
  } else if (!regexChapa.test(form.chapa)) {
    errores.chapa = "El campo 'Chapa' no es una chapa valida Ej C234560 ";
  }

  if (form.capacidad === "") {
    errores.capacidad = "El campo 'Capacidad' es requerido";
  } else if (!regexCapacidad.test(form.capacidad)) {
    errores.capacidad = "El campo 'Capacidad' es un Numero";
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
const FormOmnibus = () => {
  const {
    form,
    errores,
    disable,
    handleChange,
    handleChangeCkeck,
    handleSubmit,
    handleReset,
    handlekeyUP,
    setModalClose,
  } = useOmnibus(objnew, validationsForm);
  console.log("ver disable", disable);
  return (
    <>
      <Container>
        <Form onSubmit={handleSubmit}>
          <Row>
            <Col className="px-1 col col-md-12">
              <Form.Group>
                <label htmlFor="nombre del Chofer">Numero del Omnibus</label>
                <Form.Control
                  placeholder="Nombre del Chofer."
                  type="text"
                  name="numero"
                  value={form.numero}
                  onChange={handleChange}
                  onKeyUp={handlekeyUP}
                  required
                ></Form.Control>
                {errores.numero && <span style={styles}>{errores.numero}</span>}
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col className="px-1 col col-md-12">
              <Form.Group>
                <label htmlFor="nombre del Chofer">Chapa del Omnibus</label>
                <Form.Control
                  placeholder="Nombre del Chofer."
                  type="text"
                  value={form.chapa}
                  name="chapa"
                  onChange={handleChange}
                  onKeyUp={handlekeyUP}
                  required
                ></Form.Control>
                {errores.chapa && <span style={styles}>{errores.chapa}</span>}
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col className="px-1 col col-md-12">
              <Form.Group>
                <label htmlFor="nombre del Chofer">Capacidad del Omnibus</label>
                <Form.Control
                  placeholder="Nombre del Chofer."
                  type="text"
                  value={form.capacidad}
                  name="capacidad"
                  onChange={handleChange}
                  onKeyUp={handlekeyUP}
                  required
                ></Form.Control>
                {errores.capacidad && (
                  <span style={styles}>{errores.capacidad}</span>
                )}
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col className="px-1 col col-md-12">
              <Form.Check
                type="switch"
                label="Disponibilidad del Omnibus"
                name="disponible"
                checked={form.disponible}
                onChange={handleChangeCkeck}
                id="disponible"
              ></Form.Check>
            </Col>
          </Row>
          <Row>
            <Button
              className="btn-fill ml-auto mr-2"
              variant="danger"
              onClick={setModalClose}
            >
              Cancelar
            </Button>
            <Button
              className="btn-fill"
              disabled={disable}
              type="submit"
              variant="info"
            >
              Acceptar
            </Button>
          </Row>
        </Form>
      </Container>
    </>
  );
};

export default FormOmnibus;
