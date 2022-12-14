import { keys, load } from "./storage";
import axios from "axios";
import useAxiosInstance from "hooks/useAxiosInstance";

const method = {
  GET: "GET",
  POST: "POST",
  PUT: "PUT",
  DEL: "DELETE",
};

const get = (endpoint) => requestAsync(method.GET, endpoint);
const post = (endpoint, body) => requestAsync(method.POST, endpoint, body);
const put = (endpoint, body) => requestAsync(method.PUT, endpoint, body);
const del = (endpoint, body) => requestAsync(method.DEL, endpoint, body);

const instance = useAxiosInstance();

const requestAsync = async (method, endpoint, body) => {
  let requestOptions = {
    headers: header(),
    body: body ? JSON.stringify(body) : false,
    method: method,
  };
  if (!requestOptions.body) delete requestOptions.body;
   
  console.log("ver request UNO",requestOptions)

  return fetch(process.env.REACT_APP_BACKEND + endpoint, requestOptions)
    .then((res) =>
      res.ok
        ? res.json()
        : Promise.reject({
            err: true,
            status: res.status || "00",
            statusText: res.statusText || "ocurrio un error",
          })
    )
    .catch((err) => err);
};

/* const header = () => {
  let options = {
    "Content-Type": "application/json",
    accept: "application/json",
  };
  let token = load(keys.auth);
  if (token) {
     Object.assign(header, { Authorization: "Bearer " + token });
    /* let tokenhead = {
      Autorization: "Bearer " + token,
    };
    const header = { ...options , ...tokenhead }; */
  /*  return header;
  }
} */

const header = () => {
  let token;
  let data = load(keys.auth);
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

export default { get, post, put, del };
