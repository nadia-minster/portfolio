import React from "react";
import { FaSortDown, FaSortUp } from "react-icons/fa";

const Project = ({ number }) => {
  return (
    <div className="single-project">
      <div className="project">
        <h3> Project Name</h3>
        <button
          className="open-project"
          aria-haspopup="true"
          aria-label="Open project menu"
        >
          <FaSortDown />
        </button>
      </div>
    </div>
  );
};

export default Project;
