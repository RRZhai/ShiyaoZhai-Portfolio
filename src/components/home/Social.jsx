import React from "react";

const Social = () => {
  return (
    <div className="home_social">
      <a
        href="https://github.com/RRZhai"
        target="_blank"
        rel="noreferrer"
        className="home__social-icon"
      >
        <i className="uil uil-github icon"></i>
      </a>
      <a
        href="https://www.linkedin.com/in/shiyao-zhai/"
        target="_blank"
        rel="noreferrer"
        className="home__social-icon"
      >
        <i className="uil uil-linkedin icon"></i>
      </a>
      <a
        href="https://www.youtube.com/channel/UCtBw2g9CB4Xxt5w21UGis-A"
        target="_blank"
        rel="noreferrer"
        className="home__social-icon"
      >
        <i className="uil uil-youtube icon"></i>
      </a>
    </div>
  );
};

export default Social;
