import React, { useState, useEffect,memo } from "react";
import { Card, Col, Container, Form, Row, Button } from "react-bootstrap";
import useChofer from "hooks/useChofer";

const objnew = {
  pk: null,
  nombre: "",
  ci: "",
  url: "",
  create_by: Number(1),
  members: [],
};
const validationsForm = (form, setDisable) => {
  let errores = {};
  let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
  let regexNumero = /[0-9]$/;
  let regexCI = /^[0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9]$/;
  let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
  let regexComments = /^.{1,255}$/;

  if (form.nombre === "") {
    errores.nombre = "El campo 'Nombre' es requerido.";
  } else if (regexNumero.test(form.nombre)) {
    errores.nombre = "El campo 'Nombre' no puede contener digitos. ";
  }

  if (form.ci === "") {
    errores.ci = "El campo 'CI' es requerido.";
  } else if (!regexCI.test(form.ci)) {
    errores.ci = "El campo 'CI' no es una CI valido Ej 93102611328. ";
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

const FormChoferes = ({
  dataToEdit,
  setdataToEdit,
  setModalClose,
  create,
  update,
}) => {
  const {
    form,
    errores,
    disable,
    handleChange,
    handleSubmit,
    handleBlur,
    handleReset,
  } = useChofer(
    objnew,
    dataToEdit,
    setdataToEdit,
    setModalClose,
    create,
    update,
    validationsForm
  );
  console.log("se Monto el Formulario")
  return (
    <>
      <Container>
        <Form onSubmit={handleSubmit}>
          <Row>
            <Col className="px-1 col col-md-12">
              <Form.Group>
                <label htmlFor="nombre del Chofer">Nombre del Chofer</label>
                <Form.Control
                  placeholder="Nombre del Chofer."
                  type="text"
                  name="nombre"
                  value={form.nombre}
                  onChange={handleChange}
                  onKeyUp={handleBlur}
                  required
                ></Form.Control>
                {errores.nombre && <span style={styles}>{errores.nombre}</span>}
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col className="px-1 col col-md-12">
              <Form.Group>
                <label htmlFor="nombre del Chofer">CI del Chofer</label>
                <Form.Control
                  placeholder="Nombre del Chofer."
                  type="text"
                  value={form.ci}
                  name="ci"
                  onChange={handleChange}
                  onKeyUp={handleBlur}
                  required
                ></Form.Control>
                {errores.ci && <span style={styles}>{errores.ci}</span>}
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Button
              //style={{ marginLeft: "300px" }}
              className="btn-fill ml-auto mr-2"
              variant="danger"
              onClick={handleReset}
            >
              Cancelar
            </Button>
            <Button
              className="btn-fill pull-right"
              type="submit"
              variant="info"
              disabled={disable}
            >
              Acceptar
            </Button>
          </Row>
        </Form>
      </Container>
    </>
  );
};

export default memo(FormChoferes);
