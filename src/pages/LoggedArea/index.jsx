import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';
import './styles.css';

function LoggedArea() {
  const { userData } = useContext(UserContext);
  const navigate = useNavigate();

  // Função para pegar as iniciais do nome
  const getInitials = (name) => {
    if (!name) return 'U';
    return name
      .split(' ')
      .map(word => word[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  const handleFeatureClick = (route) => {
    navigate(route);
  };

  const handleAISearch = (query) => {
    const searchTerm = query.toLowerCase();
    
    if (searchTerm.includes('palestrante') || searchTerm.includes('speaker')) {
      navigate('/speakers');
    } else if (searchTerm.includes('evento') || searchTerm.includes('agenda')) {
      navigate('/schedule');
    } else if (searchTerm.includes('certificado')) {
      navigate('/profile');
    } else {
      alert('🤖 IA: "Encontrei informações sobre: ' + query + '". Funcionalidade em desenvolvimento!');
    }
  };

  return (
    <div className="logged-area">
      {/* Header */}
      <header className="header">
        <div className="header-content">
          <div className="header-logo">
            <div className="accenture-symbol">&gt;</div>
            <span className="accenture-text">Concierge</span>
          </div>
          <div className="user-info">
            <div className="user-avatar">
              {getInitials(userData.name)}
            </div>
            <span className="user-name">{userData.name}</span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="main-content">
        <h1 className="page-title">
          Bem-vindo ao Portal, {userData.name}! 👋
        </h1>

        {/* AI Search Section */}
        <section className="ai-search-section">
          <h2 className="search-title">🤖 Assistente IA</h2>
          <div className="search-container">
            <div className="search-bar">
              <input
                type="text"
                placeholder="Pergunte sobre eventos, palestrantes, certificados..."
                className="search-input"
                onKeyPress={(e) => {
                  if (e.key === 'Enter') {
                    handleAISearch(e.target.value);
                    e.target.value = '';
                  }
                }}
              />
              <button className="search-button" onClick={(e) => {
                const input = e.target.closest('.search-bar').querySelector('.search-input');
                if (input.value) {
                  handleAISearch(input.value);
                  input.value = '';
                } else {
                  alert('🤖 Digite algo para pesquisar!');
                }
              }}>
                <span className="search-icon">🔍</span>
              </button>
            </div>
            <div className="ai-suggestions">
              <span className="suggestion-chip" onClick={() => handleAISearch('palestrantes')}>
                "Palestrantes disponíveis"
              </span>
              <span className="suggestion-chip" onClick={() => handleAISearch('eventos sobre IA')}>
                "Eventos sobre IA"
              </span>
              <span className="suggestion-chip" onClick={() => handleAISearch('meus certificados')}>
                "Meus certificados"
              </span>
            </div>
          </div>
        </section>

        {/* Stats Section - Simplificada */}
        <section className="stats-section">
          <h2 className="stats-title">📊 Seu Progresso</h2>
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-number">3</div>
              <div className="stat-label">Eventos Inscritos</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">12</div>
              <div className="stat-label">Horas de Conteúdo</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">8</div>
              <div className="stat-label">Contatos Feitos</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">2</div>
              <div className="stat-label">Certificados</div>
            </div>
          </div>
        </section>

        {/* Feature Cards */}
        <section className="cards-grid">
          <div className="feature-card" onClick={() => handleFeatureClick('/speakers')}>
            <div className="card-icon">👥</div>
            <h3 className="card-title">Palestrantes</h3>
            <p className="card-description">
              Conheça os especialistas que vão compartilhar conhecimento e experiências nos eventos.
            </p>
            <button className="card-button">Ver Palestrantes</button>
          </div>

          <div className="feature-card" onClick={() => handleFeatureClick('/my-agenda')}>
            <div className="card-icon">📅</div>
            <h3 className="card-title">Minha Agenda</h3>
            <p className="card-description">
              Veja todos os seus eventos agendados, confirmados e histórico de participações.
            </p>
            <button className="card-button">Ver Agenda</button>
          </div>

          <div className="feature-card" onClick={() => handleFeatureClick('/qr-scanner')}>
            <div className="card-icon">📱</div>
            <h3 className="card-title">QR Scanner</h3>
            <p className="card-description">
              Escaneie códigos QR para check-in, materiais e networking nos eventos.
            </p>
            <button className="card-button">Abrir Scanner</button>
          </div>

          <div className="feature-card" onClick={() => handleFeatureClick('/schedule')}>
            <div className="card-icon">🗓️</div>
            <h3 className="card-title">Programação Geral</h3>
            <p className="card-description">
              Explore todos os eventos disponíveis e descubra novas oportunidades.
            </p>
            <button className="card-button">Explorar Eventos</button>
          </div>

          <div className="feature-card" onClick={() => handleFeatureClick('/profile')}>
            <div className="card-icon">👤</div>
            <h3 className="card-title">Meu Perfil</h3>
            <p className="card-description">
              Gerencie suas informações pessoais e preferências do app.
            </p>
            <button className="card-button">Ver Perfil</button>
          </div>

          <div className="feature-card" onClick={() => handleFeatureClick('/faq')}>
            <div className="card-icon">❓</div>
            <h3 className="card-title">FAQ</h3>
            <p className="card-description">
              Tire suas dúvidas sobre os eventos e o aplicativo.
            </p>
            <button className="card-button">Ver FAQ</button>
          </div>
        </section>

        {/* Action Buttons */}
        <section className="action-buttons">
          <button 
            className="action-button primary"
            onClick={() => handleFeatureClick('/qr-scanner')}
          >
            📷 Scan QR Code
          </button>
          <button 
            className="action-button"
            onClick={() => handleFeatureClick('/my-agenda')}
          >
            📅 Minha Agenda
          </button>
          <button 
            className="action-button"
            onClick={() => handleFeatureClick('/speakers')}
          >
            👥 Palestrantes
          </button>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <p className="footer-text">
          © 2025 Accenture. Todos os direitos reservados. | Versão 1.0.0
        </p>
      </footer>
    </div>
  );
}

export default LoggedArea;