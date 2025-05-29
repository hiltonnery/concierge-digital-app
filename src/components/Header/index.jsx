import React from 'react';
import { useNavigate } from 'react-router-dom';
import './styles.css';

function Header({ title, showBack = true, rightComponent }) {
  const navigate = useNavigate();

  return (
    <header className="page-header">
      <div className="header-left">
        {showBack && (
          <button className="back-button" onClick={() => navigate(-1)}>
            ←
          </button>
        )}
        <h1 className="header-title">{title}</h1>
      </div>
      {rightComponent && (
        <div className="header-right">
          {rightComponent}
        </div>
      )}
    </header>
  );
}

export default Header;