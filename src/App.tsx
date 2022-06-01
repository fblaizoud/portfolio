import "./App.scss";

import React from "react";

import About from "./components/About";
import BackgroundParticles from "./components/BackgroundParticles";
import Contact from "./components/Contact";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Projects from "./components/Projects";
import ScrollButton from "./components/ScrollButton";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="app">
      <BackgroundParticles />
      <ScrollButton />
      <NavBar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
