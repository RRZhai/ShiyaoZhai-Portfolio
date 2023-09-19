import React from "react";

const ProjectCard = ({ project, className }) => {
  console.log(project, className);
  return (
    <div className="projects media card-media active">
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
      <div className="projects play-icon icon">
        <i class="uil uil-play icon"></i>
        <i class="uil uil-pause"></i>
        <a
          href={project.github}
          target="_blank"
          className="home__social-icon"
        >
          <i className="uil uil-github icon"></i>
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
