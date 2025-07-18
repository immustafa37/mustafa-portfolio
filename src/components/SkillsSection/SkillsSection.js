import React, { useEffect, useState } from 'react';
import './SkillsSection.css';
import { 
  SiJavascript, 
  SiReact, 
  SiNodedotjs, 
  SiHtml5,
  SiCss3,
  SiExpress,
  SiMongodb
} from 'react-icons/si';

const skills = [
  { name: 'JavaScript', level: 90, icon: <SiJavascript /> },
  { name: 'React', level: 85, icon: <SiReact /> },
  { name: 'Node.js', level: 80, icon: <SiNodedotjs /> },
  { name: 'HTML', level: 95, icon: <SiHtml5 /> },
  { name: 'CSS', level: 75, icon: <SiCss3 /> },
  { name: 'Express.js', level: 75, icon: <SiExpress className="express-icon" /> }, // Added class
  { name: 'MongoDB', level: 70, icon: <SiMongodb /> }
];

const SkillsSection = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <h2 className="section-title">My Skills</h2>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div 
              key={index} 
              className={`skill-card ${animate ? 'animate' : ''}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="skill-header">
                <div className="skill-icon" style={{ color: getIconColor(skill.name) }}>
                  {skill.icon}
                </div>
                <h3>{skill.name}</h3>
              </div>
              <div className="skill-bar">
                <div 
                  className="skill-progress" 
                  style={{ 
                    width: `${animate ? skill.level : 0}%`,
                    background: getProgressColor(skill.name)
                  }}
                ></div>
                <span className="skill-percent">{skill.level}%</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="glow-effect" style={{ bottom: '20%', left: '-100px' }}></div>
    </section>
  );
};

// Helper functions for colors
const getIconColor = (name) => {
  const colors = {
    'JavaScript': '#F7DF1E',
    'React': '#61DAFB',
    'Node.js': '#339933',
    'HTML': '#E34F26',
    'CSS': '#1572B6',
    'Express.js': '#ffffff', // Changed to white
    'MongoDB': '#47A248'
  };
  return colors[name] || '#4f46e5';
};

const getProgressColor = (name) => {
  const colors = {
    'JavaScript': 'linear-gradient(90deg, #F7DF1E, #F0DB4F)',
    'React': 'linear-gradient(90deg, #61DAFB, #00D8FF)',
    'Node.js': 'linear-gradient(90deg, #339933, #68A063)',
    'HTML': 'linear-gradient(90deg, #E34F26, #F06529)',
    'CSS': 'linear-gradient(90deg, #1572B6, #2965F1)',
    'Express.js': 'linear-gradient(90deg, #ffffffff, #c7c0c0ff)',
    'MongoDB': 'linear-gradient(90deg, #47A248, #589636)'
  };
  return colors[name] || 'linear-gradient(90deg, #4f46e5, #7c3aed)';
};

export default SkillsSection;