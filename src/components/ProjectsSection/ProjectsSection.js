import React, { useState } from 'react';
import './ProjectsSection.css';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

const projects = [
  {
    title: "E-Commerce Platform",
    description: "Full-featured online store with payment integration, product management, and user authentication.",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    image: "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    github: "#",
    live: "#"
  },
  {
    title: "Task Management App",
    description: "Productivity application with drag-and-drop interface, real-time updates, and team collaboration.",
    technologies: ["React", "Firebase", "Material UI"],
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    github: "#",
    live: "#"
  },
  {
    title: "Portfolio Website",
    description: "Professional portfolio showcasing my work with smooth animations and responsive design.",
    technologies: ["React", "CSS3", "Framer Motion"],
    image: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    github: "#",
    live: "#"
  }
];

const ProjectsSection = () => {
  const [visibleProjects, setVisibleProjects] = useState(3);

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2 className="section-title">My Projects</h2>
        <div className="projects-grid">
          {projects.slice(0, visibleProjects).map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-links">
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <FiGithub />
                  </a>
                  <a href={project.live} target="_blank" rel="noopener noreferrer">
                    <FiExternalLink />
                  </a>
                </div>
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-technologies">
                  {project.technologies.map((tech, i) => (
                    <span key={i}>{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        {visibleProjects < projects.length && (
          <button 
            className="btn btn-secondary load-more"
            onClick={() => setVisibleProjects(prev => prev + 3)}
          >
            Load More Projects
          </button>
        )}
      </div>
      <div className="glow-effect" style={{ top: '30%', right: '-100px' }}></div>
    </section>
  );
};

export default ProjectsSection;