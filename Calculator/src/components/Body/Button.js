import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./index.scss";

const Button = (props) => {
  
  return (
    <div
    onClick={()=>{props.onClick(props.keyValue)}} className="container" >
      <span>{props.keyValue}</span>
    </div>
  );
};

export default Button;
