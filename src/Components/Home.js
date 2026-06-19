import React, { useEffect, useState } from 'react';
import './Home.css';
import pics from './pics.jpeg';
import Farhat from './Farhat.jpeg';
import { useNavigate } from 'react-router-dom';

const roles = ['Generative AI Engineer', 'Full Stack Developer', 'ML & Deep Learning'];

function Home() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [typing, setTyping] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout;
    if (typing) {
      if (displayed.length < current.length) {
        timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 60);
      } else {
        timeout = setTimeout(() => setTyping(false), 2000);
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35);
      } else {
        setRoleIndex((i) => (i + 1) % roles.length);
        setTyping(true);
      }
    }
    return () => clearTimeout(timeout);
  }, [displayed, typing, roleIndex]);

  return (
    <div className="hm-root">
      {/* Background glow orbs */}
      <div className="hm-orb hm-orb--1" />
      <div className="hm-orb hm-orb--2" />

      <div className="hm-inner">

        {/* ── Left content ── */}
        <div className="hm-left">

          {/* Logo chip */}
          <div className="hm-logo-chip">
            <img src={pics} alt="logo" className="hm-logo" />
            <span>Portfolio</span>
          </div>

          <p className="hm-greeting">Hello, I'm</p>
          <h1 className="hm-name">Farhat Irshad</h1>

          {/* Animated role */}
          <div className="hm-role-wrap">
            <span className="hm-role-cursor" />
            <span className="hm-role">{displayed}<span className="hm-caret">|</span></span>
          </div>

          <p className="hm-desc">
            I build exceptional web experiences — from pixel-perfect frontends to
            scalable backends. I also engineer{' '}
            <span className="hm-em">professional Machine Learning</span> and{' '}
            <span className="hm-em">Deep Learning models</span>, and integrate
            cutting-edge <span className="hm-em">Generative AI</span> into real-world products.
          </p>

          {/* Stats row */}
          <div className="hm-stats">
            <div className="hm-stat">
              <span className="hm-stat-n">6+</span>
              <span className="hm-stat-l">Projects</span>
            </div>
            <div className="hm-stat-div" />
            <div className="hm-stat">
              <span className="hm-stat-n">2+</span>
              <span className="hm-stat-l">Years Exp.</span>
            </div>
            <div className="hm-stat-div" />
            <div className="hm-stat">
              <span className="hm-stat-n">3</span>
              <span className="hm-stat-l">Domains</span>
            </div>
          </div>

          {/* Buttons */}
          <div className="hm-btns">
            <button className="hm-btn hm-btn--primary" onClick={() => navigate('/Projects')}>
              <svg viewBox="0 0 20 20" fill="none" className="hm-btn-icon">
                <path d="M3 4h14M3 8h10M3 12h12M3 16h8" stroke="#fff" strokeWidth="1.6" strokeLinecap="round"/>
              </svg>
              View Projects
            </button>
            <button className="hm-btn hm-btn--secondary" onClick={() => navigate('/Contacts')}>
              <svg viewBox="0 0 20 20" fill="none" className="hm-btn-icon">
                <path d="M2 4h16v12H2V4zm0 0l8 7 8-7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
              Contact Me
            </button>
          </div>

        </div>

        {/* ── Right — photo ── */}
        <div className="hm-right">
          <div className="hm-photo-ring">
            <div className="hm-photo-inner">
              <img src={Farhat} alt="Farhat Irshad" className="hm-photo" />
            </div>
          </div>

          {/* Floating badges */}
          <div className="hm-badge hm-badge--tl">
            <svg viewBox="0 0 16 16" fill="none" className="hm-badge-icon">
              <circle cx="8" cy="8" r="6" stroke="#22c55e" strokeWidth="1.4"/>
              <path d="M5 8l2 2 4-4" stroke="#22c55e" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Available for hire
          </div>

          <div className="hm-badge hm-badge--br">
            <svg viewBox="0 0 16 16" fill="none" className="hm-badge-icon">
              <path d="M8 2l1.5 3.5L13 6l-2.5 2.5.6 3.5L8 10.5 4.9 12l.6-3.5L3 6l3.5-.5z" stroke="#a855f7" strokeWidth="1.2" strokeLinejoin="round"/>
            </svg>
            Gen AI Engineer
          </div>
        </div>

      </div>
    </div>
  );
}

export default Home;