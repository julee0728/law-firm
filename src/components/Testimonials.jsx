import React, { useState } from 'react';
import './Testimonials.css';
import DetailModal from './DetailModal';

const Testimonials = () => {
  const [selectedReview, setSelectedReview] = useState(null);
  const [showNewsletterModal, setShowNewsletterModal] = useState(false);
  const [email, setEmail] = useState('');

  const handleSubscribe = () => {
    if (email) {
      setShowNewsletterModal(true);
      setEmail('');
    } else {
      alert('Please enter a valid email address.');
    }
  };

  const testimonials = [
    {
      id: 1,
      name: 'Marko S.',
      role: 'Client',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80',
      rating: 5,
      date: 'August, 8, 2025',
      text: 'I appreciate the service that the firm has brought into my life and case. The firm is careful in the health and safety of the client.',
      fullText: 'Working with this firm was a turning point in my recovery. From day one, they treated me with dignity and respect. The legal team was meticulous, uncovering evidence that proved crucial for our settlement. I never felt like just a number; they were genuinely invested in my wellbeing and future.'
    },
    {
      id: 2,
      name: 'Dipu Paul',
      role: 'Client',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
      rating: 5,
      date: 'May 16, 2025',
      text: 'I had a great experience working with Legal Defenders. The staff were very polite and got back to me and kept me updated.',
      fullText: 'The communication from the staff at Legal Defenders was outstanding. I was always kept in the loop regarding the progress of my case. Their professionalism and attention to detail gave me peace of mind during a very stressful time. Highly recommend their services to anyone in need of legal help.'
    },
    {
      id: 3,
      name: 'Andre',
      role: 'Client',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80',
      rating: 5,
      date: 'February 24, 2025',
      text: 'I recently settled a case with The Law Offices of Burg & Brock. The staff was very responsive, answering questions within a reasonable amount of time.',
      fullText: 'I am extremely satisfied with the settlement I received. The team at Burg & Brock worked tirelessly on my behalf. They handled all the paperwork and negotiations with the insurance company, allowing me to focus on my physical recovery. I couldn\'t have asked for a better legal team.'
    }
  ];

  return (
    <section id="testimonials" className="testimonials-section">
      <div className="container">
        <div className="testimonials-header">
          <h2>Client Testimonials</h2>
          <span className="header-link">Real People, Real Stories</span>
        </div>

        <div className="testimonials-grid">
          <div className="testimonial-card main-stat-card">
            <div className="big-rating">
              <strong>4.9</strong><span>/5</span>
            </div>
            <p className="case-type">Motorcycle Accident</p>
            <div className="impact-text">
              <h3>Our Impact, Their Words</h3>
              <p>Motorcycle Accident</p>
            </div>
            <div className="email-cta">
              <input 
                type="email" 
                placeholder="Enter your email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button className="send-btn" onClick={handleSubscribe}>→</button>
            </div>
          </div>

          {testimonials.map((item) => (
            <div key={item.id} className="testimonial-card">
              <div className="card-top">
                <img src={item.image} alt={item.name} className="user-img" />
                <div className="user-info">
                  <h4>{item.name}</h4>
                  <p>{item.role}</p>
                </div>
              </div>
              <div className="stars">{'★'.repeat(item.rating)}</div>
              <div className="date">{item.date}</div>
              <p className="testimonial-text">{item.text}</p>
              <button className="learn-more-btn" onClick={() => setSelectedReview(item)}>Learn more</button>
            </div>
          ))}
        </div>
      </div>

      <DetailModal 
        isOpen={!!selectedReview}
        onClose={() => setSelectedReview(null)}
        title={selectedReview?.name + "'s Story"}
        content={selectedReview?.fullText}
      />

      <DetailModal 
        isOpen={showNewsletterModal}
        onClose={() => setShowNewsletterModal(false)}
        title="Thank You for Subscribing!"
        content="We've added you to our legal insights newsletter. You'll receive monthly updates on safety tips, legal trends, and notable case results from our firm."
      />
    </section>
  );
};

export default Testimonials;