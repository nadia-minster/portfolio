import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaBootstrap,
  FaReact,
  FaNodeJs,
  FaFigma,
  FaGithub,
  FaEnvelope,
} from "react-icons/fa";

const About = () => {
  return (
    <section className="main about">
      <h2>About Me</h2>
      <div className="about-text">
        <p>
          Yorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          vulputate libero et velit interdum, ac aliquet odio mattis. Class
          aptent taciti sociosqu ad litora torquent per conubia nostra, per
          inceptos himenaeos. Curabitur tempus urna at turpis condimentum
          lobortis.
        </p>
        <p>
          Gorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          vulputate libero et velit interdum, ac aliquet odio mattis. Class
          aptent taciti sociosqu ad litora torquent per conubia nostra, per
          inceptos himenaeos. Curabitur tempus urna at turpis condimentum
          lobortis.
        </p>
      </div>
      <div className="tech-icons">
        <FaHtml5 />
        <FaCss3Alt />
        <FaBootstrap />
        <FaJs />
        <FaReact />
        <FaNodeJs />
        <FaFigma />
      </div>
      <div className="contact">
        <a href="https://github.com/nadia-minster">
          <FaGithub style={{ marginRight: "15px" }} />
          /nadia-minster
        </a>
        <span>
          <FaEnvelope style={{ marginRight: "15px" }} />
          minsternadiia@gmail.com
        </span>
      </div>
    </section>
  );
};

export default About;
