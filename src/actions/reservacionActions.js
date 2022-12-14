import {
  REALIZAR_RESERVACION,
  LOAD_RESERVACIONES,
  DELETE_RESERVACIONES,
  VER_VIAJEROS,
  CANT_PERSONAS_A_VIAJAR,
  LOAD_PENDING_RESERVACIONES
} from "../types/index";

const loadRervaciones = (data) => ({ type: LOAD_RESERVACIONES, payload: data });

const loadRervacionesPending = () => ({ type: LOAD_PENDING_RESERVACIONES});

const deleteRervacion = (data) => ({
  type: DELETE_RESERVACIONES,
  payload: data,
});

const verViajeros = (data) => ({ type: VER_VIAJEROS, payload: data });

const realizarReservacion = (data) => ({
  type: REALIZAR_RESERVACION,
  payload: data,
});

const cantPeronasAViajar = (data) => ({
  type: CANT_PERSONAS_A_VIAJAR,
  payload: data,
});

export {
  loadRervaciones,
  deleteRervacion,
  verViajeros,
  realizarReservacion,
  cantPeronasAViajar,
  loadRervacionesPending,
};
