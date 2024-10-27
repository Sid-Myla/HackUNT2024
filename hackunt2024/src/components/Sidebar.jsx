import React from 'react';
import { useNavigate } from 'react-router-dom';
import './sidebar.css';
import { useAuth0 } from '@auth0/auth0-react';
import Counter from './Counter';

const Sidebar = () => {
  const navigate = useNavigate();
  const { loginWithRedirect, logout, user, isLoading } = useAuth0();

  const handleHomeClick = () => {
    navigate('/'); // Navigate to Home
  };

  const handleAdjustmentsClick = () => {
    navigate('/adjust'); // Navigate to Adjustments
  };

  console.log('Sidebar component rendered');

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
      {!isLoading && !user && (
        <button
          className="btn btn-primary btn-block"
          onClick={() => {
            console.log('Login button clicked');
            loginWithRedirect();
          }}
        >
          Log In
        </button>
      )}
      {!isLoading && user && (
        <button
          className="btn btn-primary btn-block"
          onClick={() => {
            console.log('Logout button clicked');
            logout();
          }}
        >
          Log Out
        </button>
      )}
      <Counter />
    </div>
  );
};

export default Sidebar;
