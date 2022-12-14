import React from "react";
import { ReservacionesProvider } from "context/ReservacionesContext";
import ReservacionesCrud from "./ReservacionesCrud";
import TableReservacionesViajeros from "./TableReservacionesViajeros";
import RealizarReservacion from "./RealizarReservacion";

const Reservaciones = () => {
  return (
    <ReservacionesProvider>
      <ReservacionesCrud />
    </ReservacionesProvider>
  );
};

export default Reservaciones;
