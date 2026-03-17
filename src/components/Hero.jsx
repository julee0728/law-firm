import React, { useState } from 'react';
import './Hero.css';
import heroImg from '../assets/hero.png';
import DetailModal from './DetailModal';

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const firmDetails = {
    title: "About Our Firm",
    content: "Burg & Brock, Inc. has been a cornerstone of the legal community in Australia for over two decades. We specialize in Personal Injury, Criminal Defense, and Business Law ventures. With a track record of over $1 Billion in settlements, our commitment to justice is unparalleled. Our team of experienced attorneys is dedicated to providing the highest level of legal representation, combined with personalized attention to each and every case."
  };

  return (
    <section className="hero-section">
      <div className="hero-overlay"></div>

      <div className="container hero-container-new">
        <div className="hero-content-new">
          <h1 className="hero-title-new">
            <strong>Australia&apos;s Most Trusted</strong>
            <span>Law Firm</span>
          </h1>

          <p className="hero-description-new">
            We&apos;ve won over $1 Billion. You don&apos;t pay us anything until we win.
            Ask about our No-win, No-fee guarantee.
          </p>

          <div className="hero-cta-group">
            <button className="btn-consult" onClick={() => window.location.href = 'tel:+1234567890'}>
              Consult Now
            </button>
            <button className="btn-learn" onClick={() => setIsModalOpen(true)}>
              Learn More
            </button>
          </div>
        </div>
      </div>

      <DetailModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={firmDetails.title}
        content={firmDetails.content}
      />

      <div className="hero-features-container">
        <div className="container">
          <div className="hero-features-grid">
            <div className="feature-box dark">
              <div className="feature-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
              </div>
              <div className="feature-text">
                <h4>Criminal Defense</h4>
                <p>Protecting your rights, securing justice.</p>
              </div>
            </div>
            <div className="feature-box accent">
              <div className="feature-icon white">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M12 8v8" /><path d="M8 12h8" /></svg>
              </div>
              <div className="feature-text">
                <h4>Personal Injury</h4>
                <p>Seeking compensation for your losses.</p>
              </div>
            </div>
            <div className="feature-box dark">
              <div className="feature-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2" /><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" /></svg>
              </div>
              <div className="feature-text">
                <h4>Business Law</h4>
                <p>Guiding success through legal expertise.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;