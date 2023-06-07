import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaFigma,
  FaGithub,
  FaEnvelope,
} from "react-icons/fa";

const About = () => {
  return (
    <section className="main about" id="about">
      <h2>About Me</h2>
      <div className="about-text">
        <p>
          I am a web developer with a strong passion for UX/UI design. My
          interest in web development began in 2018 when I decided to learn web
          design. However, shortly after that, I moved to Australia, and due to
          the chaos of relocation, I gave up on it completely. Everything
          changed in the summer of 2021 when I decided to learn Python to better
          connect with my husband, who is also obsessed with programming.
        </p>
        <p>
          This was when I first realized how similar learning programming is to
          learning a foreign language, which wasn't new to me as I studied the
          Persian language at university back in Ukraine. Although I had a lot
          of fun learning Python, I eventually decided to refocus on web
          development, and I've been captivated by it ever since. There's always
          so many things to learn and improve, and this is what I love about it.
        </p>
      </div>
      <div className="tech-icons">
        <FaHtml5 />
        <FaCss3Alt />
        <FaJs />
        <FaReact />
        <FaNodeJs />
        <FaFigma />
      </div>
      <div className="contact">
        <a href="https://github.com/nadia-minster" className="contact-link">
          <FaGithub style={{ marginRight: "15px" }} />
          /nadia-minster
        </a>
        <span className="contact-link">
          <FaEnvelope style={{ marginRight: "15px" }} />
          minsternadiia@gmail.com
        </span>
      </div>
    </section>
  );
};

export default About;
