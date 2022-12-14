import React, { useEffect } from "react";
import { Table, Badge, Container } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { getOmnibusTaller } from "./services";

const OmnibusTaller = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  const { omnibustaller } = state.omnibus;
  useEffect(() => {
    dispatch(getOmnibusTaller());
  }, []);

  console.log("ver omnibus-taller", omnibustaller);
  return (
    <Container>
      <Table
        responsive="sm"
        responsive="md"
        striped
        bordered
        hover
        variant="dark"
      >
        <thead>
          <tr>
            <th>#</th>
            <th>Numero</th>
            <th>Chapa</th>
            <th>Disponible</th>
          </tr>
        </thead>
        <tbody>
          {omnibustaller.length > 0 ? (
            omnibustaller.map((el, index) => (
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
            <h2>Tdos los omnibus estan disponibles para viajar</h2>
          )}
        </tbody>
      </Table>
    </Container>
  );
};

export default OmnibusTaller;
