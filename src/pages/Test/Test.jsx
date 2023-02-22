import React from "react";
import "./Styles.css";
import { Link } from "react-router-dom";
import ProgressBar from "react-bootstrap/ProgressBar";
import { Form } from "react-bootstrap";
import BG from "../../assets/Images/bg-test.png";

const Intro = () => {
  return (
    <>
      <div className="test">
        <div className="bg">
          <img src={BG} alt="bg" width={"1444"} height={"1100"} />
        </div>
        <p className="title">Jawab Sesuai Dengan Diri Anda!</p>
        <p className="intro-subtitle">
          Silahkan pilih salah satu yang sesuai dengan diri Anda dari setiap
          pertanyaan.
        </p>

        <div className="box-progress">
          <p className="progress">Progress 8/10</p>
          <ProgressBar animated now={50} />
        </div>

        <div className="box-question">
          <p className="soal">
            1. Ketika masuk ke dalam lingkungan yang baru saya cenderung
          </p>
          <Form>
            {["radio"].map((type) => (
              <div key={`inline-${type}`} className="mb-3">
                <Form.Check
                  className="option"
                  label="A. Lebih banyak mengamati"
                  name="group1"
                  type={type}
                  id={`inline-${type}-1`}
                />
                <Form.Check
                  className="option"
                  inline
                  label="B. Berkenalan dengan orang lain"
                  name="group1"
                  type={type}
                  id={`inline-${type}-2`}
                />
              </div>
            ))}
          </Form>
          <p className="soal">
            2. Saya lebih suka membuat tujuan yang bersifat
          </p>
          <Form>
            {["radio"].map((type) => (
              <div key={`inline-${type}`} className="mb-3">
                <Form.Check
                  className="option"
                  label="A. Jangka panjang"
                  name="group1"
                  type={type}
                  id={`inline-${type}-1`}
                />
                <Form.Check
                  className="option"
                  inline
                  label="B. Jangka pendek"
                  name="group1"
                  type={type}
                  id={`inline-${type}-2`}
                />
              </div>
            ))}
          </Form>
          <p className="soal">
            3. Jika menghadapi dua pendapat yang berbeda, saya akan mengambil
            keputusan setelah...
          </p>
          <Form>
            {["radio"].map((type) => (
              <div key={`inline-${type}`} className="mb-3">
                <Form.Check
                  className="option"
                  label="A. Mengetahui sebab dan akibat dari suatu permasalahan"
                  name="group1"
                  type={type}
                  id={`inline-${type}-1`}
                />
                <Form.Check
                  className="option"
                  inline
                  label="B. Memahami cara pandang kedua pihak yang berbeda pendapat"
                  name="group1"
                  type={type}
                  id={`inline-${type}-2`}
                />
              </div>
            ))}
          </Form>
          <p className="soal">4. Saya lebih memilih untuk menjalani</p>
          <Form>
            {["radio"].map((type) => (
              <div key={`inline-${type}`} className="mb-3">
                <Form.Check
                  className="option"
                  label="A. Kehidupan yang punya tujuan"
                  name="group1"
                  type={type}
                  id={`inline-${type}-1`}
                />
                <Form.Check
                  className="option"
                  inline
                  label="B. Kehidupan yang bebas"
                  name="group1"
                  type={type}
                  id={`inline-${type}-2`}
                />
              </div>
            ))}
          </Form>
          <p className="soal">
            5. Dalam kondisi santai, saya lebih tertarik memperhatikan
          </p>
          <Form>
            {["radio"].map((type) => (
              <div key={`inline-${type}`} className="mb-3">
                <Form.Check
                  className="option"
                  label="A. Gambaran yang muncul di benak saya"
                  name="group1"
                  type={type}
                  id={`inline-${type}-1`}
                />
                <Form.Check
                  className="option"
                  inline
                  label="B. Apa yang terjadi di sekitar saya"
                  name="group1"
                  type={type}
                  id={`inline-${type}-2`}
                />
              </div>
            ))}
          </Form>
          <p className="soal">6. Saya lebih suka memikirkan</p>
          <Form>
            {["radio"].map((type) => (
              <div key={`inline-${type}`} className="mb-3">
                <Form.Check
                  className="option"
                  label="A. Kemungkinan yang akan terjadi di masa depan"
                  name="group1"
                  type={type}
                  id={`inline-${type}-1`}
                />
                <Form.Check
                  className="option"
                  inline
                  label="B. Apa yang sedang terjadi saat ini"
                  name="group1"
                  type={type}
                  id={`inline-${type}-2`}
                />
              </div>
            ))}
          </Form>
          <p className="soal">7. Saya akan lebih berpihak kepada orang yang</p>
          <Form>
            {["radio"].map((type) => (
              <div key={`inline-${type}`} className="mb-3">
                <Form.Check
                  className="option"
                  label="A. Dapat memberikan alasan yang masuk akal"
                  name="group1"
                  type={type}
                  id={`inline-${type}-1`}
                />
                <Form.Check
                  className="option"
                  inline
                  label="B. Dapat memberikan alasan yang menyentuh perasaan"
                  name="group1"
                  type={type}
                  id={`inline-${type}-2`}
                />
              </div>
            ))}
          </Form>
          <p className="soal">
            8. Ketika masuk ke dalam lingkungan yang baru saya cenderung
          </p>
          <Form>
            {["radio"].map((type) => (
              <div key={`inline-${type}`} className="mb-3">
                <Form.Check
                  className="option"
                  label="A. Yang menegakkan aturan"
                  name="group1"
                  type={type}
                  id={`inline-${type}-1`}
                />
                <Form.Check
                  className="option"
                  inline
                  label="B. Yang memberi kebebasan"
                  name="group1"
                  type={type}
                  id={`inline-${type}-2`}
                />
              </div>
            ))}
          </Form>
          <p className="soal">9. Saya lebih bersemangat untuk</p>
          <Form>
            {["radio"].map((type) => (
              <div key={`inline-${type}`} className="mb-3">
                <Form.Check
                  className="option"
                  label="A. Membayangkan sesuatu yang menyenangkan"
                  name="group1"
                  type={type}
                  id={`inline-${type}-1`}
                />
                <Form.Check
                  className="option"
                  inline
                  label="B. Bertemu dengan orang baru"
                  name="group1"
                  type={type}
                  id={`inline-${type}-2`}
                />
              </div>
            ))}
          </Form>
          <p className="soal">10. Saya lebih bersemangat jika berbicara</p>
          <Form>
            {["radio"].map((type) => (
              <div key={`inline-${type}`} className="mb-3">
                <Form.Check
                  className="option"
                  label="A. Tentang kemungkinan di masa depan"
                  name="group1"
                  type={type}
                  id={`inline-${type}-1`}
                />
                <Form.Check
                  className="option"
                  inline
                  label="B. Tentang kejadian yang sedang berlangsung"
                  name="group1"
                  type={type}
                  id={`inline-${type}-2`}
                />
              </div>
            ))}
          </Form>
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
    </>
  );
};

export default Intro;
