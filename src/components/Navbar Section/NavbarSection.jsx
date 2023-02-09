import React from "react";
import "./Styles.css";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="n-left">Career Paths</div>
      <ul className="navbar-ul">
        <Link to="Intro" smooth={true} activeClass="activeClass">
          <li>Home</li>
        </Link>
        <Link to="Layanan" smooth={true}>
          <li>Layanan</li>
        </Link>
        <Link to="Tentang Kami" smooth={true}>
          <li>Tentang Kami</li>
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
