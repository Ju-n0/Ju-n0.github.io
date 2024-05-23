import "./projectsContainer.scss";
import { Link } from "react-router-dom";
import { Layout } from "react-feather";

import projectsArray from "../../data/projects.json";

function ProjectsContainer() {
  return (
    <div className="projects-component-container">
      <div className="projects-component-container-title">
        <h1>Mes derniers projets </h1>
        <Layout size={36} className="projects-component-container-title-icon" />
      </div>

      <div className="projects-container">
        {projectsArray.map((project) => (
          <div className="project-container" key={project.id}>
            <h2 className="project-container-title">{project.title}</h2>
            <img className="project-container-img" src={project.img_source} alt="" />
            <h3 className="project-container-nomination">{project.subtitle}</h3>
            <p className="project-container-text">{project.description}</p>

            <div className="project-container-links">
              <Link target="_blank" className="project-container-link" to={project.link}>
                Lien vers github
              </Link>

              {project.deployed_src ? (
                <Link target="_blank" className="project-container-link" to={project.deployed_src}>
                  Lien vers le site internet
                </Link>
              ) : (
                ""
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProjectsContainer;
