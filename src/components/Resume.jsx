import React from "react";

export default function Resume() {
  return (
    <>
      <div id="resume" className="text-white section scrollspy pt-4 m-4">
      <h1 className="text-white text-center display-5 pt-4 m-5">resume.</h1>
        <p>
          (650) 676-4030  |  Bay Area, CA  |{"  "}
           <a
            href="mailto: andrea.rumbaua@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            Email
          </a>{"  "}
          |{"  "}
          <a
            href="https://github.com/arumbaua366?tab=overview"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>{"  "}
          |{"  "}
          <a
            href="https://www.linkedin.com/in/andrearumbaua/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>{"  "}
          |{"  "}
          <a
            href="https://medium.com/@andyrum366"
            target="_blank"
            rel="noreferrer"
          >
            Medium
          </a>
        </p>
        <h3>PROJECTS</h3>
        <p>Weather Dashboard - GitHub Repo  |  Deployed Site</p>
        <p>Technologies: JavaScript, HTML, CSS, Bootstrap, OpenWeather API, Netlify</p>
        <ul>
          <li>Weather search application that display current weather data as well as five-day forecast data</li>
          <li>Incorporated localStorage for current and five-day forecast as well as previously searched cities</li>
          <li>Integrated Moment.js library to interact with OpenWeather API to display weather data</li>
        </ul>
        <p>Quizpy - GitHub Repo  |  Deployed Site</p>
        <p>Technologies: JavaScript, HTML, CSS, OpenTrivia API, Netlify</p>
        <ul>
          <li>Medium difficulty quiz game application that dynamically displays 10 multiple-choice questions</li>
          <li>Implemented Fetch API to pull questions and question data from OpenTrivia API</li>
          <li>Formed high scores list using localStorage to store the top 3 highest scores</li>
        </ul>
        <p>ReadME Generator - GitHub Repo  |  Deployed Site</p>
        <p>Technologies: JavaScript, Node.js, command line</p>
        <ul>
          <li>Command line application that dynamically generates readMEs for GitHub projects</li>
          <li>Implemented AJAX requests to obtain user data from GitHub to display in readMEs</li>
        </ul>
        <p>Blog - GitHub Repo  |  Deployed Site</p>
        <p>Technologies: Next.js, TailwindCSS</p>
        <ul>
          <li>Bullet point</li>
          <li>Bullet point</li>
          <li>Bullet point</li>
        </ul>
        <h3>TECHNICAL SKILLS</h3>
        <p>JavaScript, React.js, Next.js, HTML, CSS, TailwindCSS, Bootstrap, Node.js, Express, MongoDB, MySQL, Git,
command line, Heroku, Netlify, Vercel</p>
        <h3>EXPERIENCE</h3>
        <p>TEST DEVELOPMENT TECHNICIAN</p>
        <p>CPS HR CONSULTING  |  Remote</p>
        <p>2016 - Present</p>
        <ul>
          <li>Coordinate with internal team, external departments, and vendors to overhaul 50+ projects to new
item bank application</li>
          <li>Reduce time needed for multi-project candidate processing tasks by 50%</li>
          <li>Develop application user guides for preparing, deploying, and scoring tests for all projects</li>
          <li>Partnered with vendor to transition four major projects to computer-based tests</li>
          <li>Analyzed complex score data for client review to increase candidate performance on tests</li>
        </ul>
        <p>PRACTICE ANALYST</p>
        <p>LINCOLN FINANCIAL ADVISORS  |  Sacramento, CA</p>
        <p>2014 - 2016</p>
        <ul>
          <li>Managed and maintained Salesforce CRM application for all clients under two advisors</li>
          <li>Analyzed and presented client data to accurately predict performance of investment accounts</li>
          <li>Developed highly detailed, customized financial reports for 100+ clients</li>
          <li>Supported advisors with maintaining/creating relationships with new and existing clients</li>
        </ul>
        <h3>EDUCATION</h3>
        <p>University of California, Davis – Full Stack Software Engineering Program</p>
        <p>2020</p>
        <p>California State University, Sacramento – B.S. Healthcare Administration/Gerontology</p>
        <p>2014</p>
      </div>
    </>
  );
}
