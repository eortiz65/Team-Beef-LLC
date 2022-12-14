import './App.css'
import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Header from './components/Header'
import Register from './components/Register'
import Login from './components/Login'
import AboutBeef from './components/AboutBeef'
import AdminProfile from './components/AdminProfile'

function App() {
  return (
    <div className="App">
      <nav>
        <Header />
      </nav>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/aboutbeef" element={<AboutBeef />} />
          <Route path="/profile" element={<AdminProfile />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
