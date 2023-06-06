import React from "react";
import "./Styles.css";
import { Link } from "react-router-dom";
import ErrorIc from "../../assets/Images/error-ic.png";
import Title from "../Layout/Title";

const Error = () => {
  return (
    <Title title="Oopss">
      <div className="dologin-page">
        <p className="dologin-title">Oopss!</p>
        <p className="intro-dologin-subtitle">
          Sepertinya kamu belum login. Silahkan Login terlebih dahulu.
          <img className="dologin-ic" src={ErrorIc} alt="final-ic" />
        </p>

        <button className="button-dologin">
          <Link
            to="/login"
            style={{ textDecoration: "none", color: "#ffffff" }}
          >
            Login Now
          </Link>
        </button>
      </div>
    </Title>
  );
};

export default Error;
