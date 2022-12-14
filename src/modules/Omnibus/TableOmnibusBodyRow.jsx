import React, { useContext , memo } from "react";
import { Button } from "react-bootstrap";
import OmnibusContext from "context/OmnibusContext";
import { useHistory } from 'react-router-dom';

const TableOmnibusBodyRow = ({ om }) => {
  let { pk, numero, chapa, disponible, capacidad } = om;
  const history = useHistory()
  const { selectData, delData, tallerOmnibus, disponibleOmnibus } =
    useContext(OmnibusContext);

   console.log("Se Inicializa el Body Row")

  return (
    <>
      <tr>
        <td>{pk}</td>
        <td>{numero}</td>
        <td>{chapa}</td>
        <td>
          {disponible ? (
            <p style={{ color: "seagreen" }}>Disponible</p>
          ) : (
            <p style={{ color: "red" }}>Taller</p>
          )}
        </td>
        <td>{capacidad}</td>
        <td>
          <>
            <Button
              onClick={() => selectData(om)}
              type="Submit"
              className="btn-fill ml-2 "
              variant="info"
            >
              Editar
            </Button>
            <Button
              type="submit"
              onClick={() => delData(om)}
              className="btn-fill ml-2 "
              variant="danger"
            >
              Eliminar
            </Button>
            {disponible ? (
              <Button
                onClick={() => tallerOmnibus(om)}
                type="Submit"
                className="btn-fill ml-2"
                variant="danger"
              >
                Taller
              </Button>
            ) : (
              <Button
                type="submit"
                onClick={() => disponibleOmnibus(om)}
                className="btn-fill ml-2"
                variant="info"
              >
                Disponible
              </Button>
            )}
          </>
        </td>
      </tr>
    </>
  );
};

export default memo(TableOmnibusBodyRow);
