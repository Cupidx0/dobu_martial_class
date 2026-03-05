import React from 'react'

export default function Timetable() {
  return (
    <div className="timetable-page">
      <header className="sub-hero timetable-hero">
        <div className="sub-hero-content">
          <p className="kicker">Timetable</p>
          <h1>Prices, membership options, and weekly class schedule.</h1>
          <p className="lead">
            Everything you need to plan your training week. Compare membership options, specialist
            courses, and find the class times that work best for you.
          </p>
        </div>
      </header>

      <main className="timetable-main">
        <section className="timetable-section">
          <div className="section-heading">
            <p className="kicker">Membership</p>
            <h2>Prices and membership options</h2>
            <p className="lead">
              Choose a plan that matches your pace. All memberships include access to the training
              floor, locker rooms, and member community events.
            </p>
          </div>
          <div className="price-table-wrap">
            <table className="price-table">
              <thead>
                <tr>
                  <th scope="col">Membership option</th>
                  <th scope="col">Monthly fee</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Basic (1 martial art - 2 sessions per week)</td>
                  <td>&pound;25.00</td>
                </tr>
                <tr>
                  <td>Intermediate (1 martial art - 3 sessions per week)</td>
                  <td>&pound;35.00</td>
                </tr>
                <tr>
                  <td>Advanced (any 2 martial arts - 5 sessions per week)</td>
                  <td>&pound;45.00</td>
                </tr>
                <tr>
                  <td>Elite (unlimited classes)</td>
                  <td>&pound;60.00</td>
                </tr>
                <tr>
                  <td>Private martial arts tuition - per hour</td>
                  <td>&pound;15.00</td>
                </tr>
                <tr>
                  <td>Junior membership - can attend all-kids martial arts sessions</td>
                  <td>&pound;25.00</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="timetable-section">
          <div className="section-heading">
            <p className="kicker">Specialist Courses</p>
            <h2>Specialist courses and fitness training</h2>
            <p className="lead">
              Short courses and fitness add-ons that support specific goals, recovery, and skill
              development.
            </p>
          </div>
          <div className="price-table-wrap">
            <table className="price-table">
              <thead>
                <tr>
                  <th scope="col">Course</th>
                  <th scope="col">Fee</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Six-week beginners&apos; self-defence course (2 x 1-hour session per week)</td>
                  <td>&pound;180.00</td>
                </tr>
                <tr>
                  <td>Use of fitness room - per visit</td>
                  <td>&pound;6.00</td>
                </tr>
                <tr>
                  <td>Personal fitness training - per hour</td>
                  <td>&pound;35.00</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="timetable-section">
          <div className="section-heading">
            <p className="kicker">Weekly Schedule</p>
            <h2>Martial arts class timetable</h2>
            <p className="lead">
              Core classes run Monday to Friday with weekend family sessions and open mat practice.
            </p>
          </div>
          <div className="timetable-table-wrap">
            <table className="timetable-table">
              <thead>
                <tr>
                  <th scope="col">Time</th>
                  <th scope="col">Monday</th>
                  <th scope="col">Tuesday</th>
                  <th scope="col">Wednesday</th>
                  <th scope="col">Thursday</th>
                  <th scope="col">Friday</th>
                  <th scope="col">Saturday</th>
                  <th scope="col">Sunday</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row" className="time-cell">
                    06:00 - 07:30
                  </th>
                  <td>
                    <span className="slot">Jiu-jitsu</span>
                  </td>
                  <td>
                    <span className="slot">Karate</span>
                  </td>
                  <td>
                    <span className="slot">Judo</span>
                  </td>
                  <td>
                    <span className="slot">Jiu-jitsu</span>
                  </td>
                  <td>
                    <span className="slot">Muay Thai</span>
                  </td>
                  <td>
                    <span className="slot empty">—</span>
                  </td>
                  <td>
                    <span className="slot empty">—</span>
                  </td>
                </tr>
                <tr>
                  <th scope="row" className="time-cell">
                    08:00 - 10:00
                  </th>
                  <td>
                    <span className="slot">Muay Thai</span>
                  </td>
                  <td>
                    <span className="slot">Private tuition</span>
                  </td>
                  <td>
                    <span className="slot">Private tuition</span>
                  </td>
                  <td>
                    <span className="slot">Private tuition</span>
                  </td>
                  <td>
                    <span className="slot">Jiu-jitsu</span>
                  </td>
                  <td>
                    <span className="slot">Private tuition</span>
                  </td>
                  <td>
                    <span className="slot">Private tuition</span>
                  </td>
                </tr>
                <tr>
                  <th scope="row" className="time-cell">
                    10:30 - 12:00
                  </th>
                  <td>
                    <span className="slot">Private tuition</span>
                  </td>
                  <td>
                    <span className="slot">Private tuition</span>
                  </td>
                  <td>
                    <span className="slot">Private tuition</span>
                  </td>
                  <td>
                    <span className="slot">Private tuition</span>
                  </td>
                  <td>
                    <span className="slot">Private tuition</span>
                  </td>
                  <td>
                    <span className="slot">Judo</span>
                  </td>
                  <td>
                    <span className="slot">Karate</span>
                  </td>
                </tr>
                <tr>
                  <th scope="row" className="time-cell">
                    13:00 - 14:30
                  </th>
                  <td>
                    <span className="slot">Open mat</span>
                    <span className="slot sub">Personal practice</span>
                  </td>
                  <td>
                    <span className="slot">Open mat</span>
                    <span className="slot sub">Personal practice</span>
                  </td>
                  <td>
                    <span className="slot">Open mat</span>
                    <span className="slot sub">Personal practice</span>
                  </td>
                  <td>
                    <span className="slot">Open mat</span>
                    <span className="slot sub">Personal practice</span>
                  </td>
                  <td>
                    <span className="slot">Open mat</span>
                    <span className="slot sub">Personal practice</span>
                  </td>
                  <td>
                    <span className="slot">Karate</span>
                  </td>
                  <td>
                    <span className="slot">Judo</span>
                  </td>
                </tr>
                <tr>
                  <th scope="row" className="time-cell">
                    15:00 - 17:00
                  </th>
                  <td>
                    <span className="slot">Kids jiu-jitsu</span>
                  </td>
                  <td>
                    <span className="slot">Kids judo</span>
                  </td>
                  <td>
                    <span className="slot">Kids karate</span>
                  </td>
                  <td>
                    <span className="slot">Kids jiu-jitsu</span>
                  </td>
                  <td>
                    <span className="slot">Kids judo</span>
                  </td>
                  <td>
                    <span className="slot">Muay Thai</span>
                  </td>
                  <td>
                    <span className="slot">Jiu-jitsu</span>
                  </td>
                </tr>
                <tr>
                  <th scope="row" className="time-cell">
                    17:30 - 19:00
                  </th>
                  <td>
                    <span className="slot">Karate</span>
                  </td>
                  <td>
                    <span className="slot">Muay Thai</span>
                  </td>
                  <td>
                    <span className="slot">Judo</span>
                  </td>
                  <td>
                    <span className="slot">Jiu-jitsu</span>
                  </td>
                  <td>
                    <span className="slot">Muay Thai</span>
                  </td>
                  <td>
                    <span className="slot empty">—</span>
                  </td>
                  <td>
                    <span className="slot empty">—</span>
                  </td>
                </tr>
                <tr>
                  <th scope="row" className="time-cell">
                    19:00 - 21:00
                  </th>
                  <td>
                    <span className="slot">Jiu-jitsu</span>
                  </td>
                  <td>
                    <span className="slot">Judo</span>
                  </td>
                  <td>
                    <span className="slot">Jiu-jitsu</span>
                  </td>
                  <td>
                    <span className="slot">Karate</span>
                  </td>
                  <td>
                    <span className="slot">Private tuition</span>
                  </td>
                  <td>
                    <span className="slot empty">—</span>
                  </td>
                  <td>
                    <span className="slot empty">—</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="timetable-note">
            <p>
              Open mat sessions are self-led. Private tuition is bookable at the front desk or via
              the member portal.
            </p>
          </div>
        </section>
      </main>
    </div>
  )
}
