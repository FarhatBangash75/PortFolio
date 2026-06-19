import React from 'react';
import './About.css';

const info = [
  { label: 'Name',      value: 'Farhat Irshad',                icon: '👤' },
  { label: 'Email',     value: 'farhatirshat4347855@gmail.com', icon: '✉️' },
  { label: 'Location',  value: 'Peshawar, Pakistan',            icon: '📍' },
  { label: 'Freelance', value: 'Available',                     icon: '✅', highlight: true },
]

const stats = [
  { number: '6+',   label: 'Projects Built' },
  { number: '2+',   label: 'Years Experience' },
  { number: '100%', label: 'Client Focus' },
]

const aiTags = [
  'LLM Integration', 'Prompt Engineering', 'RAG Pipelines',
  'OpenAI API', 'AI-Powered Apps', 'Multimodal Models',
  'Chatbot Development', 'AI Automation',
]

function About() {
  return (
    <div className="ab-root">

      <div className="ab-header">
        <div className="ab-badge">
          <span className="ab-badge-dot" />
          About Me
        </div>
        <h1 className="ab-title">Full Stack Web Developer</h1>
        <p className="ab-subtitle">
          Building digital experiences from idea to deployment.
        </p>
      </div>

      <div className="ab-body">

        {/* Left — text */}
        <div className="ab-left">
          <p className="ab-desc">
            I'm a Full Stack Web Developer with hands-on experience building
            beautiful, interactive, and high-performing web applications. My
            stack spans <span className="ab-highlight">HTML, CSS, JavaScript,
            React, Node.js</span>, and databases like <span className="ab-highlight">
            MongoDB &amp; MySQL</span>.
          </p>
          <p className="ab-desc">
            I combine clean, maintainable code with modern design principles to
            deliver solutions that are both technically solid and a pleasure to
            use. I thrive on turning complex problems into simple, intuitive
            interfaces — and I'm always learning what's next.
          </p>
          <p className="ab-desc">
            I'm deeply passionate about{' '}
            <span className="ab-highlight">Generative AI</span> — the technology
            reshaping how we build software and interact with machines. I work
            with large language models (LLMs), integrate AI APIs into real-world
            applications, and apply{' '}
            <span className="ab-highlight">prompt engineering</span> to unlock
            powerful, context-aware experiences. From building AI-assisted tools
            to experimenting with{' '}
            <span className="ab-highlight">RAG pipelines</span> and multimodal
            models, I believe the future of software is AI-native — and I'm
            actively building in that direction.
          </p>

          {/* Generative AI block */}
          <div className="ab-ai-block">
            <div className="ab-ai-header">
              <svg viewBox="0 0 20 20" fill="none" className="ab-ai-svg">
                <path d="M10 2a1 1 0 011 1v1.07A7 7 0 0116.93 9H18a1 1 0 010 2h-1.07A7 7 0 0113 16.93V18a1 1 0 01-2 0v-1.07A7 7 0 015.07 11H4a1 1 0 010-2h1.07A7 7 0 019 3.07V2a1 1 0 011-1zm0 4a4 4 0 100 8 4 4 0 000-8z" fill="#a855f7"/>
                <circle cx="10" cy="10" r="1.5" fill="#e9d5ff"/>
              </svg>
              Generative AI Expertise
            </div>
            <div className="ab-ai-tags">
              {aiTags.map(tag => (
                <span key={tag} className="ab-ai-tag">{tag}</span>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="ab-stats">
            {stats.map(s => (
              <div className="ab-stat" key={s.label}>
                <span className="ab-stat-num">{s.number}</span>
                <span className="ab-stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right — info card */}
        <div className="ab-right">
          <div className="ab-card">
            <div className="ab-card-title">
              <span className="ab-card-sq" />
              Quick Info
            </div>
            <div className="ab-info-list">
              {info.map(item => (
                <div className="ab-info-row" key={item.label}>
                  <span className="ab-info-icon">{item.icon}</span>
                  <div className="ab-info-text">
                    <span className="ab-info-label">{item.label}</span>
                    <span className={`ab-info-value ${item.highlight ? 'ab-info-value--green' : ''}`}>
                      {item.value}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <a href="/Farhat_CV.pdf" download className="ab-cv-btn">
              <svg viewBox="0 0 20 20" fill="none" className="ab-cv-icon">
                <path d="M10 2v10m0 0l-3-3m3 3l3-3M3 15v1a2 2 0 002 2h10a2 2 0 002-2v-1"
                  stroke="#fff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Download CV
            </a>
          </div>
        </div>

      </div>
    </div>
  )
}

export default About;