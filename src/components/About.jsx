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
          <div id="scrollspyHeading1" className="border  border-secondary bg-light border-2 rounded pt-5 mt-5">
          
            <h1 className="title text-center display-5">about.</h1>
            <p className="lead fs-3 fw-light m-5">
               Self-motivated, voluntary learner devoted to the lifelong pursuit of knowledge.  Although my 8+ years of professional experience is in other industries such as health, finance, and human resources, those industries introduced me to my love for code.
            </p>
            <p className="lead fs-3 fw-light m-5">
              Committed to team dynamics and employing determination, patience, and persistence to solve even the smallest problems.
            </p>
          </div>
        </div>
    </>
  );
}
