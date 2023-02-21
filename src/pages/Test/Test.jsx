import React from "react";
import "./Styles.css";
import { Link } from "react-router-dom";
import ProgressBar from "react-bootstrap/ProgressBar";
import { Form } from "react-bootstrap";
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
            <p className="soal">
              1. Ketika masuk ke dalam lingkungan yang baru saya cenderung
            </p>
            <Form.Group controlId="kindOfStand">
              <Form.Check
                className="option"
                value="design"
                type="radio"
                aria-label="radio 1"
                label="A. Lebih banyak mengamati"
              />
              <Form.Check
                className="option"
                value="food"
                type="radio"
                aria-label="radio 2"
                label="B. Berkenalan dengan orang lain"
              />
            </Form.Group>
            <p className="soal">
              2. Saya lebih suka membuat tujuan yang bersifat
            </p>
            <Form.Group controlId="kindOfStand">
              <Form.Check
                className="option"
                value="design"
                type="radio"
                aria-label="radio 1"
                label="A. Jangka panjang"
              />
              <Form.Check
                className="option"
                value="food"
                type="radio"
                aria-label="radio 2"
                label="B. Jangka pendek"
              />
            </Form.Group>
            <p className="soal">
              3. Jika menghadapi dua pendapat yang berbeda, saya akan mengambil
              keputusan setelah...
            </p>
            <Form.Group controlId="kindOfStand">
              <Form.Check
                className="option"
                value="design"
                type="radio"
                aria-label="radio 1"
                label="A. Mengetahui sebab dan akibat dari suatu permasalahan"
              />
              <Form.Check
                className="option"
                value="food"
                type="radio"
                aria-label="radio 2"
                label="B. Memahami cara pandang kedua pihak yang berbeda pendapat"
              />
            </Form.Group>
            <p className="soal">4. Saya lebih memilih untuk menjalani</p>
            <Form.Group controlId="kindOfStand">
              <Form.Check
                className="option"
                value="design"
                type="radio"
                aria-label="radio 1"
                label="A. Kehidupan yang punya tujuan"
              />
              <Form.Check
                className="option"
                value="food"
                type="radio"
                aria-label="radio 2"
                label="B. Kehidupan yang bebas"
              />
            </Form.Group>
            <p className="soal">
              5. Dalam kondisi santai, saya lebih tertarik memperhatikan
            </p>
            <Form.Group controlId="kindOfStand">
              <Form.Check
                className="option"
                value="design"
                type="radio"
                aria-label="radio 1"
                label="A. Gambaran yang muncul di benak saya"
              />
              <Form.Check
                className="option"
                value="food"
                type="radio"
                aria-label="radio 2"
                label="B. Apa yang terjadi di sekitar saya"
              />
            </Form.Group>
            <p className="soal">6. Saya lebih suka memikirkan</p>
            <Form.Group controlId="kindOfStand">
              <Form.Check
                className="option"
                value="design"
                type="radio"
                aria-label="radio 1"
                label="A. Kemungkinan yang akan terjadi di masa depan"
              />
              <Form.Check
                className="option"
                value="food"
                type="radio"
                aria-label="radio 2"
                label="B. Apa yang sedang terjadi saat ini"
              />
            </Form.Group>
            <p className="soal">
              7. Saya akan lebih berpihak kepada orang yang
            </p>
            <Form.Group controlId="kindOfStand">
              <Form.Check
                className="option"
                value="design"
                type="radio"
                aria-label="radio 1"
                label="A. Dapat memberikan alasan yang masuk akal"
              />
              <Form.Check
                className="option"
                value="food"
                type="radio"
                aria-label="radio 2"
                label="B. Dapat memberikan alasan yang menyentuh perasaan"
              />
            </Form.Group>
            <p className="soal">
              8. Ketika masuk ke dalam lingkungan yang baru saya cenderung
            </p>
            <Form.Group controlId="kindOfStand">
              <Form.Check
                className="option"
                value="design"
                type="radio"
                aria-label="radio 1"
                label="A. Yang menegakkan aturan"
              />
              <Form.Check
                className="option"
                value="food"
                type="radio"
                aria-label="radio 2"
                label="B. Yang memberi kebebasan"
              />
            </Form.Group>
            <p className="soal">9. Saya lebih bersemangat untuk</p>
            <Form.Group controlId="kindOfStand">
              <Form.Check
                className="option"
                value="design"
                type="radio"
                aria-label="radio 1"
                label="A. Membayangkan sesuatu yang menyenangkan"
              />
              <Form.Check
                className="option"
                value="food"
                type="radio"
                aria-label="radio 2"
                label="B. Bertemu dengan orang baru"
              />
            </Form.Group>
            <p className="soal">10. Saya lebih bersemangat jika berbicara</p>
            <Form.Group controlId="kindOfStand">
              <Form.Check
                className="option"
                value="design"
                type="radio"
                aria-label="radio 1"
                label="A. Tentang kemungkinan di masa depan"
              />
              <Form.Check
                className="option"
                value="food"
                type="radio"
                aria-label="radio 2"
                label="B. Tentang kejadian yang sedang berlangsung"
              />
            </Form.Group>
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
