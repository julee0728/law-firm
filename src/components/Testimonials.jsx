import React, { useState } from 'react';
import './Testimonials.css';
import DetailModal from './DetailModal';

const Testimonials = () => {
  const [selectedReview, setSelectedReview] = useState(null);

  const testimonials = [
    { id: 1, name: 'Marko S.', role: 'Client', rating: 5, text: 'I appreciate the service that the firm has brought into my life and case.', fullText: 'Working with this firm was a turning point in my recovery. They treated me with dignity and respect. Highly recommend.' },
    { id: 2, name: 'Dipu Paul', role: 'Client', rating: 5, text: 'I had a great experience working with Legal Defenders. The staff were very polite.', fullText: 'The communication from the staff was outstanding. I was always kept in the loop regarding the progress of my case.' },
    { id: 3, name: 'Andre', role: 'Client', rating: 5, text: 'I recently settled a case with The Law Offices of Burg & Brock. The staff was very responsive.', fullText: 'I am extremely satisfied with the settlement I received. The team worked tirelessly on my behalf.' },
    { id: 4, name: 'Sarah J.', role: 'Client', rating: 5, text: 'Best legal advice I have ever received. They were very professional and helpful.', fullText: 'Sarah was involved in a complex medical malpractice case. Our firm successfully negotiated a multi-million dollar settlement.' },
    { id: 5, name: 'John D.', role: 'Client', rating: 5, text: 'A truly dedicated team. They fought for my rights until the very end.', fullText: 'John D. came to us after a severe workplace accident. We ensured his medical bills were covered and he received lost wages.' },
    { id: 6, name: 'Elena R.', role: 'Client', rating: 5, text: 'I highly recommend this firm for any personal injury cases.', fullText: 'Elena was injured in a slip and fall accident. We proved the property owner\'s negligence and secured a high settlement.' },
    { id: 7, name: 'Robert K.', role: 'Client', rating: 5, text: 'Great communication and even better results. They exceeded my expectations.', fullText: 'Robert settled his car accident case within 6 months. He was impressed by our speed and efficiency.' }
  ];

  return (
    <section id="testimonials" className="testimonials-section">
      <div className="container">
        <div className="testimonials-header">
          <h2>Client Feedback</h2>
          <span className="header-link">What our clients say about us</span>
        </div>

        <div className="marquee-wrapper">
          <div className="marquee-content">
            {[...testimonials, ...testimonials].map((item, index) => (
              <div key={`${item.id}-${index}`} className="testimonial-card">
                <div className="card-top">
                  <div className="user-initial">{item.name.charAt(0).toUpperCase()}</div>
                  <div className="user-info">
                    <h4>{item.name}</h4>
                    <p>{item.role}</p>
                  </div>
                </div>
                <div className="stars">{'★'.repeat(item.rating)}</div>
                <p className="testimonial-text">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <DetailModal
        isOpen={!!selectedReview}
        onClose={() => setSelectedReview(null)}
        title={selectedReview?.name + "'s Story"}
        content={selectedReview?.fullText}
      />
    </section>
  );
};

export default Testimonials;