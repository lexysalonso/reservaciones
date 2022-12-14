import React from "react";
import { Card } from "react-bootstrap";

const TableOmnibusHead = () => {
  return (
    <div>
      <Card.Title as="h4">
        Lista de Omnibus Dsiponibles en estos Momentos{" "}
      </Card.Title>
      <p className="card-category">Omnibus Disponibles</p>
    </div>
  );
};

export default TableOmnibusHead;
