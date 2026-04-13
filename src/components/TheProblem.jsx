import React from 'react';
import './TheProblem.css';

const TheProblem = () => {
    return (
        <section className="problem-section" id="the-problem">
            <div className="container">
                <div className="section-header">
                    <span className="sub-tag">THE PROBLEM</span>
                    <h2>Most law firms are invisible online — and losing clients daily</h2>
                    <p>When someone in your area searches for legal help, your competitor is showing up first. Here's why that keeps happening.</p>
                </div>

                <div className="problem-grid">
                    <div className="problem-card">
                        <span className="problem-number">01</span>
                        <h3>Your Google Maps ranking is weak</h3>
                        <p>Most clients choose a lawyer from the first page of search results. If you're not there, you're not even in the consideration set.</p>
                    </div>
                    <div className="problem-card">
                        <span className="problem-number">02</span>
                        <h3>Your website isn't converting visitors
</h3>
                        <p>Generic legal websites load slowly and have no clear calls to action. Traffic arrives and leaves without ever contacting your office.</p>
                    </div>
                    <div className="problem-card">
                        <span className="problem-number">03</span>
                        <h3>Your ads are wasting budget</h3>
                        <p>Broad search campaigns without proper targeting burn through budget on clicks that never convert to retained clients.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TheProblem;
