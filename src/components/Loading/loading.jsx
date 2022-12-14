import React from 'react'
import {Spinner} from"react-bootstrap"
import "./loading.css"

const Loading = () => {
   let styles = {
     width: "3rem",
     height: "3rem",
   }; 

 
  return (
    <div className="modal1">
      <Spinner
        animation="border"
        variant="primary"
        className="size-spinner"
        status="role"
      />
    </div>
  );
  }
export default Loading;