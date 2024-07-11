import React from 'react';
import "./style/Skill.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faReact } from "@fortawesome/free-brands-svg-icons";
// import { faDatabase } from "@fortawesome/free-solid-svg-icons";
// import { faC } from "@fortawesome/free-solid-svg-icons";
// import { faPython } from "@fortawesome/free-brands-svg-icons";
// import { faWindows } from "@fortawesome/free-brands-svg-icons";
// import { faJs } from "@fortawesome/free-brands-svg-icons";
// import { faCss3Alt } from "@fortawesome/free-brands-svg-icons";
// import { faHtml5 } from "@fortawesome/free-brands-svg-icons";
// import { faJava } from "@fortawesome/free-brands-svg-icons";

interface Skills {
    lang: string,
    img: string,
}


function Skill() {
    const frontend: Skills[] = [
        { lang: 'HTML5', img: "./img/FE/HTML5.png" },
        { lang: 'CSS3', img: "./img/FE/CSS.png" },
        { lang: 'JavaScript', img: "./img/FE/JS.png" },
        { lang: 'jQuery', img: "./img/FE/jquery.png" },
        { lang: 'React', img: "./img/FE/REACT.png" },
        { lang: 'TypeScript', img: "./img/FE/TS.png" },
    ]
    const backend: Skills[] = [
        { lang: 'C', img: "./img/BE/C.png" },
        { lang: 'C++', img: "./img/BE/CPP.png" },
        { lang: 'C#', img: "./img/BE/CSHARP.png" },
        { lang: 'JAVA', img: "./img/BE/JAVA.png" },
        { lang: 'Python', img: "./img/BE/PYTHON.png" },
        { lang: 'Next.js', img: "./img/BE/NEXTJS.png" },
    ]
    const vercon: Skills[] = [
        { lang: 'Github', img: "./img/VC/github.png" },
        { lang: 'Git', img: "./img/VC/git.png" },
    ]

    const database: Skills[] = [
        { lang: 'MySQL', img: "./img/DB/MySQL.jpg" },
        { lang: 'MongoDB', img: "./img/DB/MongoDB.png" },
        { lang: 'Oracle', img: "./img/DB/Oracle.png" },
    ]
    return (
        <div className='sc'>
            <h2>Main Skills</h2>
            <ul className='sc__sl'>
                <li className='c__skills' id='FE'>
                    <h2>FrontEnd</h2>
                    <ul>
                        {frontend.map((skill, index) => (
                            <li className="project" key={index}>
                                <img src={skill.img} />
                                <span className="skill-name">{skill.lang}</span>
                            </li>
                        ))}
                    </ul>
                </li>
                <li className='c__skills' id='BE'>
                    <h2>BackEnd</h2>
                    <ul>
                        {backend.map((skill, index) => (
                            <li className="project" key={index}>
                                <img src={skill.img} />
                                <span className="skill-name">{skill.lang}</span>
                            </li>
                        ))}
                    </ul>
                </li>
                <li className='c__skills' id='VC'>
                    <h2>VC</h2>
                    <ul>
                        {vercon.map((skill, index) => (
                            <li className="project" key={index}>
                                <img src={skill.img} />
                                <span className="skill-name">{skill.lang}</span>
                            </li>
                        ))}
                    </ul>
                </li>
                <li className='c__skills' id='DB'>
                    <h2>DataBase</h2>
                    <ul>
                        {database.map((skill, index) => (
                            <li className="project" key={index}>
                                <img src={skill.img} />
                                <span className="skill-name">{skill.lang}</span>
                            </li>
                        ))}
                    </ul>
                </li>
            </ul>
        </div>

    );
}

export default Skill