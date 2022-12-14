import {
  LOAD_DESTINOS,
  LOAD_VIAJES,
  CREATE_VIAJES,
  UPDATE_VIAJES,
  DELETE_VIAJES,
  CLEAR_VIAJES,
  LOAD_VIAJES_PENDING
} from "../types/index";

export const initialstate = {
  viajes: [],
  destinos:[],
  loading:false
};

export default (state = initialstate, action) => {
  switch (action.type) {
    case LOAD_VIAJES_PENDING:{
      return{
        ...state,
        loading:true
      }
    }
    case LOAD_VIAJES: {
      console.log("ver payload", action.payload);
      return {
        ...state,
        viajes: action.payload.map((viaje) => viaje),
        loading:false
      };
    }
    case CREATE_VIAJES: {
      return {
        ...state,
        viajes: [...state.viajes, action.payload],
      };
    }

    case UPDATE_VIAJES: {
      let newData = state.viajes.map((viaje) =>
        viaje.pk === action.payload.pk ? action.payload : viaje
      );
      return {
        ...state,
        viajes: newData,
      };
    }
    case DELETE_VIAJES: {
      let newDataDel = state.viajes.filter(
        (viaje) => viaje.pk !== action.payload.pk
      );
      return {
        ...state,
        viajes: newDataDel,
      };
    }
    case CLEAR_VIAJES: {
      return initialstate;
    }
    case LOAD_DESTINOS:{
         return{
           ...state,
           destinos: action.payload.map((des)=>des) 
         }
    }
    default:
      return state;
  }
};
