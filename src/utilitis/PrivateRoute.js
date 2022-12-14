import { Redirect,Route } from "react-router-dom"; 
import UserContext from "context/UserContext";
import { useContext } from "react";


const isAuthenticated = ()=>{
 const {user} = useContext(UserContext)   
 console.log("ver user", user)
 return user ? true :false
}

const PrivateRoute = (rest) => isAuthenticated() ? <Route {...rest} /> : <Redirect to="/login"/> 
  


export { PrivateRoute }; 