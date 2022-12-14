import {
  realizarReservacion,
  loadRervaciones,
  deleteRervacion,
  verViajeros,
  loadRervacionesPending,
} from "../../actions/reservacionActions";
import services from "../../helpers/servicesAxios";
import Toast from "utilitis/Swal";
import { ShowSawl } from "utilitis/Swal";

const loadReservaciones = () => {
  return async (dispatch) => {
    dispatch(loadRervacionesPending());
    setTimeout( async()=>{
        let response = await services.get("/reservaciones/");
        if (!response.error) {
          await dispatch(loadRervaciones(response));
          Toast.fire({
            icon: "success",
            title: "Las reservaciones se han cargado con exito.",
          });
        } else {
          let msg = "Hubo un error al cargar las reservaciones.";
          ShowSawl(response.status, msg);
        }
    },5000)
   // console.log("ver reservaciones", response);
  };
};

const loadViajeros = (value) => {
  return async (dispatch) => {
    let response = await services.get(
      `/reservaciones/${value.pk}/ver-viajeros/`
    );
    if (!response.error) {
      await dispatch(verViajeros(response));
      Toast.fire({
        icon: "success",
        title: "Los Viajeros se han cargado con exito",
      });
    }
    console.log("ver viajeros", response);
  };
};

const postReservaciones = (value) => {
  return async (dispatch) => {
    let response = await services.post("/reservaciones/", value);
    if (!response.error) {
      await dispatch(realizarReservacion(response));
      Toast.fire({
        icon: "success",
        title: "La reservacion se ha adionado con exito",
      });
    }
  };
};

const deleteReservaciones = (value) => {
  return async (dispatch) => {
    let response = await services.del(`/reservaciones/${value.pk}/`);
    if (!response.error) {
      await dispatch(deleteRervacion(value));
      Toast.fire({
        icon: "success",
        title: "LA Resevacion se ha eliminado con exito",
      });
    }
    console.log("Entro Eliminar", response);
  };
};

export default {
  loadReservaciones,
  postReservaciones,
  deleteReservaciones,
  loadViajeros,
};
