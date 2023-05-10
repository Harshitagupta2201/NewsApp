import React from "react";
import "./login.css";

const Login = () => {
  return (
    <div className="form">
      <div className="image">
        <img
          src="https://img.icons8.com/?size=512&id=fujVgBscPaMw&format=png"
          alt=""
        />
      </div>
      <div>
        <h1>Let's Login! </h1>
      </div>
      <div>
        <form className="container">
          <input type="email" placeholder="Email Address" required />
          <input type="password" placeholder="Password" required />
          <label>
            If you don't have an account <a href="#">Click Here!</a>
          </label>
        </form>
      </div>
    </div>
  );
};

export default Login;
