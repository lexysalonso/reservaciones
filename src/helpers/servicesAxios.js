import storage from "./storage";
import axios from "axios";
import useAxiosInstance from "hooks/useAxiosInstance";

const method = {
  GET: "GET",
  POST: "POST",
  PUT: "PUT",
  DEL: "DELETE",
};

const instance = useAxiosInstance();

const requestAsync = async (method, endpoint, body) => {
  let requestOptions = {
    mode: "cors",
    method: method,
    headers: header(),
    data: body ? JSON.stringify(body) : false,
  };
  if (!requestOptions.data) delete requestOptions.data;
  try {
    let result = await instance(
      process.env.REACT_APP_BACKEND + endpoint,
      requestOptions
    );

    let data = await result.data;
    return data;
  } catch (err) {
    let error = true;
    let status = err.response.status || "00";
    let statusText = err.response.statusText || "ocurrio un error";
    return { error, status, statusText };
  }
};

const get = (endpoint) => requestAsync(method.GET, endpoint);
const post = (endpoint, body) => requestAsync(method.POST, endpoint, body);
const put = (endpoint, body) => requestAsync(method.PUT, endpoint, body);
const del = (endpoint, body) => requestAsync(method.DEL, endpoint, body);

const header = () => {
  let token;
  let data = storage.load(storage.Keys.auth);
  console.log("ver token", data);
  if (data) {
    token = data;
  }
  let header = {
    "Content-Type": "application/json",
    Accept: "application/json",
  };
  if (token) {
    console.log("ver aqui token", token);
    Object.assign(header, { Authorization: "Bearer " + token });
  }
  console.log("ver headrszadas", header);
  return header;
};

/* const header = () => {
  let options = {
    "Content-Type": "application/json",
    Accept: "application/json",
    
  };
  let token = load(keys.auth);
  if (token) {
    let tokenhead = {
      Autorization: "Bearer " + token,
    };
    const header = { ...options, ...tokenhead };
    return header;
  }
}; */
export default { get, post, put, del };
