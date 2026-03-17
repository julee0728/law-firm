import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleModal = () => setIsModalOpen(!isModalOpen);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleCall = () => {
    window.location.href = 'tel:+1234567890';
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-container">
        <div className="logo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <div className="logo-text">
            <strong>LAW OFFICE</strong>
            <span>BURG & BROCK, INC.</span>
          </div>
        </div>

        {/* Hamburger Menu Icon */}
        <div className={`hamburger ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        
        <ul className={`nav-links ${isMenuOpen ? 'mobile-active' : ''}`}>
          <li><a href="#home" onClick={() => setIsMenuOpen(false)}>HOME</a></li>
          <li><a href="#practice" onClick={() => setIsMenuOpen(false)}>PRACTICE AREAS</a></li>
          <li><a href="#results" onClick={() => setIsMenuOpen(false)}>RESULTS</a></li>
          <li><a href="#attorneys" onClick={() => setIsMenuOpen(false)}>ATTORNEYS</a></li>
          <li><a href="#about" onClick={() => setIsMenuOpen(false)}>ABOUT US</a></li>
          <li><a href="#news" onClick={() => setIsMenuOpen(false)}>ACCIDENT NEWS</a></li>
          
          {/* Mobile Only CTA */}
          <li className="mobile-only-actions">
            <button className="btn btn-outline" onClick={() => { toggleModal(); setIsMenuOpen(false); }}>Contact Us</button>
            <button className="btn btn-primary" onClick={handleCall}>Call Us</button>
          </li>
        </ul>
        
        <div className="nav-actions hide-on-mobile">
          <button className="btn btn-outline" onClick={toggleModal}>Contact Us</button>
          <button className="btn btn-primary" onClick={handleCall}>Call Us</button>
        </div>
      </div>

      {isModalOpen && (
        <div className="modal-overlay" onClick={toggleModal}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={toggleModal}>&times;</button>
            <h2>Free Consultation</h2>
            <p>Tell us about your case today.</p>
            <form onSubmit={e => e.preventDefault()}>
              <input type="text" placeholder="Full Name" required />
              <input type="email" placeholder="Email Address" required />
              <input type="tel" placeholder="Phone Number" required />
              <select>
                <option>Practice Area</option>
                <option>Personal Injury</option>
                <option>Car Accident</option>
                <option>Wrongful Death</option>
                <option>Other</option>
              </select>
              <textarea placeholder="How were you injured?"></textarea>
              <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '10px' }}>Get Started</button>
            </form>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;