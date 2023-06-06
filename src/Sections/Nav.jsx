import React from "react";
import { FaArrowDown } from "react-icons/fa";

const Nav = () => {
  const handleDownload = () => {
    window.open("/Nadia Minster – Resume.pdf");
  };
  return (
    <nav>
      <ul>
        <li>About</li>
        <li>Projects</li>
      </ul>
      <button onClick={() => handleDownload()}>
        <FaArrowDown className="resume-icon" />
        Resume
      </button>
    </nav>
  );
};

export default Nav;
