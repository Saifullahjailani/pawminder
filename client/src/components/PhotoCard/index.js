import React from "react";
import "./index.css";
import dog from "../../assets/dog1.png";

const PhotoCard = () => {
  return (
    <div className="card">
      <img src={dog} height={"100%"} width={"100%"} />
    </div>
  );
};

export default PhotoCard;
