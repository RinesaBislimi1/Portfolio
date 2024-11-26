import React from "react";
import {
  FaHtml5,
  FaJs,
  FaReact,
  FaAngular,
  FaNodeJs,
  FaPython,
  FaGitAlt,
  FaDatabase,
   FaAws ,
   FaJava
} from "react-icons/fa"; 
import { SiDjango, SiExpress, SiTerraform, SiJenkins } from "react-icons/si";
import "../styles/Skills.css";

function Skills() {
  return (
    <div id="skills" className="skills-section">
      <h2>Skills</h2>

      <div className="skills-category">
        <h3>Frontend</h3>
        <div className="skill">
          <span>
            <FaHtml5 className="icon" /> HTML/CSS
          </span>
          <div className="skill-bar">
            <div className="skill-level" style={{ width: "90%" }}></div>
          </div>
        </div>
        <div className="skill">
          <span>
            <FaJs className="icon" /> JavaScript
          </span>
          <div className="skill-bar">
            <div className="skill-level" style={{ width: "85%" }}></div>
          </div>
        </div>
        <div className="skill">
          <span>
            <FaReact className="icon" /> React
          </span>
          <div className="skill-bar">
            <div className="skill-level" style={{ width: "80%" }}></div>
          </div>
        </div>
        <div className="skill">
          <span>
            <FaAngular className="icon" /> Angular
          </span>
          <div className="skill-bar">
            <div className="skill-level" style={{ width: "70%" }}></div>
          </div>
        </div>
      </div>

      
      <div className="skills-category">
        <h3>Backend</h3>
        <div className="skill">
          <span>
            <FaNodeJs className="icon" /> Node.js
          </span>
          <div className="skill-bar">
            <div className="skill-level" style={{ width: "75%" }}></div>
          </div>
        </div>
        <div className="skill">
          <span><FaJava className="icon" />Java</span>
          <div className="skill-bar">
            <div className="skill-level" style={{ width: "95%" }}></div>
          </div>
        </div>
        <div className="skill">
          <span>
            <SiDjango className="icon" /> Django
          </span>
          <div className="skill-bar">
            <div className="skill-level" style={{ width: "85%" }}></div>
          </div>
        </div>
        <div className="skill">
          <span>
            <FaPython className="icon" /> Python
          </span>
          <div className="skill-bar">
            <div className="skill-level" style={{ width: "90%" }}></div>
          </div>
        </div>
        <div className="skill">
          <span>
            <SiExpress className="icon" /> Express.js
          </span>
          <div className="skill-bar">
            <div className="skill-level" style={{ width: "65%" }}></div>
          </div>
        </div>
      </div>

      
      <div className="skills-category">
        <h3>Other Skills</h3>
        <div className="skill">
          <span>
            <FaGitAlt className="icon" /> Git & GitHub
          </span>
          <div className="skill-bar">
            <div className="skill-level" style={{ width: "95%" }}></div>
          </div>
        </div>
        <div className="skill">
          <span>Agile (Scrum)</span>
          <div className="skill-bar">
            <div className="skill-level" style={{ width: "80%" }}></div>
          </div>
        </div>
        <div className="skill">
          <span>
            <FaDatabase className="icon" /> SQL
          </span>
          <div className="skill-bar">
            <div className="skill-level" style={{ width: "85%" }}></div>
          </div>
        </div>
        <div className="skill">
          <span>
            <FaAws className="icon" /> AWS
          </span>
          <div className="skill-bar">
            <div className="skill-level" style={{ width: "70%" }}></div>
          </div>
        </div>
        <div className="skill">
          <span>
            <SiTerraform className="icon" /> Terraform
          </span>
          <div className="skill-bar">
            <div className="skill-level" style={{ width: "65%" }}></div>
          </div>
        </div>
        <div className="skill">
          <span>
            <SiJenkins className="icon" /> Jenkins
          </span>
          <div className="skill-bar">
            <div className="skill-level" style={{ width: "60%" }}></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
