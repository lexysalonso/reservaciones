import {
  loadOmnibus,
  createOmnibus,
  updateOmnibus,
  deleteOmnibus,
  clearOmnibus,
  loadOmnibusLoading
} from "../../actions/omnibusActions";

import service from "../../helpers/servicesAxios";
import Toast from "../../utilitis/Swal";
import { ShowSawl } from 'utilitis/Swal';

const getOmnibus = () => {
  return  async (dispatch) => {
    dispatch(loadOmnibusLoading())
    setTimeout(async ()=>{
      let result = await service.get("/omnibus/");
      // await console.log("ver respuesta del get result", result);
      if (!result.error) {
        await dispatch(loadOmnibus(result));
        Toast.fire({
          icon: "success",
          title: "Los Omnbius se han cargado con exito.",
        });
      } else {
        let msg = "Hubo un error al cargar los Omnibus.";
        ShowSawl(result.status, msg);
      }
    },5000)
  };
};

const postOmnibus = (value) => {
  return async (dispatch) => {
    console.log("ver data services", value);
    const result = await service.post("/omnibus/", value);
    if (!result.error) {
      await dispatch(createOmnibus(result));
      Toast.fire({
        icon: "success",
        title: "El omnibus se adiciono Satisfactoriamente",
      });
    } else {
      Toast.fire({
        icon: "error",
        title: " Not Signed in successfully",
      });
    }
    await console.log("ver respuesta del post result", result);
  };
};

const putOmnibus = (data) => {
  return async (dispatch) => {
    let result = await service.put(`/omnibus/${data.pk}/`, data);
    if (!result.error) {
      await dispatch(updateOmnibus(result));
      Toast.fire({
        icon: "success",
        title: "El omnibus se  edito correctamente",
      });
    }
    await console.log("ver el resutl del put", result);
  };
};

const tallerOmnibus = (data) => {
  return async (dispatch) => {
    let result = await service.put(`/omnibus/${data.pk}/taller/`, data);
    if (!result.error) {
      await dispatch(updateOmnibus(result[0]));
      Toast.fire({
        icon: "success",
        title: "El omnibus se ha pasado al taller",
      });
    }
    await console.log("ver el resutl del put taller", result);
  };
};

const disponibleOmnibus = (data) => {
  return async (dispatch) => {
    let result = await service.put(`/omnibus/${data.pk}/disponible/`, data);
    if (!result.error) {
      await dispatch(updateOmnibus(result[0]));
      Toast.fire({
        icon: "success",
        title: "El Omnibus ya se encuentra disponible",
      });
    }
    await console.log("ver el resutl del put disponible", result);
  };
};

const delOmnibus = (data) => {
  console.log("ver data del", data);
  return async (dispatch) => {
    let result = await service.del(`/omnibus/${data.pk}/`);
    if (!result.error) {
      await dispatch(deleteOmnibus(data));
      Toast.fire({
        icon: "success",
        title: "El omnibus se ha eliminado con exito",
      });
    }
    await console.log("ver el delete", result);
  };
};

export default {
  getOmnibus,
  tallerOmnibus,
  delOmnibus,
  disponibleOmnibus,
  postOmnibus,
  putOmnibus,
  delOmnibus,
};
