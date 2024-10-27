import React from 'react';
import './Blueprint.css';

const Blueprint = () => {
  return (
    <div className="blueprint">
      <div className="sector-box sector-top" onClick={() => alert('Navigating to Sector 2')}>
        Sector 2
      </div>
      <div className="sector-box sector-left" onClick={() => alert('Navigating to Sector 1')}>
        Sector 1
      </div>
      <div className="sector-box sector-right" onClick={() => alert('Navigating to Sector 3')}>
        Sector 3
      </div>
    </div>
  );
};

export default Blueprint;
