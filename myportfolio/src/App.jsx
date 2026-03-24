import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

export default function App() {
  return (
    <>
      <Navigation />
      <Hero />
      <Projects />
      <Contact />
    </>
  );
}