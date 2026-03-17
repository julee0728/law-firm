import React from 'react';
import './Hero.css';
import heroImg from '../assets/hero.png';

const Hero = () => {
  return (
    <section className="hero-section bg-primary text-white">
      <div className="container hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            California's <br />
            <strong>Powerhouse</strong> <br />
            Injury <span>Law Firm</span>
          </h1>
          
          <div className="hero-bottom-grid">
            <div className="hero-stats-text">
              <p>We've won over $1 Billion. You don't pay us anything until we win. Ask about our No-win, No-fee guarantee.</p>
            </div>
            
            <div className="hero-action">
              <div 
                className="call-now-circle" 
                onClick={() => window.location.href = 'tel:+1234567890'}
              >
                <span>Call Now</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="hero-image-wrapper">
          <div className="image-decorator"></div>
          <img src={heroImg} alt="Lead Attorney" className="hero-image" />
        </div>
      </div>
      
      {/* Decorative lines like in the image */}
      <div className="hero-decorator-line line-1"></div>
      <div className="hero-decorator-line line-2"></div>
    </section>
  );
};

export default Hero;