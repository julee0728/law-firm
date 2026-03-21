import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-main">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <h2 className="footer-logo">LAW FIRM</h2>
            <p>Providing aggressive and compassionate legal representation for decades. We have successfully secured substantial recoveries for our clients.</p>
          </div>

          <div className="footer-links">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#practice">Practice Areas</a></li>
              <li><a href="#results">Results</a></li>
            </ul>
          </div>

          <div className="footer-contact">
            <h3>Contact Us</h3>
            <p>123 Legal Plaza, Suite 100<br />Sydney, NSW 2000 Australia</p>
            <p><strong>Phone:</strong> (800) 555-0199</p>
            <p><strong>Email:</strong> justice@lawfirm.com</p>
          </div>
        </div>

        <div className="footer-bottom">
          <p style={{ textAlign: 'center', width: '100%' }}> © 2026 Ventoria Global.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;