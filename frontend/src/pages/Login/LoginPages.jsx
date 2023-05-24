import React, { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Styles.css";
import Navbar from "../../components/Navbar Section/NavbarSection";
import Footer from "../../components/Footer Section/FooterSection";
import LoginIc from "../../assets/Images/loginreg.png";
import EmailIc from "../../assets/Images/mail-ic.svg";
import PwdIc from "../../assets/Images/password-ic.svg";
import Eye from "../../assets/Images/eye-ic.svg";
import EyeC from "../../assets/Images/eyeC.svg";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { Link } from "react-router-dom";
import Title from "../../components/Layout/Title";

const LoginPage = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const navigate = useNavigate();
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const [showPassword, setShowPassword] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;
    let auth = localStorage.getItem("token");

    fetch(`http://localhost:8080/v1/user/login`, {
      method: "POST",
      body: JSON.stringify({
        email: enteredEmail,
        password: enteredPassword,
        returnSecureToken: true,
      }),
      headers: {
        Accept: "/",
        "Content-Type": "application/json",
        Token: auth,
      },
    })
      .then((response) => {
        if (response.status === 200) {
          console.log("SUCCESSS");
          navigate("/intro-test");
          window.location.reload();
          return response.json();
        } else if (response.status === 401) {
          console.log("SOMETHING WENT WRONG");
          this.setState({ requestFailed: true });
        }
      })
      .then((data) => {
        console.log(data.token);
        localStorage.setItem("token", data.token);
      })
      .catch((err) => {
        setPasswordError(true);
        return;
      });
  };

  return (
    <Title title="Login">
      <>
        <Navbar />

        <div className="login" data-aos="fade-down">
          <div className="login-ic">
            <img className="login-logo" src={LoginIc} alt={LoginIc} />
          </div>
          <div className="login-box">
            <h3 className="loginreg-title">Selamat Datang Kembali</h3>
            <p className="loginreg-sub-title">
              Silahkan masuk dengan akun yang sudah terdaftar
            </p>
            <Form onSubmit={handleSubmit}>
              <InputGroup className="email-form">
                <InputGroup className="form-ic">
                  <img className="form-icon" src={EmailIc} alt={EmailIc} />
                  <Form.Control
                    className="login-input"
                    type="email"
                    placeholder="Email"
                    required
                    ref={emailInputRef}
                  />
                </InputGroup>
              </InputGroup>

              <InputGroup className="password-form">
                <InputGroup className="form-ic">
                  <img className="form-icon" src={PwdIc} alt={PwdIc} />
                  <Form.Control
                    className="login-input"
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    required
                    ref={passwordInputRef}
                  />
                  <span
                    role="button"
                    className="show-pwd-ic"
                    onClick={() =>
                      setShowPassword((showPassword) => !showPassword)
                    }
                  >
                    {showPassword ? (
                      <img className="show-pwd" src={Eye} alt={Eye} />
                    ) : (
                      <img className="show-pwd" src={EyeC} alt={EyeC} />
                    )}
                  </span>
                </InputGroup>
              </InputGroup>

              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckChecked"
                />
                <label className="form-check-label" htmlFor="flexCheckChecked">
                  Ingat saya
                </label>
              </div>

              {passwordError && (
                <label className="wrong">Data yang anda masukkan salah!</label>
              )}

              <button className="btn-masuk" type="submit">
                Masuk
              </button>
            </Form>
            <p className="create-account">
              Belum Punya Akun?{" "}
              <span style={{ fontWeight: "bold", color: "#000000" }}>
                <Link to="/register" style={{ textDecoration: "none" }}>
                  Daftar Sekarang
                </Link>
              </span>
            </p>
          </div>
        </div>

        <Footer />
      </>
    </Title>
  );
};

export default LoginPage;
