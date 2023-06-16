import { useState, useEffect } from "react";
import nadia from "../assets/Nadia.png";
import sphere from "../assets/sphere.png";
import placeholderNadia from "../assets/Nadia-placeholder.jpg";
import placeholderSphere from "../assets/sphere-placeholder.jpg";
import placeholderGlitch from "../assets/glitch-placeholder.jpg";
import texture from "../assets/glitch-effect-black-by-rawpixel.jpg";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-scroll";

const Hero = () => {
  const [nadiaLoaded, setNadiaLoaded] = useState(false);
  const [sphereLoaded, setSphereLoaded] = useState(false);
  const [backgroundLoaded, setBackgroundLoaded] = useState(false);

  useEffect(() => {
    const nadiaImage = new Image();
    nadiaImage.src = nadia;
    nadiaImage.onload = () => {
      setNadiaLoaded(true);
    };

    const sphereImage = new Image();
    sphereImage.src = sphere;
    sphereImage.onload = () => {
      setSphereLoaded(true);
    };
    const backgroundImage = new Image();
    backgroundImage.src = texture;
    backgroundImage.onload = () => {
      setBackgroundLoaded(true);
    };
  }, []);

  return (
    <section className="main hero">
      {backgroundLoaded ? (
        <img src={texture} alt="background texture" className="hero-texture" />
      ) : (
        <img src={placeholderGlitch} className="hero-texture" />
      )}
      <div className="hide-overflow">
        {sphereLoaded ? (
          <img src={sphere} alt="decorative sphere" className="hero-sphere" />
        ) : (
          <img
            src={placeholderSphere}
            alt="Sphere Placeholder"
            className="hero-sphere"
          />
        )}
      </div>
      {nadiaLoaded ? (
        <img src={nadia} alt="Nadia Minster" className="hero-nadia" />
      ) : (
        <img
          src={placeholderNadia}
          alt="Nadia Minster Placeholder"
          className="hero-nadia"
        />
      )}
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
