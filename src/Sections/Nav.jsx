import React from "react";
import { FaArrowDown } from "react-icons/fa";

const Nav = () => {
  return (
    <nav>
      <ul>
        <li>About</li>
        <li>Projects</li>
      </ul>
      <button>
        <FaArrowDown className="resume-icon" />
        Resume
      </button>
    </nav>
  );
};

export default Nav;
