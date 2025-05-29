import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../../context/UserContext';
import './styles.css';

function Welcome() {
  const navigate = useNavigate();
  const { userData } = useUser();

  const handleJoinUs = () => {
    navigate('/home');
  };

  // Pega o primeiro nome do usuário
  const firstName = userData.name.split(' ')[0] || 'Visitante';

  return (
    <div className="welcome-container">
      <div className="welcome-content">
        <div className="welcome-header">
          <span className="welcome-arrow"></span>
        </div>
        
        <div className="welcome-main">
          <div className="title-with-symbol">
            <div className="welcome-symbol">&gt;</div>
            <h1 className="welcome-title">
              Boas<br />
              vindas,<br />
              {firstName}!
            </h1>
          </div>
          
          <p className="welcome-message">
            Eu sou o seu concierge de visitas e vou te passar dicas, dados e te acompanhar durante toda a jornada no Hub da Accenture
          </p>
          
          <button className="join-button" onClick={handleJoinUs}>
            <span className="join-arrow"></span>
            Junte-se a nós
          </button>
        </div>
      </div>
      
      <div className="welcome-note">
        <p>A proposta é personalizar o motion conforme o local da visita</p>
      </div>
    </div>
  );
}

export default Welcome;