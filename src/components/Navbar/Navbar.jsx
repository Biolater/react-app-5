import React from "react";
import "./Navbar.css"; // Use a relative path if the stylesheet is in the same directory

const Navbar = () => {
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
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
