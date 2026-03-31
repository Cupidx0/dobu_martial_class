import React from 'react'
import Layout from './pages/Layout'
import Homepage from './pages/hompage'
import Policy from './pages/policy'
import Account from './pages/account'
import Login from './pages/login'
import Signup from './pages/signup'
import Timetable from './pages/timetable'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Homepage />} />
            <Route path="policy" element={<Policy />} />
            <Route path="account" element={<Account />} />
            <Route path="timetable" element={<Timetable />} />
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Signup />} />
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App

