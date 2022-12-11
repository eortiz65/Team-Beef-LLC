import './App.css'
import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Header from './components/Header'

function App() {
  return (
    <div className="App">
      <nav>
        <Header />
      </nav>
      <main>
        <Home />
      </main>
    </div>
  )
}

export default App
