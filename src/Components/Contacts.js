import React, { useState } from 'react'
import './Contacts.css'

function Contacts() {
  const [form, setForm] = useState({ name: '', email: '', number: '', message: '' })
  const [errors, setErrors] = useState({})
  const [sent, setSent] = useState(false)

  const validate = () => {
    const e = {}
    if (!form.name.trim())    e.name    = 'Name is required'
    if (!form.email.trim())   e.email   = 'Email is required'
    else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = 'Enter a valid email'
    if (!form.number.trim())  e.number  = 'Phone number is required'
    if (!form.message.trim()) e.message = 'Message cannot be empty'
    return e
  }

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
    setErrors({ ...errors, [e.target.name]: '' })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const e2 = validate()
    if (Object.keys(e2).length) { setErrors(e2); return }
    setSent(true)
  }

  if (sent) {
    return (
      <div className="ct-root">
        <div className="ct-success">
          <div className="ct-success-icon">
            <svg viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="10" stroke="#22c55e" strokeWidth="1.5"/>
              <path d="M7.5 12l3 3 6-6" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <h2 className="ct-success-title">Message Sent!</h2>
          <p className="ct-success-sub">Thanks for reaching out. I'll get back to you soon.</p>
          <button className="ct-btn" onClick={() => { setSent(false); setForm({ name: '', email: '', number: '', message: '' }) }}>
            Send Another
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="ct-root">
      <div className="ct-header">
        <div className="ct-badge">
          <span className="ct-badge-dot" />
          Let's Connect
        </div>
        <h1 className="ct-title">Get in Touch</h1>
        <p className="ct-subtitle">
          Have a project in mind or just want to say hello? I'd love to hear from you.
        </p>
      </div>

      <form className="ct-card" onSubmit={handleSubmit} noValidate>

        <div className="ct-row">
          <div className="ct-field">
            <label className="ct-label">Full Name</label>
            <div className={`ct-input-wrap ${errors.name ? 'ct-input-wrap--err' : ''}`}>
              <svg className="ct-icon" viewBox="0 0 20 20" fill="none">
                <path d="M10 10a4 4 0 100-8 4 4 0 000 8zm0 2c-4.42 0-8 1.79-8 4v1h16v-1c0-2.21-3.58-4-8-4z" fill="#475569"/>
              </svg>
              <input
                name="name"
                type="text"
                placeholder="John Doe"
                value={form.name}
                onChange={handleChange}
                className="ct-input"
              />
            </div>
            {errors.name && <span className="ct-err">{errors.name}</span>}
          </div>

          <div className="ct-field">
            <label className="ct-label">Email Address</label>
            <div className={`ct-input-wrap ${errors.email ? 'ct-input-wrap--err' : ''}`}>
              <svg className="ct-icon" viewBox="0 0 20 20" fill="none">
                <path d="M2 4h16v12H2V4zm0 0l8 7 8-7" stroke="#475569" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
              <input
                name="email"
                type="email"
                placeholder="john@example.com"
                value={form.email}
                onChange={handleChange}
                className="ct-input"
              />
            </div>
            {errors.email && <span className="ct-err">{errors.email}</span>}
          </div>
        </div>

        <div className="ct-field">
          <label className="ct-label">Phone Number</label>
          <div className={`ct-input-wrap ${errors.number ? 'ct-input-wrap--err' : ''}`}>
            <svg className="ct-icon" viewBox="0 0 20 20" fill="none">
              <path d="M3 4a1 1 0 011-1h2.5l1 3-1.5 1.5a11 11 0 005.5 5.5L13 11.5l3 1V15a1 1 0 01-1 1C7.16 16 3 11.84 3 7V4z" stroke="#475569" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
            <input
              name="number"
              type="tel"
              placeholder="+1 (555) 000-0000"
              value={form.number}
              onChange={handleChange}
              className="ct-input"
            />
          </div>
          {errors.number && <span className="ct-err">{errors.number}</span>}
        </div>

        <div className="ct-field">
          <label className="ct-label">Your Message</label>
          <div className={`ct-input-wrap ct-textarea-wrap ${errors.message ? 'ct-input-wrap--err' : ''}`}>
            <textarea
              name="message"
              placeholder="Tell me about your project or just say hi..."
              value={form.message}
              onChange={handleChange}
              className="ct-input ct-textarea"
              rows={5}
            />
          </div>
          {errors.message && <span className="ct-err">{errors.message}</span>}
        </div>

        <button type="submit" className="ct-btn">
          <svg viewBox="0 0 20 20" fill="none" className="ct-btn-icon">
            <path d="M2 10l16-8-8 16-2-6-6-2z" stroke="#fff" strokeWidth="1.5" strokeLinejoin="round"/>
          </svg>
          Send Message
        </button>

      </form>

      <div className="ct-info-row">
        <div className="ct-info-item">
          <svg viewBox="0 0 20 20" fill="none" className="ct-info-icon">
            <path d="M2 4h16v12H2V4zm0 0l8 7 8-7" stroke="#64748b" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
          <span>farhatirshat4347855@gmail.com</span>
        </div>
        <div className="ct-info-item">
          <svg viewBox="0 0 20 20" fill="none" className="ct-info-icon">
            <path d="M10 2a6 6 0 016 6c0 4-6 10-6 10S4 12 4 8a6 6 0 016-6zm0 4a2 2 0 100 4 2 2 0 000-4z" stroke="#64748b" strokeWidth="1.5"/>
          </svg>
          <span>City:Peshawar Pakistan</span>
        </div>
      </div>
    </div>
  )
}

export default Contacts