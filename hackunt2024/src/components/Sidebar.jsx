import React from 'react';
import { useNavigate } from 'react-router-dom';
import './sidebar.css';
import Counter from './Counter';

const Sidebar = () => {
  const navigate = useNavigate();


  const handleHomeClick = () => {
    navigate('/'); // Navigate to Home
  };

  const handleAdjustmentsClick = () => {
    navigate('/adjust'); // Navigate to Adjustments
  };

  return (
    <div className="sidebar">
      <h2>Menu</h2>
      <ul>
        <li>
          <button className="btn btn-secondary" onClick={handleHomeClick}>
            Home
          </button>
        </li>
        <li>
          <button className="btn btn-secondary" onClick={handleAdjustmentsClick}>
            Adjustments
          </button>
        </li>
      </ul>
      <Counter />
    </div>
  );
};

export default Sidebar;
