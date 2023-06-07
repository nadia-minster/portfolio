import React from "react";
import { Link } from "react-scroll";

const Nav = () => {
  const handleDownload = () => {
    window.open("/Nadia Minster – Resume.pdf");
  };
  return (
    <nav>
      <div className="nav-links">
        <Link
          to="about"
          smooth={true}
          duration={500}
          offset={-50}
          className="nav-link"
        >
          About
        </Link>
        <Link
          to="projects"
          smooth={true}
          duration={500}
          offset={-50}
          className="nav-link"
        >
          Projects
        </Link>
      </div>
      <button onClick={() => handleDownload()}>Resume</button>
    </nav>
  );
};

export default Nav;
