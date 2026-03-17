import React, { useState } from 'react';
import './Results.css';
import DetailModal from './DetailModal';

const Results = () => {
  const [showAllResults, setShowAllResults] = useState(false);

  const results = [
    {
      amount: '$15,000,000',
      category: 'PRODUCT LIABILITY',
      desc: 'Defective consumer product causing severe injury.'
    },
    {
      amount: '$7,500,000',
      category: 'MOTORCYCLE ACCIDENT',
      desc: 'Policy limit recovery for a traumatic brain injury.'
    },
    {
      amount: '$5,250,000',
      category: 'TRUCKING ACCIDENT',
      desc: 'Head-on collision involving a commercial vehicle.'
    },
    {
      amount: '$4,800,000',
      category: 'PEDESTRIAN ACCIDENT',
      desc: 'Crosswalk accident result in multi-fracture injuries.'
    }
  ];

  return (
    <section id="results" className="results-section">
      <div className="container">
        <div className="section-header">
          <span className="sub-tag">OVER $1 BILLION RECOVERED</span>
          <h2 className="section-title text-white">Proven <strong>Case Results</strong></h2>
        </div>

        <div className="results-grid">
          {results.map((item, index) => (
            <div key={index} className="result-card">
              <div className="result-amount">{item.amount}</div>
              <div className="result-category">{item.category}</div>
              <p className="result-desc">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="results-cta">
          <button 
            className="btn btn-primary" 
            onClick={() => setShowAllResults(true)}
          >
            View All Results
          </button>
        </div>
      </div>

      <DetailModal 
        isOpen={showAllResults}
        onClose={() => setShowAllResults(false)}
        title="Comprehensive Case Results"
        content="Our firm has recovered over $1 billion for our clients. Other notable wins include: \n\n• $3.2M for Medical Malpractice \n• $2.8M for Workplace Injury \n• $1.5M for Slip and Fall \n• $900k for Dog Bite Injury. \n\nWe provide the same level of aggressive representation for every case, regardless of size."
      />
    </section>
  );
};

export default Results;