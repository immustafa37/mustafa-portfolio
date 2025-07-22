import React from "react";
import "./AboutSection.css";
import aboutImage from "../../assets/about.jpg";
import { FaAward, FaGithub, FaProjectDiagram } from "react-icons/fa";

const AboutSection = () => {
  const stats = [
    {
      icon: <FaAward className="stat-icon" />,
      value: "2+",
      label: "Years Experience",
    },
    {
      icon: <FaGithub className="stat-icon" />,
      value: "500+",
      label: "Commits",
    },
    {
      icon: <FaProjectDiagram className="stat-icon" />,
      value: "50+",
      label: "Projects",
    },
  ];

  return (
    <section id="about" className="about-section">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-image">
            <div className="image-container">
              <img
                src={aboutImage}
                alt="About Me"
                className="profile-image"
                style={{ objectPosition: "top center" }}
              />
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
              I'm a passionate Full Stack Developer with a strong emphasis on{" "}
              <strong>frontend design</strong> and{" "}
              <strong>user experience</strong>. Crafting visually appealing,
              responsive, and interactive user interfaces is my top priority,
              using modern technologies like React, HTML, CSS, and JavaScript.
            </p>
            <p className="about-description">
              While I do have solid experience in{" "}
              <strong>backend development</strong>—including RESTful APIs,
              Node.js, Express, and MongoDB—my main focus remains on creating
              engaging, user-centered frontend experiences.
            </p>
            <a href="#contact" className="btn btn-primary">
              Contact Me
            </a>
          </div>
        </div>
      </div>
      <div
        className="glow-effect"
        style={{ top: "50%", right: "-100px" }}
      ></div>
    </section>
  );
};

export default AboutSection;
