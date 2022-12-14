import React, { useEffect } from "react";
import { Table, Badge, Container } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { getOmnibusDisponibles } from "./services";

const OmnibusDsiponibles = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  const { omnibusdisponibles } = state.omnibus;
  useEffect(() => {
    dispatch(getOmnibusDisponibles());
  }, []);

  console.log("ver omnibus-disponibles", omnibusdisponibles);
  return (
    <Container>
      <Table responsive="sm" striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>#</th>
            <th>Numero</th>
            <th>Chapa</th>
            <th>Disponible</th>
          </tr>
        </thead>
        <tbody>
          {omnibusdisponibles.length > 0 ? (
            omnibusdisponibles.map((el, index) => (
              <tr key={index}>
                <td>1</td>
                <td>{el.numero}</td>
                <td>{el.chapa}</td>
                <td>
                  {el.disponible ? (
                    <div>
                      <Badge pill variant="success">
                        Disponible
                      </Badge>
                    </div>
                  ) : (
                    <div>
                      <Badge pill variant="danger">
                        Taller
                      </Badge>
                    </div>
                  )}
                </td>
              </tr>
            ))
          ) : (
            <h2>Todos los Omnibus estan en el taller</h2>
          )}
        </tbody>
      </Table>
    </Container>
  );
};

export default OmnibusDsiponibles;
