import React from "react";

const ProjectCard = ({ project }) => {
  return (
    <div className="projects item">
      <div className="projects media">
        <div className="projects image">
          <img src={project.image} />
        </div>
        <div className="projects demo">{project.demo}</div>
      </div>
      <div className="projects icon">
        <span className="project action-icon">
          <i className="uil uil-play"></i>
        </span>
        <span className="project action-icon">
          <i className="uil uil-pause"></i>
        </span>
      </div>
    </div>
  );
};

export default ProjectCard;
