import React from "react";

export default function About() {
  return (
    <>

        <div id="about"
          data-bs-spy="scroll"
          data-bs-target="#about"
          data-bs-offset="0"
          className="section scrollspy container-fluid d-flex w-auto p-3 align-items-center"
          tabIndex="0"
        >
          <div id="scrollspyHeading1" className="border  border-secondary border-3 rounded">
            <h1 className="text-center display-5 pt-3 m-5">about.</h1>
            <h5 className="fs-4 fw-light pb-5 m-5">
              I am a recent graduate of the UC Davis Full-Stack Web Development program. Although my 8+ years of professional experience is in finance and human resources, those industries introduced me to my love for code. I'm a passionate problem solver and aim to create technology that can help solve the smallest problems. I also love musicals, cooking, travel gear 🧳 (as well as traveling), and sci-fi movies/shows.
            </h5>
          </div>
        </div>
    </>
  );
}
