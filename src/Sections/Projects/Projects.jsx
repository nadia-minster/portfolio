import React from "react";
import Project from "./Project";

const Projects = () => {
  return (
    <div className="projects">
      <h2>Projects</h2>
      <div className="projects-container">
        <Project number={"01"} />
        <Project number={"02"} />
        <Project number={"03"} />
        <Project number={"04"} />
        <Project number={"05"} />
        <Project number={"06"} />
      </div>
    </div>
  );
};

export default Projects;
