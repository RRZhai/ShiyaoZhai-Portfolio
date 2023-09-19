import React from "react";

const ProjectCard = ({ project, className }) => {
  console.log(project, className);
  return (
    <div className={`projects media ${className}`}>
      <div className="projects image">
        <img src={project.image} alt={project.title} />
      </div>
      <div className="projects demo">
        <iframe
          src={project.demo}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullscreen
        ></iframe>
      </div>
    </div>
  );
};

export default ProjectCard;
