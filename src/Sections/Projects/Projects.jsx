import { useState } from "react";
import ProjectList from "./ProjectList";
import ProjectsGallery from "./ProjectsGallery";
import { projects } from "./projects.json";
import { FaThLarge, FaThList } from "react-icons/fa";

const Projects = () => {
  const [mode, setMode] = useState("gallery");

  return (
    <div className="projects-main" id="projects">
      <div className="header-and-mode">
        <h2>Projects</h2>
        <div className="mode-buttons">
          <FaThLarge onClick={() => setMode("gallery")} />
          <FaThList onClick={() => setMode("list")} />
        </div>
      </div>

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
