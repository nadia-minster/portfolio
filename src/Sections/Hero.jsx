import { useState, useEffect } from "react";
import nadia from "../assets/Nadia.png";
import sphere from "../assets/sphere.png";
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
      <img
        src={texture}
        alt="background texture"
        className="hero-texture"
        style={{
          opacity: `${backgroundLoaded ? 1 : 0}`,
          transition: "opacity 0.3s ease-in",
        }}
      />

      <div className="hide-overflow">
        <img
          src={sphere}
          alt="decorative sphere"
          className="hero-sphere"
          style={{
            opacity: `${sphereLoaded ? 1 : 0}`,
            transition: "opacity 0.5s ease-in",
          }}
        />
      </div>

      <img
        src={nadia}
        alt="Nadia Minster"
        className="hero-nadia"
        style={{
          opacity: `${nadiaLoaded ? 1 : 0}`,
          transition: "opacity 0.8s ease-in",
        }}
      />
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
