import React from "react";
import "./Styles.css";
import hero from "../../assets/Hero.png";

const Intro = () => {
  return (
    <div className="hero" id="Hero">
      <div className="i-left">
        <div className="i-name">
          <p className="name">
            Find the Path to Reach
            <br />
            Your Dream Jobs
          </p>
          <p className="i-info">
            Yuk kenali potensi diri kamu yang harus kamu kembangkan
            <br />
            demi mencapai pekerjaan impian kamu.
          </p>
          <button>Get Started</button>
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
