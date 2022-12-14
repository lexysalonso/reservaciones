import { combineReducers } from "redux";
import choferesReducers from "./choferesReducers";
import omnibusReducers from "./omnibusReducers";
import viajesReducers from "./viajesReducers";
import userReducers from "./userReducers";
import reservacionesReducer from "./reservacionesReducer";

const rootreducer = combineReducers({
  choferes: choferesReducers,
  omnibus: omnibusReducers,
  viajes: viajesReducers,
  user: userReducers,
  reservacion: reservacionesReducer,
});

export default rootreducer;
