import { FaSortDown, FaSortUp } from "react-icons/fa";

const ProjectList = ({ number }) => {
  return (
    <div className="projects-list">
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

export default ProjectList;
