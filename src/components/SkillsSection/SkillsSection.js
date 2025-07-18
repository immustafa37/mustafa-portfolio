import React, { useEffect, useState } from 'react';
import './SkillsSection.css';

const skills = [
  { name: 'JavaScript', level: 90, icon: 'JS' },
  { name: 'React', level: 85, icon: '⚛️' },
  { name: 'Node.js', level: 80, icon: '🟢' },
  { name: 'HTML/CSS', level: 95, icon: '📄' },
  { name: 'UI/UX Design', level: 75, icon: '🎨' },
  { name: 'MongoDB', level: 70, icon: '🍃' }
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
                <div className="skill-icon">{skill.icon}</div>
                <h3>{skill.name}</h3>
              </div>
              <div className="skill-bar">
                <div 
                  className="skill-progress" 
                  style={{ width: `${animate ? skill.level : 0}%` }}
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

export default SkillsSection;