import './App.css'
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Header from './components/Header'
import Register from './components/Register'
import Login from './components/Login'
import AboutBeef from './components/AboutBeef'
import Admins from './components/Admins'

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
          <Route path="/aboutbeef" element={<AboutBeef />} />
          <Route path="/admins" element={<Admins />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
