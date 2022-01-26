import React from "react";
import "normalize.css";

// Compoents
import Hero from "../components/Hero";
import About from "../components/About";
import Tools from "../components/Tools";
import Projects from "../components/Projects";

function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Tools />
      <Projects />
    </>
  );
}

export default HomePage;
