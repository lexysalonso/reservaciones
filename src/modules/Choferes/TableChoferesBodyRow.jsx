import React from "react";
import { Button } from "react-bootstrap";

const TableChoferesBodyRow = ({
  ch,
  setModalShow,
  setdataToEdit,
  setDataToDelShow,
  setdataToDel,
}) => {
  let { pk, nombre, ci } = ch;
  const selectData = () => {
    setdataToEdit(ch);
    setModalShow();
  };
  const delData = () => {
    setdataToDel(ch)
    setDataToDelShow();
  };

  return (
    <>
      <tr>
        <td>{pk}</td>
        <td>{nombre}</td>
        <td>{ci}</td>
        <td>
          <>
            <Button
              onClick={() => selectData()}
              type="Submit"
              className="btn-fill "
              variant="info"
            >
              Editar
            </Button>{" "}
            <Button
              type="submit"
              onClick={() => delData()}
              className="btn-fill "
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

export default TableChoferesBodyRow;
