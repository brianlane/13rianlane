import './Hero.css'

export const Hero = () => {
  return (
    <section className="hero">
      <div>
        <p className="hero-greeting">Hi, my name is</p>
        <h1 className="hero-title">Brian Lane.</h1>
        <h2 className="hero-subtitle">I build things for the web.</h2>
        <p className="hero-description">
          I'm a senior software engineer specializing in building exceptional digital experiences.
          Currently, I'm focused on building accessible, human-centered products at {' '}
          <a href="https://www.capitalone.com/" target="_blank" rel="noopener noreferrer" className="green-link">
            Capital One
          </a>.
        </p>
        <div className="hero-button-container">
          <a href="#contact" className="hero-button">Get In Touch</a>
        </div>
      </div>
    </section>
  )
}