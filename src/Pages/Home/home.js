import React from "react";
import "./home.css";
import Navbar from "../../components/Navbar/Navbar";
import Featured from "../../components/Featured/Featured";
import More from "../../components/Morearticles/More";
function Home() {
  return (
    <div className="home">
      <Navbar />

      <div className="line"></div>
      <h1 style={{ color: "black", paddingTop: "10px" }}>
        {" "}
        Featured Articles!
      </h1>
      <Featured />
      <h1 style={{ color: "black", paddingTop: "20px" }}> Latest Articles!</h1>
      <More />
    </div>
  );
}

export default Home;
