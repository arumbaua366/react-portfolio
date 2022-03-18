import React from "react";
import About from "./components/About";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Nav from "./components/Nav";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Tech from "./components/Technologies";
import background from "./assets/img/background.jpg"

export default function MyApp() {
  return (
    <>
      <div className="row" style={{ backgroundImage: `url(${background})` }}>
        <Nav />
        <Home />
        <About />
        <Tech />
        <Projects />
        <Resume />
        <Footer />
      </div>
    </>
  );
}
