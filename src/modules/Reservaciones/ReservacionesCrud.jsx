import React, { useContext } from "react";
import TableReservaciones from "./TableReservaciones";
import TableReservacionesViajeros from "./TableReservacionesViajeros";
import ReservacionContext from "../../context/ReservacionesContext";
import RealizarReservacion from "./RealizarReservacion";
import AlertDelete from "./AlertDialog";

const ReservacionesCrud = () => {
  let result = useContext(ReservacionContext);
  const { viajeros, viajes, reservacion } =
    useContext(ReservacionContext);
  console.log("ver result context", result);
  return (
    <>
      <TableReservaciones />
      {viajes.lenght > 0 ? <RealizarReservacion /> : null}
      {viajeros.lenght > 0 ? <TableReservacionesViajeros /> : null}
      <AlertDelete>
        <p>
          {reservacion
            ? `Usted esta seguro que desea eliminar la reservacion  del dia ${reservacion.fecha} del viaje ${reservacion.viajes}.`
            : ""}
        </p>
      </AlertDelete>
    </>
  );
};

export default ReservacionesCrud;
