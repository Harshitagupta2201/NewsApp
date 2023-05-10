import React from "react";
import "./body.css";
import axios from "axios";
import { useEffect, useState } from "react";
import Featured from "../Featured/Featured";

const Body = () => {
  const [data, setdata] = useState([]);
  useEffect(() => {
    let apikey = "1a895841c8af43f0a7132764ab7ced6d";
    const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apikey}`;
    axios
      .get(url)
      .then((res) => setdata(res.data.articles))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <h1>Featured Articles!</h1>
      <Featured data={data} />
    </div>
  );
};

export default Body;
