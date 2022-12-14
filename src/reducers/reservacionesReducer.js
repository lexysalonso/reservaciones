import {
  LOAD_RESERVACIONES,
  DELETE_RESERVACIONES,
  VER_VIAJEROS,
  REALIZAR_RESERVACION,
  CANT_PERSONAS_A_VIAJAR,
  LOAD_PENDING_RESERVACIONES,
} from "../types/index";

const initialstate = {
  loading: false,
  reservaciones: [],
  viajeros: [],
  cantidad: [],
};

export default (state = initialstate, action) => {
  switch (action.type) {
    case LOAD_PENDING_RESERVACIONES: {
      return {
        ...state,
        loading: true,
      };
    }
    case LOAD_RESERVACIONES: {
      return {
        ...state,
        reservaciones: action.payload.map((r) => r),
        loading: false,
      };
    }
    case REALIZAR_RESERVACION: {
      return {
        ...state,
        reservaciones: [...state.reservaciones, action.payload],
      };
    }
    case DELETE_RESERVACIONES: {
      return {
        ...state,
        reservaciones: state.reservaciones.filter(
          (reserva) => reserva.pk !== action.payload.pk
        ),
      };
    }
    case VER_VIAJEROS: {
      return {
        ...state,
        viajeros: action.payload.map((viajero) => viajero),
      };
    }
    case CANT_PERSONAS_A_VIAJAR: {
      return {
        ...state,
        cantidad: action.payload.map((cant) => cant),
      };
    }
  }
  return state;
};
