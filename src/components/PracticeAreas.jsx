import React, { useState } from 'react';
import './PracticeAreas.css';
import DetailModal from './DetailModal';

const PracticeAreas = () => {
  const [selectedArea, setSelectedArea] = useState(null);

  const categories = [
    {
      title: 'Personal Injury',
      desc: 'Our personal injury team handles everything from slips and falls to catastrophic injuries, ensuring victims get the compensation they deserve.',
      details: 'We specialize in representing clients who have suffered personal injuries, providing guidance and legal advocacy for fair compensation.'
    },
    {
      title: 'Car Accidents',
      desc: 'We represent victims of car crashes, dealing with insurance companies to secure maximum settlements.',
      details: 'Automobile accidents require rapid evidence collection. We handle cases ranging from minor collisions to complex multi-vehicle incidents.'
    },
    {
      title: 'Wrongful Death',
      desc: 'Seeking justice for families who have lost loved ones due to negligence.',
      details: 'We provide compassionate yet strong legal support for families pursuing wrongful death claims, ensuring their rights are protected.'
    },
    {
      title: 'Medical Malpractice',
      desc: 'Hold healthcare providers accountable for errors and negligence.',
      details: 'We consult with medical experts to build strong cases and hold negligent healthcare professionals accountable.'
    },
    {
      title: 'Truck Accidents',
      desc: 'Specialized legal action against commercial trucking companies.',
      details: 'We handle trucking accident cases involving federal regulations and corporate legal teams to secure justice for our clients.'
    },
    {
      title: 'Workplace Injuries',
      desc: 'Ensuring workers get fair treatment after job-site accidents.',
      details: 'Our team ensures injured workers receive proper medical care and income replacement through legal advocacy.'
    }
  ];

  return (
    <section id="practice" className="practice-section">
      <div className="container">
        <div className="section-header">
          <span className="sub-tag">OUR EXPERTISE</span>
          <h2 className="section-title">Specialized Practice Areas</h2>
          <p>We provide world-class legal representation for victims and their families.</p>
        </div>

        <div className="practice-grid">
          {categories.map((item, index) => (
            <div
              key={index}
              className="practice-card"
              onClick={() => setSelectedArea(item)}
            >
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <DetailModal
        isOpen={!!selectedArea}
        onClose={() => setSelectedArea(null)}
        title={selectedArea?.title}
        content={selectedArea?.details}
      />
    </section>
  );
};

export default PracticeAreas;