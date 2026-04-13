import React from 'react';
import './Results.css';

const Results = () => {
  return (
    <section id="results" className="results-section">
      <div className="results-container">
        <p className="section-tag">RESULTS</p>
        <h2>What law firms achieve in 90 days</h2>
        <p className="section-subtitle">
          Real growth from real firms. We focus on signed consultations,
          qualified leads, and better visibility — not vanity metrics.
        </p>

        <div className="results-grid">
          <div className="result-card">
            <h3>PERSONAL INJURY LAW FIRM — SYDNEY</h3>
            <p className="quote">
              "Within 60 days, our Google Maps ranking moved into the top 3 and
              consultation calls nearly doubled. We signed 11 new injury cases
              in the first month alone."
            </p>

            <div className="client-info">
              <div className="avatar">JP</div>
              <div>
                <h4>James Parker</h4>
                <span>Managing Partner, Downtown Chicago</span>
              </div>
            </div>

            <div className="stats">
              <div>
                <strong>11</strong>
                <span>New signed cases</span>
              </div>
              <div>
                <strong>+68%</strong>
                <span>Organic traffic growth</span>
              </div>
            </div>
          </div>

          <div className="result-card">
            <h3>FAMILY LAW PRACTICE —  MELBOURNE</h3>
            <p className="quote">
              "Our consultation bookings increased consistently after the new
              landing pages and local SEO strategy. Divorce and custody leads
              are now coming in weekly."
            </p>

            <div className="client-info">
              <div className="avatar">SM</div>
              <div>
                <h4>Sarah Miller</h4>
                <span>Senior Attorney, Manhattan</span>
              </div>
            </div>

            <div className="stats">
              <div>
                <strong>+54%</strong>
                <span>Consultation bookings</span>
              </div>
              <div>
                <strong>3.8x</strong>
                <span>Ad campaign ROI</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Results;