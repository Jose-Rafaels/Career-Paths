import React from "react";
import "./Styles.css";

import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar Section/NavbarSection";
import Footer from "../../components/Footer Section/FooterSection";

const Intro = () => {
  return (
    <>
      <Navbar />
      <div className="intro">
        <p className="title">Jawab Sesuai Dengan Diri Anda!</p>
        <p className="intro-subtitle">
          Silahkan pilih salah satu yang sesuai dengan diri Anda dari setiap
          pertanyaan.
        </p>

        <div className="intro-content">
          <div className="intro-left">
            <div className="into-ic"></div>
          </div>
          <div className="intro-right"></div>
          <button className="button-start">
            <Link
              to="/intro-test"
              style={{ textDecoration: "none", color: "#ffffff" }}
            >
              Selanjutnya
            </Link>
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Intro;
