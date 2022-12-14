import {
  createViajes,
  deleteViajes,
  loadViajes,
  updateViajes,
  loadDestinos,
  loadViajesPending,
} from "../../actions/viajesActions";
import services from "../../helpers/servicesAxios";
import Toast from "utilitis/Swal";
import { ShowSawl } from "utilitis/Swal";

const getViajes = () => {
  return async (dispatch) => {
    dispatch(loadViajesPending());
    setTimeout(async () => {
      let ressult = await services.get("/viajes/");
      if (!ressult.error) {
        await dispatch(loadViajes(ressult));
        Toast.fire({
          icon: "success",
          title: "Los viajes se han cargado con exito.",
        });
      } else {
        let msg = "Hubo un error al cargar los viajes.";
        ShowSawl(ressult.status, msg);
      }
      console.log("ver viajes get", ressult);
    }, 5000);
  };
};

const postViajes = (value) => {
  console.log("ver created viajes en el post", value);
  return async (dispatch) => {
    let result = await services.post("/viajes/", value);
    if (!result.error) {
      await dispatch(createViajes(result));
      Toast.fire({
        icon: "success",
        title: "El Viaje se ha adionado con exito",
      });
    }
  };
};

const editViajes = (value) => {
  console.log("ver update viajes en el post", value);
  return async (dispatch) => {
    let result = await services.put(`/viajes/${value.pk}/`, value);
    if (!result.error) {
      await dispatch(updateViajes(result));
      Toast.fire({
        icon: "success",
        title: "El Viaje se ha editado con exito",
      });
    }
    console.log("ver el result del edit", result);
  };
};

const delViajes = (value) => {
  return async (dispatch) => {
    let result = await services.del(`/viajes/${value.pk}/`);
    if (!result.error) {
      await dispatch(deleteViajes(value));
      Toast.fire({
        icon: "success",
        title: "El Viaje se ha eliminado con exito",
      });
    }
    await console.log("ver result", result);
  };
};

const getDestinos = () => {
  return async (dispatch) => {
    let result = await services.get("/destino/");
    await dispatch(loadDestinos(result));
  };
};

export default { getViajes, getDestinos, postViajes, editViajes, delViajes };
