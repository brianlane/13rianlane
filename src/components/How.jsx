import './How.css'

export const How = () => {
  const technologies = [
    'React',
    'Vite',
    'CSS3',
    'Terminal',
    'Responsive Design',
    'GitHub',
    'Modern JavaScript',
    'SVG'
  ]
  
  return (
    <section id="how" className="how-section">
      <h2 className="numbered-heading overline">How It's Built</h2>
      <h2 className="section-title">Launching a Portfolio</h2>
      
      <div className="how-content">
        <div className="how-text">
          <p>
            This portfolio website is built with modern web technologies, focusing on 
            performance, responsiveness, and clean design. The site draws inspiration from 
            my friends and their portfolio design aesthetics while incorporating my own 
            personal details and professional experience.
          </p>
          
          <p>
            The entire site is built with React and bundled using Vite for lightning-fast 
            development and optimized production builds. The smooth scrolling navigation, 
            tabbed interfaces, and subtle animations are all implemented with pure CSS 
            and React hooks - no heavy animation libraries needed.
          </p>
          
          <p>
            All styling is done with vanilla CSS using custom properties (variables) 
            for consistent theming and easy customization. The dark theme not only 
            looks sleek but also reduces eye strain during extended viewing.
          </p>
          
          <p>
            The site is fully responsive and works on devices of all sizes, from large desktop 
            monitors to mobile phones. This is achieved through careful use of media queries 
            and flexible layout techniques.
          </p>
          
          <p>Here are the key technologies used in this project:</p>
          
          <ul className="tech-list">
            {technologies.map((tech, i) => (
              <li key={i}>{tech}</li>
            ))}
          </ul>
        </div>

        <div>
          <div className="how-code-container">
            <div className="code-snippet">
              <div className="code-header">
                <span className="file-name">App.jsx</span>
              </div>
              <pre className="code-block">
                <code>
{`import { useState, useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Experience } from './components/Experience'
import { How } from './components/How'
import { Contact } from './components/Contact'
import { Social } from './components/Social'
import './App.css'

function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 1500)
  }, [])

  // ...rest of component
}`}
                </code>
              </pre>
            </div>

            <div className="how-section-info">
              <ol className="steps-list">
                <li>
                  <strong>Domain Selection:</strong> I purchased a custom domain name for this site. Since thousands of people already have the name "Brian Lane", I had to think creatively. By incorporating numbers, I came up with "13rianlane" - a technical twist that showcases some coding style.
                </li>
                <li>
                  <strong>GitHub Pages Hosting:</strong> I leveraged GitHub's free hosting services for this portfolio. To connect my custom domain, I added GitHub's IP addresses to my domain's host records, enabling custom DNS while using GitHub's enforced HTTPS for security.
                </li>
                <li>
                  <strong>Deployment Workflow:</strong> Using gh-pages, I established a CI/CD pipeline for seamless deployment. This allows me to test locally with "npm run dev" while maintaining a professional production environment.
                </li>
              </ol>
              
              <p>GitHub Pages IP Addresses:</p>
              <ul className="ip-address-list">
                <li>185.199.108.153</li>
                <li>185.199.109.153</li>
                <li>185.199.110.153</li>
                <li>185.199.111.153</li>
              </ul>
            </div>

            <div className="code-snippet">
              <div className="code-header">
                <span className="file-name">Terminal</span>
              </div>
              <pre className="code-block">
                <code>
{`$ install node
$ install npm
$ install git
$ npm create vite@latest
$ cd my-app
$ npm install gh-pages --save-dev
$ vim package.json
$ git remote add origin https://github.com/{username}/{repo-name}.git
$ npm run deploy -- -m "Deploy React app to GitHub Pages"`}
                </code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}