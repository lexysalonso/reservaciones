import { cantPeronasAViajar } from "actions/reservacionActions";
import service from "helpers/servicesAxios";

const getReservacionesxViaje = (cantidad) => {
  return async (dispatch) => {
    let result = await service.post("/reservaciones/cant-viajar/", cantidad);
      console.log("ver viajeoros reservacion OJOO", result);
      await dispatch(cantPeronasAViajar(result.res));
      // localStorage.setItem("llave", JSON.stringify(row))
    
  };
};

export default getReservacionesxViaje;
