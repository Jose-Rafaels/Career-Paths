import React from "react";
import "./Styles.css";

const Footer = () => {
  return (
    <div className="main-footer">
      <div className="logo-footer">Career Paths</div>

      <div className="col-1">
        <h4 style={{ color: "#000000" }}>Account</h4>
        <ul>
          <li>Registrasi</li>
          <li>Login</li>
          <li>Lupa Password</li>
        </ul>
      </div>

      <div className="col-2">
        <h4 style={{ color: "#000000" }}>Company</h4>
        <ul>
          <li>Tentang Kami</li>
          <li>Help Center</li>
          <li>Media</li>
        </ul>
      </div>

      <div className="col-3">
        <h4 style={{ color: "#000000" }}>Get Connected</h4>
        <ul>
          <li>Jakarta Barat</li>
          <li type="link" href="tel:0234567890">
            02345-567-890
          </li>
          <li type="link" href="mailto:support@gmail.com">
            support@gmail.com
          </li>
        </ul>
      </div>

      <hr />

      <p className="copyrights">
        &copy;{new Date().getFullYear()} Copyright • All rights reserved •
        Career Paths • Jakarta
      </p>
    </div>
  );
};

export default Footer;
