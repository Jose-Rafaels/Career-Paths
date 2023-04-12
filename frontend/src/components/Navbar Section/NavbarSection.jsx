import React from "react";
import "./Styles.css";
import { Link } from "react-router-dom";
import { Nav } from "react-bootstrap";

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
        <Link to="Tentang Kami" style={{ textDecoration: "none" }}>
          <li>Tentang Kami</li>
        </Link>
        <Nav.Link type="link" href="mailto:sistemrekomendasi@gmail.com">
          <li>Contact</li>
        </Nav.Link>
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
