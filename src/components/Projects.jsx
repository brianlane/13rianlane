import './Projects.css'

export const Projects = () => {
  const projects = [
    {
      title: "Home Assistant",
      description: "Fully automated home with custom scripts and integrations using a Raspberry Pi. Originally was a simple home automation system, but now it has evolved into a full-fledged smart home with custom automations and preferred logging.",
      link: "https://medium.com/@brianlane2/wink-to-home-assistant-completed-225b404fc8ac",
      linkText: "Read about what I learned here",
      tech: ["Raspberry Pi", "Scripting", "Yaml Configuration", "Zwave/Zigbee"],
      image: "/project-one.jpg"
    },
    {
      title: "Surveillance Camera",
      description: "It all started with a Raspberry Pi using Camera Module V2. Perf testing was used to compare openCV and Google Cloud Vision api's for best recognition as a live stream. Consequently, email security updates upon detection of human upper body were enabled for application.",
      tech: ["Raspberry Pi", "openCV", "Google Cloud Vision", "Bash"],
      image: "/project-two.jpg"
    },
    {
      title: "caseFix",
      description: "Created an iOS Application that seamlessly enhanced the keyboard functionality of the iOS software using Swift. The app was developed to modify text to all lowercase, all uppercase, or to even fix the case which is useful for voice-to-text processes.",
      tech: ["iPhone", "Swift", "iOS", "AppStore"],
      image: "/project-three.jpg"
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <h2 className="numbered-heading">Projects</h2>
      <h2 className="section-title">Some Personal Things I've Built</h2>

      <div className="projects-grid">
        {projects.map((project, i) => (
          <div key={i} className="project-card">
            <div className="project-content">
              <div className="project-header">
                <div className="project-folder">
                  <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="folder-icon">
                    <title>Folder</title>
                    <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
                  </svg>
                </div>
              </div>

              <h3 className="project-title">{project.title}</h3>
              <div className="project-description">
                <p>
                  {project.description}
                  {project.link && (
                    <>
                      {' '}
                      <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-link">
                        {project.linkText}
                      </a>
                      .
                    </>
                  )}
                </p>
              </div>

              <ul className="project-tech-list">
                {project.tech.map((tech, i) => (
                  <li key={i}>{tech}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};