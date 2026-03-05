import React from 'react'

export default function Policy() {
  return (
    <div className="policy-page">
      <header className="sub-hero">
        <div className="sub-hero-content">
          <p className="kicker">Policies</p>
          <h1>Clear expectations that protect every member on the mat.</h1>
          <p className="lead">
            Our policies are designed to keep training safe, focused, and welcoming. Please review
            them before your first class and revisit anytime.
          </p>
          <div className="policy-meta">
            <div>
              <span>Last updated</span>
              <strong>March 5, 2026</strong>
            </div>
            <div>
              <span>Questions</span>
              <strong>hello@dobumartial.com</strong>
            </div>
            <div>
              <span>Front desk</span>
              <strong>(555) 013-4481</strong>
            </div>
          </div>
        </div>
      </header>

      <main className="policy-main">
        <section className="policy-highlight">
          <div>
            <p className="kicker">At a glance</p>
            <h2>What we care about most.</h2>
            <p className="lead">
              Respect, cleanliness, and safety keep the dojo strong. These three principles guide
              everything else.
            </p>
          </div>
          <div className="policy-tiles">
            <article className="policy-tile">
              <h3>Respect the room</h3>
              <p>Be supportive, coachable, and mindful of everyone’s training space.</p>
            </article>
            <article className="policy-tile">
              <h3>Train clean</h3>
              <p>Uniforms, gloves, and mats should be clean and odor-free each class.</p>
            </article>
            <article className="policy-tile">
              <h3>Safety first</h3>
              <p>Tap early, communicate injuries, and follow coach instruction at all times.</p>
            </article>
          </div>
        </section>

        <section className="policy-grid">
          <article className="policy-card">
            <h3>Class readiness</h3>
            <ul className="policy-list">
              <li>Arrive 10 minutes early to warm up and check in.</li>
              <li>Remove jewelry and trim nails before sparring.</li>
              <li>Tell your coach about injuries or health concerns.</li>
            </ul>
          </article>
          <article className="policy-card">
            <h3>Attendance & punctuality</h3>
            <ul className="policy-list">
              <li>Late arrivals should wait for coach approval to enter.</li>
              <li>Missed classes can be made up within the same week.</li>
              <li>Notify us for extended absences so we can keep your spot.</li>
            </ul>
          </article>
          <article className="policy-card">
            <h3>Equipment & facility use</h3>
            <ul className="policy-list">
              <li>Return pads, gloves, and loaner gear to the rack after class.</li>
              <li>Personal lockers are for same-day use only.</li>
              <li>Food is limited to the lounge area.</li>
            </ul>
          </article>
          <article className="policy-card">
            <h3>Membership billing</h3>
            <ul className="policy-list">
              <li>Billing occurs on the first of each month.</li>
              <li>Plans can be paused twice per year with 7 days’ notice.</li>
              <li>Cancelations require 30 days’ notice in writing.</li>
            </ul>
          </article>
          <article className="policy-card">
            <h3>Safety & sparring</h3>
            <ul className="policy-list">
              <li>All sparring is controlled; coach approval is required.</li>
              <li>Headgear is mandatory for full-contact rounds.</li>
              <li>Tap early and release immediately when a partner taps.</li>
            </ul>
          </article>
          <article className="policy-card">
            <h3>Privacy & media</h3>
            <ul className="policy-list">
              <li>Photography is allowed only with coach permission.</li>
              <li>Opt out of social media features at the front desk.</li>
              <li>Member data is never sold or shared externally.</li>
            </ul>
          </article>
        </section>

        <section className="policy-footer">
          <div>
            <h2>Need clarification?</h2>
            <p>
              Policies may evolve as we grow. Reach out to a coach or front desk team member for
              details on anything covered here.
            </p>
          </div>
          <div className="policy-actions">
            <button className="primary light" type="button">
              Ask a Question
            </button>
            <button className="ghost light" type="button">
              Download PDF
            </button>
          </div>
        </section>
      </main>
    </div>
  )
}
