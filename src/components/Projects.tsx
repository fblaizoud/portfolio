import React from "react";
import ProjectsCarousel from "./ProjectsCarousel";

const Projects = () => {
  return (
    <section className="projects" id="projects">
      <div className="projects__content">
        <div className="projects__content__title">
          <span>My Projects</span>
        </div>
        <div className="projects__content__details">
          <ProjectsCarousel />
        </div>
      </div>
    </section>
  );
};

export default Projects;
