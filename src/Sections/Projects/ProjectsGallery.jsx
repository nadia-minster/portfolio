import movie from "../../assets/project-images/movie.png";
import recipe from "../../assets/project-images/recipe.png";
import travel from "../../assets/project-images/travel.png";

const ProjectsGallery = ({ project }) => {
  console.log(project);
  return (
    <div className="project-gallery">
      {project.image === "movie" ? (
        <img src={movie} alt={project.name} className="gallery-image" />
      ) : project.image === "recipe" ? (
        <img src={recipe} alt={project.name} className="gallery-image" />
      ) : (
        <img src={travel} alt={project.name} className="gallery-image" />
      )}
      <div className="gallery-description">
        <h3 className="name">{project.name}</h3>
        <h3 className="type">{project.type}</h3>
      </div>
    </div>
  );
};

export default ProjectsGallery;
