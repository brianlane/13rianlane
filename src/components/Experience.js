import React from "react";
import { experience } from "../data";

function Experience() {
  return (
    <section className="experience">
      <h2>Experience</h2>
      {experience.map((job, index) => (
        <div key={index} className="job">
          <h3>{job.title} - {job.company}</h3>
          <p>{job.dates}</p>
          <ul>
            {job.responsibilities.map((task, i) => (
              <li key={i}>{task}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}

export default Experience;
