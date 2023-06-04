const ProjectsGallery = ({ project }) => {
  console.log(project);
  return (
    <div className="project-gallery">
      <img src={project.image} alt={project.name} className="gallery-image" />
      <div className="gallery-description">
        <h3 className="name">{project.name}</h3>
        <h3 className="type">{project.type}</h3>
      </div>
    </div>
  );
};

export default ProjectsGallery;
