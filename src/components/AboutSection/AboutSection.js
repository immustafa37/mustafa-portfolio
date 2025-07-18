import React from 'react';
import './AboutSection.css';
import aboutImage from '../../assets/about.jpg';
import { FaAward, FaUsers, FaProjectDiagram } from 'react-icons/fa';

const AboutSection = () => {
  const stats = [
    { icon: <FaAward className="stat-icon" />, value: '3+', label: 'Years Experience' },
    { icon: <FaUsers className="stat-icon" />, value: '30+', label: 'Clients' },
    { icon: <FaProjectDiagram className="stat-icon" />, value: '50+', label: 'Projects' }
  ];

  return (
    <section id="about" className="about-section">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-image">
            <div className="image-container">
              <img src={aboutImage} alt="About Me" className="profile-image" />
              <div className="image-frame"></div>
            </div>
          </div>
          <div className="about-text">
            <div className="stats-grid">
              {stats.map((stat, index) => (
                <div key={index} className="stat-card">
                  {stat.icon}
                  <h3>{stat.value}</h3>
                  <p>{stat.label}</p>
                </div>
              ))}
            </div>
            <p className="about-description">
              I'm a passionate Full Stack Developer with expertise in building web applications using modern technologies.
              With a strong foundation in JavaScript and web development, I create efficient, scalable, and user-friendly
              applications that deliver exceptional user experiences.
            </p>
            <p className="about-description">
              My approach combines technical excellence with creative problem-solving. I specialize in translating
              business requirements into technical solutions while maintaining clean, maintainable code.
            </p>
            <a href="#contact" className="btn btn-primary">
              Contact Me
            </a>
          </div>
        </div>
      </div>
      <div className="glow-effect" style={{ top: '50%', right: '-100px' }}></div>
    </section>
  );
};

export default AboutSection;