import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="/" className="nav-link">
        {" "}
        Home
      </Link>
      <Link to="/About" className="nav-link">
        {" "}
        About
      </Link>
      <Link to="/Users" className="nav-link">
        {" "}
        Users
      </Link>
    </div>
  );
};

export default Navbar;
