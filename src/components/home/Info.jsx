import React from "react";

const Info = () => {
  return (
    <div className="home_data">
      <h1 className="home_title">Hi, I'm Shiyao Zhai</h1>
      <h3 className="home_subtitle">Software Developer</h3>
      <p className="home_description">
        I am a full stack web designer with a passion for bringing ideas to life
        through code.
      </p>
      <a href="#contact" className="button button--flex">
        Wanna Talk? 
        <i className="uil uil-message button_icon"></i>
      </a>
    </div>
  );
};

export default Info;