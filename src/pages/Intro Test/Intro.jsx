import React from "react";
import "./Styles.css";
import Fade from "react-reveal/Fade";
import Navbar from "../../components/Navbar Section/NavbarSection";
import Footer from "../../components/Footer Section/FooterSection";
import intro from "../../assets/Images/intro-ic.png";
import time from "../../assets/Images/time-ic.png";
import check from "../../assets/Images/check-ic.png";
import True from "../../assets/Images/true-ic.png";

const Intro = () => {
  return (
    <>
      <Navbar />
      <div className="intro">
        <p className="title">Tata Cara Menjawab Pertanyaan</p>
        <p className="intro-subtitle">
          Tes ini digunakan untuk mengetahui minat dan bakat Anda.
          <br />
          Selain itu, melalui tes ini Anda juga akan mendapatkan saran jenis
          pekerjaan
          <br />
          serta mata apa yang harus diambil.
        </p>
        <Fade top cascade>
          <div className="intro-content">
            <div className="intro-left">
              <div className="into-ic">
                <img src={intro} alt="intro" height={367} width={375} />
              </div>
            </div>
            <div className="intro-right">
              <div className="time-ic">
                <img src={time} alt="time" height={66} width={66} />
                <p className="time-desc">
                  Tes ini terdiri dari 52 pertanyaan, dan tidak ada batasan
                  waktu pengerjaan. Akan tetapi umumnya tes ini akan memakan
                  waktu selama 15 menit.
                </p>
              </div>
              <div className="check-ic">
                <img src={check} alt="check" height={66} width={66} />
                <p className="check-desc">
                  Seluruh soal harus dijawab. Pilih opsi "A" atau "B" yang
                  sesuai dengan diri kamu. Setelah klik Selanjutnya kamu tidak
                  bisa mengganti jawaban.
                </p>
              </div>
              <div className="true-ic">
                <img src={True} alt="True" height={66} width={66} />
                <p className="true-desc">
                  Dalam tes ini tidak ada jawaban benar maupun salah. Pilihlah
                  jawaban yang sesuai dengan diri kamu.
                </p>
              </div>
            </div>
            <button className="button-start">Mulai Tes Sekarang</button>
          </div>
        </Fade>
      </div>
      <Footer />
    </>
  );
};

export default Intro;
