import React from "react";
import "./home.css";
import NavBar from "../../components/NavBar";
import PhotoCard from "../../components/PhotoCard";

const Home = () => {
  return (
    <div className="home">
      <div className="top">
        <PhotoCard />
      </div>
      <NavBar />
    </div>
  );
};

export default Home;
