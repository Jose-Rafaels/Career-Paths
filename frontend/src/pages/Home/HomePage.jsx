import React, { Component } from "react";
import Title from "../../components/Layout/Title";
import Navbar from "../../components/Navbar Section/NavbarSection";
import HeroSection from "../../components/Hero Section/HeroSection";
import JobsSection from "../../components/Job Section/JobsSection";
import DescSection from "../../components/Desc Section/DescSection";
import Footer from "../../components/Footer Section/FooterSection";

export default class Home extends Component {
  render() {
    return (
      <>
        <Title title="">
          <Navbar />
          <HeroSection />
          <JobsSection />
          <DescSection />
          <Footer />
        </Title>
      </>
    );
  }
}
