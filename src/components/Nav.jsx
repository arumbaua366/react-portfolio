import React from "react";
import logo from "../assets/img/ar-logos_black.png";

export default function Nav() {
  return (
    <>
      <header>
        <nav
          id="nav-top"
          className="navbar fixed-top navbar-light bg-light px-3"
        >
          <a className="navbar-brand" href="#home">
            <img src={logo} alt="my-logo" height="60" width="60" />
          </a>
          <ul className="nav nav-pills">
            <li className="nav-item">
              <a className="nav-link" href="#about">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#tech">
                Technologies
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#projects">
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#resume">
                Resume
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">
                Contact Me
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
