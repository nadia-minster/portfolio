import { FaSortDown, FaSortUp } from "react-icons/fa";
import movie from "../../assets/project-images/movie-list-image.png";
import recipe from "../../assets/project-images/recipe-list-image.png";
import travel from "../../assets/project-images/tour-list-image.png";
import { useState } from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaFigma,
  FaGithub,
  FaExternalLinkAlt,
} from "react-icons/fa";

const ProjectList = ({ project }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="project-list">
      <div className="project">
        <div className="name-and-button">
          <h3>{project.name}</h3>
          <button
            className="open-project"
            aria-haspopup="true"
            aria-label="Open project menu"
            onClick={() => setIsOpen(!isOpen)}
          >
            {!isOpen ? <FaSortDown /> : <FaSortUp />}
          </button>
        </div>

        <div className={`project-list-desc ${!isOpen ? "closed" : "open"}`}>
          {project.description.map((paragraph, index) => (
            <p className="project-description" key={index}>
              {paragraph}
            </p>
          ))}
          <div className="list-icons">
            <div className="list-tech-icons">
              <FaHtml5 />
              <FaCss3Alt />
              <FaJs />
              <FaReact />
              <FaFigma />
              {project.id === 2 && <FaNodeJs />}
            </div>
            <div className="list-link-icons">
              <FaGithub />
              <FaExternalLinkAlt />
            </div>
          </div>

          <img
            src={project.id === 1 ? movie : project.id === 2 ? recipe : travel}
            alt={project.name}
            className="list-image"
            onClick={() => window.open(project.link)}
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectList;
