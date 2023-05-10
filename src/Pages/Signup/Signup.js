import React from "react";
import "./signup.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const [input, setinput] = useState({});
  function handlechange(event) {
    input[event.target.name] = event.target.value;
    setinput({ ...input });
  }
  function handleclick() {
    localStorage.setItem("user", input);
    navigate("/");
  }
  return (
    <div className="form">
      <div className="image">
        <img
          src="https://img.icons8.com/?size=512&id=fujVgBscPaMw&format=png"
          alt=""
        />
      </div>
      <div>
        <h1>Signup Here! </h1>
      </div>
      <div>
        <form className="container">
          <label>Enter your full name:</label>
          <input
            type="text"
            placeholder="Full Name"
            required
            onChange={handlechange}
            name="name"
          />
          <label>Enter your Email-address:</label>
          <input
            type="email"
            placeholder="Email Address"
            required
            onChange={handlechange}
            name="email"
          />
          <label>Enter the password:</label>
          <input
            type="password"
            placeholder="Password"
            required
            onChange={handlechange}
            name="password"
          />
        </form>
      </div>
      <div className="signup">
        <button type="button" class="btn btn-primary" onClick={handleclick}>
          Signup
        </button>
      </div>
    </div>
  );
};

export default Signup;
