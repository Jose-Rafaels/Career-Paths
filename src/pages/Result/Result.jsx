import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Styles.css";
import Navbar from "../../components/Navbar Section/NavbarSection";
import Footer from "../../components/Footer Section/FooterSection";
import webDev from "../../assets/Images/webdev.png";

const ResultPage = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      <Navbar />
      <div className="resultPage">
        <div className="matkulSection">
          <p className="title">Berikut mata kuliah yang harus kamu ambil</p>

          <div className="matkul-category1" data-aos="fade-up">
            <div className="matkul-category-card">
              <p className="matkul-title">Pemrograman Web Lanjut</p>
            </div>

            <div className="matkul-category-card">
              <p className="matkul-title">Pemrograman Mobile Lanjut</p>
            </div>
            <div className="matkul-category-card">
              <p className="matkul-title">Manajemen Proyek Perangkat Lunak</p>
            </div>
            <div className="matkul-category-card">
              <p className="matkul-title">Basis Data Lanjut</p>
            </div>
          </div>

          <div className="matkul-category2" data-aos="fade-up">
            <div className="matkul-category-card">
              <p className="matkul-title">
                Database Administrators <br /> and Architects
              </p>
            </div>
            <div className="matkul-category-card">
              <p className="matkul-title">
                Computer & Information <br />
                Research Scientists
              </p>
            </div>
          </div>
        </div>

        <div className="jobSection">
          <p className="title">
            Berikut jenis pekerjaan yang cocok dengan minat dan bakat kamu
          </p>
          <div className="title-job-box" data-aos="fade-up">
            <img className="jobs-ic" src={webDev} alt="webDev" />
            <p className="title-jobs">Web Developer & Digital Designers</p>
          </div>
          <div className="desc-job-box" data-aos="fade-up">
            <p className="description">
              Web developers membuat dan memelihara situs web. Desainer digital
              mengembangkan, membuat, dan menguji tata letak situs web atau
              antarmuka, fungsi, dan navigasi untuk kegunaannya.
              <br />
              <br />
              <span style={{ color: "#000000", fontWeight: "bold" }}>
                Tugas & Tanggung Jawab :
              </span>
            </p>
            <div>
              <ul className="description-points">
                <li className="description-point">
                  Bertemu dengan klien atau manajemen untuk mendiskusikan
                  kebutuhan, desain, dan fungsionalitas situs web atau
                  antarmuka.
                </li>
                <li className="description-point">
                  Membuat dan menguji aplikasi, antarmuka, dan menu navigasi
                  untuk situs web.
                </li>
                <li className="description-point">
                  Bekerja dengan desainer grafis dan desainer lain untuk
                  menentukan tata letak situs web.
                </li>
                <li className="description-point">
                  Merancang dan mengembangkan grafis dan memelihara situs web.
                  Desainer digital mengembangkan, membuat, dan menguji tata
                  letak situs web atau antarmuka, fungsi, dan navigasi untuk
                  kegunaannya.
                </li>
              </ul>
            </div>
            <p className="description">
              <span style={{ color: "#000000", fontWeight: "bold" }}>
                Keterampilan yang dibutuhkan :
              </span>
              <br />
              HTML CSS, Javascript Framework, Rest Apis, Sql Server, UI/UX, PHP
              Laravel, Node.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ResultPage;
