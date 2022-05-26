import ProjectsList from "./ProjectsList";

const Projects = () => {
  return (
    <section className="projects" id="projects">
      <div className="projects__content">
        <div className="projects__content__title">
          <span>My Projects</span>
        </div>
        <div className="projects__content__details">
          <ProjectsList />
        </div>
      </div>
    </section>
  );
};

export default Projects;
