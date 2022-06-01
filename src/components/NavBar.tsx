import React, { useEffect, useState } from "react";

const NavBar = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    setScrollPosition(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [menuBtnClicked, setMenuBtnClicked] = useState(false);
  const handleClick = () => {
    setMenuBtnClicked(!menuBtnClicked);
  };

  return (
    <nav className={scrollPosition > 20 ? "sticky" : ""}>
      <div className={menuBtnClicked ? "navbar active" : "navbar"}>
        <div className="logo">
          <a href="#home">Portfolio</a>
        </div>
        <ul className="menu">
          <li className="li">
            <a href="#home" onClick={menuBtnClicked ? handleClick : undefined}>
              Home
            </a>
          </li>
          <li className="li">
            <a href="#about" onClick={menuBtnClicked ? handleClick : undefined}>
              About
            </a>
          </li>
          <li className="li">
            <a
              href="#skills"
              onClick={menuBtnClicked ? handleClick : undefined}
            >
              Skills
            </a>
          </li>
          <li className="li">
            <a
              href="#projects"
              onClick={menuBtnClicked ? handleClick : undefined}
            >
              Projects
            </a>
          </li>
          <li className="li">
            <a
              href="#contact"
              onClick={menuBtnClicked ? handleClick : undefined}
            >
              Contact
            </a>
          </li>
          <div
            className="cancel-btn"
            onClick={handleClick}
            onKeyDown={handleClick}
            tabIndex={0}
            role="button"
          >
            <i className="fas fa-times" />
          </div>
        </ul>
        <div className="media-icons">
          <a
            href="https://www.linkedin.com/in/fr%C3%A9d%C3%A9rick-blaizoud"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-linkedin" />
          </a>
          <a
            href="https://github.com/fblaizoud"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-github" />
          </a>
        </div>
      </div>
      <div
        className="menu-btn"
        onClick={handleClick}
        onKeyDown={handleClick}
        tabIndex={0}
        role="button"
        style={
          menuBtnClicked
            ? { opacity: "0", pointerEvents: "none" }
            : { opacity: "1", pointerEvents: "auto" }
        }
      >
        <i className="fas fa-bars" />
      </div>
    </nav>
  );
};

export default NavBar;
