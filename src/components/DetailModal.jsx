import React from 'react';
import './DetailModal.css';

const DetailModal = ({ isOpen, onClose, title, content, icon }) => {
  if (!isOpen) return null;

  return (
    <div className="detail-modal-overlay" onClick={onClose}>
      <div className="detail-modal-content" onClick={e => e.stopPropagation()}>
        <button className="detail-modal-close" onClick={onClose}>&times;</button>
        <div className="detail-modal-header">
          {icon && <span className="detail-modal-icon">{icon}</span>}
          <h2>{title}</h2>
        </div>
        <div className="detail-modal-body">
          <p>{content}</p>
          <div className="detail-modal-extra">
            <h3>Key Information</h3>
            <ul>
              <li>Free initial consultation</li>
              <li>No win, no fee guarantee</li>
              <li>Expert legal representation</li>
              <li>Personalized attention to your case</li>
            </ul>
          </div>
          <button className="btn btn-primary" onClick={onClose}>Contact Our Team</button>
        </div>
      </div>
    </div>
  );
};

export default DetailModal;
