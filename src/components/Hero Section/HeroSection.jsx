import React from "react";
import "./Styles.css";

import hero from "../../assets/Images/Hero.png";
import { Link } from "react-router-dom";

const Intro = () => {
  return (
    <div className="hero">
      <div className="i-left">
        <div className="i-name">
          <p className="name">
            Find the Path to Reach
            <br />
            Your <span style={{ color: "#0000ff" }}>Dream Jobs</span>
          </p>
          <p className="i-info">
            Yuk kenali potensi diri kamu yang harus kamu kembangkan
            <br />
            demi mencapai pekerjaan impian kamu.
          </p>
        </div>
        <div className="buttton">
          <button className="btn-primary">
            <Link
              to="/intro-test"
              style={{ textDecoration: "none", color: "#ffffff" }}
            >
              Get Started
            </Link>
          </button>
          <button className="btn-details" as="a" href="#description">
            Learn More
          </button>
        </div>
      </div>
      <div className="i-right">
        <div className="i-box">
          <div>
            <img src={hero} alt="hero" height={510} width={560} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
