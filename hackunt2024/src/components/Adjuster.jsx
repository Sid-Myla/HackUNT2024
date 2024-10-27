import React from 'react';
import './MainPage.css';
import Authreq from './Authreq';

const Adjuster = () => {
  return (
    <div className="main-page">
      <h1>UtiliTrack</h1>
      <div className='container'>
        <h3>Notifications</h3>
        <Authreq area="Kitchen" urgency="Urgent" issue="High Temperature" sol="Ventilation to 100%"/>
        <Authreq area="Sector 4" urgency="Mild" issue="Increase Lighting" sol="Increase power by 17%"/>
      </div>
    </div>
  );
};

export default Adjuster;
