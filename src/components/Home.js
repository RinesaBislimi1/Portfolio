import "../styles/home.css"
import "./../../src/App.css"
import img from "../assets/img.png";
import About from "../components/About";
import ContactForm from "../components/ContactForm";
import Projects from "../components/Projects";
import Services from "../components/Services";
import Skills from "../components/Skills";
import Header from "./Header";

function Home() {
  return (
    <>
    <Header/>
    <div className="home">

      <div className="first-section">
        <div className="first">
          <h2 className="name">Rinesa Bislimi</h2>
          <h3 className="job">Software Engineer</h3>
          <p className="text">
            Innovative software engineer focused on developing impactful web
            solutions.
          </p>

          <div className="social-icons">
            <a
              href="https://www.linkedin.com/in/rinesa-bislimi-048762256/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a
              href="https://github.com/RinesaBislimi"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github"></i>
            </a>
            
          </div>
          <div className="buttons">
            <a href="#contact" className="hire-btn">
            Hire Me
            </a>
            <a href={`${process.env.PUBLIC_URL}/RinesaBislimi-.pdf`} download>
    <button className="download-btn">Download CV</button>
</a>

        </div>
          
        </div>

        <div className="second">
          <img
            src={img}
            alt="Description of the image"
            className="profile-img"
          />
        </div>
      </div>
      <div id="about">
        {" "}
        
        <About />
      </div>
      <div id="skills">
        {" "}
       
        <Skills />
      </div>
      <div id="projects">
        {" "}
  
        <Projects />
      </div>
      <div id="services">
        {" "}

        <Services />
      </div>
      <div id="skills">
        {" "}
      
        <ContactForm />
      </div>
    </div>
    </>
  );



}

export default Home;
