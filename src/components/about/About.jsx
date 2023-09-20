import React from "react";
import "./about.css";
import Scroll from "../Scroll";
import Timeline from "./Timeline";

const About = () => {
  return (
    <section className="about section" id="about">
      <Timeline />
      <div className="about container">
        <h1 className="about title">About Me</h1>
        <p className="about subtitle">Full Stack Web Developer</p>
        <p className="about description">
          I am a dynamic and imaginative individual with a passion for both
          architecture and coding. With experience in Python, JavaScript,
          ReactJS, Redux, RESTful API and HTML/CSS, I bring strong skills in
          project management and problem-solving. I hold a degree in
          Architecture from UC Berkeley, where I honed my creative and
          analytical skills in shaping spaces. Though I faced challenges
          enrolling in official coding classes due to high demand, my
          determination led me to independently pursue coding knowledge and
          skills, resulting in a unique blend of architectural vision and
          technical acumen.
        </p>
      </div>
      <div className="about scroll">
        <Scroll value='#skills'/>
      </div>
    </section>
  );
};

export default About;
