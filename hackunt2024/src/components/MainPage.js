import React from 'react';
import './MainPage.css';
import Blueprint from './Blueprint';
import SectorPreview from './SectorPreview';
import OverallViewButton from './OverallViewButton';

const MainPage = () => {
  return (
    <div className="main-page">
      <h1>UtiliTrack</h1>
      <div className='container'>
      <div className="blueprint-container">
        <Blueprint />
      </div>
      <div className="sector-previews">
        <SectorPreview sector="Sector 1: Restaurant" />
        <SectorPreview sector="Sector 2: Grocery Shop" />
        <SectorPreview sector="Sector 3: Back Area" />
      </div>
      <div className="overall-view-button">
        <OverallViewButton />
      </div>
      </div>
    </div>
  );
};

export default MainPage;
