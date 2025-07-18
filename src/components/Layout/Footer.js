import React from 'react';
import './Footer.css';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <h3>John Doe</h3>
            <p>Full Stack Developer | MERN Specialist | Digital Creator</p>
            <div className="footer-social">
              <a href="#" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <FaGithub />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <FaTwitter />
              </a>
            </div>
          </div>
          <div className="footer-links">
            <div className="links-column">
              <h4>Quick Links</h4>
              <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>
            <div className="links-column">
              <h4>Resources</h4>
              <ul>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Tutorials</a></li>
                <li><a href="#">GitHub</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© {currentYear} John Doe. All rights reserved.</p>
          <p>Built with React and ❤️</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;