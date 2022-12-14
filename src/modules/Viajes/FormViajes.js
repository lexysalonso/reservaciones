import React from "react";
import { Col, Container, Form, Row, Button } from "react-bootstrap";
import useViajes from "hooks/useViajes";
import TimePicker from "react-time-picker";

const validationsForm = (form, setDisable) => {
  let errores = {};
  let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
  let regexNumero = /^[0-9].{3}$/;
  let regexCapacidad = /^[0-9].{1}$/;
  let regexChapa = /^[A-Z][0-9][0-9][0-9][0-9][0-9][0-9]$/;
  let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
  let regexComments = /^.{1,255}$/;
  let regexHours = /^[0-9]:[0-5][0-9]$/;

  console.log("ver form importante", form);
  if (form.hora === "") {
    errores.hora = "El campo 'Hora' es requerido";
  } else if (!regexHours.test(form.hora)) {
    errores.hora = "La hora introducida no es un Hora valida";
  }

  if (form.omnibus === "") {
    errores.omnibus = "El campo 'Omnibus' es requerido";
  }

  if (form.chofer1 === "") {
    errores.chofer1 = "El campo 'Chofer1' es requerido";
  }

  if (form.chofer2 === "") {
    errores.chofer2 = "El campo 'Chofer2' es requerido";
  }
  if (form.origen === "") {
    errores.origen = "El campo 'Origen' es requerido";
  }
  if (form.destino === "") {
    errores.destino = "El campo 'Origen' es requerido";
  }
  if (Object.keys(errores).length === 0) {
    setDisable(false);
  } else {
    setDisable(true);
  }

  return errores;
};

const objnew = {
  pk: null,
  hora: "",
  omnibus: "",
  chofer1: "",
  chofer2: "",
  origen: "",
  destino: "",
  create_by: Number(1),
};

let styles = {
  fontWeight: "bold",
  color: "#dc3545",
};

const FormViajes = () => {
  const {
    form,
    errores,
    disable,
    dataToEdit,
    omnibusdisponibles,
    destinos,
    choferes,
    handleSubmit,
    handleReset,
    handleChange,
    handleChangeSelect,
    handleBlur,
  } = useViajes(objnew, validationsForm);
    console.log("ver form", form);
  return (
    <>
      <Container>
        <Form onSubmit={handleSubmit}>
          <Row>
            <Col className="px-1 col col-md-6">
              <Form.Group>
                <label htmlFor="nombre del Chofer">Hora</label>
                <Form.Control
                  required
                  onBlur={handleBlur}
                  name="hora"
                  value={form.hora}
                  onChange={handleChange}
                ></Form.Control>
                <Form.Text>
                  {errores.hora && <span style={styles}>{errores.hora}</span>}
                </Form.Text>
              </Form.Group>
            </Col>
            <Col className="px-1 col col-md-6">
              <Form.Group>
                <label htmlFor="nombre del Chofer">Numero del Omnibus</label>
                <Form.Control
                  required
                  onBlur={handleBlur}
                  placeholder="Nombre del Chofer."
                  as="select"
                  name="omnibus"
                  onChange={handleChangeSelect}
                >
                  <option> ----- </option>
                  {omnibusdisponibles.map((omnibu) => (
                    <option
                      value={omnibu.pk}
                      key={omnibu.pk}
                      selected={omnibu.pk === form.omnibus}
                    >
                      {omnibu.numero}
                    </option>
                  ))}
                </Form.Control>
                <Form.Text>
                  {errores.omnibus && (
                    <span style={styles}>{errores.omnibus}</span>
                  )}
                </Form.Text>
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col className="px-1 col col-md-6">
              <Form.Group>
                <label htmlFor="nombre del Chofer">Chofer 1 </label>
                <Form.Control
                  required
                  onBlur={handleBlur}
                  placeholder="Nombre del Chofer 1."
                  as="select"
                  name="chofer1"
                  id="chofer1"
                  onChange={handleChange}
                >
                  <option>------</option>
                  {choferes.map((chofers) => (
                    <option
                      key={chofers.pk}
                      value={chofers.pk}
                      selected={chofers.pk === form.chofer1}
                    >
                      {chofers.nombre}
                    </option>
                  ))}
                </Form.Control>
                <Form.Text>
                  {errores.chofer1 && (
                    <span style={styles}>{errores.chofer1}</span>
                  )}
                </Form.Text>
              </Form.Group>
            </Col>
            <Col className="px-1 col col-md-6">
              <Form.Group>
                <label htmlFor="nombre del Chofer">Chofer 2</label>
                <Form.Control
                  required
                  onBlur={handleBlur}
                  placeholder="Nombre del Chofer 2."
                  as="select"
                  name="chofer2"
                  id="chofer2"
                  onChange={handleChange}
                >
                  <option> ----- </option>
                  {choferes.map((chofer) => (
                    <option
                      key={chofer.pk}
                      value={chofer.pk}
                      selected={chofer.pk === form.chofer2}
                    >
                      {chofer.nombre}
                    </option>
                  ))}
                </Form.Control>
                <Form.Text>
                  {errores.chofer2 && (
                    <span style={styles}>{errores.chofer2}</span>
                  )}
                </Form.Text>
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col className="px-1 col col-md-6">
              <Form.Group>
                <label htmlFor="nombre del Chofer">Origen</label>
                <Form.Control
                  required
                  onBlur={handleBlur}
                  placeholder="Origen"
                  as="select"
                  name="origen"
                  id="origen"
                  onChange={handleChange}
                >
                  <option> ----- </option>
                  {destinos &&
                    destinos.map((destino, index) => (
                      <option
                        key={destino.pk}
                        value={destino.pk}
                        selected={destino.pk === form.origen}
                      >
                        {destino.nombre}
                      </option>
                    ))}
                </Form.Control>
                <Form.Text>
                  {errores.origen && (
                    <span style={styles}>{errores.origen}</span>
                  )}
                </Form.Text>
              </Form.Group>
            </Col>
            <Col className="px-1 col col-md-6">
              <Form.Group>
                <label htmlFor="nombre del Chofer">Destino</label>
                <Form.Control
                  required
                  onBlur={handleBlur}
                  placeholder="Destino"
                  as="select"
                  name="destino"
                  onChange={handleChange}
                >
                  <option> ----- </option>
                  {destinos &&
                    destinos.map((destino) => (
                      <option
                        key={destino.pk}
                        value={destino.pk}
                        selected={destino.pk === form.destino}
                      >
                        {destino.nombre}
                      </option>
                    ))}
                </Form.Control>
                <Form.Text>
                  {errores.destino && (
                    <span style={styles}>{errores.destino}</span>
                  )}
                </Form.Text>
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Button
              className="btn-fill ml-auto mr-2"
              variant="danger"
              onClick={() => handleReset()}
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

export default FormViajes;
