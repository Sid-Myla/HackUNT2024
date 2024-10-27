import React from 'react';
import './OverallViewButton.css';

const OverallViewButton = () => {
  return (
    <button className="overall-view-btn" onClick={() => alert('Viewing Overall Analytics')}>
      View Overall
    </button>
  );
};

export default OverallViewButton;
