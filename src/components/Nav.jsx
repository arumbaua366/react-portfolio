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
      <nav className={`navbar navbar-expand-lg sticky-top navbar-dark bg-gradient animate__animated animate__fadeIn animate__faster bg-secondary px-3 ${scrollState}`}>
      {/* <nav className="navbar navbar-expand-lg sticky-top navbar-dark bg-gradient animate__animated animate__fadeIn animate__faster bg-secondary px-3"> */}
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
          <div className="collapse navbar-collapse bg-secondary" id="navMain">
            <ul className="nav nav-pills">
              <li className="nav-item" onClick={collapse}>
              {/* <li className="nav-item"> */}
                <a className="text-white nav-link" href="#about">
                  About
                </a>
              </li>
              <li className="nav-item" onClick={collapse}>
                <a className="text-white nav-link" href="#tech">
                  Technologies
                </a>
              </li>
              <li className="nav-item" onClick={collapse}>
                <a className="text-white nav-link" href="#projects">
                  Projects
                </a>
              </li>
              <li className="nav-item" onClick={collapse}>
                <a className="text-white nav-link" href="#resume">
                  Resume
                </a>
              </li>
              <li className="nav-item" onClick={collapse}>
                <a className="text-white nav-link" href="#contact">
                  Contact Me
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div  id="top" className="header bg pt-5 m-5">
        <div className="container text-white mt-4">
          <div className="row pb-5">
            <div className="col-12">
              <img
                src={profilePic}
                className="rounded-circle mx-auto d-block p-3"
                alt="profile"
                height="325"
                width="325"
              />
              <h1 className="display-5 text-center pt-5">
                My name is{" "}
                <span className="name text-uppercase">Andrea Rumbaua.</span>
              </h1>
              <h1 className="display-5 text-center pt-4">
                I'm a Full-Stack Developer based in the San Francisco Bay Area.
              </h1>
              <div className="d-flex pt-5">
                <a
                  className="work btn text-white border-white btn-lg text-uppercase mx-auto"
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
