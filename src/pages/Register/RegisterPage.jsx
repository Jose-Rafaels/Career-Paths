import React from "react";
import "./Styles.css";

import Navbar from "../../components/Navbar Section/NavbarSection";
import Footer from "../../components/Footer Section/FooterSection";
import RegsiterIc from "../../assets/Images/loginreg.png";
import UsernameIc from "../../assets/Images/username-ic.svg";
import EmailIc from "../../assets/Images/mail-ic.svg";
import PwdIc from "../../assets/Images/password-ic.svg";
import Eye from "../../assets/Images/eye-ic.svg";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Fb from "../../assets/Images/fb-ic.png";
import Google from "../../assets/Images/google-ic.png";
import { Link } from "react-router-dom";

const RegisterPage = () => {
  return (
    <>
      <Navbar />
      <div className="register">
        <div className="register-ic">
          <img className="register-logo" src={RegsiterIc} alt={RegsiterIc} />
        </div>
        <div className="register-box">
          <h3 className="loginreg-title">Selamat Datang</h3>
          <p className="loginreg-sub-title">
            Silahkan daftar menggunakan email aktif Anda
          </p>

          <InputGroup className="name-register-form">
            <InputGroup className="form-ic">
              <img className="form-icon" src={UsernameIc} alt={UsernameIc} />
              <Form.Control
                className="register-input"
                type="email"
                placeholder="Nama Depan"
              />
            </InputGroup>
          </InputGroup>
          <InputGroup className="name2-register-form">
            <InputGroup className="form-ic">
              <img className="form-icon" src={UsernameIc} alt={UsernameIc} />
              <Form.Control
                className="register-input"
                type="email"
                placeholder="Nama Belakang"
              />
            </InputGroup>
          </InputGroup>

          <InputGroup className="email-register-form">
            <InputGroup className="form-ic">
              <img className="form-icon" src={EmailIc} alt={EmailIc} />
              <Form.Control
                className="register-input"
                type="email"
                placeholder="Email"
              />
            </InputGroup>
          </InputGroup>

          <InputGroup className="password-register-form">
            <InputGroup className="form-ic">
              <img className="form-icon" src={PwdIc} alt={PwdIc} />
              <Form.Control
                className="register-input"
                type="password"
                placeholder="Password"
              />
              <img className="show-pwd" src={Eye} alt={Eye} />
            </InputGroup>
          </InputGroup>
          <InputGroup className="password-confirm-register-form">
            <InputGroup className="form-ic">
              <img className="form-icon" src={PwdIc} alt={PwdIc} />
              <Form.Control
                className="register-input"
                type="password"
                placeholder="Konfirmasi"
              />
              <img className="show-pwd" src={Eye} alt={Eye} />
            </InputGroup>
          </InputGroup>

          <button className="btn-daftar">Daftar Sekarang</button>
          <p className="socmed-register">
            Atau daftar menggunakan sosial media?
          </p>

          <div className="socmed">
            <img src={Fb} alt={Fb} width={66} height={66} />
            <img src={Google} alt={Google} width={66} height={66} />
          </div>

          <p className="create-account">
            Sudah Punya Akun?
            <span style={{ fontWeight: "bold", color: "#000000" }}>
              <Link to="/login" style={{ textDecoration: "none" }}>
                Masuk Sekarang
              </Link>
            </span>
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default RegisterPage;
