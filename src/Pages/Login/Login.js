import React from "react";
import "./login.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Login = () => {
  const navigate = useNavigate();
  const [data, setdata] = useState({});
  const handleclick = () => {
    navigate("/signup");
  };
  const handlechange = (event) => {
    console.log(event);
    data[event.target.name] = event.target.value;
    setdata({ ...data });
  };
  console.log(data);
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
          <input
            type="email"
            placeholder="Email Address"
            name="email"
            required
            onChange={handlechange}
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            required
            onChange={handlechange}
          />
        </form>
      </div>
      <div className="login">
        <button type="button" class="btn btn-primary">
          Login
        </button>
      </div>
      <div className="createaccount">
        <div>Create an account if you don't have one:</div>
        <button type="button" class="btn btn-primary" onClick={handleclick}>
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default Login;
