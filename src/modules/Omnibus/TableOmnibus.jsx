import React, { useContext } from "react";
import {
  Button,
  Breadcrumb,
  Card,
  Container,
  Row,
  Col,
  Spinner,
} from "react-bootstrap";
import TableOmnibusHead from "./TableOmnibusHead";
import TableOmnibusBody from "./TableOmnibusBody";
import OmnibusContext from "context/OmnibusContext";
import Loading from "components/Loading/loading";

const TableOmnibus = () => {
  const { setModalShow, loading } = useContext(OmnibusContext);
  console.info("Se inincia la Table") 
  return (
    <>
      <Container style={{ maxWidth: "100%" }} fluid>
        <Row>
          <Col md="12">
            <Breadcrumb>
              <Breadcrumb.Item>Omnibus </Breadcrumb.Item>
              <Breadcrumb.Item active>Lista</Breadcrumb.Item>
            </Breadcrumb>
            {loading && (<Loading/>
              
            )}
            {!loading && (
              <Card className="strpied-tabled-with-hover">
                <Card.Header className="d-flex justify-content-between">
                  <TableOmnibusHead />
                  <Button
                    onClick={setModalShow}
                    type="Submit"
                    className="btn-fill "
                    variant="success"
                  >
                    Adicionar Omnibus
                  </Button>
                </Card.Header>
                <Card.Body className="table-full-width table-responsive px-0">
                  <TableOmnibusBody />
                </Card.Body>
              </Card>
            )}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default TableOmnibus;
