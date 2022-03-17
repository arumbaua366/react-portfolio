import React from "react";
import "animate.css";

export default function About() {
  return (
    <>
        <div id="about"
          data-bs-spy="scroll"
          data-bs-target="#"
          data-bs-offset="0"
          className="section scrollspy container-fluid d-flex w-auto p-3 align-items-center"
          tabIndex="0"
        >
          <div id="scrollspyHeading1">
            <p className="text-start fs-4 fw-light">
              I am a recent graduate of the UC Davis Full-Stack Web Development program. Although my 8+ years of professional experience is in finance and human resources, those industries introduced me to my love for code. I'm a passionate problem solver and aim to create technology that can help solve the smallest problems. I also love
              musicals, cooking, travel gear 🧳 (as well as traveling), and sci-fi movies/shows.
            </p>
          </div>
        </div>
    </>
  );
}
