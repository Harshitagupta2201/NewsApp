import React from "react";
import "./body.css";
import axios from "axios";
import { useEffect, useState } from "react";
import Featured from "../Featured/Featured";
import More from "../Morearticles/More";

const Body = () => {
  const [data, setdata] = useState([]);
  const [articles, setarticles] = useState([]);
  useEffect(() => {
    let apikey = "1a895841c8af43f0a7132764ab7ced6d";
    const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apikey}`;
    axios
      .get(url)
      .then((res) => setdata(res.data.articles))
      .catch((err) => console.log(err));
  }, []);
  useEffect(() => {
    let apikey = "1a895841c8af43f0a7132764ab7ced6d";
    const url = `https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=${apikey}`;
    axios
      .get(url)
      .then((res) => setarticles(res.data.articles))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <h1>Featured Articles!</h1>
      <Featured data={data} />
      <div className="line"></div>
      <h1>More Articles!</h1>
      <More articles={articles} />
    </div>
  );
};

export default Body;
