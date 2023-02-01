import React from "react";
import "./Styles.css";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <div className="navbar" id="Navbar">
      <div className="n-left">Career Paths</div>
      <div className="n-right">
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
      </div>
    </div>
  );
};

export default Navbar;
