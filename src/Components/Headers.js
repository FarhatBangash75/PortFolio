import React, { useState, useEffect } from 'react';
import './Headers.css';
import { useNavigate, useLocation } from 'react-router-dom';

const navLinks = [
  { label: 'Home',     path: '/',         icon: 'M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z' },
  { label: 'About',    path: '/About',    icon: 'M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2M12 11a4 4 0 100-8 4 4 0 000 8z' },
  { label: 'Skills',   path: '/Skills',   icon: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z' },
  { label: 'Projects', path: '/Project',  icon: 'M3 7h18M3 12h18M3 17h18' },
  { label: 'Contact',  path: '/Contacts', icon: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' },
];

function Headers() {
  const navigate   = useNavigate();
  const location   = useLocation();
  const [menuOpen, setMenuOpen]   = useState(false);
  const [scrolled, setScrolled]   = useState(false);
  const [progress, setProgress]   = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      setScrolled(scrollTop > 24);
      setProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setMenuOpen(false); }, [location.pathname]);

  const handleNav = (path) => { navigate(path); setMenuOpen(false); };

  return (
    <>
      {/* Scroll progress bar */}
      <div className="nav-progress" style={{ width: `${progress}%` }} />

      <header className={`nav-root ${scrolled ? 'nav-root--scrolled' : ''}`}>
        <div className="nav-inner">

          {/* ── Logo ── */}
          <div className="nav-logo" onClick={() => handleNav('/')}>
            <div className="nav-logo-avatar">FI</div>
            <div className="nav-logo-text">
              <span className="nav-logo-name">Farhat Irshad</span>
              <span className="nav-logo-role">AI &amp; Full Stack Dev</span>
            </div>
          </div>

          {/* ── Desktop links ── */}
          <nav className="nav-links">
            {navLinks.map(link => {
              const active = location.pathname === link.path;
              return (
                <button
                  key={link.path}
                  className={`nav-link ${active ? 'nav-link--active' : ''}`}
                  onClick={() => handleNav(link.path)}
                >
                  <svg viewBox="0 0 24 24" fill="none" className="nav-link-icon" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" stroke="currentColor">
                    <path d={link.icon} />
                  </svg>
                  {link.label}
                  {active && <span className="nav-link-bar" />}
                </button>
              );
            })}
          </nav>

          {/* ── Right side ── */}
          <div className="nav-right">
            <div className="nav-status">
              <span className="nav-status-dot" />
              <span className="nav-status-text">Available</span>
            </div>
            <button className="nav-cta" onClick={() => handleNav('/Contacts')}>
              <svg viewBox="0 0 20 20" fill="none" className="nav-cta-icon">
                <path d="M10 2l1.5 3.5L15 6l-2.5 2.5.6 3.5L10 10.5 6.9 12l.6-3.5L5 6l3.5-.5z" stroke="#fff" strokeWidth="1.2" strokeLinejoin="round"/>
              </svg>
              Hire Me
            </button>
            <button
              className={`nav-burger ${menuOpen ? 'nav-burger--open' : ''}`}
              onClick={() => setMenuOpen(o => !o)}
              aria-label="Toggle menu"
            >
              <span /><span /><span />
            </button>
          </div>

        </div>

        {/* ── Mobile drawer ── */}
        <div className={`nav-drawer ${menuOpen ? 'nav-drawer--open' : ''}`}>
          <div className="nav-drawer-profile">
            <div className="nav-logo-avatar nav-logo-avatar--lg">FI</div>
            <div>
              <div className="nav-drawer-name">Farhat Irshad</div>
              <div className="nav-drawer-role">AI &amp; Full Stack Dev</div>
            </div>
          </div>
          <div className="nav-drawer-divider" />
          {navLinks.map(link => {
            const active = location.pathname === link.path;
            return (
              <button
                key={link.path}
                className={`nav-drawer-link ${active ? 'nav-drawer-link--active' : ''}`}
                onClick={() => handleNav(link.path)}
              >
                <svg viewBox="0 0 24 24" fill="none" className="nav-drawer-icon" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" stroke="currentColor">
                  <path d={link.icon} />
                </svg>
                {link.label}
                {active && (
                  <svg viewBox="0 0 20 20" fill="none" className="nav-drawer-check" style={{ marginLeft: 'auto' }}>
                    <path d="M5 10l4 4 6-6" stroke="#6366f1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )}
              </button>
            );
          })}
          <div className="nav-drawer-divider" />
          <button className="nav-cta nav-cta--drawer" onClick={() => handleNav('/Contacts')}>
            ✦ Hire Me
          </button>
        </div>
      </header>
    </>
  );
}

export default Headers;