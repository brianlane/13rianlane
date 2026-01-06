import { useState, useEffect } from 'react'
import './Navbar.css'

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  
  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }
  
  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <nav className="nav">
        <div className="logo">
          <a href="/">BL</a>
        </div>
        
        <div className={`menu-button ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <div className="ham-box">
            <div className="ham-box-inner"></div>
          </div>
        </div>
        
        <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <ol>
            <li><a href="#about" onClick={() => setMenuOpen(false)}><span>01.</span> About</a></li>
            <li><a href="#experience" onClick={() => setMenuOpen(false)}><span>02.</span> Experience</a></li>
            <li><a href="#projects" onClick={() => setMenuOpen(false)}><span>03.</span> Projects</a></li>
            <li><a href="#how" onClick={() => setMenuOpen(false)}><span>04.</span> How</a></li>
            <li><a href="#contact" onClick={() => setMenuOpen(false)}><span>05.</span> Contact</a></li>
          </ol>
          <div className="resume-button">
            <a href="/BrianLaneResume2026.pdf" target="_blank" rel="noopener noreferrer">Resume</a>
          </div>
        </div>
      </nav>
    </header>
  )
}