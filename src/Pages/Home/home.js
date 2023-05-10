import React from "react";
import "./home.css";
import Navbar from "../../components/Navbar/Navbar";
import Body from "../../components/Body/Body";

const Home = () => {
  return (
    <div className="home">
      <div>
        <Navbar />
      </div>
      <div className="line"></div>
      <div className="body">
        <Body />
      </div>
    </div>
  );
};

export default Home;
