import React, { useState } from "react";
import "./projects.css";
import ProjectCard from "./ProjectCard";
import Scroll from "../Scroll";

const Projects = () => {
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
  const [selectproject, setSelectProject] = useState(project1);
  const handleSelectProject = (project) => {
    setSelectProject(project);
  };
  return (
    <section className="projects section" id="projects">
      <div className="project_container container grid">
        <div className="project_content">
          <ProjectCard
            project={project1}
            handleSelectProject={handleSelectProject}
          />
        </div>
        <div className="projects slide_icon">
          <i class="uil uil-angle-left-b scroll-icon"></i>
          <i class="uil uil-angle-right-b scroll-icon"></i>
        </div>
      </div>
      <div className="home scroll">
        <Scroll value="#about" />
      </div>
    </section>
  );
};

export default Projects;
