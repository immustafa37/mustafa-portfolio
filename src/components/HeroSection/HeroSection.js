import React, { useState, useEffect, useMemo } from "react";
import "./HeroSection.css";
import heroImage from "../../assets/hero.jpg";

const HeroSection = () => {
  const [typedText, setTypedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const texts = useMemo(
    () => [
      "React UI Builder",
      "UI/UX Designer",
      "JS & CSS Dev",
      "Modern Web Dev",
    ],
    []
  );

  useEffect(() => {
    const typingSpeed = isDeleting ? 50 : 150;
    const currentText = texts[currentIndex];

    const timer = setTimeout(() => {
      if (isDeleting) {
        setTypedText(currentText.substring(0, typedText.length - 1));
      } else {
        setTypedText(currentText.substring(0, typedText.length + 1));
      }

      if (!isDeleting && typedText === currentText) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && typedText === "") {
        setIsDeleting(false);
        setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [typedText, currentIndex, isDeleting, texts]);

  const handleDownloadCV = () => {
    const cvUrl = "/documents/Mustafa_CV.pdf";
    const link = document.createElement("a");
    link.href = cvUrl;
    link.download = "Mustafa_Frontend_Developer_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="home" className="hero-section">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Hi, I'm <span className="text-gradient">Mustafa</span>
            </h1>
            <h2 className="hero-subtitle">
              Professional <span className="typed-text">{typedText}</span>
              <span className="cursor">|</span>
            </h2>
            <p className="hero-description">
              I create beautiful, functional digital experiences with a focus on
              user-centered design and clean, efficient code.
            </p>
            <div className="hero-buttons">
              <a
                href="#contact"
                className="btn btn-primary"
                aria-label="Contact me"
              >
                Contact Me
              </a>
              <button
                className="btn btn-secondary"
                onClick={handleDownloadCV}
                aria-label="Download CV"
              >
                Download CV
              </button>
            </div>
          </div>
          <div className="hero-image">
            <div className="image-wrapper">
              <div className="image-container">
                <img src={heroImage} alt="Mustafa" className="profile-image" />
              </div>
              <div className="image-glow"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="glow-effect" style={{ top: "20%", left: "-50px" }}></div>
      <div
        className="glow-effect"
        style={{ bottom: "10%", right: "-50px" }}
      ></div>
    </section>
  );
};

export default HeroSection;