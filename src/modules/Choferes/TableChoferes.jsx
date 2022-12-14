import React,{memo} from "react";
import {
  Badge,
  Button,
  Card,
  Breadcrumb,
  Container,
  Row,
  Col,
  Spinner,
} from "react-bootstrap";
import TableChoferesHead from "./TableChoferesHead";
import TableChoferesBody from "./TableChoferesBody";
import Loading from "components/Loading/loading";
const TableChofere = ({
  choferes,
  setModalShow,
  setdataToEdit,
  setDataToDelShow,
  setdataToDel,
  loading,
}) => {
  console.log("Se Inicializa TableChofer");
  return (
    <>
      <Container>
        <Row>
          <Col md="12">
            <Breadcrumb>
              <Breadcrumb.Item>Choferes</Breadcrumb.Item>
              <Breadcrumb.Item active>Lista</Breadcrumb.Item>
            </Breadcrumb>
            {loading && <Loading/>}
            {!loading && (
              <Card className="strpied-tabled-with-hover">
                <Card.Header className="d-flex justify-content-between">
                  <TableChoferesHead />
                  <Button
                    onClick={setModalShow}
                    type="Submit"
                    className="btn-fill "
                    variant="success"
                  >
                    Adicionar Chofer
                  </Button>
                </Card.Header>
                <Card.Body className="table-full-width table-responsive px-0">
                  <TableChoferesBody
                    setModalShow={setModalShow}
                    choferes={choferes}
                    setModalShow={setModalShow}
                    setdataToEdit={setdataToEdit}
                    setdataToDel={setdataToDel}
                    setDataToDelShow={setDataToDelShow}
                    loading={loading}
                  />
                </Card.Body>
              </Card>
            )}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default TableChofere;
