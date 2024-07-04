import React from 'react'
import "./style/Learning.css"

interface Project {
  title: string;
  subheading: string;
  img: string;
  description: string;
  link: string;
}

const projects: Project[] = [

  {
    title: "쇼핑몰 홈페이지",
    subheading: "For JSP",
    img: "./img/shop.png",
    description: "쿠팡을 참고하여 만든 쇼핑몰 홈페이지",
    link: "https://github.com/9511dasol/MiniProject",
  },
  {
    title: "싸이월드 미니홈피(클론코딩)",
    subheading: "mini Homepage",
    img: "./img/Minihomepage.png",
    description: "싸이월드 메인 홈페이지와 미니홈피를 참고하여 만든 사이트",
    link: "https://github.com/9511dasol/MiniProject_2",
  },
  {
    title: "DM of Instagram clone coding",
    subheading: "DM of Instagram",
    img: "./img/DM.png",
    description: "인스타그램을 참고하여 만든 인스타그램 dm page",
    link: "https://github.com/9511dasol/Lotto",
  },
]

function Academy() {
  return (
    <div className='container'>
      <section>
        <h2>프로젝트(학교)</h2>
        {projects.map((project, index) => (
          <div className="project" key={index}>
            <h3>{project.title}</h3>
            <div className="pro-comm detail">
              <p>{project.description}</p>
            </div>
            <a href={project.link} title={project.subheading}>
              <img src={project.img} alt={project.subheading} />
            </a>
          </div>
        ))}
      </section>
    </div>
  )
}

export default Academy