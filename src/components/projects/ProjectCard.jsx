import React from "react";

const ProjectCard = ({ project }) => {
  return (
    <div className="projects item">
      <div className="project info">
        <h1 className="project title">{project.title}</h1>
        <p className="project description">{project.description}</p>
        <a
          href={project.website}
          className="button button--flex"
          target="_blank"
        >
          Wanna try?
          <i className="uil uil-arrow-circle-right button_icon"></i>
        </a>
      </div>
      <div className="projects media">
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
        <div className="projects icon">
            <span className="project action-icon">
              <i className="uil uil-play"></i>
            </span>
            <span className="project action-icon">
              <i className="uil uil-pause"></i>
            </span>
          </div>
      </div>
    </div>
  );
};

export default ProjectCard;
