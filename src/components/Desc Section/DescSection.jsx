import React from "react";
import "./Styles.css";
import Fade from "react-reveal/Fade";
import sec from "../../assets/Images/sec-ic.png";

const DescSection = () => {
  return (
    <section id="description">
      <div className="desc-section">
        <Fade bottom cascade>
          <p className="title">
            Mengapa Harus Tes
            <br />
            Menggunakan Website Ini?
          </p>

          <div className="desc">
            <div className="sec-logo">
              <img
                className="sec-ic"
                src={sec}
                alt={sec}
                height={524}
                width={364}
              />
            </div>

            <div className="d-desc">
              <div>
                <p className="website-description">
                  Website ini merupakan platform untuk mengetahui jenis
                  pekerjaan yang sesuai dengan minat bakat yang Anda miliki.
                  Untuk mengetahuinya, Anda diharuskan terlebih dahulu untuk
                  mengerjakan kuisioner. Kuisioner ini nanti akan menggunakan
                  metode MBTI.
                  <br />
                  Apa itu MBTI? The Myers Briggs Type Indicator atau biasa
                  disingkat menjadi MBTI merupakan metode pengukuran yang
                  digunakan untuk membaca kepribadian seseorang, khususnya untuk
                  memahami bagaimana seseorang menilai sesuatu dan membuat
                  keputusan.
                  <br />
                  The Myers-Briggs Type Indicator lahir dan dikembangkan oleh
                  Kathrine Cook Briggs dan putrinya. Carl Gustav Jung
                  menjelaskan bahwa kepribadian ini dibagi melalui empat dimensi
                  sifat dasar manusia, yaitu :
                </p>
              </div>
              <div>
                <ul className="desc-point">
                  <li className="desc-point">
                    dimensi pemusatan perhatian yang terdiri dari Extrovert (E)
                    vs Introvert (I).
                  </li>
                  <li className="desc-point">
                    dimensi memahami informasi dari luar yang terdiri dari
                    Sensing (S) vs Intuition (N).
                  </li>
                  <li className="desc-point">
                    dimensi menarik kesimpulan dan keputusan yang terdiri dari
                    Thinking (T) vs Feeling (F).
                  </li>
                  <li className="desc-point">
                    dimensi pola hidup yang terdiri dari Judging (J) vs
                    Perceiving (P).
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Fade>
      </div>
    </section>
  );
};

export default DescSection;
