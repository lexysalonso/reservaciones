import {
  CREATE_OMNIBUS,
  LOAD_OMNIBUS,
  UPDATE_OMNIBUS,
  CLEAR_OMNIBUS,
  DELETE_OMNIBUS,
  OMNIBUS_DISPONIBLES,
  OMNIBUS_TALLER,
  OMNIBUS_MAS_VIAJES,
  LOAD_PENDING_OMNIBUS
} from "../types/index";

export const initialstate = {
  loading: false,
  omnibus: [],
  omnibustaller: [],
  omnibusdisponibles: [],
  omnibusmasviajes: [],
};

export default (state = initialstate, action) => {
  switch (action.type) {
    case LOAD_PENDING_OMNIBUS: {
      return {
        ...state,
        loading: true,
      };
    }
    case LOAD_OMNIBUS: {
      console.log("ver payload", action.payload);
      return {
        ...state,
        omnibus: action.payload.map((omnibus) => omnibus),
        loading: false,
      };
    }
    case CREATE_OMNIBUS: {
      return {
        ...state,
        omnibus: [...state.omnibus, action.payload],
      };
    }
    case UPDATE_OMNIBUS: {
      let newArray = state.omnibus.map((omnibus) =>
        omnibus.pk === action.payload.pk ? action.payload : omnibus
      );

      return {
        ...state,
        omnibus: newArray,
      };
    }

    case DELETE_OMNIBUS: {
      let newData = state.omnibus.filter(
        (omnibus) => omnibus.pk !== action.payload.pk
      );
      return {
        ...state,
        omnibus: newData,
      };
    }
    case OMNIBUS_DISPONIBLES: {
      return {
        ...state,
        omnibusdisponibles: action.payload.map((el) => el),
      };
    }
    case OMNIBUS_TALLER: {
      return {
        ...state,
        omnibustaller: action.payload.map((el) => el),
      };
    }
    case OMNIBUS_MAS_VIAJES: {
      return {
        ...state,
        omnibusmasviajes: action.payload.map((el) => el),
      };
    }
    case CLEAR_OMNIBUS: {
      return initialstate;
    }

    default:
      return state;
  }
};
