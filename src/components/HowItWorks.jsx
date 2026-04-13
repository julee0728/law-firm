import React from 'react';
import './HowItWorks.css';

const HowItWorks = () => {
    return (
        <section className="how-it-works-section" id="how-it-works">
            <div className="container">
                <div className="section-header dark">
                    <span className="sub-tag">HOW IT WORKS</span>
                    <h2>A proven system built for law practices</h2>
                    <p>Four steps. 90 days. Measurable client growth — or we work the next month at no cost.</p>
                </div>

                <div className="hiw-grid">
                    <div className="hiw-step">
                        <div className="step-tag">STEP 01</div>
                        <h3>Free firm audit</h3>
                        <p>We audit your search ranking, website speed, Google Business Profile, and competitor landscape — all specific to your practice area.</p>
                        <div className="hiw-arrow"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="M12 5l7 7-7 7"/></svg></div>
                    </div>
                    <div className="hiw-step">
                        <div className="step-tag">STEP 02</div>
                        <h3>Custom strategy</h3>
                        <p>We build a 90-day plan targeting the exact keywords your local clients search — not generic terms, but specific legal intent.</p>
                        <div className="hiw-arrow"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="M12 5l7 7-7 7"/></svg></div>
                    </div>
                    <div className="hiw-step">
                        <div className="step-tag">STEP 03</div>
                        <h3>Launch & optimize</h3>
                        <p>We implement local SEO, optimize your Google Business Profile, and run targeted campaigns with dedicated landing pages.</p>
                        <div className="hiw-arrow"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="M12 5l7 7-7 7"/></svg></div>
                    </div>
                    <div className="hiw-step">
                        <div className="step-tag">STEP 04</div>
                        <h3>Scale what works</h3>
                        <p>Monthly strategy calls to review results, double down on top-performing campaigns, and expand to high-value areas.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
