import movie from "../../assets/project-images/movie.png";
import recipe from "../../assets/project-images/recipe.png";
import travel from "../../assets/project-images/travel.png";

const ProjectsGallery = ({ project }) => {
  console.log(project);
  return (
    <div className="project-gallery">
      {project.image === "movie" ? (
        <img
          src={movie}
          alt={project.name}
          className="gallery-image"
          onClick={() => window.open(project.link)}
        />
      ) : project.image === "recipe" ? (
        <img
          src={recipe}
          alt={project.name}
          className="gallery-image"
          onClick={() => window.open(project.link)}
        />
      ) : (
        <img
          src={travel}
          alt={project.name}
          className="gallery-image"
          onClick={() => window.open(project.link)}
        />
      )}
      <div className="gallery-description">
        <a href={project.link} className="name">
          {project.name}
        </a>
        <h3 className="type">{project.type}</h3>
      </div>
    </div>
  );
};

export default ProjectsGallery;
