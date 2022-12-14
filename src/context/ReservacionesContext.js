import { createContext, useEffect, useState } from "react";
import servicesreservacion from "../modules/Reservaciones/servicesreservacion";
import servicesviajes from "modules/Viajes/services";
import getReservacionesxViaje from "../modules/Reservacion/servicesreservar";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { loading } from 'components/Loading/loading';

const ReservacionContext = createContext();

const ReservacionesProvider = ({ children }) => {
  const [isOpen, setOpen] = useState(false);
  const [reservacion, setReservacion] = useState(null);
  const history = useHistory();
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  const { reservaciones ,viajeros , loading } = state.reservacion;
  //const { viajeros } = state.reservacion;
  const { viajes } = state.viajes;

  console.log("ver viajeros context", viajeros);
  console.log("ver reservaciones context", reservaciones);
  useEffect(() => {
    dispatch(servicesreservacion.loadReservaciones());
  }, []);

  const setOpenModal = () => {
    setOpen(true);
  };
  const setCloseModal = () => {
    setOpen(false);
  };
  const VerViajeros = (value) => {
    dispatch(servicesreservacion.loadViajeros(value));
    // history.push("/admin/viajeros/")
  };
  const cantPersonViajar = (value) => {
    dispatch(getReservacionesxViaje(value));
  };
  const loadViajes = () => {
    dispatch(servicesviajes.getViajes());
  };
  const postReservaciones = (reservacion) => {
    dispatch(servicesreservacion.postReservaciones(reservacion));
  };
  const deleteReservaciones = (reservacion) => {
    dispatch(servicesreservacion.deleteReservaciones(reservacion));
  };
  const loadDatadeleteReservacions = (reservacion) => {
    setReservacion(reservacion);
    setOpenModal(true);
  };
  const DelReservations = () => {
    deleteReservaciones(reservacion);
    setCloseModal();
    setReservacion(null);
  };
  let data = {
    loading,
    isOpen,
    viajes,
    viajeros,
    reservaciones,
    reservacion,
    setReservacion,
    setOpenModal,
    setCloseModal,
    VerViajeros,
    cantPersonViajar,
    loadViajes,
    postReservaciones,
    loadDatadeleteReservacions, 
    DelReservations,
  };
  return (
    <ReservacionContext.Provider value={data}>
      {children}
    </ReservacionContext.Provider>
  );
};

export { ReservacionesProvider };
export default ReservacionContext;
