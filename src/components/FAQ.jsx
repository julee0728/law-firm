import React, { useState } from 'react';
import './FAQ.css';

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const faqs = [
        {
            question: "How much does an initial consultation cost?",
            answer: "Our initial evaluation is completely complimentary. We review your requirements, assess the scope of the project, and provide a transparent, upfront retainer quote with no hidden fees before any commitment is made."
        },
        {
            question: "Do you offer guarantees on your marketing performance?",
            answer: "We guarantee the execution of our deliverables and use proven strategies that have worked for hundreds of law firms. While we cannot guarantee exact lead numbers due to market variables, we guarantee transparency and dedicated effort."
        },
        {
            question: "Do we own the website you build for us?",
            answer: "Absolutely. Once the project is fully paid, you own 100% of the website, its content, and all associated assets. We do not hold your digital property hostage."
        },
        {
            question: "What is the timeline for seeing SEO results?",
            answer: "SEO is a long-term strategy. While technical optimizations and local citations can show improvements in 30-60 days, significant ranking changes usually take 3 to 6 months depending on market competitiveness."
        },
        {
            question: "Am I locked into a long-term contract?",
            answer: "We do not believe in locking clients into long-term contracts. Our services operate on month-to-month retainers. We keep our clients by delivering continuous value, not through restrictive clauses."
        }
    ];

    const toggleFaq = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="faq-section" id="faq">
            <div className="container">
                <div className="section-header">
                    <span className="sub-tag">FAQ</span>
                    <h2>Frequently Asked Questions</h2>
                </div>

                <div className="faq-list">
                    {faqs.map((faq, index) => (
                        <div 
                            key={index} 
                            className={`faq-item ${openIndex === index ? 'open' : ''}`}
                            onClick={() => toggleFaq(index)}
                        >
                            <div className="faq-question">
                                <h3>{faq.question}</h3>
                                <div className="faq-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
                                </div>
                            </div>
                            <div className="faq-answer">
                                <p>{faq.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
