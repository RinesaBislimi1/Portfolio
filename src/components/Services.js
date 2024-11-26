import "../styles/services.css";
import img1 from '../assets/web-dev.png';
import img2 from '../assets/front-end.png';
import img3 from '../assets/back-end.png';
import img4 from '../assets/full-stack.png';
import img5 from '../assets/api.png';
import img6 from '../assets/web-design.png';
import React from "react";

function Services() {
    return (
        <div className="services">
            <h2 className="services-title">Services</h2>
            <div className="services-cards">
                <div className="card">
                    <img src={img1} alt="Web Development" />
                    <h3>Web Development</h3>
                    <p>Expert in building scalable web applications, enhancing user experience, and leveraging modern web technologies.</p>
                </div>
                <div className="card">
                    <img src={img2} alt="Front-end Development" />
                    <h3>Front-end Development</h3>
                    <p>Creating responsive and interactive user interfaces using React, HTML, CSS, and JavaScript.</p>
                </div>
                <div className="card">
                    <img src={img3} alt="Back-end Development" />
                    <h3>Back-end Development</h3>
                    <p>Designing and implementing robust back-end architectures, focusing on database management and API development.</p>
                </div>
            </div>
        </div>
    );
}

export default Services;
