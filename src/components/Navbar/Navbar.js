import React from "react";
import "./navbar.css";
import { GrLogout } from "react-icons/gr";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const Logout = () => {
    signOut(auth);
    alert("Logged out");
    navigate("/");
  };
  return (
    <div>
      <div className="left">
        <div className="icon">D</div>
        <div>Learn</div>
        <div>Blog</div>
        <div>Bookmarks</div>
      </div>
      <div>
        <img
          src="https://img.icons8.com/?size=1x&id=82749&format=png"
          alt=""
          className="menu"
        />
      </div>
      <div className="right">
        <img src="https://img.icons8.com/?size=1x&id=437&format=png" alt="" />
        <img src="https://img.icons8.com/?size=1x&id=32292&format=png" alt="" />
        <img src="https://img.icons8.com/?size=1x&id=53372&format=png" alt="" />
        <GrLogout onClick={Logout} />
      </div>
    </div>
  );
};

export default Navbar;
