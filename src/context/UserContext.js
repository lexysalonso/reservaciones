import {useState,createContext} from "react"
import { useDispatch } from 'react-redux';
import services from "components/Login/services";
import  storage  from 'helpers/storage';
import jwt_decode  from 'jwt-decode';

const UserContext = createContext();

const AuthProvider = ({children})=>{
 const [user, setUser] = useState(() =>
   storage.load(storage.Keys.auth)
     ? jwt_decode(storage.load(storage.Keys.auth))
     : null
 );

 const [refresh_token, setRefreshToken] = useState(
   storage.load(storage.Keys.refresh)
 );
 const dispatch = useDispatch()

 const loginUser = (data) => {
   dispatch(services.loginAuth(data));
 };

 const logoutUser = (refresh_token) => {
   dispatch(services.logoutUser(refresh_token));
 };
 
const data = {
  loginUser,
  setUser,
  user,
  logoutUser,
  refresh_token,
};
return (
    <UserContext.Provider value={data}>{children}</UserContext.Provider>
)

};
 export {AuthProvider}
 export default UserContext;