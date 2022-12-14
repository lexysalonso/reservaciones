import storage from "../../helpers/storage"
import service from "../../helpers/servicesAxios"
import { isAuth, isAuthError } from "actions/userActions"
import jwt_decode  from 'jwt-decode';


 const loginAuth = (data) => {
   return (dispatch) => {
     service.post("/token/", data).then((response) => {
       if (response.status === 401) dispatch(isAuthError(response));
       else {
         storage.save(storage.Keys.auth, response.access);
         storage.save(storage.Keys.refresh, response.refresh);
         dispatch(isAuth(response.access));
         console.log("ver log", response);
         window.location.href = "/";
       }
     });
   };
 }; 


 const logoutUser = (refresh_token)=>{
     service.post("/logout/", { refresh_token }).then((response) => {
       storage.remove(storage.Keys.auth);
       storage.remove(storage.Keys.refresh);
       window.location.href = "/login";
     });
 }

 export default { loginAuth, logoutUser };