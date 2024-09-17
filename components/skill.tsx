import {
  backend,
  database,
  framework,
  frontend,
  vercon,
} from "../ingredients/ingredients";
import "../styles/skill.css";

function Skills() {
  //   return <section className="home">dsaytjytjytjytjytdsa</section>;///
  return (
    <div className="sc">
      <h2>Main Skills</h2>
      <ul className="sc__sl">
        <li className="c__skills" id="FE">
          <h2>FrontEnd</h2>
          <ul>
            {frontend.map((skill, index) => (
              <li className="skill__list" key={index}>
                <img src={skill.img.src} />
                <span style={{ color: "white" }} className="skill-name">
                  {skill.lang}
                </span>
              </li>
            ))}
          </ul>
        </li>
        <li className="c__skills" id="BE">
          <h2>BackEnd</h2>
          <ul>
            {backend.map((skill, index) => (
              <li className="skill__list" key={index}>
                <img src={skill.img.src} />
                <span style={{ color: "white" }} className="skill-name">
                  {skill.lang}
                </span>
              </li>
            ))}
          </ul>
        </li>
        <li className="c__skills" id="FW">
          <h2>Framework</h2>
          <ul>
            {framework.map((skill, index) => (
              <li className="skill__list" key={index}>
                <img src={skill.img.src} />
                <span style={{ color: "white" }} className="skill-name">
                  {skill.lang}
                </span>
              </li>
            ))}
          </ul>
        </li>
        <li className="c__skills" id="DB">
          <h2>DataBase</h2>
          <ul>
            {database.map((skill, index) => (
              <li className="skill__list" key={index}>
                <img src={skill.img.src} />
                <span style={{ color: "white" }} className="skill-name">
                  {skill.lang}
                </span>
              </li>
            ))}
          </ul>
        </li>

        <li className="c__skills" id="VC">
          <h2>VC</h2>
          <ul>
            {vercon.map((skill, index) => (
              <li className="skill__list" key={index}>
                <img src={skill.img.src} />
                <span style={{ color: "white" }} className="skill-name">
                  {skill.lang}
                </span>
              </li>
            ))}
          </ul>
        </li>
      </ul>
    </div>
  );
}

export default Skills;
