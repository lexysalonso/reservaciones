import { LOAD_PENDING } from "types";
import { LOAD, CREATE, UPDATE, DELETE, CLEAR } from "types";

export const initialstate = {
  choferes: [],
  loading: false
};

export default (state = initialstate, action) => {
  switch (action.type) {
    case LOAD_PENDING:{
      return{
        ...state,
         loading :true
      }
    }
    case LOAD: {
      return {
        ...state,
        choferes: action.payload.map((chofer) => chofer),
        loading:false
      };
    }
    case CREATE: {
      return {
        ...state,
        choferes: [...state.choferes, action.payload],
      };
    }
    case UPDATE: {
      let newArray = state.choferes.map((chofer) =>
        chofer.pk === action.payload.pk ? action.payload : chofer
      );

      return {
        ...state,
        choferes: newArray,
      };
    }

    case DELETE: {
      let newData = state.choferes.filter(
        (chofer) => chofer.pk !== action.payload.pk
      );
      return {
        ...state,
        choferes: newData,
      };
    }
    case CLEAR: {
      return initialstate;
    }

    default:
      return state;
  }
};
