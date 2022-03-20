import React from "react";

export default function About() {
  return (
    <>
      <div id="about" className="section scrollspy h-100 p-5 m-5">
        <div className="container-fluid d-flex bg-light card mb-4">
          <div className="row-md-6 row-xs-12">
            <div className="card-body">
            <h1 className="title text-center display-5 text-black pt-5 mb-4">about.</h1>
              <p className="lead fw-light m-5">
                Self-motivated, voluntary learner devoted to the lifelong
                pursuit of knowledge. Although my 8+ years of professional
                experience is in other industries such as health, finance, and
                human resources, those industries introduced me to my love for
                code.
              </p>
              <p className="lead fw-light m-5">
                Committed to team dynamics and employing determination,
                patience, and persistence to solve even the smallest problems.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
