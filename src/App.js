import React from "react";
import About from "./components/About";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Nav from "./components/Nav";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Tech from "./components/Technologies";

export default function MyApp() {
  return (
    <>
      <div class="row">
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
