import React, { useEffect } from "react";
import { Container, Table } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { getOmnibusMasViajes } from "./services";

const OmnibusMasViajes = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  const { omnibusmasviajes } = state.omnibus;

  console.log("ver oni-viajes", omnibusmasviajes);
  useEffect(() => {
    dispatch(getOmnibusMasViajes());
  }, []);

  return (
    <Container>
      <Table responsive="sm" responsive="md" striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>#</th>
            <th>Numero</th>
            <th>Chapa</th>
            <th>Cantidad</th>
          </tr>
        </thead>
        <tbody>
          {omnibusmasviajes.map((el, index) => (
            <tr key={index}>
              <td>1</td>
              <td>{el.numero}</td>
              <td>{el.chapa}</td>
              <td>{el.cantidad}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default OmnibusMasViajes;
