import React, { useState } from 'react';
import './Blueprint.css';
import Modal from './Modal'; // Import the Modal component

const Blueprint = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState('');

  const handleSectorClick = (sector) => {
    setModalMessage(`Electricity Consumption for ${sector}`);
    setModalOpen(true);
  };

  return (
    <div className="blueprint">
      <div className="sector-box sector-top" onClick={() => handleSectorClick('Sector 2')}>
        Sector 2
      </div>
      <div className="sector-box sector-left" onClick={() => handleSectorClick('Sector 1')}>
        Sector 1
      </div>
      <div className="sector-box sector-right" onClick={() => handleSectorClick('Sector 3')}>
        Sector 3
      </div>
      <Modal 
        isOpen={isModalOpen} 
        onClose={() => setModalOpen(false)} 
        message={modalMessage} 
      />
    </div>
  );
};

export default Blueprint;
