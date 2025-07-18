import React, { useState } from 'react';
import './ContactSection.css';
import { FaWhatsapp, FaGithub, FaEnvelope } from 'react-icons/fa';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setIsSubmitted(false), 3000);
    }, 1500);
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <div className="contact-content">
          <div className="contact-info">
            <h3>Contact Information</h3>
            <p className="contact-description">
              Feel free to reach out if you're looking for a developer, have a question,
              or just want to connect.
            </p>
            
            <div className="contact-details">
              <div className="detail-item">
                <FaEnvelope className="detail-icon" />
                <span>im262897tt@gmail.com</span>
              </div>
              <a
                href="https://wa.me/923496807311"
                target="_blank"
                rel="noopener noreferrer"
                className="detail-item"
              >
                <FaWhatsapp className="detail-icon" />
                <span>Contact on WhatsApp</span>
              </a>
              <a
                href="https://github.com/immustafa37"
                target="_blank"
                rel="noopener noreferrer"
                className="detail-item"
              >
                <FaGithub className="detail-icon" />
                <span>GitHub</span>
              </a>
            </div>
          </div>
          
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={errors.name ? 'error' : ''}
                placeholder="Enter your name"
              />
              {errors.name && <span className="error-message">{errors.name}</span>}
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={errors.email ? 'error' : ''}
                placeholder="Enter your email"
              />
              {errors.email && <span className="error-message">{errors.email}</span>}
            </div>
            
            <div className="form-group">
              <label htmlFor="message">Your Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                className={errors.message ? 'error' : ''}
                placeholder="How can I help you?"
              ></textarea>
              {errors.message && <span className="error-message">{errors.message}</span>}
            </div>
            
            <button 
              type="submit" 
              className={`btn btn-primary ${isSubmitting ? 'submitting' : ''} ${isSubmitted ? 'submitted' : ''}`}
              disabled={isSubmitting || isSubmitted}
            >
              {isSubmitting ? 'Sending...' : isSubmitted ? 'Message Sent!' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
      <div className="glow-effect" style={{ bottom: '20%', left: '-100px' }}></div>
    </section>
  );
};

export default ContactSection;