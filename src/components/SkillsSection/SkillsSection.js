import React, { useEffect, useState, useRef } from 'react';
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
  { name: 'JavaScript', level: 80, icon: <SiJavascript /> },
  { name: 'React', level: 70, icon: <SiReact /> },
  { name: 'Node.js', level: 45, icon: <SiNodedotjs /> },
  { name: 'HTML', level: 95, icon: <SiHtml5 /> },
  { name: 'CSS', level: 80, icon: <SiCss3 /> },
  { name: 'Express.js', level: 30, icon: <SiExpress className="express-icon" /> },
  { name: 'MongoDB', level: 50, icon: <SiMongodb /> }
];

const SkillsSection = () => {
  const [animate, setAnimate] = useState(false);
  const sectionRef = useRef(null);
  const animationTimeoutRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setAnimate(false);

            if (animationTimeoutRef.current) {
              clearTimeout(animationTimeoutRef.current);
            }

            animationTimeoutRef.current = setTimeout(() => {
              setAnimate(true);
            }, 100);
          } else {
            setAnimate(false);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
      if (animationTimeoutRef.current) {
        clearTimeout(animationTimeoutRef.current);
      }
    };
  }, []);

  return (
    <section id="skills" className="skills-section" ref={sectionRef}>
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
                    width: animate ? `${skill.level}%` : '0%',
                    background: getProgressColor(skill.name),
                    transitionDuration: animate ? '2s' : '0s'
                  }}
                ></div>
                <span
                  className="skill-percent"
                  style={{
                    opacity: animate ? 1 : 0,
                    transform: animate ? 'translateY(0)' : 'translateY(10px)',
                    transitionDuration: animate ? '2s' : '0s'
                  }}
                >
                  {skill.level}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="glow-effect" style={{ bottom: '20%', left: '-100px' }}></div>
    </section>
  );
};

const getIconColor = (name) => {
  const colors = {
    'JavaScript': '#F7DF1E',
    'React': '#61DAFB',
    'Node.js': '#339933',
    'HTML': '#E34F26',
    'CSS': '#1572B6',
    'Express.js': '#ffffff',
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
    'CSS': 'linear-gradient(90deg, #26638eff, #2763eeff)',
    'Express.js': 'linear-gradient(90deg, #ffffff, #c7c0c0)',
    'MongoDB': 'linear-gradient(90deg, #47A248, #589636)'
  };
  return colors[name] || 'linear-gradient(90deg, #4f46e5, #7c3aed)';
};

export default SkillsSection;