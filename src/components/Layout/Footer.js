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
            <h3>Mustafa Ahsan Baksh</h3>
            <p>Web Developer | Performance Optimizer | Vercel/Netlify Deployer</p>
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
                <li><a href="https://www.youtube.com/watch?v=_cl4gIpfjq0&list=PL8p2I9GklV463WUKdVzUZ17IDZ3SwoSTu&pp=0gcJCV8EOCosWNin" target="_blank">Learn React js</a></li>
                <li><a href="https://www.youtube.com/@shahidiqbaljhawari">Shahid Iqbal Youtube</a></li>
                <li><a href="https://github.com/shahidjhawari">Shahid Iqbal GitHub</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© {currentYear} Mustafa Ahsan Baksh. All rights reserved.</p>
          <p>Built with React and ❤️</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;