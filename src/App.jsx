import "./App.scss";
import BackgroundParticles from "./components/BackgroundParticles";
import ScrollButton from "./components/ScrollButton";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

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
