import React from "react";
import nadia from "../assets/Nadia.png";
import sphere from "../assets/sphere.png";
import texture from "../assets/glitch-effect-black-by-rawpixel.jpg";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-scroll";

const Hero = () => {
  return (
    <section className="main hero">
      <img className="hero-texture" src={texture} alt="glitch texture" />
      <div className="hide-overflow">
        <img src={sphere} alt="decorative sphere" className="hero-sphere" />
      </div>
      <img src={nadia} alt="Nadia Minster" className="hero-nadia" />
      <h1 className="heading-hero">Web developer</h1>
      <Link
        to="projects"
        smooth={true}
        duration={500}
        offset={-50}
        className="see-projects-button"
      >
        See Projects <FaArrowRight />
      </Link>
    </section>
  );
};

export default Hero;
