import storage from "../helper/storage";
import axios from "axios";
import { types, ShowMessages } from "../helper/changenotifier";

/*import { showMessage, typesMessage } from "../helper/notifier";*/
const methos = {
  GET: "GET",
  POST: "POST",
  PUT: "PUT",
  DEL: "DELETE",
};

const post = async (endpoint, body) => {
  return resutlAsync(methos.POST, endpoint, body);
};

const put = async (endpoint, body) => {
  return resutlAsync(methos.PUT, endpoint, body);
};

const get = async (endpoint) => {
  return resutlAsync(methos.GET, endpoint);
};

const del = async (endpoint) => {
  return resutlAsync(methos.DEL, endpoint);
};
const resutlAsync = async (method, endpoint, body) => {
  const requestOptions = {
    mode: "cors",
    method: method,
    headers: header(),
    data: body ? JSON.stringify(body) : false,
  };

  if (!requestOptions.data) delete requestOptions.data;

  try {
    let result = await axios(
      requestOptions.method === "DELETE" || requestOptions.method === "PUT"
        ? endpoint
        : process.env.REACT_APP_BACKEND + endpoint,
      requestOptions
    );
    if (requestOptions.method === "DELETE") {
      hanletErrorSuccess(result);
      return result;
    } else {
      let data = await result.data;
      await console.log("ver la data del post", data);
      await console.log("ver el result del post", result);
      hanletErrorSuccess(result);
      return data;
    }
  } catch (err) {
    hanletErrorSuccess(err.response);
  }
};

const header = () => {
  let token;
  let data = storage.load(storage.keys.auth);
  if (data && data) {
    token = data;
  }
  let header = {
    "Content-Type": "application/json",
    Accept: "application/json",
  };
  if (token) {
    Object.assign(header, { Authorization: "Bearer " + token });
  }
  console.log("ver headrs", header);
  return header;
};

const hanletErrorSuccess = (value) => {
  let status = value.status;
  let estado = true;
  switch (status) {
    case 404: {
      ShowMessages(types.ERROR, "Elemento no encontrado", estado);
      break;
    }
    case 502: {
      ShowMessages(types.ERROR, "Error interno en el servidor", estado);
      break;
    }
    case 201: {
      ShowMessages(types.SUCCESS, value.data.message, estado);
      break;
    }
    case 200: {
      ShowMessages(
        types.SUCCESS,
        value.data.length > 1
          ? "Los choferes se han listados con éxito"
          : "El chofer se ha editado con éxito",
        estado
      );
      break;
    }
    case 204: {
      ShowMessages(
        types.SUCCESS,
        "El chofer se ha eliminado con exito",
        estado
      );
      break;
    }
    default:
      if (!value.data) {
        console.log("ver value", value);
        ShowMessages(types.ERROR, value.statusText, estado);
      } else {
        console.log("ver value", value);
        ShowMessages(
          types.ERROR,
          value.data.ci ? value.data.ci[0] : value.data.detail,
          estado
        );
      }
  }
};

const handleResponse = (response) => {
  if (!response.ok) {
    throw console.log(new Error("Ocurrio un error en el servidor"));
  } else {
    return response.json().then((data) => {
      console.log("ver json response", data);
      return data;
    });
  }
};

export default { post, put, get, del };
