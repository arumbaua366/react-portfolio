import React from "react";
import "animate.css";

export default function About() {
  return (
    <>
    <header className="pt-5 mt-5">
    <div className="container-fluid h-100 align-items-center">
    <div data-bs-spy="scroll" data-bs-target="#" data-bs-offset="0" className="scrollspy-example" tabindex="0">
      <div id="scrollspyHeading1">
        <h1 className="animate__animated animate__pulse">Hello.</h1>
        <h1 className="animate__animated animate__pulse">My name is Andrea Rumbaua.</h1>
        <h2>I'm a Developer based in the San Francisco Bay Area.</h2>
        <p>
          I am a recent graduate of the UC Davis Full-Stack Web Development program. Although my 8+ years of professional experience is in finance and human resources, those industries introduced me to my love for code. I'm a passionate problem solver and aim to create technology that can help solve the smallest problems. I also love musicals, cooking, travel gear 🧳 (as well as traveling), and sci-fi movies/shows.
        </p>
      </div>
    </div>
    </div>
    </header>
    </>
  );
}
