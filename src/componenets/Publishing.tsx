import "./style/style.css";
import { initialTabs } from "./ingredients";
import { publishing } from "./ingredients";
import Window from "./Window";

function Publishing() {
  return (
    <div className="project__list">
      {publishing.map((project, index) => (
        <Window key={index} ingredients={initialTabs} project={project} />
      ))}
    </div>
  );
}

export default Publishing;
