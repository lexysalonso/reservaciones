import {
  loadPending,
  loadChofers,
  createChofers,
  updateChoferes,
  deleteChoferes,
  clearchoferes,
} from "../../actions/choferesActions";

import service from "../../helpers/servicesAxios";
import Toast from "utilitis/Swal";
import { ShowSawl } from "utilitis/Swal";

const getChoferes = () => {
  return async (dispatch) => {
    dispatch(loadPending());
    setTimeout(async() => {
       let result = await service.get("/choferes/");
       if (!result.error) {
         await dispatch(loadChofers(result));
         Toast.fire({
           icon: "success",
           title: "Los Choferes se han cargado con exito.",
         });
       } else {
         let msg = "Hubo con error al cargar los Choferes.";
         ShowSawl(result.status, msg);
       }
       await console.log("ver respuesta del get result", result);
    }, 5000);
  };
};

const postChoferes = (value) => {
  return async (dispatch) => {
    console.log("ver data services", value);
    const result = await service.post("/choferes/", value);
    if (!result.error) {
      await dispatch(createChofers(result));
      Toast.fire({
        icon: "success",
        title: "El Chofer se ha adicionado con exito",
      });
    }
    await console.log("ver respuesta del post result", result);
  };
};

const putChoferes = (data) => {
  return async (dispatch) => {
    let result = await service.put(`/choferes/${data.pk}/`, data);
    if (!result.error) {
      await dispatch(updateChoferes(result));
      Toast.fire({
        icon: "success",
        title: "El chofer se ha editado con exito",
      });
    }
    await console.log("ver el resutl del put", result);
  };
};

const delChoferes = (data) => {
  console.log("ver data del", data);
  return async (dispatch) => {
    let result = await service.del(`/choferes/${data.pk}/`);
    if (!result.error) {
      await dispatch(deleteChoferes(data));
      Toast.fire({
        icon: "success",
        title: "El chofer se ha eliminado con exito",
      });
    }
    await console.log("ver el delete", result);
  };
};

export default { getChoferes, postChoferes, putChoferes, delChoferes };
