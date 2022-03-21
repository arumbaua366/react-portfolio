import React from "react";
import logo from "../assets/img/ar-logos_black.png";
import profilePic from "../assets/img/profilepic.JPG";
import Resume from "../assets/pdf/ar-resume.pdf";

export default function Nav() {
  const [scrollState, setScrollState] = React.useState("");

  const collapse = () => {
    let element = document.getElementById("navMain");
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
      <nav className={`navbar navbar-expand-sm no-wrap sticky-top navbar-light bg-gradient animate__animated animate__fadeIn animate__faster bs-bg-opacity px-2 ${scrollState}`}>
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
                  about
                </a>
              </li>
              <li className="nav-item" onClick={collapse}>
                <a className="nav-link" href="#tech">
                  tech
                </a>
              </li>
              <li className="nav-item" onClick={collapse}>
                <a className="nav-link" href="#projects">
                  projects
                </a>
              </li>
              <li className="nav-item" onClick={collapse}>
                <a className="nav-link" href={Resume} target="_blank" rel="noreferrer">
                  resume
                </a>
              </li>
              <li className="nav-item" onClick={collapse}>
                <a className="nav-link" href="#contact">
                  contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div id="top" className="header bg pt-5 m-5">
        <div className="container mt-5">
          <div className="row pb-4">
            <div className="col-12 position-relative">
              <img
                src={profilePic}
                className="img-fluid rounded-circle mx-auto d-block p-3 animate__animated animate__fadeIn animate__delay-0.5s"
                alt="profile"
                height="auto"
                width="275"
              />
              <h1 className="intro text-center pt-3 animate__animated animate__fadeIn animate__delay-1s">
                My name is{" "}
                <span className="name text-uppercase">Andrea Rumbaua.</span>
              </h1>
              <h2 className="intro text-center pt-2 animate__animated animate__fadeIn animate__delay-2s">
                I'm a Full-Stack Developer based in the San Francisco Bay Area.
              </h2>
              <div className="d-flex pt-4">
                <a
                  className="work btn border border-dark btn-md text-uppercase mx-auto  animate__animated animate__fadeIn animate__delay-3s"
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
