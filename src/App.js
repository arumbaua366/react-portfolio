import React from "react";
import About from "./components/About";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Projects from "./components/Projects";

export default function MyApp() {
  return (
    <>
      <div class="row">
        <Nav />
        <About />
        <Projects />
        <Footer />
      </div>
    </>
  );
}
