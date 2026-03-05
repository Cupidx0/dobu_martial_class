import React from 'react'
export default function Homepage() {
  return (
    <div className="home-page">
      <div className="ambient ambient-one" aria-hidden="true" />
      <div className="ambient ambient-two" aria-hidden="true" />
      <div className="ambient ambient-three" aria-hidden="true" />

      <header className="hero" id="top">
        <div className="hero-content">
          <div className="hero-copy">
            <span className="eyebrow">Modern dojo in the city center</span>
            <h1>Train with purpose, build confidence that shows up everywhere.</h1>
            <p>
              Dobu Martial Arts blends traditional technique with modern conditioning. Learn
              striking, grappling, and mindful movement in a studio designed for growth at every
              level.
            </p>
            <div className="hero-actions">
              <button className="primary" type="button">
                Start Your Trial
              </button>
              <button className="ghost" type="button">
                View Schedule
              </button>
            </div>
            <div className="hero-stats">
              <div>
                <strong>500+</strong>
                <span>Active members</span>
              </div>
              <div>
                <strong>30 yrs</strong>
                <span>Combined coaching</span>
              </div>
              <div>
                <strong>7</strong>
                <span>Class styles weekly</span>
              </div>
            </div>
          </div>

          <div className="hero-card">
            <span className="chip">Open today</span>
            <h3>Starter Pack</h3>
            <p>Two small-group classes + one private fundamentals session.</p>
            <ul className="checklist">
              <li>Technique assessment & goal planning</li>
              <li>Loaner gear included</li>
              <li>Flexible times this week</li>
            </ul>
            <button className="secondary" type="button">
              Reserve a spot
            </button>
            <p className="note">No contracts. Pause anytime.</p>
          </div>
        </div>

        <div className="hero-strip">
          <span>Karate</span>
          <span>Kickboxing</span>
          <span>Jiu-Jitsu</span>
          <span>Weapons & Forms</span>
          <span>Conditioning Lab</span>
        </div>
      </header>

      <main>
        <section id="programs" className="section programs">
          <div className="section-heading">
            <p className="kicker">Programs</p>
            <h2>Train with intent, not just intensity.</h2>
            <p className="lead">
              Every class is structured around progress you can measure. Choose your focus or mix
              disciplines for a full-spectrum practice.
            </p>
          </div>
          <div className="program-grid">
            <article className="program-card">
              <h3>Karate Fundamentals</h3>
              <p>Stance, kata, and controlled power with coach-guided repetition.</p>
              <div className="tag-row">
                <span>Beginner friendly</span>
                <span>All ages 13+</span>
              </div>
            </article>
            <article className="program-card accent">
              <h3>Kickboxing Ignite</h3>
              <p>High-energy striking sessions for endurance, speed, and confidence.</p>
              <div className="tag-row">
                <span>Cardio focus</span>
                <span>Evenings</span>
              </div>
            </article>
            <article className="program-card">
              <h3>Jiu-Jitsu Flow</h3>
              <p>Grappling, escapes, and submissions with a calm, technical pace.</p>
              <div className="tag-row">
                <span>Gi & No-Gi</span>
                <span>Small groups</span>
              </div>
            </article>
            <article className="program-card">
              <h3>Weapons & Forms</h3>
              <p>Traditional forms, staff work, and focus training for precision.</p>
              <div className="tag-row">
                <span>Intermediate+</span>
                <span>Weekly labs</span>
              </div>
            </article>
          </div>
        </section>

        <section id="schedule" className="section schedule">
          <div className="section-heading">
            <p className="kicker">Schedule</p>
            <h2>Class times that fit real life.</h2>
            <p className="lead">
              Morning conditioning, evening technique, and weekend community sessions.
            </p>
          </div>
          <div className="schedule-grid">
            <div className="schedule-card">
              <h3>Monday</h3>
              <ul className="schedule-list">
                <li>
                  <span>8:00 AM - 10:00 AM</span> muay thai
                </li>
                <li>
                  <span>17:00 PM - 19:00 PM</span> karate
                </li>
                <li>
                  <span>19:00 PM - 21:00 PM</span> jiu-jitsu
                </li>
              </ul>
            </div>
            <div className="schedule-card">
              <h3>Wednesday</h3>
              <ul className="schedule-list">
                <li>
                  <span>8:00 AM - 10:00 AM</span> private coaching sessions
                </li>
                <li>
                  <span>17:30 PM - 19:00 PM</span> jiu-jitsu
                </li>
                <li>
                  <span>19:00 PM - 21:00 PM</span> karate
                </li>
              </ul>
            </div>
            <div className="schedule-card">
              <h3>Friday</h3>
              <ul className="schedule-list">
                <li>
                  <span>8:00 AM - 10:00 AM</span> jiu-jitsu
                </li>
                <li>
                  <span>17:30 PM - 19:00 PM</span> muay thai
                </li>
                <li>
                  <span>19:00 PM - 21:00 PM</span> private coaching sessions
                </li>
              </ul>
            </div>
            <div className="schedule-card highlight">
              <h3>Weekend</h3>
              <ul className="schedule-list">
                <li>
                  <span>Sat 9:00 AM</span> private coaching sessions
                </li>
                <li>
                  <span>Sat 11:00 AM</span> judo
                </li>
                <li>
                  <span>Sun 10:00 AM</span> karate sparring and open mat
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section id="coaches" className="section coaches">
          <div className="section-heading">
            <p className="kicker">Coaches</p>
            <h2>Guidance from calm, seasoned leaders.</h2>
            <p className="lead">
              Our instructors blend tradition with modern sports science to help you progress
              safely.
            </p>
          </div>
          <div className="coach-grid">
            <article className="coach-card">
              <div className="avatar avatar-one" aria-hidden="true" />
              <h3>Mauricio Gomez</h3>
              <p>Gym Owner/Head of Martial Arts Coach</p>
              <span className="coach-note">coaches all in martial arts</span>
              <span className="coach-note">4th dan black belt judo</span>
              <span className="coach-note">3rd dan black belt jiu-jitsu</span>
              <span className="coach-note">1st dan black belt karate</span>
              <span className="coach-note">accredited muay thai coach</span>
            </article>
            <article className="coach-card">
              <div className="avatar avatar-two" aria-hidden="true" />
              <h3>Coach Sarah Nova</h3>
              <p>Assistant Martial Arts Coach</p>
              <span className="coach-note">5th dan karate</span>
            </article>
            <article className="coach-card">
              <div className="avatar avatar-three" aria-hidden="true" />
              <h3>Guy Victory</h3>
              <p>Assistant Martial Arts Coach</p>
              <span className="coach-note">2nd dan black belt jiu-jitsu and 1st dan black belt judo</span>
            </article>
            <article className="coach-card">
              <div className="avatar avatar-three" aria-hidden="true" />
              <h3>Morris Davis</h3>
              <p>Assistant Martial Arts Coach</p>
              <span className="coach-note">accredited muay thai coach</span>
            </article>
            <article className="coach-card">
              <div className="avatar avatar-three" aria-hidden="true" />
              <h3>Traci Santiago</h3>
              <p>Fitness Coach</p>
              <span className="coach-note">specialises in devising strength and conditioning programs for combat athletes</span>
            </article>
            <article className="coach-card">
              <div className="avatar avatar-three" aria-hidden="true" />
              <h3>Harpreet Kaur</h3>
              <p>Fitness Coach</p>
              <span className="coach-note">Bsc in physiotherapy</span>
              <span className="coach-note">Msc in sports science</span>
            </article>
          </div>
        </section>

        <section className="section facility">
          <div className="facility-grid">
            <div>
              <p className="kicker">Studio</p>
              <h2>Built for focus, flow, and recovery.</h2>
              <p className="lead">
                Train on premium mats, track your progress in our performance corner, and reset in
                the recovery lounge after every session.
              </p>
              <ul className="feature-list">
                <li>Full-size sprung mat space with safety zones</li>
                <li>Strength bays with smart timing systems</li>
                <li>Dedicated mobility + recovery room</li>
                <li>Gear lockers, showers, and lounge seating</li>
              </ul>
            </div>
            <div className="facility-panel">
              <div className="facility-card">
                <p className="metric">2,500 sq ft</p>
                <span>Training floor</span>
              </div>
              <div className="facility-card">
                <p className="metric">12 bags</p>
                <span>Striking stations</span>
              </div>
              <div className="facility-card">
                <p className="metric">24/7</p>
                <span>Member lounge access</span>
              </div>
            </div>
          </div>
        </section>

        <section id="membership" className="section membership">
          <div className="section-heading">
            <p className="kicker">Membership</p>
            <h2>Choose the pace that matches your goals.</h2>
            <p className="lead">
              Simple monthly plans with personal coaching touchpoints built in.
            </p>
          </div>
          <div className="pricing-grid">
            <article className="price-card">
              <h3>Basic</h3>
              <p className="price">$25</p>

              <span className="price-note">per month</span>
              <ul className="price-list">
                <li>2 classes per month</li>
                <li>Onboarding assessment</li>
                <li>Access to community events</li>
              </ul>
              <button className="ghost" type="button">
                Pick Basic
              </button>
            </article>
            <article className="price-card">
              <h3>Intermediate</h3>
              <p className="price">$35</p>

              <span className="price-note">per month</span>
              <ul className="price-list">
                <li>3 classes per month</li>
                <li>Onboarding assessment</li>
                <li>Access to community events</li>
              </ul>
              <button className="ghost" type="button">
                Pick Intermediate
              </button>
            </article>
            <article className="price-card">
              <h3>Advanced</h3>
              <p className="price">$45</p>

              <span className="price-note">per month</span>
              <ul className="price-list">
                <li>5 classes per month</li>
                <li>Onboarding assessment</li>
                <li>Access to community events</li>
              </ul>
              <button className="ghost" type="button">
                Pick Advanced
              </button>
            </article>
            <article className="price-card featured">
              <div className="chip">Most popular</div>
              <h3>Momentum</h3>
              <p className="price">$129</p>
              <span className="price-note">per month</span>
              <ul className="price-list">
                <li>Unlimited classes</li>
                <li>Monthly coach check-in</li>
                <li>Priority sparring slots</li>
              </ul>
              <button className="primary" type="button">
                Choose Momentum
              </button>
            </article>
            <article className="price-card">
              <h3>Elite</h3>
              <p className="price">$60</p>
              <span className="price-note">per month</span>
              <ul className="price-list">
                <li>Unlimited classes + open mat</li>
                <li>2 private sessions monthly</li>
                <li>Custom performance plan</li>
              </ul>
              <button className="ghost" type="button">
                Pick Elite
              </button>
            </article>
          </div>
        </section>

        <section className="section testimonials">
          <div className="section-heading">
            <p className="kicker">Community</p>
            <h2>Members who train hard and show up for each other.</h2>
            <p className="lead">
              Real stories from people balancing work, family, and training.
            </p>
          </div>
          <div className="testimonial-grid">
            <figure className="testimonial-card">
              <blockquote>
                “I started as a complete beginner. In three months I feel stronger, calmer, and
                more confident in everyday situations.”
              </blockquote>
              <figcaption>Jordan R. — Product Designer</figcaption>
            </figure>
            <figure className="testimonial-card">
              <blockquote>
                “The coaches meet you where you are. The energy is focused, not chaotic, and the
                progress feels real.”
              </blockquote>
              <figcaption>Amira S. — Nurse</figcaption>
            </figure>
            <figure className="testimonial-card">
              <blockquote>
                “Dobu is the first gym that made me feel part of a team. Sparring nights are the
                highlight of my week.”
              </blockquote>
              <figcaption>Leo M. — Software Engineer</figcaption>
            </figure>
          </div>
        </section>

        <section className="cta-band">
          <div>
            <p className="kicker light">Ready to begin?</p>
            <h2>Step onto the mat this week.</h2>
            <p>
              Try a starter class, meet the coaches, and build a plan that fits your schedule.
            </p>
          </div>
          <div className="cta-actions">
            <button className="primary light" type="button">
              Book a Trial Class
            </button>
            <button className="ghost light" type="button">
              Talk to a Coach
            </button>
          </div>
        </section>
      </main>

    </div>
  )
}
