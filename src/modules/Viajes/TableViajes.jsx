import React, { useContext } from "react";
import { Button, Breadcrumb, Card, Container, Row, Col } from "react-bootstrap";
import TableViajesHead from "./TableViajesHead";
import TableViajesBody from "./TableViajesBody";
import ViajeContext from "context/ViajesContext";
import Loading from "components/Loading/loading";

const TableViajes = () => {
  const { setModalShow, loading } = useContext(ViajeContext);

  return (
    <>
      <Container style={{ maxWidth: "100%" }} fluid>
        <Row>
          <Col md="12">
            <Breadcrumb>
              <Breadcrumb.Item>Viajes </Breadcrumb.Item>
              <Breadcrumb.Item active>Lista</Breadcrumb.Item>
            </Breadcrumb>
            {loading && <Loading />}
            {!loading && (
              <Card className="strpied-tabled-with-hover">
                <Card.Header className="d-flex justify-content-between">
                  <TableViajesHead />
                  <Button
                    onClick={setModalShow}
                    type="Submit"
                    className="btn-fill"
                    variant="success"
                  >
                    Adicionar Viajes
                  </Button>
                </Card.Header>
                <Card.Body className="table-full-width table-responsive px-0">
                  <TableViajesBody />
                </Card.Body>
              </Card>
            )}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default TableViajes;
