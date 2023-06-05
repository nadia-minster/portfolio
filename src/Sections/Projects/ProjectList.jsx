import { FaSortDown, FaSortUp } from "react-icons/fa";
import { useState } from "react";

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

        <div
          className={`project-list-desc ${!isOpen ? "closed" : "open"}`}
        ></div>
      </div>
    </div>
  );
};

export default ProjectList;
