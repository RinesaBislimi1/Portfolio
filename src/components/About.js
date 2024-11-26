import React, { useState } from 'react';
import '../styles/about.css';

const About = () => {
  const [activeSection, setActiveSection] = useState(null);

  const toggleSection = (section) => {
    setActiveSection(activeSection === section ? null : section);
  };

  return (
    <div className='about container'>
      <div className="about-section">
        <div className="about-text">
          <h2 className='about-title'>About Me</h2>
          <p className='about-txt'>
            I am a recent graduate in Software Engineering from the Faculty of Electrical and Computer Engineering 
            at the University of Prishtina. Throughout my studies, I developed a strong foundation in software development 
            and problem-solving, complemented by hands-on experience in various projects. My passion for technology drives me 
            to continuously learn and innovate, as I strive to create efficient solutions that make a positive impact.
          </p>
        </div>

        <div className="about-list">
          {/* Education Section */}
          <div className='list-item'>
            <span 
              className='list-text' 
              onClick={() => toggleSection('education')}
            >
              Education
            </span>
            {activeSection === 'education' && (
              <div className='list-details'>
                <p className='degree'>Master in Software Engineering</p>
                <p className='place'>University of Prishtina</p>
                <p className='year'>10/2024 - Present</p>
              </div>
            )}
            {activeSection === 'education' && (
              <div className='list-details'>
                <p className='degree'>BSc in Software Engineering</p>
                <p className='place'>University of Prishtina</p>
                <p className='year'>10/2021 - 09/2024</p>
              </div>
            )}
          </div>

          {/* Experience Section */}
          <div className='list-item'>
            <span 
              className='list-text' 
              onClick={() => toggleSection('experience')}
            >
              Experience
            </span>
            {activeSection === 'experience' && (
              <div className='list-details'>
                <p className='degree'>Junior Software Developer</p>
                <p className='place'>Liburion L.L.C</p>
                <p className='year'>11/2024 - Present</p>
                <p className='place'>
                  Developed and maintained web applications using Python and Django for backend, with a focus on RESTful APIs 
                  and database management. Implemented responsive front-end components in React, ensuring seamless integration 
                  with backend services.
                </p>
              </div>
            )}
            {activeSection === 'experience' && (
              <div className='list-details'>
                <p className='degree'>Software Developer Intern</p>
                <p className='place'>Liburion L.L.C</p>
                <p className='year'>06/2024 - 11/2024</p>
              </div>
            )}
          </div>

          {/* Trainings Section */}
          <div className='list-item'>
            <span 
              className='list-text' 
              onClick={() => toggleSection('trainings')}
            >
              Trainings
            </span>
            {activeSection === 'trainings' && (
              <div className='list-details'>
                <div className='training1'>
                  <p className='degree'>Cloud Excellence Training Program</p>
                  <p className='year'>03/2024 - 07/2024</p>
                  <p className='place'>
                    Focused on building infrastructure on Amazon Web Services, adhering to the Well-Architected Framework, 
                    while learning and applying Git, Linux, Bash, Agile & Scrum, DevOps, Terraform, Jenkins, Networking, 
                    and Cybersecurity best practices.
                  </p>
                </div>
                <div className='training1'>
                  <p className='degree'>Front-end Development - Beetroot Academy</p>
                  <p className='year'>10/2023 - 01/2024</p>
                  <p className='place'>HTML, CSS, JavaScript, React</p>
                </div>
                <div className='training1'>
                  <p className='degree'>Enterprise Java and Mobile Application Developer - ICT</p>
                  <p className='year'>09/2023 - 01/2024</p>
                  <p className='place'>Java, Android Mobile Application</p>
                </div>
                <div className='training1'>
                  <p className='degree'>Full-Stack / ROI Academy</p>
                  <p className='year'>08/2023 - 09/2024</p>
                  <p className='place'>HTML, CSS, JavaScript, MySQL, PHP</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
