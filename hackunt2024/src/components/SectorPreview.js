import React from 'react';
import './SectorPreview.css';

const SectorPreview = ({ sector }) => {
  return (
    <div className="sector-preview" onClick={() => alert(`Viewing details of ${sector}`)}>
      <h3>{sector}</h3>
      <p>Temperature: 75°F</p>
      <p>Occupants: 15</p>
      <p>Utilities: OK</p>
    </div>
  );
};

export default SectorPreview;
