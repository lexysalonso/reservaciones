import axios from "axios";
import storage from "helpers/storage";
import dayjs from "dayjs";
import jwt_decode from "jwt-decode";
import { useState , useContext} from 'react';
import UserContext from "context/UserContext";

const instance = axios.create();

const useAxiosInstance = ()=> {
     
     
     instance.interceptors.request.use(
     async (resq) => {
         const token = storage.load(storage.Keys.auth) ? storage.load(storage.Keys.auth): null
          if (token){
             let user = jwt_decode(token)
             const isExpired = dayjs.unix(user.exp).diff(dayjs()) < 1;
             if (!isExpired) return resq;

             const token_refresh = storage.load(storage.Keys.refresh)

             let options = {
               url: "/token/refresh/",
               method: "POST",
               baseURL: process.env.REACT_APP_BACKEND,
               headers:{
                   "Content-Type":"application/json"
               },
               data:{
                   refresh:token_refresh
               }
             };
               let token_new = await axios(options)
               let data = await token_new.data
               storage.save(storage.Keys.auth,data.access)
               storage.save(storage.Keys.refresh,data.refresh)
               //setAccessToken(data.access);
              // setUSer(jwt_decode(data.access))
               resq.headers['Authorization'] = `Bearer ${data.access}`
                console.log("ver new token",data)

         }
         return resq
     },       
      (err) => {
        console.log("Error",err);
         return  Promise.reject(err);
      }
      
    );
    
     return instance ;

};

export default useAxiosInstance;