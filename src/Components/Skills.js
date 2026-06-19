import React, { useState } from 'react'
import './Skills.css'
import html    from './html.jpeg'
import css     from './css.jpeg'
import java    from './java.jpeg'
import node    from './node.jpeg'
import Database from './Database.jpeg'

const skills = [
  {
    name: 'HTML',
    level: 95,
    category: 'Frontend',
    color: '#e34c26',
    img: html,
    desc: 'Semantic markup, accessibility, SEO-friendly structure.',
  },
  {
    name: 'CSS',
    level: 90,
    category: 'Frontend',
    color: '#264de4',
    img: css,
    desc: 'Responsive layouts, animations, Flexbox & Grid.',
  },
  {
    name: 'JavaScript',
    level: 88,
    category: 'Frontend',
    color: '#f7df1e',
    img: java,
    desc: 'ES6+, async/await, DOM manipulation, React ecosystem.',
  },
  {
    name: 'Node.js',
    level: 80,
    category: 'Backend',
    color: '#68a063',
    img: node,
    desc: 'REST APIs, Express, server-side logic and middleware.',
  },
  {
    name: 'Database',
    level: 75,
    category: 'Backend',
    color: '#336791',
    img: Database,
    desc: 'SQL, PostgreSQL, MongoDB — schema design & queries.',
  },
  {
    name: 'Python & Data Structures',
    level: 82,
    category: 'Programming',
    color: '#3776ab',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="sk-svg-icon">
        <path d="M12 2C6.48 2 6 4.48 6 6v2h6v1H4.5C3.12 9 2 10.12 2 11.5v3C2 15.88 3.12 17 4.5 17H6v2c0 1.52.48 4 6 4s6-2.48 6-4v-2h1.5C20.88 17 22 15.88 22 14.5v-3C22 10.12 20.88 9 19.5 9H18V6c0-1.52-.48-4-6-4zm0 2c3.86 0 4 1.47 4 2v2H8V6c0-.53.14-2 4-2zM8 11h8v2H8v-2zm-3.5 0H6v2H4.5a.5.5 0 01-.5-.5v-1a.5.5 0 01.5-.5zm13 0a.5.5 0 01.5.5v1a.5.5 0 01-.5.5H18v-2h1.5zM8 15h8v2H8v-2zm-2 2h2v1c0 .53-.14 2-4 2-3.86 0-4-1.47-4-2v-1h2c0 .53.14 2 4 2 3.86 0 4-1.47 4-2z" fill="#3776ab"/>
        <circle cx="9.5" cy="6.5" r="1" fill="#fff"/>
        <circle cx="14.5" cy="17.5" r="1" fill="#fff"/>
      </svg>
    ),
    desc: 'Python scripting, algorithms, linked lists, trees, hash maps, sorting.',
  },
  {
    name: 'Generative AI',
    level: 78,
    category: 'AI / ML',
    color: '#a855f7',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="sk-svg-icon">
        <path d="M12 2a1 1 0 011 1v1.07A7.001 7.001 0 0118.93 9H20a1 1 0 010 2h-1.07A7.001 7.001 0 0113 16.93V18a1 1 0 01-2 0v-1.07A7.001 7.001 0 015.07 11H4a1 1 0 010-2h1.07A7.001 7.001 0 0111 3.07V2a1 1 0 011-1zm0 4a5 5 0 100 10A5 5 0 0012 6zm0 2a3 3 0 110 6 3 3 0 010-6z" fill="#a855f7"/>
        <circle cx="12" cy="12" r="1.5" fill="#e9d5ff"/>
        <path d="M20 3l1 2-1 1-2-1 1-2zM4 18l1 2-1 1-2-1 1-2z" fill="#a855f7" opacity="0.5"/>
      </svg>
    ),
    desc: 'Prompt engineering, LLM integration, AI-powered app development, RAG pipelines.',
  },
]

const categories = ['All', 'Frontend', 'Backend', 'Programming', 'AI / ML']

function SkillCard({ skill, index }) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      className={`sk-card ${hovered ? 'sk-card--hovered' : ''}`}
      style={{ '--accent': skill.color, animationDelay: `${index * 0.07}s` }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="sk-card-top">
        <div className="sk-icon-wrap" style={{ background: skill.color + '18', borderColor: skill.color + '30' }}>
          {skill.img
            ? <img src={skill.img} alt={skill.name} className="sk-icon-img" />
            : skill.icon
          }
        </div>
        <span className="sk-category" style={{ color: skill.color, background: skill.color + '12' }}>
          {skill.category}
        </span>
      </div>

      <h3 className="sk-name">{skill.name}</h3>
      <p className="sk-desc">{skill.desc}</p>

      <div className="sk-bar-row">
        <div className="sk-bar-track">
          <div
            className="sk-bar-fill"
            style={{
              width: hovered ? `${skill.level}%` : '0%',
              background: `linear-gradient(90deg, ${skill.color}99, ${skill.color})`,
            }}
          />
        </div>
        <span className="sk-level" style={{ color: skill.color }}>{skill.level}%</span>
      </div>
    </div>
  )
}

function Skills() {
  const [active, setActive] = useState('All')

  const filtered = active === 'All'
    ? skills
    : skills.filter(s => s.category === active)

  return (
    <div className="sk-root">
      <div className="sk-header">
        <div className="sk-badge">
          <span className="sk-badge-dot" />
          Technical Expertise
        </div>
        <h1 className="sk-title">Skills & Technologies</h1>
        <p className="sk-subtitle">
          A toolkit built through real projects — from frontend interfaces to AI-powered systems.
        </p>
      </div>

      <div className="sk-filters">
        {categories.map(cat => (
          <button
            key={cat}
            className={`sk-filter-btn ${active === cat ? 'sk-filter-btn--active' : ''}`}
            onClick={() => setActive(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="sk-grid">
        {filtered.map((skill, i) => (
          <SkillCard key={skill.name} skill={skill} index={i} />
        ))}
      </div>
    </div>
  )
}

export default Skills