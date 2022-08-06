import React from "react";
import { useNavigate } from "react-router-dom";
import "./index.css"
const Button = ({txt, path, position, func, params}) => {
    let navigate = useNavigate();
  return (
    <button 
      style={
        {
          top: position.top,
          left: position.left
        }
      }
      className="button"
      onClick={() => {
        if(path){
          navigate(path);
        } else{
          func(params);
        }
      }}
    >
      <p>{txt}</p>
    </button>
  );
};

export default Button;
