import React from 'react';
import './WhatWeDo.css';

const WhatWeDo = () => {
    return (
        <section className="what-we-do-section" id="what-we-do">
            <div className="container">
                <div className="section-header">
                    <span className="sub-tag">WHAT WE DO</span>
                    <h2>Everything your firm needs to dominate local search</h2>
                    <p>We specialize in legal marketing, which means every service is tailored to your practice area — not repurposed from a generic marketer's playbook.</p>
                </div>

                <div className="wwd-grid">
                    <div className="wwd-card">
                        <div className="wwd-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                        </div>
                        <h3>Local SEO & Maps</h3>
                        <p>Get your firm into the top 3 Google Maps results for "lawyer near me" searches. We optimize your profile and build local citations.</p>
                        <div className="wwd-price">From $1,200/mo</div>
                    </div>

                    <div className="wwd-card">
                        <div className="wwd-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>
                        </div>
                        <h3>Google Ads for Lawyers</h3>
                        <p>Targeted campaigns for high-value cases. Practice-specific landing pages and conversion tracking so every dollar is accountable.</p>
                        <div className="wwd-price">From $800/mo</div>
                    </div>

                    <div className="wwd-card">
                        <div className="wwd-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
                        </div>
                        <h3>Website Design & Build</h3>
                        <p>Mobile-first, SEO-ready legal websites that load instantly and convert visitors into consultations. Delivered in 2-3 weeks.</p>
                        <div className="wwd-price">From $2,500 one-off</div>
                    </div>

                    <div className="wwd-card">
                        <div className="wwd-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
                        </div>
                        <h3>AI Intake Chatbot</h3>
                        <p>An AI-powered receptionist on your website that qualifies prospects 24/7, answers FAQs, and books consultations — even when closed.</p>
                        <div className="wwd-price">From $500/mo add-on</div>
                    </div>

                    <div className="wwd-card">
                        <div className="wwd-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>
                        </div>
                        <h3>Lead Generation Funnels</h3>
                        <p>End-to-end lead gen targeting local clients with automated follow-up sequences. Convert inquiries into retained clients seamlessly.</p>
                        <div className="wwd-price">From $1,500/mo</div>
                    </div>

                    <div className="wwd-card">
                        <div className="wwd-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                        </div>
                        <h3>Review & Reputation</h3>
                        <p>Automated request campaigns to scale your Google Reviews, respond to feedback, and build trust signals that convert visitors into clients.</p>
                        <div className="wwd-price">Included in all packages</div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhatWeDo;
