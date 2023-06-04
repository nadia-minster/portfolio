import { useState } from "react";
import ProjectList from "./ProjectList";
import ProjectsGallery from "./ProjectsGallery";
import { projects } from "./projects.json";

const Projects = () => {
  const [mode, setMode] = useState("gallery");
  const handleChangeMode = () => {
    if (mode === "gallery") {
      setMode("list");
    } else setMode("gallery");
  };

  return (
    <div className="projects-main">
      <h2>Projects</h2>
      <button onClick={() => handleChangeMode()}>{mode}</button>
      <div className={`projects-${mode}`}>
        {projects.map((project) => {
          return mode === "gallery" ? (
            <ProjectsGallery project={project} key={project.id} />
          ) : (
            <ProjectList project={project} key={project.id} />
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
