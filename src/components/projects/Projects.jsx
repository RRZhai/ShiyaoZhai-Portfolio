import React, { useState } from "react";
import { useEffect, useRef } from "react";
import "./projects.css";
import ProjectCard from "./ProjectCard";
import Scroll from "../Scroll";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "GIGU",
      description:
        "GIGU is a user-friendly job searching engine that connects part-time job seekers and employers for short-term gigs",
      image:
        "https://github.com/RRZhai/ShiyaoZhai-Portfolio/blob/main/src/assets/gigu_blue.PNG?raw=true",
      demo: "",
      github: "https://github.com/RRZhai/GIGU-on-demand-job-searching",
      website: "https://gigu-flatiron-version-deploy.onrender.com",
    },
    {
      id: 2,
      title: "Animal Crossing Matching",
      description:
        "Animal Crossing Matching is a matching game to improve a  user's memory skills.",
      image:
        "https://github.com/RRZhai/ShiyaoZhai-Portfolio/blob/main/src/assets/Matching.png?raw=true",
      demo: "https://www.youtube.com/embed/-8mJt1CO7Mo?si=nqeDzC3bKc7GXOly",
      github: "https://github.com/RRZhai/Animal_Crossing_Matching",
      website: "https://rrzhai.github.io/Animal_Crossing_Matching/",
    },
    {
      id: 3,
      title: "Haiku Heaven",
      description:
        "Haiku Heaven is a creative platform empowering users to compose and appreciate Haikus",
      image:
        "https://github.com/RRZhai/ShiyaoZhai-Portfolio/blob/main/src/assets/Haiku.png?raw=true",
      demo: "https://www.youtube.com/embed/a0xsgQhFos0?si=iLpCXgYqJfArxPDN",
      github: "https://github.com/RRZhai/Haiku_Heaven",
      website: "https://haikuhaven.onrender.com/",
    },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((current) => Math.min(current + 1, projects.length - 1));
  };
  const handlePrev = () => {
    setCurrentIndex((current) => Math.max(current - 1, 0));
  };

  return (
    <section className="projects section" id="projects">
      <div className="project_container container grid">
        <div className="project_content">
          <div className="project info">
            <h1 className="project title">{projects[currentIndex].title}</h1>
            <p className="project description">
              {projects[currentIndex].description}
            </p>
            <a
              href={projects[currentIndex].website}
              className="button button--flex"
              target="_blank"
            >
              Wanna try?
              <i className="uil uil-arrow-circle-right button_icon"></i>
            </a>
          </div>
          <div className="projects card">
            <div className="projects card-container">
              {projects.map((project, index) => (
                <ProjectCard
                  className={`card-media ${
                    index === currentIndex ? "active" : "inactive"
                  }`}
                  key={project.id}
                  project={project}
                />
              ))}
            </div>
          </div>
          <div className="projects scroll-icon">
            <i className="uil uil-angle-up" onClick={handlePrev}></i>
            <i className="uil uil-angle-down" onClick={handleNext}></i>
          </div>
        </div>
      </div>
      <div className="projects scroll">
        <Scroll value="#contact" />
      </div>
    </section>
  );
};

export default Projects;
