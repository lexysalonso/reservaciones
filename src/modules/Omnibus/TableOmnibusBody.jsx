import React, { useContext, memo } from "react";
import { Table } from "react-bootstrap";
import TableOmnibusBodyRow from "./TableOmnibusBodyRow";
import OmnibusContext from "context/OmnibusContext";
const TableOmnibusBody = () => {
  const { omnibus } = useContext(OmnibusContext);
  console.log("se inicia el TableBody")
  return (
    <>
      <Table className="table-hover table-striped">
        <thead>
          <tr>
            <th className="border-0">ID</th>
            <th className="border-0">Numero</th>
            <th className="border-0">Chapa</th>
            <th className="border-0">Disponibilidad</th>
            <th className="border-0">Capacidad</th>
            <th className="border-0">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {omnibus.map((omnibu, index) => (
            <TableOmnibusBodyRow key={index} om={omnibu} />
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default memo(TableOmnibusBody);
