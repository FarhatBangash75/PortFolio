import React, { useState, useEffect } from 'react'
import './Project.css'

import Forest_login from '../Components/Forest_login.png'
import Forest_graph_pics from '../Components/Forest_graph_pics.png'
import Forest_dashboard_Forms from '../Components/Forest_dashboard_Forms.png'
import Forest_dashbord_grah from '../Components/Forest_dashboard_grah.png'
import Forest_dashboard_minpage from '../Components/Forest_dashbord_minpage.png'
import Shoba_bazer_main_pics from '../Components/Shoba_bazer_main_pics.png'
import Shoba_bazer_overmainpage from '../Components/Shoba_bazer_overmainpage.png'
import Shoba_pazer from '../Components/Shoba_pazer_login.png'
import WSSC_swat_Login from '../Components/WSSC_swat_Login.png'
import WSSC_SWAT_main from '../Components/WSSC_SWAT_main.png'
import Bill_law_Firm from '../Components/Bill_law-Firm.png'
import Bills_law_firm from '../Components/Bills_law_firm.png'
import Medicin_AI from '../Components/Medicin_AI.png'
import AI_based_plant_detection from '../Components/AI_based_plant_detection.png'

const projects = [
  {
    id: 1, num: '01',
    title: 'Forest Management Dashboard',
    shortDesc: 'A comprehensive forest monitoring system with real-time analytics, health tracking, and form-based data management for environmental teams.',
    tags: ['React', 'Dashboard', 'Analytics'],
    color: '#22c55e',
    screens: [
      { label: 'Login Portal',     src: Forest_login },
      { label: 'Graph Analytics',  src: Forest_graph_pics },
      { label: 'Dashboard Forms',  src: Forest_dashboard_Forms },
      { label: 'Dashboard Graphs', src: Forest_dashbord_grah },
      { label: 'Main Dashboard',   src: Forest_dashboard_minpage },
    ],
  },
  {
    id: 2, num: '02',
    title: 'Shoba Bazaar',
    shortDesc: 'A full-featured e-commerce marketplace with product browsing, secure login, and vendor management built for local bazaar businesses.',
    tags: ['React', 'E-Commerce', 'Authentication'],
    color: '#f59e0b',
    screens: [
      { label: 'Main Page',        src: Shoba_bazer_main_pics },
      { label: 'Product Overview', src: Shoba_bazer_overmainpage },
      { label: 'Login',            src: Shoba_pazer },
    ],
  },
  {
    id: 3, num: '03',
    title: 'WSSC Swat — Utility System',
    shortDesc: 'Administrative platform for the Water Supply & Sanitation Company managing billing, staff roles, and operational dashboards.',
    tags: ['React', 'Admin Panel', 'Management'],
    color: '#3b82f6',
    screens: [
      { label: 'Login Portal',   src: WSSC_swat_Login },
      { label: 'Main Dashboard', src: WSSC_SWAT_main },
    ],
  },
  {
    id: 4, num: '04',
    title: "Bill's Law Firm",
    shortDesc: 'A professional legal services website with attorney profiles, practice area listings, and client consultation request flows.',
    tags: ['React', 'UI Design', 'Legal'],
    color: '#a78bfa',
    screens: [
      { label: 'Home Page',     src: Bill_law_Firm },
      { label: 'Services View', src: Bills_law_firm },
    ],
  },
  {
    id: 5, num: '05',
    title: 'Medicine AI',
    shortDesc: 'An AI-driven health assistant using machine learning to deliver symptom analysis, health insights, and personalized medical guidance.',
    tags: ['AI/ML', 'Healthcare', 'NLP'],
    color: '#06b6d4',
    screens: [
      { label: 'AI Interface', src: Medicin_AI },
    ],
  },
  {
    id: 6, num: '06',
    title: 'AI Plant Detection',
    shortDesc: 'A computer vision system that identifies plant species and detects diseases from images, helping farmers diagnose crop health instantly.',
    tags: ['AI/ML', 'Computer Vision', 'TensorFlow'],
    color: '#84cc16',
    screens: [
      { label: 'Detection Interface', src: AI_based_plant_detection },
    ],
  },
]

/* ── Lightbox ────────────────────────────────── */
function Lightbox({ src, label, color, onClose }) {
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return (
    <div className="lb-overlay" onClick={onClose}>
      <div className="lb-bar" onClick={e => e.stopPropagation()}>
        <div className="lb-bar-label">
          <span className="lb-bar-dot" style={{ background: color }} />
          {label}
        </div>
        <button className="lb-close" onClick={onClose}>✕</button>
      </div>

      <div className="lb-img-wrap" onClick={e => e.stopPropagation()}>
        <div className="lb-chrome-top" style={{ borderBottomColor: color + '33' }}>
          <div className="lb-chrome-dots">
            <span style={{ background: '#ff5f57' }} />
            <span style={{ background: '#febc2e' }} />
            <span style={{ background: '#28c840' }} />
          </div>
          <div className="lb-chrome-url">
            <span className="lb-chrome-dot" style={{ background: color }} />
            myapp.dev/{label.toLowerCase().replace(/\s/g, '-')}
          </div>
        </div>

        <img src={src} alt={label} className="lb-img" />

        <div className="lb-chrome-bot" style={{ borderTopColor: color + '22' }}>
          <div className="lb-chrome-bar" />
          <div className="lb-chrome-status" style={{ background: color }} />
        </div>
      </div>

      <p className="lb-hint">Press Esc or click outside to close</p>
    </div>
  )
}

/* ── Browser frame card ──────────────────────── */
function BrowserFrame({ src, label, color, featured, onOpen }) {
  return (
    <div
      className={`bf-wrap ${featured ? 'bf-wrap--featured' : ''}`}
      onClick={onOpen}
      title="Click to view full image"
    >
      <div className="bf-zoom-hint">
        <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
          <circle cx="5" cy="5" r="4" stroke="#94a3b8" strokeWidth="1.5"/>
          <path d="M8.5 8.5L11 11" stroke="#94a3b8" strokeWidth="1.5" strokeLinecap="round"/>
          <path d="M5 3v4M3 5h4" stroke="#94a3b8" strokeWidth="1.2" strokeLinecap="round"/>
        </svg>
        Expand
      </div>

      <div className="bf-topbar">
        <div className="bf-dots">
          <span className="bf-dot bf-dot--r" />
          <span className="bf-dot bf-dot--y" />
          <span className="bf-dot bf-dot--g" />
        </div>
        <div className="bf-urlbar">
          <span className="bf-dot-sm" style={{ background: color }} />
          <span className="bf-url">myapp.dev/{label.toLowerCase().replace(/\s/g, '-')}</span>
        </div>
      </div>

      <div className="bf-screen">
        <img src={src} alt={label} className="bf-img" />
        <div className="bf-label" style={{ background: color + 'cc' }}>{label}</div>
      </div>

      <div className="bf-bottombar">
        <div className="bf-progress" />
        <div className="bf-status-dot" style={{ background: color }} />
      </div>
    </div>
  )
}

/* ── Main component ──────────────────────────── */
function Projects() {
  const [expanded, setExpanded] = useState(null)
  const [lightbox, setLightbox] = useState(null)

  return (
    <div className="pp-root">
      {lightbox && (
        <Lightbox
          src={lightbox.src}
          label={lightbox.label}
          color={lightbox.color}
          onClose={() => setLightbox(null)}
        />
      )}

      <div className="pp-header">
        <div className="pp-badge">
          <span className="pp-badge-dot" />
          Selected Work
        </div>
        <h1 className="pp-title">Projects</h1>
        <p className="pp-subtitle">
          Real-world applications — from AI tools to e-commerce platforms and utility management systems.
        </p>
      </div>

      <div className="pp-list">
        {projects.map((p, pi) => {
          const isOpen = expanded === p.id
          const isEven = pi % 2 === 0

          return (
            <div
              key={p.id}
              className={`pp-item ${isOpen ? 'pp-item--open' : ''}`}
              style={{ '--c': p.color }}
            >
              <div className="pp-row" onClick={() => setExpanded(isOpen ? null : p.id)}>
                <span className="pp-num">{p.num}</span>
                <h2 className="pp-name">{p.title}</h2>
                <div className="pp-tags">
                  {p.tags.map(t => (
                    <span key={t} className="pp-tag"
                      style={{ color: p.color, background: p.color + '15' }}>{t}</span>
                  ))}
                </div>
                <div
                  className={`pp-chevron ${isOpen ? 'pp-chevron--open' : ''}`}
                  style={{ borderColor: p.color + '44', background: isOpen ? p.color + '18' : 'transparent' }}
                >
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M2 4L6 8L10 4" stroke={p.color} strokeWidth="1.5"
                      strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>

              {isOpen && (
                <div className="pp-panel">
                  <div className="pp-glow-line"
                    style={{ background: `linear-gradient(90deg, transparent, ${p.color}, transparent)` }} />

                  <div className={`pp-content ${isEven ? '' : 'pp-content--flip'}`}>
                    <div className="pp-info">
                      <p className="pp-desc">{p.shortDesc}</p>
                      <ul className="pp-meta">
                        <li>
                          <span className="pp-meta-dot" style={{ background: p.color }} />
                          {p.screens.length} screen{p.screens.length > 1 ? 's' : ''} — click any to view full
                        </li>
                        <li>
                          <span className="pp-meta-dot" style={{ background: p.color }} />
                          Built with {p.tags.join(', ')}
                        </li>
                      </ul>
                      <div className="pp-stack"
                        style={{ borderColor: p.color + '25', background: p.color + '08' }}>
                        <div className="pp-stack-head" style={{ color: p.color }}>
                          <span className="pp-stack-sq" style={{ background: p.color }} />
                          Stack
                        </div>
                        {p.tags.map(t => (
                          <div key={t} className="pp-stack-item">— {t}</div>
                        ))}
                      </div>
                    </div>

                    <div className="pp-gallery">
                      <BrowserFrame
                        src={p.screens[0].src}
                        label={p.screens[0].label}
                        color={p.color}
                        featured
                        onOpen={() => setLightbox({ src: p.screens[0].src, label: p.screens[0].label, color: p.color })}
                      />
                      {p.screens.length > 1 && (
                        <div className="pp-thumbs"
                          style={{ gridTemplateColumns: `repeat(${Math.min(p.screens.length - 1, 4)}, 1fr)` }}>
                          {p.screens.slice(1).map((s, i) => (
                            <BrowserFrame
                              key={i}
                              src={s.src}
                              label={s.label}
                              color={p.color}
                              onOpen={() => setLightbox({ src: s.src, label: s.label, color: p.color })}
                            />
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Projects