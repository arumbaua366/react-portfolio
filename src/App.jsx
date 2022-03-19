import React from "react";
import About from "./components/About";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Projects from "./components/Projects";
import Tech from "./components/Technologies";
import background from "./assets/img/background.jpg"

export default function MyApp() {
  return (
    <>
    <div style={{ 
      backgroundImage: `url(${background})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      height: "auto",
      width: "100vw",
      }}>
        <Nav />
        <About />
        <Tech />
        <Projects />
        <Footer />
       </div>
    </>
  );
}
