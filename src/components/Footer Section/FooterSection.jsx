import React from "react";
import "./Styles.css";

const Footer = () => {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          <div className="logo-footer">Career Paths</div>

          <div className="col">
            <h5 style={{ color: "#000000" }}>Account</h5>
            <ul className="list-unstyled">
              <li>Registrasi</li>
              <li>Login</li>
              <li>Lupa Password</li>
            </ul>
          </div>

          <div className="col">
            <h5 style={{ color: "#000000" }}>Company</h5>
            <ul className="list-unstyled">
              <li>Tentang Kami</li>
              <li>Help Center</li>
              <li>Media</li>
            </ul>
          </div>

          <div className="col">
            <h5 style={{ color: "#000000" }}>Get Connected</h5>
            <ul className="list-unstyled">
              <li>Jakarta Barat</li>
              <li type="link" href="tel:0234567890">
                02345-567-890
              </li>
              <li type="link" href="mailto:support@gmail.com">
                support@gmail.com
              </li>
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
