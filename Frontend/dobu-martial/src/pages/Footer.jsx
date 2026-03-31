import React from 'react'

export default function Footer() {
    const currentDate = new Date()
    const new_date = currentDate.getFullYear()
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
          <p>crawley college</p>
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
        <span>© {new_date} Dobu Martial Arts. All rights reserved.</span>
        <span>Privacy · Terms · Accessibility</span>
      </div>
    </footer>
  )
}
