import React from "react";
import logo from "../assets/img/ar-logos_black.png"

export default function Nav() {
  return (
    <>
    <div>
<nav id="nav-top" className="navbar fixed-top navbar-light bg-light px-3">
  <a className="navbar-brand" href="#">
  <img src={logo} alt="my-logo" height="60" width="60" />
  </a>
  <ul className="nav nav-pills">
    <li className="nav-item">
      <a className="nav-link" href="./About">About</a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="./Technologies">Technologies</a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="#scrollspyHeading2">Projects</a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="#scrollspyHeading2">Resume</a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="#scrollspyHeading2">Contacts</a>
    </li>
  </ul>
</nav>
</div>
    </>
  );
}
