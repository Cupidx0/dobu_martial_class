import React from 'react'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div>
          <p className="brand-name">Dobu Martial Arts</p>
          <p className="footer-note">
            A modern martial arts studio focused on skill, community, and progress.
          </p>
        </div>
        <div>
          <p className="footer-title">Contact</p>
          <p>(555) 013-4481</p>
          <p>hello@dobumartial.com</p>
        </div>
        <div>
          <p className="footer-title">Visit</p>
          <p>1420 Meridian Ave</p>
          <p>Mon-Sun: 6:00 AM - 9:00 PM</p>
        </div>
        <div>
          <p className="footer-title">Social</p>
          <p>Instagram</p>
          <p>Youtube</p>
          <p>LinkedIn</p>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2026 Dobu Martial Arts. All rights reserved.</span>
        <span>Privacy · Terms · Accessibility</span>
      </div>
    </footer>
  )
}
