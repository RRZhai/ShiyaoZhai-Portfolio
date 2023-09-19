import React, { useState } from "react";
import { useEffect, useRef } from "react";
import "./projects.css";
import ProjectCard from "./ProjectCard";
import Scroll from "../Scroll";
import Swiper from "swiper";
import "swiper/swiper-bundle.css";

const Projects = () => {
  useEffect(() => {
    const swiper = new Swiper("#mainSwiper", {
        direction: "horizontal",
        loop: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
}, []);

  const project1 = {
    id: 1,
    title: "GIGU",
    description:
      "GIGU is a user-friendly job searching engine that connects part-time job seekers and employers for short-term gigs",
    image:
      "https://github.com/RRZhai/ShiyaoZhai-Portfolio/blob/main/src/assets/gigu_blue.PNG?raw=true",
    demo: "",
    github: "https://github.com/RRZhai/GIGU-on-demand-job-searching",
    website: "https://gigu-flatiron-version-deploy.onrender.com",
  };
  const project2 = {
    id: 2,
    title: "Animal Crossing Matching",
    description:
      "Animal Crossing Matching is a matching game to improve a  user's memory skills.",
    image:
      "https://github.com/RRZhai/ShiyaoZhai-Portfolio/blob/main/src/assets/Matching.png?raw=true",
    demo: "https://www.youtube.com/embed/-8mJt1CO7Mo?si=nqeDzC3bKc7GXOly",
    github: "https://github.com/RRZhai/Animal_Crossing_Matching",
    website: "https://rrzhai.github.io/Animal_Crossing_Matching/",
  };
  const project3 = {
    id: 3,
    title: "Haiku Heaven",
    description:
      "Haiku Heaven is a creative platform empowering users to compose and appreciate Haikus",
    image:
      "https://github.com/RRZhai/ShiyaoZhai-Portfolio/blob/main/src/assets/Haiku.png?raw=true",
    demo: "https://www.youtube.com/embed/a0xsgQhFos0?si=iLpCXgYqJfArxPDN",
    github: "https://github.com/RRZhai/Haiku_Heaven",
    website: "https://haikuhaven.onrender.com/",
  };
  const [selectproject, setSelectProject] = useState(project2);

  const handleSelectProject = (project) => {
    setSelectProject(project);
  };

  return (
    <section className="projects section" id="projects">
      <div className="project_container container grid">
        <div className="project_content">
          <div className="project info">
            <h1 className="project title">{selectproject.title}</h1>
            <p className="project description">{selectproject.description}</p>
            <a
              href={selectproject.website}
              className="button button--flex"
              target="_blank"
            >
              Wanna try?
              <i className="uil uil-arrow-circle-right button_icon"></i>
            </a>
          </div>
          <div className="swiper-container" id="mySwiper">
            <div className="projects swiper-wrapper">
              <ProjectCard
                className="swiper-slide slide_1"
                project={project1}
                handleSelectProject={handleSelectProject}
              />
              <ProjectCard
                className="swiper-slide slide_2"
                project={project2}
                handleSelectProject={handleSelectProject}
              />
              <ProjectCard
                className="swiper-slide slide_3"
                project={project3}
                handleSelectProject={handleSelectProject}
              />
            </div>
            <div className="swiper-button-prev">
              <i className="uil uil-angle-left-b"></i>
            </div>
            <div className="swiper-button-next">
              <i className="uil uil-angle-right-b"></i>
            </div>
          </div>
        </div>
      </div>
      <div className="home scroll">
        <Scroll value="#about" />
      </div>
    </section>
  );
};

export default Projects;
