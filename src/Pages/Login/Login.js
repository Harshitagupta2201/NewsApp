import React from "react";
import "./login.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { auth, signInWithEmailAndPassword, signInWithGoogle } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, loading, error] = useAuthState(auth);
  useEffect(() => {
    if (loading) {
      toast("Loading...");
      return;
    }
    if (user) navigate("/");
  }, [user, loading]);

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
        <button
          type="button"
          class="btn btn-primary"
          onClick={() => signInWithEmailAndPassword(email, password)}
        >
          Login
        </button>
        <button
          type="button"
          class="btn btn-primary"
          onClick={signInWithGoogle}
        >
          Login with google
        </button>
        <ToastContainer />
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
