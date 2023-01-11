import React from "react";
import { Link } from "react-router-dom";
import './NavBar.css'

const NavBar = () => {
  return (
    <div className="NavBar">
      <div>
        <Link to="/">Kalvium</Link>
      </div>
      <div>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </div>
  );
};

export default NavBar;
