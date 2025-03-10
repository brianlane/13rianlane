import { useState, useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Experience } from './components/Experience'
import { Contact } from './components/Contact'
import { Social } from './components/Social'
import './App.css'

function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate loading time
    setTimeout(() => {
      setIsLoading(false)
    }, 1500)
  }, [])

  if (isLoading) {
    return (
      <div className="loader">
        <div className="loader-content">BL</div>
      </div>
    )
  }

  return (
    <div className="app">
      <Navbar />
      <main className="content">
        <Hero />
        <About />
        <Experience />
        <Contact />
      </main>
      <Social />
    </div>
  )
}

export default App