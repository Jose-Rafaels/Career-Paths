import React from "react";
import "./Styles.css";
import Fade from "react-reveal/Fade";
import webdev from "../../assets/Images/webdev.png";
import compsyst from "../../assets/Images/compsyst.png";
import sofdev from "../../assets/Images/softdev.png";
import infsec from "../../assets/Images/infsec.png";
import systsoft from "../../assets/Images/syssoft.png";
import compsup from "../../assets/Images/compsup.png";
import dba from "../../assets/Images/dba.png";
import comptinf from "../../assets/Images/comptinf.png";
import compnet from "../../assets/Images/compnet.png";
import netcomp from "../../assets/Images/netcomp.png";

const JobSection = () => {
  return (
    <section className="jobs-section">
      <div className="job-section">
        <p className="title">
          10 Kategori Pekerjaan Berdasarkan
          <br />
          Computing Curriculla 2020
        </p>
        <Fade bottom>
          <div className="job-category1">
            <div className="job-category-card">
              <div className="job-icon">
                <img className="job-icon" src={webdev} alt={webdev} />
              </div>
              <p className="job-title">
                Web Developer <br />& Digital Designer
              </p>
              <p className="job-description">
                Merancang website, pengembangan website, memelihara, mengamankan
                website.
              </p>
              <p className="more">Selengkapnya</p>
            </div>
            <div className="job-category-card">
              <div className="job-icon">
                <img className="job-icon" src={compsyst} alt={compsyst} />
              </div>
              <p className="job-title">
                Computer Systems <br />
                Analysts
              </p>
              <p className="job-description">
                Mendesign sistem, pelayanan kepada klien/manajemen/perusahaan,
                analisa sistem.
              </p>
              <p className="more">Selengkapnya</p>
            </div>
            <div className="job-category-card">
              <div className="job-icon">
                <img className="job-icon" src={sofdev} alt={sofdev} />
              </div>
              <p className="job-title">
                Software Developers, <br />
                Applications
              </p>
              <p className="job-description">
                Pengembangan, pemeliharaan dan implementasi mobile apk.
              </p>
              <p className="more">Selengkapnya</p>
            </div>
            <div className="job-category-card">
              <div className="job-icon">
                <img className="job-icon" src={infsec} alt={infsec} />
              </div>
              <p className="job-title">
                Information Security <br />
                Analysts
              </p>
              <p className="job-description">
                Memelihara software, memeriksa kerentanan dalam sistem komputer
                dan jaringan.
              </p>
              <p className="more">Selengkapnya</p>
            </div>
          </div>
        </Fade>

        <Fade bottom>
          <div className="job-category2">
            <div className="job-category-card">
              <div className="job-icon">
                <img className="job-icon" src={systsoft} alt={systsoft} />
              </div>
              <p className="job-title">
                Software Developers, <br />
                Systems Software
              </p>
              <p className="job-description">
                Merancang software/apk, Pengembangan software/apk, serta
                memelihara software/apk.
              </p>
              <p className="more">Selengkapnya</p>
            </div>
            <div className="job-category-card">
              <div className="job-icon">
                <img className="job-icon" src={compsup} alt={compsup} />
              </div>
              <p className="job-title">
                Computer Support <br />
                Specialists
              </p>
              <p className="job-description">
                Testing dan evaluasi sistem jaringan yang digunakan, memastikan
                jaringan komputer bekerja dengan baik, trouble...
              </p>
              <p className="more">Selengkapnya</p>
            </div>
            <div className="job-category-card">
              <div className="job-icon">
                <img className="job-icon" src={dba} alt={dba} />
              </div>
              <p className="job-title">
                Database <br />
                Administrators
              </p>
              <p className="job-description">
                Mengelola, mengamankan serta perawatan.
              </p>
              <p className="more">Selengkapnya</p>
            </div>
            <div className="job-category-card">
              <div className="job-icon">
                <img className="job-icon" src={comptinf} alt={comptinf} />
              </div>
              <p className="job-title">
                Computer & Information <br />
                Research Scientists
              </p>
              <p className="job-description">
                Menganalisa, eksperimen, implementasi Model.
              </p>
              <p className="more">Selengkapnya</p>
            </div>
          </div>
        </Fade>

        <Fade bottom>
          <div className="job-category3">
            <div className="job-category-card">
              <div className="job-icon">
                <img className="job-icon" src={compnet} alt={compnet} />
              </div>
              <p className="job-title">
                Computer Network <br />
                Architects
              </p>
              <p className="job-description">
                Merancang konfigurasi system, dokumentasi, mengelola instalasi
                jaringan, pemeliharaan jaringan.
              </p>
              <p className="more">Selengkapnya</p>
            </div>
            <div className="job-category-card">
              <div className="job-icon">
                <img className="job-icon" src={netcomp} alt={netcomp} />
              </div>
              <p className="job-title">
                Network & Computer <br />
                Systems Administrators
              </p>
              <p className="job-description">
                mendefinisikan kebutuhan organisasi, memastikan system untuk di
                update, mengoptimasi jaringan dan sistem jaringan...
              </p>
              <p className="more">Selengkapnya</p>
            </div>
          </div>
        </Fade>
      </div>
    </section>
  );
};

export default JobSection;
