import React from 'react';
import { useNavigate } from 'react-router-dom';
import './styles.css'; 
import "../../assets/logo-accenture.png"
const QrCodeScanner = () => {
  const navigate = useNavigate();

  const handleNext = () => {
    navigate('/home');
  };

  return (
    <div className="qrcode-container">
      <h1>Escaneie o QR Code</h1>
      <div className="scanner-box">
        <div className="scanner-frame"></div>
      </div>
      <button className="next-button" onClick={handleNext}>
        Continuar
      </button>
    </div>
  );
};

export default QrCodeScanner;
