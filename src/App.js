import React from 'react'
import './App.css'
import Hero from './components/HeroSection'
import Navbar from './components/Navbar'
import Projects from './components/ProjectSection'

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Projects />
    </div>
  )
}

export default App
