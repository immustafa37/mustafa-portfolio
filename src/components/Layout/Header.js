import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import './Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      
      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <>
      <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="header-brand">
          <span>Code</span>
          <span className="header-accent">x</span>
          <span>Mustafa</span>
        </div>

        <nav className="desktop-nav">
          {navItems.map(item => (
            <Link
              key={item.id}
              to={item.id}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
            >
              {item.label}
              <span className="nav-underline"></span>
            </Link>
          ))}
        </nav>

        <button 
          className={`mobile-menu-btn ${mobileMenuOpen ? 'open' : ''}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span className="menu-line"></span>
          <span className="menu-line"></span>
          <span className="menu-line"></span>
        </button>
      </header>

      <div className={`mobile-menu ${mobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-menu-content">
          {navItems.map(item => (
            <Link
              key={item.id}
              to={item.id}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className={`mobile-nav-link ${activeSection === item.id ? 'active' : ''}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Header;