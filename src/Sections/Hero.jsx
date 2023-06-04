import React from "react";
import nadia from "../assets/Nadia.png";
import sphere from "../assets/sphere.png";
import texture from "../assets/glitch-effect-black-by-rawpixel.jpg";

const Hero = () => {
  return (
    <section className="main hero">
      <img className="hero-texture" src={texture} alt="glitch texture" />
      <img src={sphere} alt="decorative sphere" className="hero-sphere" />
      <img src={nadia} alt="Nadia Minster" className="hero-nadia" />
      <h1 className="heading-hero">Web developer</h1>
    </section>
  );
};

export default Hero;
