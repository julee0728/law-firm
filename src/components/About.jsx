import React, { useState } from 'react';
import './About.css';
import DetailModal from './DetailModal';

const About = () => {
  const [showVideo, setShowVideo] = useState(false);
  const [showDetail, setShowDetail] = useState(false);

  return (
    <section id="about" className="about-section bg-light">
      <div className="container">
        <div className="about-header">
          <span className="sub-tag">LAW OFFICES OF BURG & BROCK</span>
          <div className="about-main-grid">
            <div className="about-video-side">
              <div className="play-button-wrapper" onClick={() => setShowVideo(true)}>
                <div className="play-circle">
                  <div className="play-triangle"></div>
                </div>
                <span>Play</span>
              </div>
            </div>
            
            <div className="about-content-side">
              <h2 className="about-title">
                What should you look for in a <strong>high-quality personal injury attorney?</strong>
              </h2>
              <p className="about-text">
                First is someone with a solid, credible track record of success. The Law Offices of Burg and Brock, Inc. have handled over 20,000 personal injury cases and earned a 99% success rate in the process. That long and illustrious track record has translated into over $1 billion in damages for our clients.... 
                <button 
                  className="inline-learn-more" 
                  onClick={() => setShowDetail(true)}
                >
                  Learn more
                </button>
              </p>
            </div>
          </div>
        </div>
        
        <div className="stats-grid">
          <div className="stat-card stat-pill">
            <div className="card-inner">
              <h3>$7.5M</h3>
              <p>Motorcycle Accident</p>
            </div>
            <div className="card-arrow">→</div>
          </div>
          <div className="stat-card">
            <div className="card-inner">
              <h3>$2.5M</h3>
              <p>Wrongful Death</p>
            </div>
          </div>
          <div className="stat-card">
            <div className="card-inner">
              <h3>$1.0M</h3>
              <p>Rideshare</p>
            </div>
          </div>
        </div>
      </div>

      <DetailModal 
        isOpen={showDetail}
        onClose={() => setShowDetail(false)}
        title="Our Illustrious Track Record"
        content="The Law Offices of Burg & Brock, Inc. have maintained a 99% success rate across more than 20,000 cases. Our firm specializing in personal injury law, ensuring that victims of accidents receive the maximum compensation possible. Our deep bench of litigators and expert investigators allows us to challenge even the largest insurance corporations and corporate legal departments."
      />

      {showVideo && (
        <div className="video-modal-overlay" onClick={() => setShowVideo(false)}>
          <div className="video-modal-content" onClick={e => e.stopPropagation()}>
            <button className="video-modal-close" onClick={() => setShowVideo(false)}>&times;</button>
            <div className="video-responsive">
              <iframe 
                width="853" 
                height="480" 
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen 
                title="Law Office Video"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default About;