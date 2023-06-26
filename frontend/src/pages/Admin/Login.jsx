import React, { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Spinner from "react-bootstrap/Spinner";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Styles.css";
import AdminIc from "../../assets/Images/admin.png";
import EmailIc from "../../assets/Images/mail-ic.svg";
import PwdIc from "../../assets/Images/password-ic.svg";
import Eye from "../../assets/Images/eye-ic.svg";
import EyeC from "../../assets/Images/eyeC.svg";
import Title from "../../components/Layout/Title";

const LoginAdmin = () => {
  AOS.init({ duration: 1000 });

  const navigate = useNavigate();
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const [rememberedEmail, setRememberedEmail] = useState("");
  const [rememberedPassword, setRememberedPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const rememberedEmail = localStorage.getItem("rememberedEmail");
    const rememberedPassword = localStorage.getItem("rememberedPassword");
    if (rememberedEmail && rememberedPassword) {
      setRememberedEmail(rememberedEmail);
      setRememberedPassword(rememberedPassword);
      setRememberMe(true);
    }
  }, []);

  const handleRememberMe = () => {
    setRememberMe(!rememberMe);
    if (!rememberMe) {
      localStorage.setItem("rememberedEmail", emailInputRef.current.value);
      localStorage.setItem(
        "rememberedPassword",
        passwordInputRef.current.value
      );
    } else {
      localStorage.removeItem("rememberedEmail");
      localStorage.removeItem("rememberedPassword");
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;
    let auth = localStorage.getItem("token");

    setLoading(true);

    fetch(`http://localhost:8080/v1/admin/login`, {
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
          navigate("/admin-dashboard");

          return response.json();
        } else if (response.status === 401) {
          this.setState({ requestFailed: true });
        }
      })
      .then((data) => {
        localStorage.setItem("token", data.token);
      })
      .catch((err) => {
        setPasswordError(true);
        return;
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <Title title="Admin Login">
      <>
        <div className="login-admin" data-aos="fade-down">
          <div className="login-ic">
            <img className="login-admin-logo" src={AdminIc} alt={AdminIc} />
          </div>
          <div className="login-admin-box">
            <h3 className="loginreg-title">Halo Admin</h3>
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
                    defaultValue={rememberedEmail}
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
                    defaultValue={rememberedPassword}
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
                  checked={rememberMe}
                  onChange={handleRememberMe}
                />
                <label className="form-check-label" htmlFor="flexCheckChecked">
                  Ingat saya
                </label>
              </div>

              {passwordError && (
                <label className="wrong">Data yang anda masukkan salah!</label>
              )}

              <button className="btn-masuk" type="submit" disabled={loading}>
                {loading ? (
                  <>
                    <Spinner
                      as="span"
                      animation="grow"
                      size="sm"
                      role="status"
                      aria-hidden="true"
                    />
                    Loading...
                  </>
                ) : (
                  "Masuk"
                )}
              </button>
            </Form>
          </div>
        </div>
      </>
    </Title>
  );
};

export default LoginAdmin;
