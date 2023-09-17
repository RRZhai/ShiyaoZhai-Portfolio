import React, { useState } from "react";
import "./header.css";
const Header = () => {

  return (
    <header className="header">
      <nav className="nav container">
        <a href="index.html" className="nav__logo">
          Shiyao Zhai
        </a>
          <div className="nav__menu show-menu">
            <ul className="nav__list grid">
              <li className="nav__item">
                <a href="#home" className="nav__link">
                  <i className="uil uil-home nav__icon"></i> Home
                </a>
              </li>
              <li className="nav__item">
                <a href="#about" className="nav__link">
                  <i className="uil uil-user nav__icon"></i> About
                </a>
              </li>
              <li className="nav__item">
                <a href="#skills" className="nav__link">
                  <i className="uil uil-file-alt nav__icon"></i> Skills
                </a>
              </li>
              <li className="nav__item">
                <a href="#projects" className="nav__link">
                  <i className="uil uil-scenery nav__icon"></i> Projects
                </a>
              </li>
              <li className="nav__item">
                <a href="#contact" className="nav__link">
                  <i className="uil uil-message nav__icon"></i> Contact
                </a>
              </li>
            </ul>
          </div>
      </nav>
    </header>
  );
};

export default Header;
