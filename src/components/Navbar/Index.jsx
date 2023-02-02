import React from "react";
import "./Styles.css";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <div className="navbar" id="Navbar">
      <div className="n-left">Career Paths</div>
      <ul>
        <Link to="Intro" smooth={true} activeClass="activeClass">
          <li>Home</li>
        </Link>
        <Link to="About" smooth={true}>
          <li>About</li>
        </Link>
        <Link to="Contact" offset={-60} smooth={true}>
          <li>Contact</li>
        </Link>
      </ul>
      <div className="n-right">
        <div className="buttton">
          <button className="btn-register">REGISTER</button>
          <button className="btn-login">LOGIN</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
