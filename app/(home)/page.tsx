"use client";
import "boxicons/css/boxicons.min.css";
import BaInfo from "../../components/basic-information";
import Projects from "../../components/project";
import Skills from "../../components/skill";
import Publishings from "../../components/publishing";
import "../../styles/reaction.css";
export default function Tomato() {
  return (
    <div>
      <BaInfo />
      <div className="reaction">
        <Skills />
        <h1 style={{ fontSize: "20px" }}>Project</h1>
        <Projects />
        <h1 style={{ fontSize: "20px" }}>Publishing</h1>
        <Publishings />
      </div>
    </div>
  );
}
