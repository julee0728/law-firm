import React from 'react';
import './WhyUs.css';

const WhyUs = () => {
    return (
        <section className="why-us-section" id="why-us">
            <div className="container">
                <div className="section-header dark">
                    <span className="sub-tag" style={{ color: '#d4af37' }}>WHY US</span>
                    <h2>WHAT SETS US APART</h2>
                </div>

                <div className="why-us-grid">
                    <div className="why-us-card">
                        <div className="wu-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
                        </div>
                        <h3>Exclusive Availability</h3>
                        <p>We work with select partners ensuring immediate priority attention for your firm.</p>
                    </div>

                    <div className="why-us-card">
                        <div className="wu-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
                        </div>
                        <h3>Industry Expertise</h3>
                        <p>Fully compliant marketing strategies tailored strictly to the legal landscape.</p>
                    </div>

                    <div className="why-us-card featured">
                        <div className="featured-badge">Guaranteed</div>
                        <div className="wu-icon mt">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
                        </div>
                        <h3>Uncompromised Quality</h3>
                        <p>Premium execution and dedicated account management for complete peace of mind.</p>
                    </div>

                    <div className="why-us-card">
                        <div className="wu-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"/><line x1="12" y1="18" x2="12" y2="22"/><line x1="12" y1="2" x2="12" y2="6"/></svg>
                        </div>
                        <h3>Transparent Fees</h3>
                        <p>Direct, comprehensive quoting upfront. No hidden surcharges or vague estimates.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyUs;
