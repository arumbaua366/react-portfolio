import React from "react";
import cssImage from "../assets/icons/css.png";
import htmlImage from "../assets/icons/html.png";
import jsImage from "../assets/icons/javascript.png";
import mongodbImage from "../assets/icons/mongodb.png";
import mysqlImage from "../assets/icons/mysql.png";
import nextImage from "../assets/icons/nextjs.png";
import nodeImage from "../assets/icons/node.png";
import reactImage from "../assets/icons/react.png";

export default function Tech() {
  return (
    <>
    {/* <div id="tech" className="section scrollspy p-4 m-4">
    <h1 classNameName="text-center display-5 p-4 m-5">technologies.</h1> */}
    <div id="tech" className="section scrollspy p-4 m-4">
        <div className="container">
              <div className="row">
                  <div className="col-lg-8 mx-auto">
                      <h1 className="text-center display-5 text-black mb-4">technologies.</h1>
                      <div className="technology-list">
                        <div className="row">

                          <div className="col-md-6 col-lg-4">
                            <div className="feature-block">
                              <img src={jsImage} alt="img" className="img-fluid" />
                              <h5>JavaScript</h5>
                            </div>
                          </div>

                          <div className="col-md-6 col-lg-4">
                            <div className="feature-block">
                              <img src={htmlImage} alt="img" className="img-fluid" />
                              <h5>HTML</h5>
                            </div>
                          </div>

                          <div className="col-md-6 col-lg-4">
                            <div className="feature-block">
                              <img src={cssImage} alt="img" className="img-fluid" />
                              <h5>CSS</h5>
                            </div>
                          </div>
                  
                          <div className="col-md-6 col-lg-4">
                            <div className="feature-block">
                              <img src={reactImage} alt="img" className="img-fluid" />
                              <h5>React</h5>
                            </div>
                          </div>
                  
                          <div className="col-md-6 col-lg-4">
                            <div className="feature-block">
                              <img src={nextImage} alt="img" className="img-fluid" />
                              <h5>Next.js</h5>
                            </div>
                          </div>
                  
                          <div className="col-md-6 col-lg-4">
                            <div className="feature-block">
                              <img src={nodeImage} alt="img" className="img-fluid" />
                              <h5>Node.js</h5>
                            </div>
                          </div>
                  
                          <div className="col-md-6 col-lg-4">
                            <div className="feature-block">
                              <img src={mysqlImage} alt="img" className="img-fluid" />
                              <h5>MySQL</h5>
                            </div>
                          </div>
                  
                          <div className="col-md-6 col-lg-4">
                            <div className="feature-block">
                              <img src={mongodbImage} alt="img" className="img-fluid" />
                              <h5>MongoDB</h5>
                            </div>
                          </div>
                  
                        </div>
                      </div>
                  </div>
              </div>
              </div>
          </div>
    </>
  );
}
