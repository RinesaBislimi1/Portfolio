// Projects.js
import React from "react";
import "../styles/Projects.css"; // Create this CSS file for styling
import img1 from '../assets/CodeChecker.png'
import img2 from '../assets/RinaDecor.png'
import img3 from '../assets/furniture.png'
import img4 from "../assets/foodiefast.png"
import img5 from "../assets/jobportal.png"
import { Link } from "react-router-dom";

function Projects() {
  return (
    <div id="projects" className="projects-section">
      <h2>Projects</h2>
      <div className="projects-container container">
        <div className="project-card">
        <Link to="/codechecker"> <img src={img1} alt="Project 1" /></Link>
         
          <h3>CodeCheckerAI</h3>
          <p>CodeCheckerAI is an innovative web application designed to enhance code quality through advanced machine learning algorithms.</p>
          <div className="programming-languages">
            <span className="keyword">Django</span>
            <span className="keyword">React</span>
            <span className="keyword">Machine Learning</span>
            <span className="keyword">Python</span>
          </div>
         
        
          <button className="button-github" ><a
              href="https://github.com/RinesaBislimi/CodeCheckerAI-"
              target="_blank"
              rel="noopener noreferrer"
            >
              View on GitHub
            </a></button>
        </div>
        <div className="project-card">
          <img src={img2} alt="Project 2" />
          <h3>Rina's Decor & Events</h3>
          <p>A user-friendly event management app built with Angular, offering seamless planning, booking, and customization for weddings, corporate events, and parties.</p>
          <div className="programming-languages">
            <span className="keyword">Angular</span>
            <span className="keyword">TypeScript</span>
            <span className="keyword">Firebase</span>
            <span className="keyword">HTML/CSS</span>
          </div>
          
          <button className="button-github">View on GitHub</button>
        </div>
       

        <div className="project-card">
  <img src={img4} alt="FoodieFast project screenshot" />
  <h3>FoodieFast</h3>
  <p>An online food ordering platform that allows users to browse menus, customize their orders, and place them seamlessly. Includes features for tracking orders and managing user preferences.</p>
  <div className="programming-languages">
    <span className="keyword">React</span>
    <span className="keyword">Django</span>
    <span className="keyword">HTML/CSS</span>
  </div>
  <button className="button-github"
  ><a href="https://github.com/RinesaBislimi/FoodieFast-"
   target="_blank"
    rel="noopener noreferrer"
  >View on GitHub</a></button>
</div>

<div className="project-card">
  <img src={img5} alt="FoodieFast project screenshot" />
  <h3>JobPortal</h3>
<p>A comprehensive online platform designed to connect job seekers with potential employers. It allows users to browse job listings, apply for positions, and manage their applications. Features include personalized job recommendations, resume management, and application tracking for both job seekers and recruiters.</p>

  <div className="programming-languages">
    <span className="keyword">React</span>
    <span className="keyword">Java</span>
    <span className="keyword">MySQL</span>
  </div>
  <button className="button-github"
  ><a href="https://github.com/RinesaBislimi/JobPortal"
   target="_blank"
    rel="noopener noreferrer"
  >View on GitHub</a></button>
</div>
        
       
     
      </div>
    </div>
  );
}

export default Projects;
