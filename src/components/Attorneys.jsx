import React from 'react';
import './Attorneys.css';

const Attorneys = () => {
  const team = [
    { name: 'Cameron Brock', role: 'Founding Partner', image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400' },
    { name: 'Michael Burg', role: 'Senior Partner', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400' },
    { name: 'Jessica Miller', role: 'Trial Attorney', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400' },
    { name: 'David Chen', role: 'Litigation Specialist', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400' }
  ];

  return (
    <section id="attorneys" className="attorneys-section">
      <div className="container">
        <div className="section-header">
          <span className="sub-tag">OUR TEAM</span>
          <h2 className="section-title">Expert <strong>Attorneys</strong></h2>
          <p>The most dedicated legal minds in the industry.</p>
        </div>
        
        <div className="attorneys-grid">
          {team.map((member, index) => (
            <div key={index} className="attorney-card">
              <div className="attorney-image">
                <img src={member.image} alt={member.name} />
              </div>
              <div className="attorney-info">
                <h3>{member.name}</h3>
                <p>{member.role}</p>
                <div className="attorney-socials">
                  <span>LinkedIn</span> • <span>Bio</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Attorneys;