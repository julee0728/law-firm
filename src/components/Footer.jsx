import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-main">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <h2 className="footer-logo">LAW OFFICE</h2>
            <p>Providing aggressive and compassionate legal representation for over 25 years. We've recovered over $1 Billion for our clients.</p>
            <div className="footer-socials">
              <a href="#">FB</a>
              <a href="#">LI</a>
              <a href="#">TW</a>
              <a href="#">IG</a>
            </div>
          </div>
          
          <div className="footer-links">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#practice">Practice Areas</a></li>
              <li><a href="#results">Results</a></li>
              <li><a href="#attorneys">Attorneys</a></li>
            </ul>
          </div>
          
          <div className="footer-contact">
            <h3>Contact Us</h3>
            <p>123 Legal Plaza, Suite 100<br />Los Angeles, CA 90012</p>
            <p><strong>Phone:</strong> (800) 555-0199</p>
            <p><strong>Email:</strong> justice@lawoffice.com</p>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>© 2024 LAW OFFICE OF BURG & BROCK, INC. All Rights Reserved.</p>
          <div className="footer-legal-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Disclaimer</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;