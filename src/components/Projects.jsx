import React from "react";
import projectOne from "../assets/img/weatherdashss.png";
import projectTwo from "../assets/img/quizpyss.png";
import projectThree from "../assets/img/readmegenss.png";

export default function Projects() {
  return (
    <>
      <div id="projects" className="section scrollspy h-100 p-5 m-5">
        <h1 className="text-center display-5 p-4 m-5">projects.</h1>
        <div className="container-fluid bg-transparent card mb-4">
          <div className="row g-0">
            <div className="col-md-6 col-xs-12">
              <img src={projectOne} className="card-img" alt="weatherdashimg" />
            </div>
            <div className="col-md-6 col-xs-12">
              <div className="card-body">
                <h5 className="card-title">Weather Dashboard</h5>
                <p className="card-text">
                  Weather search application that displays current weather data
                  as well as five-day forecast data.
                </p>
                <div className="card-body">
                  <a
                    href="https://github.com/arumbaua366/ar_weather-dash"
                    className="card-link"
                  >
                    GitHub Repo
                  </a>
                  <a
                    href="https://arweatherdash.netlify.app/"
                    className="card-link"
                  >
                    Site
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid bg-transparent card mb-4">
          <div className="row g-0">
          <div className="col-md-6 col-xs-12">
              <div className="card-body">
                <h5 className="card-title">Quizpy!</h5>
                <p className="card-text">
                  Medium difficulty quiz game application that dynamically
                  displays 10 multiple-choice questions.
                </p>
                <div className="card-body">
                  <a
                    href="https://github.com/arumbaua366/quizpy"
                    className="card-link"
                  >
                    GitHub Repo
                  </a>
                  <a href="https://quizpy.netlify.app/" className="card-link">
                    Site
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xs-12">
              <img
                src={projectTwo}
                className="card-img"
                alt="quizpyimg"
              />
            </div>
          </div>
        </div>
        <div className="container-fluid bg-transparent card mb-4">
          <div className="row g-0">
            <div className="col-md-6 col-xs-12">
              <img
                src={projectThree}
                className="card-img"
                alt="readmeimg"
              />
            </div>
            <div className="col-md-6 col-xs-12">
              <div className="card-body">
                <h5 className="card-title">ReadME Generator</h5>
                <p className="card-text">
                  Command line application that dynamically generates readMEs
                  for GitHub projects.
                </p>
                <div className="card-body">
                  <a href="https://github.com/arumbaua366/readme_generator" className="card-link">
                    GitHub Repo
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* for more projects */}
        {/* <div className="container-fluid bg-secondary card mb-4">
          <div className="row g-0">
            <div className="col-md-4">
              <img src="..." className="card-img" alt="..." />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                <div className="card-body">
                  <a href="" className="card-link">
                    Card link
                  </a>
                  <a href="#" className="card-link">
                    Another link
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </>
  );
}
