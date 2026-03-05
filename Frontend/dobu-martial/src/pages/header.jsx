import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header className="site-header">
      <nav className="nav">
        <div className="brand">
          <span className="brand-mark" aria-hidden="true" />
          <div>
            <p className="brand-name">Dobu Martial Arts</p>
            <span className="brand-tag">Discipline. Focus. Strength.</span>
          </div>
        </div>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/timetable">Timetable</Link>
          <Link to="/policy">Policies</Link>
          <Link to="/account">Account</Link>
        </div>
        <button className="nav-cta" type="button">
          Book a Trial
        </button>
      </nav>
    </header>
  )
}
