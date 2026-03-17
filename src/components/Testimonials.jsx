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
      date: 'August 8, 2025',
      text: 'I appreciate the service that the firm has brought into my life and case.',
      fullText: 'Working with this firm was a turning point in my recovery. They treated me with dignity and respect. Highly recommend.'
    },
    {
      id: 2,
      name: 'Dipu Paul',
      role: 'Client',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
      rating: 5,
      date: 'May 16, 2025',
      text: 'I had a great experience working with Legal Defenders. The staff were very polite.',
      fullText: 'The communication from the staff was outstanding. I was always kept in the loop regarding the progress of my case.'
    },
    {
      id: 3,
      name: 'Andre',
      role: 'Client',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80',
      rating: 5,
      date: 'February 24, 2025',
      text: 'I recently settled a case with The Law Offices of Burg & Brock. The staff was very responsive.',
      fullText: 'I am extremely satisfied with the settlement I received. The team worked tirelessly on my behalf.'
    },
    {
      id: 4,
      name: 'Sarah J.',
      role: 'Client',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80',
      rating: 5,
      date: 'January 10, 2025',
      text: 'Best legal advice I have ever received. They were very professional and helpful.',
      fullText: 'Sarah was involved in a complex medical malpractice case. Our firm successfully negotiated a multi-million dollar settlement.'
    },
    {
      id: 5,
      name: 'John D.',
      role: 'Client',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80',
      rating: 5,
      date: 'December 15, 2024',
      text: 'A truly dedicated team. They fought for my rights until the very end.',
      fullText: 'John D. came to us after a severe workplace accident. We ensured his medical bills were covered and he received lost wages.'
    },
    {
      id: 6,
      name: 'Elena R.',
      role: 'Client',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80',
      rating: 5,
      date: 'November 22, 2024',
      text: 'I highly recommend this firm for any personal injury cases.',
      fullText: 'Elena was injured in a slip and fall accident. We proved the property owner\'s negligence and secured a high settlement.'
    },
    {
      id: 7,
      name: 'Robert K.',
      role: 'Client',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80',
      rating: 5,
      date: 'October 5, 2024',
      text: 'Great communication and even better results. They exceeded my expectations.',
      fullText: 'Robert settled his car accident case within 6 months. He was impressed by our speed and efficiency.'
    }
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
            {/* Double the items to create a seamless loop */}
            {[...testimonials, ...testimonials].map((item, index) => (
              <div key={`${item.id}-${index}`} className="testimonial-card">
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