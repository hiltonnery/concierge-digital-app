import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles.css';

function Loading() {
  const navigate = useNavigate();

  useEffect(() => {
    // Simula carregamento por 3 segundos
    const timer = setTimeout(() => {
      navigate('/welcome');
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="loading-container">
      <div className="loading-content">
        <div className="loading-spinner">
          <div className="spinner"></div>
        </div>
        <h2 className="loading-text">Carregando...</h2>
        <p className="loading-subtitle">Preparando sua experiência</p>
      </div>
    </div>
  );
}

export default Loading;