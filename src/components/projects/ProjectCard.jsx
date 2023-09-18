import React from "react";

const ProjectCard = ({ project }) => {
  return (
    <div className="projects item">
      <div className="projects media" >
        <div className="projects image">
          <img src={project.image} />
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
    </div>
  );
};

export default ProjectCard;
