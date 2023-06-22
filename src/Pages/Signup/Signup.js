import React from "react";
import "./signup.css";
import { useState } from "react";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase";
import { FcGoogle } from "react-icons/fc";
import { VscGithub } from "react-icons/vsc";

const Signup = () => {
  let navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [user, setUser] = useState({});
  const handleSignup = async () => {
    if (password !== confirmPassword) {
      alert("Please enter correct password");
      return;
    }
    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log(user);
      setUser(user);
      alert("sign up successfull " + user.email);
      navigate("/");
    } catch (e) {
      alert(e.message);
      return;
    }
  };
  const googleProvider = new GoogleAuthProvider();

  //Sign up with PopUp
  const signUpWithGoogle = async () => {
    signInWithPopup(auth, googleProvider)
      .then((res) => {
        setUser(res.user);

        alert("sign up successfull " + res.user.email);
      })
      .catch((e) => {
        alert(e.message);
      });
  };
  return (
    <div className="wholepage">
      <div className="form">
        <div className="image">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThQe26pjQDTILBfmtsura0MSCDhSFhU1iF9w&usqp=CAU"
            alt=""
          />
        </div>
        <div>
          <h1>Signup Here! </h1>
        </div>
        <div>
          <form className="container">
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
            <label>Confirm password:</label>
            <input
              type="password"
              placeholder="Confirm password"
              required
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              name="password"
            />
          </form>
        </div>
        <div className="signup">
          <button type="button" class="btn btn-primary" onClick={handleSignup}>
            Signup
          </button>
          <div
            onClick={signUpWithGoogle}
            style={{ display: "flex", alignItems: "center", cursor: "pointer" }}
          >
            <FcGoogle className="loginLogo" />
            <span
              style={{
                marginLeft: "10px",
                color: "#7653d3",
                fontWeight: "bold",
              }}
            >
              Sign up With Google
            </span>
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <VscGithub className="loginLogo" />
            <span
              style={{
                marginLeft: "10px",
                color: "#7653d3",
                fontWeight: "bold",
              }}
            >
              Sign up With Github
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
