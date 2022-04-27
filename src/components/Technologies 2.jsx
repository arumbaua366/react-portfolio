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
    <div id="tech" className="section scrollspy h-100 pt-5 m-5">
        <div className="container text-center display-5 pt-4 mt-5">
                      <h1 className="title text-center display-5 text-black mb-4">technologies.</h1>
                      <div className="technology-list">
                        <div className="row">

                          <div className="col-md-6 col-lg-4">
                            <div className="feature-block">
                              <img src={jsImage} alt="img" className="img-fluid" />
                              <h5 className="text-center pt-3">JavaScript</h5>
                            </div>
                          </div>

                          <div className="col-md-6 col-lg-4">
                            <div className="feature-block">
                              <img src={htmlImage} alt="img" className="img-fluid" />
                              <h5 className="text-center pt-3">HTML</h5>
                            </div>
                          </div>

                          <div className="col-md-6 col-lg-4">
                            <div className="feature-block">
                              <img src={cssImage} alt="img" className="img-fluid" />
                              <h5 className="text-center pt-3">CSS</h5>
                            </div>
                          </div>
                  
                          <div className="col-md-6 col-lg-4">
                            <div className="feature-block">
                              <img src={reactImage} alt="img" className="img-fluid" />
                              <h5 className="text-center pt-3">React</h5>
                            </div>
                          </div>
                  
                          <div className="col-md-6 col-lg-4">
                            <div className="feature-block">
                              <img src={nextImage} alt="img" className="img-fluid" />
                              <h5 className="text-center pt-3">Next.js</h5>
                            </div>
                          </div>
                  
                          <div className="col-md-6 col-lg-4">
                            <div className="feature-block">
                              <img src={nodeImage} alt="img" className="img-fluid" />
                              <h5 className="text-center pt-3">Node.js</h5>
                            </div>
                          </div>
                  
                          <div className="col-md-6 col-lg-4">
                            <div className="feature-block">
                              <img src={mysqlImage} alt="img" className="img-fluid" />
                              <h5 className="text-center pt-3">MySQL</h5>
                            </div>
                          </div>
                  
                          <div className="col-md-6 col-lg-4">
                            <div className="feature-block">
                              <img src={mongodbImage} alt="img" className="img-fluid" />
                              <h5 className="text-center pt-3">MongoDB</h5>
                            </div>
                          </div>
                  

                  </div>
              </div>
              </div>
          </div>
    </>
  );
}
