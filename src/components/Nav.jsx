import React from "react";
import logo from "../assets/img/ar-logos_black.png"

export default function Nav() {
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="./Home">
    <img src={logo} alt="my-logo" height="60" width="60" />
    </a>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <a className="nav-link" href="./About">About</a>
        <a className="nav-link" href="./Technologies">Technologies</a>
        <a className="nav-link" href="./Projects">Projects</a>
        <a className="nav-link disabled" href="./Resume" tabindex="-1" aria-disabled="true">Resume</a>
        <a className="nav-link disabled" href="./Contact" tabindex="-1" aria-disabled="true">Contact</a>
      </div>
    </div>
  </div>
</nav>
    </>
  );
}
