import React from "react";

export default function About() {
  return (
    <>
      <div id="about" className="section scrollspy h-100 py-5 m-5">
        <div className="container-fluid bg-light card">
          <div className="row">
            <div className="card-body">
            <h1 className="title text-center display-5 text-black pt-5">about.</h1>
              <p className="fw-light pt-3 mx-3">
                Self-motivated, voluntary learner devoted to the lifelong
                pursuit of knowledge. Although my 8+ years of professional
                experience is in the health, finance, and
                human resources industries, they have provided me with valuable skills and introduced me to my love for
                code.
              </p>
              <p className="fw-light mx-3">
                Experienced with interpersonal communication and committed to team dynamics and employing determination,
                patience, and persistence in solving even the smallest problems. 
              </p>
              <p className="fw-light mx-3">
               Besides working on personal projects outside of work, I enjoy musicals, cooking, travel gear/every day carry gear, and sci-fi movies/shows.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
