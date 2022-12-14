import React from "react";
import { Table } from "react-bootstrap";
import TableChoferesBodyRow from "./TableChoferesBodyRow";

const TableChoferesBody = ({
  choferes,
  setModalShow,
  setdataToEdit,
  setDataToDelShow,
  setdataToDel,
  loading
}) => {
  
  return (
    <>
      
      <Table className="table-hover table-striped">
        <thead>
          <tr>
            <th className="border-0">ID</th>
            <th className="border-0">Nombras</th>
            <th className="border-0">CI</th>
            <th className="border-0">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {!loading && choferes.map((chofer, index) => (
            <TableChoferesBodyRow
              key={index}
              ch={chofer}
              setModalShow={setModalShow}
              setdataToEdit={setdataToEdit}
              setDataToDelShow={setDataToDelShow}
              setdataToDel={setdataToDel}
            />
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default TableChoferesBody;
