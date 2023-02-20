import React from "react";
import "./Styles.css";
import { Link } from "react-router-dom";
import ProgressBar from "react-bootstrap/ProgressBar";
import Navbar from "../../components/Navbar Section/NavbarSection";

const Intro = () => {
  return (
    <>
      <Navbar />
      <div className="test">
        <p className="title">Jawab Sesuai Dengan Diri Anda!</p>
        <p className="intro-subtitle">
          Silahkan pilih salah satu yang sesuai dengan diri Anda dari setiap
          pertanyaan.
        </p>

        <div className="intro-content">
          <div className="box-left">
            <p className="progress">Progress 8/10</p>
            <ProgressBar animated now={10} />
          </div>
          <div className="box-right">
            <div className="soal"></div>
          </div>
          <button className="button-next">
            <Link
              to="/intro-test"
              style={{ textDecoration: "none", color: "#ffffff" }}
            >
              Selanjutnya
            </Link>
          </button>
        </div>
      </div>
    </>
  );
};

export default Intro;
