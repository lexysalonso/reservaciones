import {
  LOAD_DESTINOS,
  LOAD_VIAJES,
  UPDATE_VIAJES,
  DELETE_VIAJES,
  CREATE_VIAJES,
  CLEAR_VIAJES,
  LOAD_VIAJES_PENDING
} from "../types/index";

export const loadViajes = (data) => ({ type: LOAD_VIAJES, payload: data });

export const loadViajesPending = () => ({ type: LOAD_VIAJES_PENDING });

export const createViajes = (data) => ({ type: CREATE_VIAJES, payload: data });

export const updateViajes = (data) => ({ type: UPDATE_VIAJES, payload: data });

export const deleteViajes = (data) => ({ type: DELETE_VIAJES, payload: data });

export const clearViajes = () => ({ type: CLEAR_VIAJES });

export const loadDestinos = (data) => ( {type:LOAD_DESTINOS, payload:data})
