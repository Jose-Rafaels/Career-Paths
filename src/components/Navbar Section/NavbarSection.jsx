import React from "react";
import "./Styles.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="n-left">
        <Link to="/" style={{ textDecoration: "none" }}>
          Career Paths
        </Link>
      </div>
      <ul className="navbar-ul">
        <Link to="/" style={{ textDecoration: "none" }}>
          <li>Home</li>
        </Link>

        <Link to="Layanan" style={{ textDecoration: "none" }}>
          <li>Layanan</li>
        </Link>
        <Link to="Tentang Kami" style={{ textDecoration: "none" }}>
          <li>Tentang Kami</li>
        </Link>
        <Link to="Contact" offset={-60} style={{ textDecoration: "none" }}>
          <li>Contact</li>
        </Link>
      </ul>
      <div className="n-right">
        <div className="buttton">
          <button className="btn-register">
            <Link to="/register" style={{ textDecoration: "none" }}>
              REGISTER
            </Link>
          </button>
          <button className="btn-login">
            <Link
              to="/login"
              style={{ textDecoration: "none", color: "white" }}
            >
              LOGIN
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
