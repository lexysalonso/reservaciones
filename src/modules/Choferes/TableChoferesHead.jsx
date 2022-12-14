import React from "react";
import { Card } from "react-bootstrap";

const TableChoferesHead = () => {
  return (
    <div>
      <Card.Title as="h4">Lista de Choferes Activos en estos Momentos </Card.Title>
      <p className="card-category">Choferes Activos</p>
    </div>
  );
};

export default TableChoferesHead;
