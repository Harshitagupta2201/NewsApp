import React from "react";
import "./home.css";
import axios from "axios";
import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";

const Home = () => {
  useEffect(() => {
    let apikey = "1a895841c8af43f0a7132764ab7ced6d";
    const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apikey}`;
    axios
      .get(url)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <div className="container">
        <div>
          {" "}
          <Navbar />
        </div>
        <div className="line"></div>
      </div>
    </div>
  );
};

export default Home;
