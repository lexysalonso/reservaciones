import React ,{useContext}from 'react'
import { Table } from "react-bootstrap";
import ReservacionContext from 'context/ReservacionesContext';
import TableReservacionesBodyRow from './TableReservacionesBodyRow';

const TableReservacionesBody = () => {
    const contec = useContext(ReservacionContext);
    console.log("ver Contrext", contec)
    const { reservaciones } = useContext(ReservacionContext);
    const { viajeros } = useContext(ReservacionContext);
    console.log("ver viaje", viajeros)
  return (
    <>
      <Table className="table-hover table-striped">
        <thead>
          <tr>
            <th className="border-0">pk</th>
            <th className="border-0">Fecha</th>
            <th className="border-0">Cantidad de Asientos</th>
            <th className="border-0">Viajeros</th>
            <th className="border-0">Acciones</th>
        </tr>
        </thead>
        <tbody>
          {reservaciones.map((reservacion, index) => (
            <TableReservacionesBodyRow key={index} reservacion={reservacion} />
          ))}
        </tbody>
      </Table>
    </>
 )
}

export default TableReservacionesBody;