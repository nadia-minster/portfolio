import React from "react";
import nadia from "../assets/Nadia.png";
import sphere from "../assets/sphere.png";
import placeholderNadia from "../assets/Nadia-placeholder.jpg";
import placeholderSphere from "../assets/sphere-placeholder.jpg";
import texture from "../assets/glitch-effect-black-by-rawpixel.jpg";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-scroll";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Hero = () => {
  return (
    <section className="main hero">
      <img className="hero-texture" src={texture} alt="glitch texture" />
      <div className="hide-overflow">
        <LazyLoadImage
          src={sphere}
          placeholder={placeholderSphere}
          alt="decorative sphere"
          className="hero-sphere"
        />
      </div>
      <LazyLoadImage src={nadia} alt="Nadia Minster" className="hero-nadia" />
      <h1 className="heading-hero">Web developer</h1>
      <Link
        to="projects"
        smooth={true}
        duration={500}
        offset={-50}
        placeholder={placeholderNadia}
        className="see-projects-button"
      >
        See Projects <FaArrowRight />
      </Link>
    </section>
  );
};

export default Hero;
