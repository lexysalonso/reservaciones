import React, { useContext } from "react";
import { Table , Container } from "react-bootstrap";
import ViajeContext from "context/ViajesContext";
import TableViajesBodyRow from "./TableViajesBodyRow";

const TableViajesBody = () => {
  const { viajes } = useContext(ViajeContext);
  return (
    <>
      <Table className="table-hover table-striped">
        <thead>
          <tr>
            <th className="border-0">pk</th>
            <th className="border-0">Hora</th>
            <th className="border-0">Omnibus</th>
            <th className="border-0">1er Chofer</th>
            <th className="border-0">2do Chofer</th>
            <th className="border-0">Origen</th>
            <th className="border-0">Destino</th>
            <th className="border-0">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {viajes && viajes.map((viaje, index) => (
            <TableViajesBodyRow key={index} viaje={viaje} />
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default TableViajesBody;
