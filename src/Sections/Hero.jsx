import React from "react";
import nadia from "../assets/Nadia.png";
import sphere from "../assets/sphere.png";

const Hero = () => {
  return (
    <section className="main hero">
      <img src={sphere} alt="decorative sphere" className="hero-sphere" />
      <img src={nadia} alt="Nadia Minster" className="hero-nadia" />
      <h1>Web developer</h1>
    </section>
  );
};

export default Hero;
