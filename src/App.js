import React from 'react'
import './App.css'
import AboutSection from './components/AboutSection'
// import Hero from './components/HeroSection'
import HeroSection2 from './components/HeroSection2'
import Navbar from './components/Navbar'
import Projects from './components/ProjectSection'

function App() {
  return (
    <div>
      <Navbar />
      <HeroSection2 />
      <AboutSection />
      <Projects />
    </div>
  )
}

export default App
