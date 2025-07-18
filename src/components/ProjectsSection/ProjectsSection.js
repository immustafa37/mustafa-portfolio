import React, { useState } from 'react';
import './ProjectsSection.css';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import glassmorphismUiShowcase from '../../assets/projects/glassmorphism-ui-showcase.png';
import digitalHealthTracker from '../../assets/projects/digital-health-tracker.png';
import wallpapers4k from '../../assets/projects/4k-wallpapers.png';
import niveusChatWeb from '../../assets/projects/niveus-chat-web.png';
import quizifyCode from '../../assets/projects/quizify-code.png';

const projects = [
  {
    title: "Glassmorphism UI Showcase",
    description: "A beautiful UI library featuring modern glassmorphism-style components for quick design inspiration and copy-paste usage.",
    technologies: ["HTML", "CSS", "JavaScript"],
    image: glassmorphismUiShowcase,
    github: "https://github.com/immustafa37/Glassmorphism-UI-Showcase",
    live: "https://glassmorphism-ui-showcase.netlify.app"
  },
  {
    title: "Digital Health Tracker",
    description: "A smart health tracking web app to monitor water, steps, meals, and exercise with a neat and interactive dashboard.",
    technologies: ["React", "CSS", "Chart.js"],
    image: digitalHealthTracker,
    github: "https://github.com/immustafa37/frontend-health-tracker",
    live: "https://digital-health-tracker.vercel.app"
  },
  {
    title: "4K Wallpapers Hub",
    description: "A collection of ultra HD wallpapers, with filter and download features, built for modern aesthetics.",
    technologies: ["HTML", "CSS", "JavaScript"],
    image: wallpapers4k,
    github: "https://github.com/immustafa37/4k-Wallpapers",
    live: "https://4k-wallpapers37.netlify.app"
  },
  {
    title: "Niveus Chat Web",
    description: "Real-time chat app built with Socket.io and Express, featuring emojis, typing indicators, and dark/light mode.",
    technologies: ["React", "Node.js", "Socket.io"],
    image: niveusChatWeb,
    github: "https://github.com/immustafa37/frontend-chat-web",
    live: "https://niveus-chat-web.vercel.app"
  },
  {
    title: "Quizify Code",
    description: "A quiz web app that tests JavaScript skills with a timer, scores, and explanations after each question.",
    technologies: ["HTML", "CSS", "JavaScript"],
    image: quizifyCode,
    github: "https://github.com/immustafa37/Quiz-Web",
    live: "https://quizify-code.netlify.app"
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