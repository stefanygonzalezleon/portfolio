import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

function Projects() {
  const appUrl = "/portfolio"
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    getProjects();
  }, []);

  const getProjects = async () => {
    const response = await fetch(`${appUrl}/projects.json`);
    const data = await response.json();
    setProjects(data);
  }

  const renderListOfProjects = (list) => {
    return list.map((project, index) => 
      <div key={index} className="projects-card">
          <div className="project">
            <div className="project-preview">
              <h6>project</h6>
              <h2>{ project.title }</h2>
              <Link to="#">VIEW SOURCE CODE</Link>
            </div>
            <div className="project-info" style={{backgroundImage: `url(${appUrl}/${project.url})`}}>
              <h6>{ project.languages }</h6>
            </div>
          </div>
        </div>
    )
  }

  return (
    <div className="projects-section" id="projects">
      <div className="title">
        <h2>Projects</h2>
      </div>
      <div className="projects-container">
        {projects != null ? renderListOfProjects(projects) : null}
      </div>
    </div>
  );
}

export default Projects;
