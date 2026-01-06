import './About.css'
import profileImg from '../assets/images/profile.jpg';


export const About = () => {
  const skills = [
    'Java', 
    'JavaScript',
    'React',
    'Spring Boot',
    'AWS',
    'Python',
    'Bash',
    'Cloud Foundry'
  ]
  
  return (
    <section id="about" className="about-section">
      <h2 className="numbered-heading overline">About Me</h2>
      <h2 className="section-title">My Story</h2>
      <div className="about-content">
        <div className="about-text">
          <p>
            Hello! I'm Brian, a senior software engineer who enjoys building things on an enterprise level.
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
            These days, I focus on building accessible, inclusive products and digital experiences at Capital One.
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
              <img 
                src={profileImg} 
                alt="Brian Lane" 
                className="img-fluid" 
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}