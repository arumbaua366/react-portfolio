import React from "react";
import mailImage from "../assets/icons/email.png";
import ghImage from "../assets/icons/github.png";
import lnImage from "../assets/icons/linkedin.png";
import twitterImage from "../assets/icons/twitter.png";
import mediumImage from "../assets/icons/medium.png";

export default function Contact() {
  return (
    <>
      <div id="contact" className="section scrollspy h-100 p-5 m-5">
        <div className="container-fluid bg-transparent mb-4">
          <h1 className="title text-center display-5 p-4 m-5">contact.</h1>
          <div className="text-center">
            <div className="contact-box">
              <a
                href="mailto: andrea.rumbaua@gmail.com"
                className="contact-link"
              >
                {" "}
                <img
                  src={mailImage}
                  alt="img"
                  className="img"
                  height="50"
                  width="50"
                />
              </a>

              <a
                href="https://www.linkedin.com/in/andrearumbaua/"
                className="contact-link"
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                <img
                  src={lnImage}
                  alt="img"
                  className="img"
                  height="50"
                  width="50"
                />
              </a>
              <a
                href="https://github.com/arumbaua366"
                className="contact-link"
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                <img
                  src={ghImage}
                  alt="img"
                  className="img"
                  height="50"
                  width="50"
                />
              </a>
              <a
                href="https://twitter.com/andeandiandy"
                className="contact-link"
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                <img
                  src={twitterImage}
                  alt="img"
                  className="img"
                  height="50"
                  width="50"
                />
              </a>
              <a
                href="https://medium.com/@andyrum366"
                className="contact-link"
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                <img
                  src={mediumImage}
                  alt="img"
                  className="img"
                  height="50"
                  width="50"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
