import './App.css'
import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'

function App() {
  return (
    <div className="App">
      <nav></nav>
      <main>
        <Home />
      </main>
    </div>
  )
}

export default App
