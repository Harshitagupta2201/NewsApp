import React from "react";
import "./navbar.css";

const Navbar = () => {
  return (
    <div>
      <div className="left">
        <div className="icon">D</div>
        <div>Learn</div>
        <div>Blog</div>
        <div>Bookmarks</div>
      </div>
      <div className="right">
        <img src="https://img.icons8.com/?size=1x&id=437&format=png" alt="" />
        <img src="https://img.icons8.com/?size=1x&id=32292&format=png" alt="" />
        <img src="https://img.icons8.com/?size=1x&id=53372&format=png" alt="" />
      </div>
    </div>
  );
};

export default Navbar;
