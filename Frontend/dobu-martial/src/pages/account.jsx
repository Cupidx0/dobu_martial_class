import React from 'react'
import { Link } from 'react-router-dom'

export default function Account() {
  return (
    <div className="account-page">
      <header className="sub-hero account-hero">
        <div className="sub-hero-content">
          <p className="kicker">Account</p>
          <h1>Your training profile, all in one place.</h1>
          <p className="lead">
            Review membership details, update goals, and keep your emergency contact information
            current.
          </p>
          <div className="account-actions">
            <button className="primary" type="button">
              Update Membership
            </button>
            <button className="ghost" type="button">
              <Link to="/login">Login</Link>
            </button>
            or
            <button className="ghost" type="button">
              <Link to="/signup">Sign Up</Link>
            </button>   
            <button className="ghost" type="button">
              Download Waivers
            </button>
          </div>
        </div>
        <div className="account-banner">
          <div>
            <p className="account-name">Avery Chen</p>
            <span className="account-role">Momentum Member · Active</span>
          </div>
          <div className="account-badge">
            <span>Next class</span>
            <strong>Wed 6:00 PM</strong>
            <p>Kickboxing Ignite</p>
          </div>
        </div>
      </header>

      <main className="account-main">
        <div className="account-grid">
          <section className="account-card">
            <header>
              <h3>Profile details</h3>
              <span>Last updated 2 days ago</span>
            </header>
            <div className="account-fields">
              <div>
                <label>Full name</label>
                <p>Avery Chen</p>
              </div>
              <div>
                <label>Email</label>
                <p>avery.chen@email.com</p>
              </div>
              <div>
                <label>Phone</label>
                <p>(555) 221-9043</p>
              </div>
              <div>
                <label>Primary focus</label>
                <p>Kickboxing endurance + mobility</p>
              </div>
            </div>
            <button className="ghost" type="button">
              Edit Profile
            </button>
          </section>

          <section className="account-card">
            <header>
              <h3>Membership plan</h3>
              <span>Next billing: Apr 1, 2026</span>
            </header>
            <div className="account-plan">
              <div>
                <p className="plan-name">Momentum</p>
                <span>Unlimited classes</span>
              </div>
              <div className="plan-status">Active</div>
            </div>
            <ul className="account-list">
              <li>Priority sparring slots</li>
              <li>Monthly coach check-in</li>
              <li>Access to weekend labs</li>
            </ul>
            <button className="primary" type="button">
              Manage Plan
            </button>
          </section>

          <section className="account-card">
            <header>
              <h3>Billing method</h3>
              <span>Visa ending 1124</span>
            </header>
            <div className="billing-panel">
              <div>
                <p className="billing-label">Cardholder</p>
                <strong>Avery Chen</strong>
              </div>
              <div>
                <p className="billing-label">Next payment</p>
                <strong>$129.00 on Apr 1</strong>
              </div>
            </div>
            <button className="ghost" type="button">
              Update Card
            </button>
          </section>

          <section className="account-card">
            <header>
              <h3>Emergency contact</h3>
              <span>Verified</span>
            </header>
            <div className="account-fields">
              <div>
                <label>Name</label>
                <p>Jordan Blake</p>
              </div>
              <div>
                <label>Relationship</label>
                <p>Partner</p>
              </div>
              <div>
                <label>Phone</label>
                <p>(555) 407-1198</p>
              </div>
              <div>
                <label>Notes</label>
                <p>Allergies: none reported</p>
              </div>
            </div>
            <button className="ghost" type="button">
              Update Contact
            </button>
          </section>

          <section className="account-card">
            <header>
              <h3>Training goals</h3>
              <span>Quarterly review</span>
            </header>
            <ul className="account-list">
              <li>Improve roundhouse kick height</li>
              <li>Attend 3 classes each week</li>
              <li>Complete 2 sparring labs monthly</li>
            </ul>
            <button className="ghost" type="button">
              Update Goals
            </button>
          </section>
        </div>
      </main>
    </div>
  )
}
