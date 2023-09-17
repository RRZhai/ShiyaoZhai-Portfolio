import React from "react";

const Scroll = ({value}) => {
  return (
    <div className="scroll container">
      <a href={value} className="home_scroll-button button--flex">
        <i className="uil uil-scroll scroll-icon"></i>
        <span className="scroll-name">Scroll Down</span>
      </a>
    </div>
  );
};

export default Scroll;
