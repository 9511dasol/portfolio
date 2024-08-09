import "./style/style.css";
import { initialTabs } from "./ingredients";
import { projects } from "./ingredients";
import Window from "./Window";

function Project() {
  return (
    <div className="project__list">
      {projects.map((project, index) => (
        <Window key={index} ingredients={initialTabs} project={project} />
      ))}
    </div>
  );
}

export default Project;
