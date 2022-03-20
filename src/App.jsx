import React from "react";
import Nav from "./components/Nav";
import About from "./components/About";
import Tech from "./components/Technologies";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";



export default function MyApp() {
  return (
    <>
        <Nav />
        <About />
        <Tech />
        <Projects />
        <Contact />
        <Footer />
    </>
  );
}
