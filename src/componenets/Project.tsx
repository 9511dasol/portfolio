import "./style/style.css";
import { initialTabs as initialTabs } from "./ingredients";
import { projects as projects } from "./ingredients";
import Window from "./Window";





function Project() {
    return (
        <div>
          {projects.map((project, index) => (
            <Window key={index} ingredients={initialTabs} project={project} />
          ))}
        </div>
      );
}

export default Project