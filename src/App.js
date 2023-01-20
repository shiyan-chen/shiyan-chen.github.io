import React, { useState } from 'react'
import './App.css'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
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
      <Hero />
      <About />
      <Projects id='projects' />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
