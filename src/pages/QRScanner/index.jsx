import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles.css';

function QRScanner() {
  const navigate = useNavigate();
  const [isScanning, setIsScanning] = useState(false);
  const [scannedData, setScannedData] = useState(null);
  const [hasPermission, setHasPermission] = useState(null);
  const [error, setError] = useState(null);
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const streamRef = useRef(null);

  // Simular scan de QR Code (já que não temos acesso real à câmera no ambiente de desenvolvimento)
  const simulateQRScan = () => {
    const mockQRData = [
      {
        type: 'event_checkin',
        data: {
          eventName: 'Tech Conference 2024',
          location: 'Auditório Principal',
          time: '09:30 - 10:30',
          speaker: 'Ana Silva',
          presentation: 'O Futuro da IA no Mundo Corporativo'
        }
      },
      {
        type: 'networking',
        data: {
          name: 'Maria Santos',
          role: 'Data Scientist',
          company: 'AI Corp',
          email: 'maria.santos@aicorp.com',
          linkedin: 'linkedin.com/in/mariasantos'
        }
      },
      {
        type: 'feedback',
        data: {
          sessionId: 'session_001',
          sessionName: 'Blockchain para Sustentabilidade',
          feedbackUrl: 'https://feedback.accenture.com/session_001'
        }
      }
    ];

    const randomData = mockQRData[Math.floor(Math.random() * mockQRData.length)];
    setScannedData(randomData);
    setIsScanning(false);
  };

  const startScanning = async () => {
    try {
      setError(null);
      setScannedData(null);
      setIsScanning(true);

      // Em um ambiente real, aqui usaríamos navigator.mediaDevices.getUserMedia
      // Para demonstração, vamos simular o processo
      setTimeout(() => {
        simulateQRScan();
      }, 2000);

    } catch (err) {
      setError('Erro ao acessar a câmera. Verifique as permissões.');
      setIsScanning(false);
    }
  };

  const stopScanning = () => {
    setIsScanning(false);
    if (streamRef.current) {
      streamRef.current.getTracks().forEach(track => track.stop());
    }
  };

  const resetScanner = () => {
    setScannedData(null);
    setError(null);
    setIsScanning(false);
  };

  const handleAction = (action, data) => {
    switch (action) {
      case 'checkin':
        alert(`Check-in realizado para: ${data.presentation}`);
        break;
      case 'add_contact':
        alert(`Contato adicionado: ${data.name}`);
        break;
      case 'open_feedback':
        alert(`Abrindo formulário de feedback para: ${data.sessionName}`);
        break;
      case 'share':
        navigator.share?.({
          title: 'QR Code Resultado',
          text: JSON.stringify(data, null, 2)
        }) || alert('Dados copiados!');
        break;
      default:
        break;
    }
  };

  const renderScannedResult = () => {
    if (!scannedData) return null;

    switch (scannedData.type) {
      case 'event_checkin':
        return (
          <div className="result-card event-card">
            <div className="result-header">
              <h3>🎫 Check-in do Evento</h3>
            </div>
            <div className="result-content">
              <h4>{scannedData.data.eventName}</h4>
              <div className="event-details">
                <p><strong>📍 Local:</strong> {scannedData.data.location}</p>
                <p><strong>🕐 Horário:</strong> {scannedData.data.time}</p>
                <p><strong>🎤 Palestrante:</strong> {scannedData.data.speaker}</p>
                <p><strong>📋 Palestra:</strong> {scannedData.data.presentation}</p>
              </div>
              <div className="result-actions">
                <button 
                  className="action-button primary"
                  onClick={() => handleAction('checkin', scannedData.data)}
                >
                  ✅ Fazer Check-in
                </button>
                <button 
                  className="action-button secondary"
                  onClick={() => handleAction('share', scannedData.data)}
                >
                  📤 Compartilhar
                </button>
              </div>
            </div>
          </div>
        );

      case 'networking':
        return (
          <div className="result-card contact-card">
            <div className="result-header">
              <h3>👤 Contato Profissional</h3>
            </div>
            <div className="result-content">
              <h4>{scannedData.data.name}</h4>
              <div className="contact-details">
                <p><strong>💼 Cargo:</strong> {scannedData.data.role}</p>
                <p><strong>🏢 Empresa:</strong> {scannedData.data.company}</p>
                <p><strong>📧 Email:</strong> {scannedData.data.email}</p>
                <p><strong>💼 LinkedIn:</strong> {scannedData.data.linkedin}</p>
              </div>
              <div className="result-actions">
                <button 
                  className="action-button primary"
                  onClick={() => handleAction('add_contact', scannedData.data)}
                >
                  📇 Adicionar Contato
                </button>
                <button 
                  className="action-button secondary"
                  onClick={() => handleAction('share', scannedData.data)}
                >
                  📤 Compartilhar
                </button>
              </div>
            </div>
          </div>
        );

      case 'feedback':
        return (
          <div className="result-card feedback-card">
            <div className="result-header">
              <h3>📝 Feedback da Sessão</h3>
            </div>
            <div className="result-content">
              <h4>{scannedData.data.sessionName}</h4>
              <p>Sua opinião é importante! Avalie esta sessão e ajude-nos a melhorar.</p>
              <div className="result-actions">
                <button 
                  className="action-button primary"
                  onClick={() => handleAction('open_feedback', scannedData.data)}
                >
                  📝 Avaliar Sessão
                </button>
                <button 
                  className="action-button secondary"
                  onClick={() => handleAction('share', scannedData.data)}
                >
                  📤 Compartilhar
                </button>
              </div>
            </div>
          </div>
        );

      default:
        return (
          <div className="result-card generic-card">
            <div className="result-header">
              <h3>📱 QR Code Detectado</h3>
            </div>
            <div className="result-content">
              <pre>{JSON.stringify(scannedData, null, 2)}</pre>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="qr-scanner-page">
      {/* Header */}
      <header className="scanner-header">
        <button 
          onClick={() => navigate(-1)}
          className="back-button"
        >
          ←
        </button>
        <h1 className="page-title">QR Scanner</h1>
        <div className="header-decoration"></div>
      </header>

      {/* Content */}
      <div className="scanner-content">
        {!scannedData && (
          <div className="scanner-intro">
            <h2>📷 Escaneie um QR Code</h2>
            <p>Aponte a câmera para um QR Code para check-in, networking ou feedback.</p>
          </div>
        )}

        {/* Scanner Area */}
        <div className="scanner-area">
          {!isScanning && !scannedData && (
            <div className="scanner-placeholder">
              <div className="scanner-icon">📷</div>
              <p>Toque para iniciar o scanner</p>
              <button className="start-scan-button" onClick={startScanning}>
                🔍 Iniciar Scanner
              </button>
            </div>
          )}

          {isScanning && (
            <div className="scanning-active">
              <div className="scanning-frame">
                <div className="scanning-corners">
                  <div className="corner top-left"></div>
                  <div className="corner top-right"></div>
                  <div className="corner bottom-left"></div>
                  <div className="corner bottom-right"></div>
                </div>
                <div className="scanning-line"></div>
              </div>
              <p className="scanning-text">🔍 Procurando QR Code...</p>
              <button className="stop-scan-button" onClick={stopScanning}>
                ⏹️ Parar Scanner
              </button>
            </div>
          )}

          {error && (
            <div className="scanner-error">
              <p>❌ {error}</p>
              <button className="retry-button" onClick={startScanning}>
                🔄 Tentar Novamente
              </button>
            </div>
          )}

          {/* Results */}
          {renderScannedResult()}
        </div>

        {scannedData && (
          <div className="scanner-actions">
            <button className="reset-button" onClick={resetScanner}>
              🔄 Escanear Novamente
            </button>
          </div>
        )}

        {/* Quick Actions */}
        <div className="quick-actions">
          <h3>🚀 Ações Rápidas</h3>
          <div className="actions-grid">
            <button className="quick-action-button" onClick={() => simulateQRScan()}>
              🎫 Simular Check-in
            </button>
            <button className="quick-action-button" onClick={() => navigate('/schedule')}>
              📅 Ver Programação
            </button>
            <button className="quick-action-button" onClick={() => navigate('/speakers')}>
              👥 Palestrantes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default QRScanner;