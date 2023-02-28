import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Styles.css";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar Section/NavbarSection";
import Footer from "../../components/Footer Section/FooterSection";
import FinalIC from "../../assets/Images/final-ic.png";

const IntroResult = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <>
      <Navbar />
      <div className="intro-result" data-aos="fade-down">
        <p className="title">
          Yeay! Anda berhasil menyelesaikan seluruh pertanyaan
        </p>
        <p className="intro-subtitle">
          Selamat Anda telah menyelesaikan seluruh pertanyaan. Silahkan lihat
          hasil rekomendasi jenis pekerjaan serta mata kuliah yang harus Anda
          ambil berdasarkan minat bakat yang Anda miliki.
        </p>
        <img className="final-ic" src={FinalIC} alt="final-ic" />
        <button className="button-final">
          <Link
            to="/intro-test"
            style={{ textDecoration: "none", color: "#ffffff" }}
          >
            Lihat Hasil
          </Link>
        </button>
      </div>
      <Footer />
    </>
  );
};

export default IntroResult;
