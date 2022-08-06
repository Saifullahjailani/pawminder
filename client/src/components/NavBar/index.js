import React from "react";
import { useNavigate } from "react-router-dom";
import "./nav.css";

const NavBar = () => {
  const navigate = useNavigate();
  return (
    <nav className="nav">
      <button
        className="left"
        onClick={() => {
          navigate("/trainingVideo");
        }}
      ></button>
      <button
        className="middle"
        onClick={() => {
          navigate("/Dogs");
        }}
      ></button>
      <button
        className="right"
        onClick={() => {
          navigate("/profile");
        }}
      ></button>
    </nav>
  );
};

export default NavBar;
