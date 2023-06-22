import React, { useState } from "react";
import "./login.css";
import {
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../../firebase";
import { useNavigate, Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { VscGithub } from "react-icons/vsc";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [user, setUser] = useState({ User: "" });

  //Login
  const handleLogin = async () => {
    if (email === "" || password === "") {
      alert("Please fill all the fields");
      return;
    }
    try {
      const { user } = await signInWithEmailAndPassword(auth, email, password);
      console.log(user);
      localStorage.setItem("user", JSON.stringify(user));
      alert("sign in successfull " + user.email);
      navigate("/home");
      return;
    } catch (e) {
      alert(e.message);
      return;
    }
  };
  const googleProvider = new GoogleAuthProvider();
  //Login With Google popup
  const signinWithGoogle = async () => {
    signInWithPopup(auth, googleProvider)
      .then((res) => {
        setUser(res.user);

        alert("sign in successfull " + res.user.email);
      })
      .catch((e) => {
        alert(e.message);
      });
  };

  return (
    <div className="form">
      <div className="image">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThQe26pjQDTILBfmtsura0MSCDhSFhU1iF9w&usqp=CAU"
          alt=""
        />
      </div>
      <div>
        <h3
          style={{ textAlign: "center", color: "#7653d3", fontWeight: "bold" }}
        >
          Welcome to Bardeen
        </h3>
        <p style={{ textAlign: "center" }}>
          Let's log in to launch your automations.
        </p>
      </div>
      <div>
        <form className="container">
          <input
            type="email"
            placeholder="Email Address"
            name="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </form>
      </div>
      <div className="login">
        <button type="button" class="btn btn-primary" onClick={handleLogin}>
          Login
        </button>
        <div
          onClick={signinWithGoogle}
          style={{ cursor: "pointer", display: "flex", alignItems: "center" }}
        >
          <FcGoogle className="loginLogo" />
          <span
            style={{ marginLeft: "10px", color: "#7653d3", fontWeight: "bold" }}
          >
            Sign in With Google
          </span>
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <VscGithub className="loginLogo" />
          <span
            style={{ marginLeft: "10px", color: "#7653d3", fontWeight: "bold" }}
          >
            Sign in With Github
          </span>
        </div>
      </div>
      <div className="createaccount">
        <Link
          to="/signup"
          style={{
            color: "#6249a3",
            cursor: "pointer",
            textDecoration: "none",
          }}
        >
          Create Account
        </Link>
      </div>
    </div>
  );
};

export default Login;
