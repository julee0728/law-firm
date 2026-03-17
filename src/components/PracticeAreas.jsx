import React, { useState } from 'react';
import './PracticeAreas.css';
import DetailModal from './DetailModal';

const PracticeAreas = () => {
  const [selectedArea, setSelectedArea] = useState(null);

  const categories = [
    { 
      title: 'Personal Injury', 
      cases: '15,000+', 
      icon: '🚗',
      desc: 'Our personal injury team handles everything from slips and falls to catastrophic injuries, ensuring victims get the compensation they deserve.',
      details: 'Over 15,000 clients have trusted us with their personal injury cases. We specialize in proving liability and documenting the full extent of damages, including medical bills, lost wages, and pain and suffering.'
    },
    { 
      title: 'Car Accidents', 
      cases: '8,000+', 
      icon: '🚙',
      desc: 'We represent victims of car crashes, dealing with insurance companies to secure maximum settlements.',
      details: 'Automobile accidents require rapid evidence collection. We handle everything from standard rear-end collisions to complex multi-vehicle pileups and aggressive driving cases.'
    },
    { 
      title: 'Wrongful Death', 
      cases: '2,500+', 
      icon: '⚖️',
      desc: 'Seeking justice for families who have lost loved ones due to negligence.',
      details: 'Losing a loved one is devastating. We provide compassionate yet aggressive legal support to help families secure their financial future while honoring the memory of those lost.'
    },
    { 
      title: 'Medical Malpractice', 
      cases: '3,200+', 
      icon: '🏥',
      desc: 'Hold healthcare providers accountable for errors and negligence.',
      details: 'When medical professionals fail their duty of care, we are here to help. We consult with top medical experts to build strong cases against negligent hospitals and practitioners.'
    },
    { 
      title: 'Truck Accidents', 
      cases: '4,100+', 
      icon: '🚛',
      desc: 'Specialized legal action against commercial trucking companies.',
      details: 'Trucking accidents involve federal regulations and corporate legal teams. We have the resources to battle large trucking firms and hold them responsible for safety violations.'
    },
    { 
      title: 'Workplace Injuries', 
      cases: '5,500+', 
      icon: '👷',
      desc: 'Ensuring workers get fair treatment after job-site accidents.',
      details: 'Whether it\'s workers\' compensation or third-party liability, we protect the rights of injured workers to ensure they receive proper medical care and income replacement.'
    }
  ];

  return (
    <section id="practice" className="practice-section">
      <div className="container">
        <div className="section-header">
          <span className="sub-tag">OUR EXPERTISE</span>
          <h2 className="section-title">Specialized <strong>Practice Areas</strong></h2>
          <p>We provide world-class legal representation for victims and their families.</p>
        </div>
        
        <div className="practice-grid">
          {categories.map((item, index) => (
            <div key={index} className="practice-card">
              <div className="practice-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
              <button className="view-details-btn" onClick={() => setSelectedArea(item)}>View Details ➔</button>
            </div>
          ))}
        </div>
      </div>

      <DetailModal 
        isOpen={!!selectedArea}
        onClose={() => setSelectedArea(null)}
        title={selectedArea?.title}
        content={selectedArea?.details}
        icon={selectedArea?.icon}
      />
    </section>
  );
};

export default PracticeAreas;