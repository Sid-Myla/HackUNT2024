// src/components/Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './sidebar.css'; // Optional: for styling

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>Menu</h2>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/adjust">Adjustments</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
