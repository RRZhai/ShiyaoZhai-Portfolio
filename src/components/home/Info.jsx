import React from "react";
import Social from "./Social";
const Info = () => {
  return (
    <div className="home_data">
      <h1 className="title">Hi, I'm Shiyao Zhai</h1>
      <h3 className="subtitle">Software Developer</h3>
      <p className="description">
        I am a full stack web designer with a passion for bringing ideas to life
        through code.
      </p>
      <a href="#contact" className="button button--flex">
        Wanna Talk? 
        <i className="uil uil-message button_icon"></i>
      </a>
      <Social />
    </div>
  );
};

export default Info;
