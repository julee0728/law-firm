import React, { useState } from 'react';
import './Results.css';
import DetailModal from './DetailModal';

const Results = () => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <section id="results" className="results-section">
      <div className="container">
        <div className="section-header">
          <span className="sub-tag">OUR SUCCESS STORIES</span>
          <h2 className="section-title text-white">
            Proven <strong>Case Results</strong>
          </h2>
          <p className="section-description">
            We provide aggressive legal representation with consistent, favorable outcomes for our clients.
          </p>
        </div>

        <div className="results-summary">
          <p>
            Our firm has successfully represented clients in a wide range of cases including personal injury, wrongful death, workplace accidents, and more. Each case receives personalized attention to achieve the best possible results.
          </p>
        </div>
      </div>

      <DetailModal
        isOpen={showDetails}
        onClose={() => setShowDetails(false)}
        title="Comprehensive Case Results"
        content="Our firm has a proven track record of success across thousands of cases. We handle personal injury, medical malpractice, workplace accidents, and more with precision and dedication. Every client receives personalized attention and a tailored legal strategy to maximize results."
      />
    </section>
  );
};

export default Results;