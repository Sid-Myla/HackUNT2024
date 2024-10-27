import React from 'react';
import './Modal.css';
const Modal = ({ isOpen, onClose, message }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>{message}</h2>
        <img alt="Graph" className="graph-image" />
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default Modal;
