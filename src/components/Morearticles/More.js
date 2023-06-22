import React, { useEffect, useState } from "react";
import "./more.css";
import axios from "axios";
import { Link } from "react-router-dom";
const More = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=e8c7f2af83454315a1dd93d72e1f214f"
      )
      .then((res) => setArticles(res.data.articles.slice(4)))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="latestArticlesContainer">
      <h1 style={{ margin: "15px 0px" }}>Latest Articles</h1>
      <div className="cardContainer">
        {articles.map((article, i) => {
          return (
            <>
              <Link
                to={article?.url}
                key={i}
                className="newsCard"
                style={{
                  width: "23rem",
                  textDecoration: "none",
                  color: "black",
                  marginTop: "20px",
                }}
              >
                <img
                  className="latestImg"
                  style={{ width: "100%", height: "20rem" }}
                  src={article?.urlToImage}
                  alt="img"
                />
                <span id="publishedId" style={{ float: "left" }}>
                  {new Date(article?.publishedAt).toDateString()}
                </span>

                <h2>{article?.title}</h2>
                <p style={{ textAlign: "justify" }}>{article?.content}</p>
              </Link>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default More;
