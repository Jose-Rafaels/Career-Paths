import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Styles.css";
import Navbar from "../../components/Navbar Section/NavbarSection";
import Footer from "../../components/Footer Section/FooterSection";
import webDev from "../../assets/Images/webdev.png";
import BG from "../../assets/Images/bg-test.png";
import Title from "../../components/Layout/Title";

const ResultPage = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <Title title="Test Result">
      <>
        <Navbar />
        <div className="resultPage">
          <div className="bg">
            <img src={BG} alt="bg" width={"1444"} height={"1100"} />
          </div>
          <div className="resultSection">
            <p className="hi-user">Halo John Doe</p>
            <p className="intro-user-result">
              Berdasarkan tes yang sudah kamu lakukan, tipe kepribadian kamu
              adalah
            </p>
            <p className="user-result">
              ISTJ (Introved, Sensing, Thingking, Judging)
            </p>
            <p className="characteristic-desc">Karakteristik ISTJ adalah :</p>
            <div>
              <ul className="characteristic-points">
                <li className="characteristic-point">
                  ISTJ adalah sosok yang penuh tanggung jawab dan realistis.
                  Mereka mengambil pendekatam logis untuk mencapai sebuah
                  tujuan. Mereka mampu mengabaikan gangguan untuk fokus pada
                  tugas yang dihadapi dan sering digambarkan sebagai orang yang
                  dapat diandalkan dan dapat dipercaya.
                </li>
                <li className="characteristic-point">
                  Mereka adalah perencana sejati, ISTJ suka merencanakan sesuatu
                  dengan matang sebelum melakukannya. Jika terjadi kekacauan di
                  tengah jalan, mereka tidak akan beristirahat sampai solusi
                  untuk masalah itu ditemukan dan semuanya berjalan lurus.
                </li>
                <li className="characteristic-point">
                  Mereka sangat menekankan tradisi dan hukum. Mereka lebih suka
                  mengikuti aturan dan prosedur yang sudah ada sebelumnya. Dalam
                  beberapa kasus, ISTJ dianggap sebagai pribadi yang kaku dan
                  keras dalam mempertahankan struktur.
                </li>
                <li className="characteristic-point">
                  Merancang dan mengembangkan grafis dan memelihara situs web.
                  Desainer digital mengembangkan, membuat, dan menguji tata
                  letak situs web atau antarmuka, fungsi, dan navigasi untuk
                  kegunaannya.
                </li>
              </ul>
            </div>
          </div>
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
                Web developers membuat dan memelihara situs web. Desainer
                digital mengembangkan, membuat, dan menguji tata letak situs web
                atau antarmuka, fungsi, dan navigasi untuk kegunaannya.
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
                HTML CSS, Javascript Framework, Rest Apis, Sql Server, UI/UX,
                PHP Laravel, Node.
              </p>
            </div>
          </div>
        </div>
        <Footer />
      </>
    </Title>
  );
};

export default ResultPage;
