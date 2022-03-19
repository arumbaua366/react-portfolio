import React from "react";
import logo from "../assets/img/ar-logos_black.png";
import profilePic from "../assets/img/profilepic.JPG";

export default function Nav() {
  const [scrollState, setScrollState] = React.useState("");

  const collapse = () => {
    let element = document.getElementByID("navMain");
    element.classList.remove("show");
  };
  React.useEffect(() => {
    const handleScroll = (event) => {
      const offset = event.target.documentElement.scrollTop;
      offset < 50 ? setScrollState("") : setScrollState("scroll-nav");
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollState]);

  return (
    <>
      <nav className={`navbar navbar-expand-sm sticky-top navbar-light bg-gradient animate__animated animate__fadeIn animate__faster bs-bg-opacity px-3 ${scrollState}`}>
        <div className="container">
          <a className="navbar-brand" href="#top">
            <img src={logo} alt="my-logo" height="50" width="50" />
          </a>
          <button
            className="navbar-toggler collapsed rounded-0 ml-auto"
            type="button"
            data-toggle="collapse"
            data-target="#navMain"
            aria-controls="navMain"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navMain">
            <ul className="nav nav-pills">
              <li className="nav-item" onClick={collapse}>
                <a className="nav-link" href="#about">
                  About
                </a>
              </li>
              <li className="nav-item" onClick={collapse}>
                <a className="nav-link" href="#tech">
                  Technologies
                </a>
              </li>
              <li className="nav-item" onClick={collapse}>
                <a className="nav-link" href="#projects">
                  Projects
                </a>
              </li>
              <li className="nav-item" onClick={collapse}>
                <a className="nav-link" href="#resume">
                  Resume
                </a>
              </li>
              <li className="nav-item" onClick={collapse}>
                <a className="nav-link" href="#contact">
                  Contact Me
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div id="top" className="header bg pt-5 m-5">
        <div className="container mt-5">
          <div className="row pb-5">
            <div className="col-12">
              <img
                src={profilePic}
                className="rounded-circle mx-auto d-block p-3"
                alt="profile"
                height="325"
                width="325"
              />
              <h1 className="display-5 text-center pt-3">
                My name is{" "}
                <span className="name text-uppercase">Andrea Rumbaua.</span>
              </h1>
              <p className="display-5 text-center pt-2">
                I'm a Full-Stack Developer based in the San Francisco Bay Area.
              </p>
              <div className="d-flex pt-4">
                <a
                  className="work btn border-dark btn-lg text-uppercase mx-auto"
                  href="#projects"
                  role="button"
                >
                  view my work
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
