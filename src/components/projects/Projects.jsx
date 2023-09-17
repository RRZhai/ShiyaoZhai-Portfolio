import React, { useState } from "react";
import "./projects.css";
import ProjectCard from "./ProjectCard";
const Projects = () => {
  const project1 = {
    title: "GIGU",
    description:
      "GIGU is a user-friendly job searching engine that connects part-time job seekers and employers for short-term gigs",
    image: "",
    demo: "",
    github: "https://github.com/RRZhai/GIGU-on-demand-job-searching",
    website: "https://gigu-flatiron-version-deploy.onrender.com",
  };
  const project2 = {
    title: "Animal Crossing Matching",
    description:"Animal Crossing Matching is a matching game to improve a  user's memory skills.",
    image: "",
    demo: "https://youtu.be/-8mJt1CO7Mo",
    github: "https://github.com/RRZhai/Animal_Crossing_Matching",
    website: "https://rrzhai.github.io/Animal_Crossing_Matching/"
  };
  const project3 = {
    title: "Haiku Heaven",
    description:"Haiku Heaven is a creative platform empowering users to compose and appreciate Haikus",
    image: "",
    demo: "https://youtu.be/a0xsgQhFos0",
    github: "https://github.com/RRZhai/Haiku_Heaven",
    website: "https://haikuhaven.onrender.com/"
  };
  const [selectproject, setSelectProject] = useState(project1)
  const handleSelectProject = (project) => {
    setSelectProject(project)
  }
  return (
    <section className="projects section" id="projects">
      <div className="project_container container grid">
        <div className="project content">
          <h1 className="project title">{selectproject.title}</h1>
          <p className="project description">{selectproject.description}</p>
        </div>
        <div className="projects slide">
          <ProjectCard project={project1} handleSelectProject={handleSelectProject}/>
          <ProjectCard project={project2} handleSelectProject={handleSelectProject} />
          <ProjectCard project={project3} handleSelectProject={handleSelectProject} />
        </div>
      </div>
    </section>
  );
};

export default Projects;