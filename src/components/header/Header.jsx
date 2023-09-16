import React, { useState } from "react";
import "./header.css";
const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const handleMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <header className="header">
      <nav className="nav container">
        <a href="index.html" className="nav__logo">
          Shiyao Zhai
        </a>
        {showMenu ? (
          <div className="nav__menu">
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
                <a href="#portfolio" className="nav__link">
                  <i className="uil uil-scenery nav__icon"></i> Projects
                </a>
              </li>
              <li className="nav__item">
                <a href="#contact" className="nav__link">
                  <i className="uil uil-message nav__icon"></i> Contact
                </a>
              </li>
            </ul>
            <div className="nav__toggle" onClick={handleMenu}>
              <i className="uil uil-times nav__close" id="nav-close"></i>
            </div>
          </div>
        ) : (
          <div className="nav__toggle" onClick={handleMenu}>
            <i className="uil uil-apps"></i>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
