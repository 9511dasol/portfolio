import React from 'react';
import "./style/Skill.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact } from "@fortawesome/free-brands-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";
import { faC } from "@fortawesome/free-solid-svg-icons";
import { faPython } from "@fortawesome/free-brands-svg-icons";
import { faWindows } from "@fortawesome/free-brands-svg-icons";
import { faJs } from "@fortawesome/free-brands-svg-icons";
import { faCss3Alt } from "@fortawesome/free-brands-svg-icons";
import { faHtml5 } from "@fortawesome/free-brands-svg-icons";
import { faJava } from "@fortawesome/free-brands-svg-icons";
function Skill() {
    return (
        <div className='container'>
            <h2>Skills</h2>
            <section id="skills">
                <div className="skill">
                    <FontAwesomeIcon icon={faReact} />
                    <span>React</span>
                </div>
                <div className="skill">
                    <FontAwesomeIcon icon={faDatabase} />
                    <span>DataBase</span>
                </div>
                <div className="skill">
                    <FontAwesomeIcon icon={ faC } />
                    <span>C</span>
                </div>
                <div className="skill">
                    <FontAwesomeIcon icon={ faC } />
                    <span>C++</span>
                </div>
                <div className="skill">
                    <FontAwesomeIcon icon={ faPython } />
                    <span>Python</span>
                </div>
                <div className="skill">
                    <FontAwesomeIcon icon={ faWindows } />
                    <span>C#</span>
                </div>
                <div className="skill">
                    <FontAwesomeIcon icon={ faJs } />
                    <span>JavaScript</span>
                </div>
                <div className="skill">
                    <FontAwesomeIcon icon={ faJs } />

                    <span>TypeScript</span>
                </div>
                <div className="skill">
                    <FontAwesomeIcon icon={ faCss3Alt } />
                    <span>CSS</span>
                </div>
                <div className="skill">
                    <FontAwesomeIcon icon={ faHtml5 } />
                    <span>HTML</span>
                </div>
                <div className="skill">
                    <FontAwesomeIcon icon={ faJava } />
                    <span>JAVA</span>
                </div>
            </section>
        </div>
    )
}

export default Skill