import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import ViajeContext from "context/ViajesContext";

const TableViajesBodyRow = ({ viaje }) => {
  const { pk, hora, omnibus, chofer1, chofer2, origen, destino } = viaje;
  const { selectData, delData } = useContext(ViajeContext);
  return (
    <>
      <tr>
        <td>{pk}</td>
        <td>{hora}</td>
        <td>{omnibus}</td>
        <td>{chofer1}</td>
        <td>{chofer2}</td>
        <td>{origen}</td>
        <td>{destino}</td>
        <td>
          <>
            <Button
              onClick={() => selectData(viaje)}
              type="Submit"
              className="btn-fill ml-2 "
              variant="info"
            >
              Editar
            </Button>
            <Button
              type="submit"
              onClick={() => delData(viaje)}
              className="btn-fill ml-2 "
              variant="danger"
            >
              Eliminar
            </Button>
          </>
        </td>
      </tr>
    </>
  );
};

export default TableViajesBodyRow;
