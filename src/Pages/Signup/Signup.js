import React from "react";
import "./signup.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import {
  auth,
  registerWithEmailAndPassword,
  signInWithGoogle,
} from "./firebase";

const Signup = () => {
  let navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const history = useHistory();
  const register = () => {
    if (!name) alert("Please enter name");
    registerWithEmailAndPassword(name, email, password);
  };
  useEffect(() => {
    if (loading) return;
    if (user) navigate("login");
  }, [user, loading]);
  return (
    <div className="wholepage">
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
              value={name}
              onChange={(e) => setName(e.target.value)}
              name="name"
            />
            <label>Enter your Email-address:</label>
            <input
              type="email"
              placeholder="Email Address"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              name="email"
            />
            <label>Enter the password:</label>
            <input
              type="password"
              placeholder="Password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              name="password"
            />
          </form>
        </div>
        <div className="signup">
          <button type="button" class="btn btn-primary" onClick={register}>
            Signup
          </button>
          <button class="btn btn-primary" onClick={signInWithGoogle}>
            Register with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
