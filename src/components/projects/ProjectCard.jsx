import React, { useState } from "react";

const ProjectCard = ({ project, className }) => {
  const [play, setPlay] = useState(false);

  return (
    <div className="projects media card-media active">
      {play ? (
        <div className="projects demo media-child">
          <iframe
            src={project.demo}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullscreen
          ></iframe>
        </div>
      ) : (
        <div className="projects image media-child">
          <img src={project.image} alt={project.title} />
        </div>
      )}

      <div className="projects play-icon icon">
        <i class="uil uil-play icon" onClick={() => setPlay(true)}></i>
        <i class="uil uil-pause" onClick={() => setPlay(false)}></i>
        <a href={project.github} target="_blank" className="home__social-icon">
          <i className="uil uil-github icon"></i>
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
