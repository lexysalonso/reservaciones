import React from "react";
import { Card } from "react-bootstrap";

const TableViajesHead = () => {
  return (
    <div>
      <Card.Title as="h4">
        Lista de Viajes Disponibles para Reservar{" "}
      </Card.Title>
      <p className="card-category">Viajes Disponibles</p>
    </div>
  );
};

export default TableViajesHead;
