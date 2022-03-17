import React from "react";
import "animate.css";
import profilepic from "../assets/img/profilepic.JPG"

export default function Home() {
  return (
    <>
      <div id="home" className="section scrollspy align-self-center pt-5 mt-5">
        <div className="container-fluid top-50 start-50 pr-0 overflow-hidden">
          <div
            data-bs-spy="scroll"
            data-bs-target="#"
            data-bs-offset="0"
            className="scrollspy-example"
            tabIndex="0"
          >
              <img src={profilepic} className="rounded mx-auto d-block" alt="profile" />
              <h1 className="text-uppercase text-center display-2 animate__animated animate__fadeIn">
                Andrea Rumbaua
              </h1>
              <h2 className="text-center fs-2">I'm a Full-Stack Developer based in the San Francisco Bay Area.</h2>
            </div>
          </div>
        </div>
    </>
  );
}
