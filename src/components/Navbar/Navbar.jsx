import React, { useState, useEffect } from "react";
import "./Navbar.css"; // Use a relative path if the stylesheet is in the same directory
import { toggleIcon, closeIcon } from "../../assets/data";

const Navbar = () => {
  const [menuOpenRequest, setMenuOpenRequest] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 720) {
        setMenuOpenRequest(false);
      }
    };

    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header>
      <nav className="container">
        <div className="navbar">
          <div className="nav-logo">GD.</div>
          <ul>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#ourwork">Our Work</a>
            </li>
            <button className="enroll">Enrol Now</button>
          </ul>
          <button onClick={() => setMenuOpenRequest(true)} className="toggle-button">
            <img src={toggleIcon} alt="toggle button" />
          </button>
          <div className={menuOpenRequest ? "toggle-menu toggle-open" : "toggle-menu"}>
            <button onClick={() => setMenuOpenRequest(false)} className="close-menu">
              <img src={closeIcon} alt="close button" />
            </button>
            <div className="toggle-menu__content">
              <a href="#about">About</a>
              <a href="#services">Services</a>
              <a href="#our-work">Our Work</a>
              <button className="button-2--sm">Enroll Now</button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
