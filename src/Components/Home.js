import React, { useEffect, useState } from 'react';
import './Home.css';
import pics from './pics.jpeg';
import eng2 from './eng2.jpeg';

function Home() {
  const [showFirst, setShowFirst] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowFirst(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="home-main">
      <div className="home-content">
        <img src={pics} alt="logo" className="logo-img" />

        <p className="intro">Hello, I am</p>
        <h2 className="name">Farhat Irshad</h2>

        {showFirst ? (
          <h2 className="title fade-in">Web Developer</h2>
        ) : (
          <h2 className="title fade-in green">Full Stack Web Developer</h2>
        )}

        <p className="subtitle">
          I build exceptional and professional web experiences with technology.
        </p>

        <div className="button-group">
          <button className="btn primary">View Tasks</button>
          <button className="btn secondary">Contact Me</button>
        </div>
      </div>

      <div className="photo-container">
        <img src={eng2} alt="engineer" className="profile-pic" />
      </div>
    </div>
  );
}

export default Home;
