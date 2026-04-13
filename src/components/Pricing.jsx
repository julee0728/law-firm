import React from 'react';
import './Pricing.css';

const Pricing = () => {
    return (
        <section className="pricing-section" id="pricing">
            <div className="container">
                <div className="section-header">
                    <span className="sub-tag">PRICING</span>
                    <h2>Transparent Retainers. No hidden fees.</h2>
                    <p>All packages include a dedicated campaign manager, performance reporting, and exclusive regional priority.</p>
                </div>

                <div className="pricing-grid">
                    {/* Standard */}
                    <div className="pricing-card">
                        <div className="tier-name">Standard</div>
                        <div className="price">
                            <span className="amount">$1,500</span>
                            <span className="period">/ month</span>
                        </div>
                        <ul className="pricing-features">
                            <li>Local SEO optimization</li>
                            <li>Google Business Profile management</li>
                            <li>Monthly performance report</li>
                            <li>Review request setup</li>
                            <li>Email support</li>
                        </ul>
                    </div>

                    {/* Premium */}
                    <div className="pricing-card featured">
                        <div className="popular-badge">Premium Choice</div>
                        <div className="tier-name featured-text">Executive</div>
                        <div className="price">
                            <span className="amount featured-text">$3,500</span>
                            <span className="period featured-sub">/ month</span>
                        </div>
                        <ul className="pricing-features featured-list">
                            <li>Everything in Standard</li>
                            <li>Google Ads Management</li>
                            <li>Practice-area landing pages</li>
                            <li>Monthly strategy call</li>
                            <li>Competitor tracking</li>
                            <li>Priority phone support</li>
                        </ul>
                    </div>

                    {/* Complete */}
                    <div className="pricing-card">
                        <div className="tier-name">Comprehensive</div>
                        <div className="price">
                            <span className="amount">$5,500</span>
                            <span className="period">/ month</span>
                        </div>
                        <ul className="pricing-features">
                            <li>Everything in Executive</li>
                            <li>Social Media Advertising</li>
                            <li>AI Chatbot integration</li>
                            <li>High-value case campaigns</li>
                            <li>Weekly check-ins</li>
                            <li>Multi-location support</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Pricing;
