import { useState } from 'react'
import './Experience.css'

export const Experience = () => {
  const [activeTabId, setActiveTabId] = useState(0)
  
  const jobs = [
    {
      title: 'Senior Software Engineer',
      company: 'American Express',
      companyUrl: 'https://www.capitalone.com/',
      range: 'July 2025 - Present',
      duties: [
        'Manufactured end to end API software including architecture diagrams, reliable production code, and thoughtful unit tests',
        'Documented workflow process for end to end work of hundreds of API endpoints',
        'Refactored code to meet authorization security standards for token generation',
        'Provided valuable knowledge transfers to team members and new onboarding members'
      ]
    },
    {
      title: 'Senior Software Engineer',
      company: 'Capital One',
      companyUrl: 'https://www.capitalone.com/',
      range: 'June 2022 - April 2025',
      duties: [
        'Improved the data collection for allowlists and filter data, automating a full day\'s work',
        'Assisted with the decommission of team applications, documentation and the migration process',
        'Created self-service portal for internal clients using web backend technologies',
        'Completed AWS Certified Solutions Architect Training and Certification'
      ]
    },
    {
      title: 'Software Engineer',
      company: 'Charles Schwab',
      companyUrl: 'https://www.schwab.com/',
      range: 'June 2019 - June 2022',
      duties: [
        'Developed Java Spring microservices hosted on Pivotal Cloud Foundry continuously integrated through Bamboo',
        'Succeeded in New Employee Recruitment & Development Program - Java and Scrum Master Certified',
        'Integrated into team by working end to end on own application'
      ]
    },
    {
      title: 'Software Engineer',
      company: 'Honeywell',
      companyUrl: 'https://www.honeywell.com/',
      range: 'August 2018 - June 2019',
      duties: [
        'Performed rigorous system-level testing on flight simulators, which resulted in gaining aerospace bench knowledge',
        'Conducted and created code, requirement and design reviews to ensure high quality, bug-free software',
        'Earned certification in Six Sigma Green Belt Software Development and Design Training'
      ]
    },
    {
      title: ['Research Assistant', 'Department Tutor Coordinator'],
      company: 'U of A',
      companyUrl: 'https://www.arizona.edu/',
      range: ['January 2018 - May 2018', 'March 2016 - May 2018'],
      duties: [
        {
          role: 'Research Assistant',
          items: [
            'Gained familiarity with biological data and created visualizations based upon these properties',
            'Advanced algorithms making the scripts for comparison of genomic data 7 times faster',
            'Researched new methods for parsing data and making comparisons for tools that are used with visualization'
          ]
        },
        {
          role: 'Department Tutor Coordinator',
          items: [
            'Lead program by deploying effective tutoring strategies to ensure learning for hundreds of students',
            'Conducted supplemental instruction sessions on how-to-debug in C using gdb',
            'Facilitated trainings with tutoring staff to help perfect knowledge on data structures, recursion, and algorithms',
            'Managed recruitment, tutor allocation for department, and appointed shift leaders'
          ]
        }
      ]
    }
  ]
  
  return (
    <section id="experience" className="experience-section">
      <h2 className="numbered-heading overline">Where I've Worked</h2>
      <h2 className="section-title">Industry Experience</h2>

      <div className="experiences-container">
        <div className="tab-list" role="tablist" aria-label="Job tabs">
          {jobs.map((job, i) => (
            <button
              key={i}
              className={`tab-button ${activeTabId === i ? 'active' : ''}`}
              onClick={() => setActiveTabId(i)}
              id={`tab-${i}`}
              role="tab"
              tabIndex={activeTabId === i ? 0 : -1}
              aria-selected={activeTabId === i}
              aria-controls={`panel-${i}`}
            >
              <span>{job.company}</span>
            </button>
          ))}
          <div className="highlight" style={{ transform: `translateY(calc(${activeTabId} * 42px))` }}></div>
        </div>
        
                  <div className="tab-panels">
          {jobs.map((job, i) => (
            <div
              key={i}
              className={`tab-panel ${activeTabId === i ? 'active' : ''}`}
              id={`panel-${i}`}
              role="tabpanel"
              tabIndex={0}
              aria-labelledby={`tab-${i}`}
              hidden={activeTabId !== i}
            >
              {Array.isArray(job.title) ? (
                // Multiple positions at the same company
                <>
                  {job.title.map((title, idx) => (
                    <div key={idx} className="job-position">
                      <h3>
                        <span className="job-title">{title}</span>
                        <span className="job-company">
                          &nbsp;@&nbsp;
                          <a href={job.companyUrl} className="inline-link" target="_blank" rel="noopener noreferrer">
                            {job.company}
                          </a>
                        </span>
                      </h3>
                      
                      <p className="job-range">{job.range[idx]}</p>
                      
                      <ul className="job-duties">
                        {job.duties[idx].items.map((duty, dutyIndex) => (
                          <li key={dutyIndex}>{duty}</li>
                        ))}
                      </ul>
                      {idx < job.title.length - 1 && <div className="job-divider"></div>}
                    </div>
                  ))}
                </>
              ) : (
                // Single position
                <>
                  <h3>
                    <span className="job-title">{job.title}</span>
                    <span className="job-company">
                      &nbsp;@&nbsp;
                      <a href={job.companyUrl} className="inline-link" target="_blank" rel="noopener noreferrer">
                        {job.company}
                      </a>
                    </span>
                  </h3>
                  
                  <p className="job-range">{job.range}</p>
                  
                  <ul className="job-duties">
                    {job.duties.map((duty, index) => (
                      <li key={index}>{duty}</li>
                    ))}
                  </ul>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}