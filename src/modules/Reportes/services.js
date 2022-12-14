import {OmnibusTaller, OmnibusDisponibles, OmnibusMasViajes} from "../../actions/omnibusActions"
import services from "helpers/servicesAxios"

const getOmnibusTaller =()=>{
   return async (dispatch)=>{
       let result = await services.get("/reportes/omnibustaller/");
        console.log("ver omnbustaller", result)
        await dispatch(OmnibusTaller(result)); 
   }
}
const getOmnibusDisponibles = () => {
  return async (dispatch) => {
    let result = await services.get("/reportes/omnibusdisponibles/");
    console.log("ver omnbus-dsiponibles", result);
    await dispatch(OmnibusDisponibles(result));
  };
};
const getOmnibusMasViajes = () => {
  return async (dispatch) => {
    let result = await services.get("/reportes/omnibus-mas-viajes/");
    console.log("ver omnbus-mas-viajes", result);
    await dispatch(OmnibusMasViajes(result));
  };
};

export {getOmnibusTaller,getOmnibusDisponibles,getOmnibusMasViajes}