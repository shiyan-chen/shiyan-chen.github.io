import React, { useState } from 'react'
import './App.css'
import AboutSection from './components/AboutSection'
import HeroSection from './components/HeroSection'
import Navbar from './components/Navbar'
import ProjectSection from './components/ProjectSection'
import Sidebar from './components/Sidebar'

function App() {
  const [showSidebar, setShowSidebar] = useState(false)

  const toggleSidebar = () => {
    setShowSidebar((prevData) => !prevData)
  }

  return (
    <div>
      <Sidebar showSidebar={showSidebar} toggleSidebar={toggleSidebar} />
      <Navbar toggleSidebar={toggleSidebar} />
      <HeroSection />
      <AboutSection />
      <ProjectSection />
    </div>
  )
}

export default App
