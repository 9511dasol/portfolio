"use client";
import "../styles/project.css";
import Window from "./window";
import { publishing , initialTabs } from "../ingredients/ingredients";
function Publishings() {
  return (
    <div className="project__list">
      {publishing .map((project, index) => (
        <Window key={index} ingredients={initialTabs} project={project} />
      ))}
    </div>
  );
}

export default Publishings;
