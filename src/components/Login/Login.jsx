import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Login.css";
import service from "./services";
import { useDispatch, useSelector } from "react-redux";
import { useState, useContext } from 'react';
import UserContext from '../../context/UserContext';



const Login = () => {
   const[user,setUser] = useState("");
   const[password,setPassword] = useState("");
   const state = useSelector((state)=>state)
   const dispatch = useDispatch() 
   const {loginUser} = useContext(UserContext)
   
   const {error,statusText,smsError} = state.user

  const handleSubmit = (event)=>{
   event.preventDefault();
   loginUser({ username: user, password: password });
   /*dispatch(service.loginAuth({ username: user, password: password })); */
  }

  function validateForm() {
    return user.length > 0 && password.length > 0;
  }

  return (
    <>
    <div className="Login">
      <div className="hero-opacity">
        <div className="hero-title">RESERVACIONES</div>
        <Form onSubmit={handleSubmit}>
          <Form.Text className="text-danger">
            <p>{error ? `${statusText}:${smsError.sms}.` : null}</p>
          </Form.Text>
          <Form.Group size="lg" controlId="email">
            <Form.Label>Usuario</Form.Label>
            <Form.Control
              autoFocus
              type="text"
              value={user}
              onChange={(e) => setUser(e.target.value)}
            />
          </Form.Group>
          <Form.Group size="lg" controlId="password">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <Button block size="lg" type="submit" disabled={!validateForm()}>
            Login
          </Button>
        </Form>
      </div>
    </div>
   </> 
  );
}

export default Login;