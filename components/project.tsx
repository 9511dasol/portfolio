"use client";
import "../styles/project.css";
import Window from "./window";
import { projects, initialTabs } from "../ingredients/ingredients";
function Projects() {
  return (
    <div className="project__list">
      {projects.map((project, index) => (
        <Window key={index} ingredients={initialTabs} project={project} />
      ))}
    </div>
  );
}

export default Projects;
