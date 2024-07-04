import React from 'react';
import "./style/Learning.css";


interface Project {
    title: string;
    subheading: string;
    img: string;
    description: string;
    link: string;
}

const projects: Project[] = [

    {
        title: "카드를 추천해주는 청년들",
        subheading: "Card",
        img: "./img/card.png",
        description: "AI(자연어 처리)를 이용한 카드 추천 웹사이트 제작",
        link: "https://github.com/9511dasol/Card",
    },
    {
        title: "영어 타자 연습",
        subheading: "Taja",
        img: "./img/taja.png",
        description: "영어 긴 글 타자 연습 프로그램 만들기",
        link: "https://github.com/9511dasol/Eng_Taja_Practice",
    },
    {
        title: "Lotto Program",
        subheading: "Lotto",
        img: "./img/lotto.png",
        description: "오픈소프트웨어를 활용한 로또 프로그램 만들기",
        link: "https://github.com/9511dasol/Lotto",
    },
    {
        title: "포트플리오",
        subheading: "Portfolio",
        img: "./img/portfolio.png",
        description: "포트플리오",
        link: "https://github.com/9511dasol/portfolio",
    },
]

function Universty() {
    return (
        <div className='container'>
            <section>
                <h2>프로젝트(Univ.)</h2>
                {projects.map((project, index) => (
                    <div className="project" key={index}>
                        <h3>{project.title}</h3>
                        <div className="pro-comm detail">
                            <p>{project.description}</p>
                        </div>
                        <a href={project.link} title={project.subheading}>
                            <img src={project.img} alt={project.subheading}/>
                        </a>
                    </div>
                ))}

            </section>
        </div>
    )
}

export default Universty