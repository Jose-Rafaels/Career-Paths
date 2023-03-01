import React from "react";
import "./Styles.css";
import { Link, useLocation } from "react-router-dom";
import FinalIC from "../../assets/Images/final-ic.png";

const Error = () => {
  let location = useLocation();
  return (
    <div className="error-page">
      <p className="title">404 | Not Found</p>
      <p className="intro-subtitle">
        Maaf, halaman <code>{location.pathname}</code> tidak ditemukan.
      </p>
      <img className="error-ic" src={FinalIC} alt="final-ic" />
      <button className="button-final">
        <Link to="/" style={{ textDecoration: "none", color: "#ffffff" }}>
          Back Home
        </Link>
      </button>
    </div>
  );
};

export default Error;