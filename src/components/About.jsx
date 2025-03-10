import './About.css'

export const About = () => {
  const skills = [
    'JavaScript (ES6+)', 
    'Java',
    'React',
    'Spring Boot',
    'AWS',
    'Python',
    'Docker',
    'Cloud Foundry'
  ]
  
  return (
    <section id="about" className="about-section">
      <h2 className="numbered-heading">About Me</h2>
      
      <div className="about-content">
        <div className="about-text">
          <p>
            Hello! I'm Brian, a senior software engineer who enjoys building things that live on the internet.
            My interest in software development started back during my college days at the
            University of Arizona, where I graduated with a BS in Computer Science and a minor in Psychology in 2018.
          </p>
          
          <p>
            Fast-forward to today, and I've had the privilege of working at{' '}
            <a href="https://www.honeywell.com/" target="_blank" rel="noopener noreferrer" className="green-link">
              an aerospace company
            </a>,{' '}
            <a href="https://www.schwab.com/" target="_blank" rel="noopener noreferrer" className="green-link">
              a large financial institution
            </a>,
            and{' '}
            <a href="https://www.capitalone.com/" target="_blank" rel="noopener noreferrer" className="green-link">
              a finance technology company
            </a>.
            My focus these days is building accessible, inclusive products and digital experiences at Capital One.
          </p>
          
          <p>
            I'm an AWS Certified Solutions Architect with experience in creating self-service portals
            and microservices that improve efficiency and automation. I'm also passionate about mentoring
            and teaching, having worked as a tutor coordinator and TA during my university days.
          </p>
          
          <p>Here are a few technologies I've been working with recently:</p>
          
          <ul className="skills-list">
            {skills.map((skill, i) => (
              <li key={i}>{skill}</li>
            ))}
          </ul>
        </div>
        
        <div className="about-image-container">
          <div className="about-image-wrapper">
            <div className="about-image">
              {/* Replace with your own image */}
              <div className="placeholder-image"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}