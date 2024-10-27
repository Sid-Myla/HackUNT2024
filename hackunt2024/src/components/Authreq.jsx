import React from 'react';
import './SectorPreview.css';

const Authreq = ({ area, urgency, issue, sol }) => {
  return (
    <div className="authreq">
      <h3>{area}</h3>
      <div>
      <p>{urgency}</p>
      <p>Issue: {issue}</p>
      <p>Request: {sol}</p>
      </div>
      <div className='authreqbuttons'>
        <div className='small-button'>Authorize</div>
        <div className='small-button'>Reject</div>
      </div>
    </div>
  );
};

export default Authreq;
