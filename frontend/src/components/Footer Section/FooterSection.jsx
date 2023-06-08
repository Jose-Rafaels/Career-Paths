import React, { useEffect, useState } from "react";
import "./Styles.css";
import { Link, useLocation } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";

const Footer = () => {
  const location = useLocation();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsAuthenticated(!!token);

    if (!isAuthenticated && location.pathname === "/login") {
      localStorage.removeItem("token");
    }
    if (!isAuthenticated && location.pathname === "/register") {
      localStorage.removeItem("token");
    }
  }, [location, isAuthenticated]);

  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          <div className="col">
            <Navbar.Brand href="/">
              <div className="logo-footer">Career Paths</div>
            </Navbar.Brand>
            <ul className="list-unstyled">
              <p className="footer-desc" style={{ color: "#000000" }}>
                Website rekomendasi karier pekerjaan IT berdasarkan tes MBTI
              </p>
            </ul>
          </div>

          <div className="col">
            <h5 style={{ color: "#000000", fontWeight: "bold" }}>Account</h5>
            <ul className="list-unstyled">
              <Nav.Link as={Link} to="/register">
                Registrasi
              </Nav.Link>
              <Nav.Link as={Link} to="/login">
                Login
              </Nav.Link>
            </ul>
          </div>

          <div className="col">
            <h5 style={{ color: "#000000", fontWeight: "bold" }}>Company</h5>
            <ul className="list-unstyled">
              <Nav.Link as={Link} to="/about-us">
                Tentang Kami
              </Nav.Link>

              <Nav.Link href="https://www.instagram.com/informationretrievallab_itpln/">
                Media
              </Nav.Link>
            </ul>
          </div>

          <div className="col">
            <h5 style={{ color: "#000000", fontWeight: "bold" }}>
              Get Connected
            </h5>
            <ul className="list-unstyled">
              <Nav.Link href="https://www.google.co.id/maps/place/Institut+Teknologi+PLN/@-6.1682458,106.724257,17z/data=!3m1!4b1!4m5!3m4!1s0x2e69f788f60e492d:0x8b5ed89a85136510!8m2!3d-6.1682511!4d106.7264457">
                Jakarta Barat
              </Nav.Link>
              <Nav.Link type="link" href="tel:085156036987">
                0851-5603-6987
              </Nav.Link>
              <Nav.Link type="link" href="mailto:careerpaths.itpln@gmail.com">
                careerpaths.itpln@gmail.com
              </Nav.Link>
            </ul>
          </div>
        </div>
      </div>

      <hr />
      <div className="row">
        <p className="col text-center copyrights">
          &copy;{new Date().getFullYear()} Copyright • All rights reserved •
          Career Paths • Jakarta
        </p>
      </div>
    </div>
  );
};

export default Footer;
