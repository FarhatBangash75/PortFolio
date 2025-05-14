import React from 'react';
import './About.css';

function About() {
  return (
    <div className="about-container">
      <div className="main-about-dev">
        <h3 className="stack-text">Full Stack Web Developer</h3>
        <p className="about-description">
          I am a Full Stack Web Developer with experience in creating beautiful and interactive websites.
          With a strong foundation in HTML, CSS, JavaScript, React, Node.js, and databases (MongoDB and MySQL),
          I specialize in building responsive web applications that provide a seamless user experience.
        </p>
        <p className="about-description">
          My approach combines clean, maintainable code with modern principles to deliver high-quality web
          solutions that help users achieve their goals. I enjoy the challenge of turning complex problems
          into simple, intuitive interfaces.
        </p>

        <div className="table-container">
          <table className="info-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Location</th>
                <th>Freelance</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Farhat Irshad</td>
                <td>rb4347855@gmail.com</td>
                <td>Peshawar</td>
                <td>Available</td>
              </tr>
            </tbody>
          </table>
        </div>

     <a href="/FarhadIrshad.pdf" download>
  <button className="cv-btn">Download CV</button>
</a>
      </div>
    </div>
  );
}

export default About;
