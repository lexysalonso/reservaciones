import { ISAUTENTICATE, ISAUTENTICATEError } from "../types/index";

const initialstate = {
  payload: "",
  islogin: false,
  error: false,
  status: "",
  statusText: "",
  smsError: {
    sms: "Usuario y/o Contraseña Incorrectos",
  },
};

export default (state = initialstate, action) => {
  switch (action.type) {
    case ISAUTENTICATE: {
      return {
        ...state,
        payload: action.payload,
        islogin: true,
      };
    }
    case ISAUTENTICATEError: {
      return {
        ...state,
        error: action.payload.error,
        status: action.payload.status,
        statusText: action.payload.statusText,
      };
    }

    default:
      return state;
  }
};
