import React from 'react'
import { Card } from "react-bootstrap";


const TableReservacionesHead = () => {
  return (
    <div>
      <Card.Title as="h4">
        Lista de Reservaciones Disponibles para Reservar{" "}
      </Card.Title>
      <p className="card-category">Reservaciones Disponibles</p>
    </div>
  );
}

export default TableReservacionesHead;