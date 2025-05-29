import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles.css';

function MyAgenda() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('upcoming');
  const [selectedEvent, setSelectedEvent] = useState(null);

  // Dados dos eventos agendados (usando os mesmos palestrantes)
  const myEvents = {
    upcoming: [
      {
        id: 1,
        title: "O Futuro da IA no Mundo Corporativo",
        date: "2025-03-15",
        time: "09:30 - 10:30",
        location: "Auditório Principal",
        speaker: "Ana Silva",
        status: "confirmed",
        description: "Como a inteligência artificial está transformando os negócios e criando novas oportunidades de crescimento",
        attendees: 250,
        materials: true
      },
      {
        id: 2,
        title: "Analytics Avançado: Da Teoria à Prática",
        date: "2025-03-15",
        time: "11:00 - 12:00",
        location: "Auditório Principal",
        speaker: "Maria Santos",
        status: "confirmed",
        description: "Técnicas avançadas de análise de dados para transformar informações em insights acionáveis",
        attendees: 180,
        materials: false
      },
      {
        id: 3,
        title: "Blockchain para um Futuro Sustentável",
        date: "2025-03-15",
        time: "14:30 - 15:30",
        location: "Sala de Inovação",
        speaker: "Carlos Mendes",
        status: "waitlist",
        description: "Explorando como a tecnologia blockchain pode acelerar iniciativas de sustentabilidade empresarial",
        attendees: 120,
        materials: true
      },
      {
        id: 4,
        title: "DevOps na Era da Nuvem",
        date: "2025-03-16",
        time: "09:00 - 10:00",
        location: "Sala Técnica",
        speaker: "João Oliveira",
        status: "confirmed",
        description: "Melhores práticas para implementar DevOps em ambientes de nuvem híbrida e containers",
        attendees: 150,
        materials: true
      }
    ],
    past: [
      {
        id: 5,
        title: "IA Aplicada aos Negócios",
        date: "2025-02-20",
        time: "09:30 - 11:00",
        location: "Auditório Principal",
        speaker: "Ana Silva",
        status: "attended",
        description: "Workshop sobre implementação prática de IA em processos empresariais",
        attendees: 200,
        certificate: true,
        rating: 5
      },
      {
        id: 6,
        title: "Análise de Dados com Python",
        date: "2025-02-15",
        time: "14:00 - 16:00",
        location: "Lab Tech",
        speaker: "Maria Santos",
        status: "attended",
        description: "Curso prático de análise de dados usando Python e bibliotecas especializadas",
        attendees: 80,
        certificate: true,
        rating: 4
      }
    ]
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'confirmed': return '✅';
      case 'waitlist': return '⏳';
      case 'attended': return '🎯';
      case 'cancelled': return '❌';
      default: return '📅';
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case 'confirmed': return 'Confirmado';
      case 'waitlist': return 'Lista de Espera';
      case 'attended': return 'Participou';
      case 'cancelled': return 'Cancelado';
      default: return 'Agendado';
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'confirmed': return '#10B981';
      case 'waitlist': return '#F59E0B';
      case 'attended': return '#6366F1';
      case 'cancelled': return '#EF4444';
      default: return '#8B5CF6';
    }
  };

  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: 'short',
      year: 'numeric'
    });
  };

  const getDaysUntil = (dateStr) => {
    const eventDate = new Date(dateStr);
    const today = new Date();
    const diffTime = eventDate - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays === 0) return 'Hoje';
    if (diffDays === 1) return 'Amanhã';
    if (diffDays > 0) return `Em ${diffDays} dias`;
    return 'Passado';
  };

  const handleEventClick = (event) => {
    setSelectedEvent(event);
  };

  const closeModal = () => {
    setSelectedEvent(null);
  };

  const handleCancelEvent = (eventId) => {
    alert(`Evento cancelado! Você receberá uma confirmação por e-mail.`);
    closeModal();
  };

  const handleDownloadCertificate = (eventId) => {
    alert(`Certificado baixado com sucesso!`);
  };

  return (
    <div className="my-agenda-page">
      {/* Header */}
      <header className="agenda-header">
        <button 
          onClick={() => navigate(-1)}
          className="back-button"
        >
          ←
        </button>
        <h1 className="page-title">Minha Agenda</h1>
        <div className="header-decoration"></div>
      </header>

      {/* Content */}
      <div className="agenda-content">
        {/* Stats Cards */}
        <div className="agenda-stats">
          <div className="stat-card">
            <div className="stat-icon">📅</div>
            <div className="stat-info">
              <div className="stat-number">{myEvents.upcoming.length}</div>
              <div className="stat-label">Próximos</div>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">🎯</div>
            <div className="stat-info">
              <div className="stat-number">{myEvents.past.length}</div>
              <div className="stat-label">Participados</div>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">🏆</div>
            <div className="stat-info">
              <div className="stat-number">
                {myEvents.past.filter(e => e.certificate).length}
              </div>
              <div className="stat-label">Certificados</div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="agenda-tabs">
          <button 
            className={`tab-button ${activeTab === 'upcoming' ? 'active' : ''}`}
            onClick={() => setActiveTab('upcoming')}
          >
            📅 Próximos ({myEvents.upcoming.length})
          </button>
          <button 
            className={`tab-button ${activeTab === 'past' ? 'active' : ''}`}
            onClick={() => setActiveTab('past')}
          >
            📋 Histórico ({myEvents.past.length})
          </button>
        </div>

        {/* Events List */}
        <div className="events-list">
          {myEvents[activeTab].map(event => (
            <div 
              key={event.id} 
              className="event-card"
              onClick={() => handleEventClick(event)}
            >
              <div className="event-header">
                <div className="event-date">
                  <div className="date-main">{formatDate(event.date)}</div>
                  {activeTab === 'upcoming' && (
                    <div className="date-countdown">{getDaysUntil(event.date)}</div>
                  )}
                </div>
                <div 
                  className="event-status" 
                  style={{ backgroundColor: getStatusColor(event.status) }}
                >
                  {getStatusIcon(event.status)} {getStatusText(event.status)}
                </div>
              </div>

              <div className="event-content">
                <h3 className="event-title">{event.title}</h3>
                <div className="event-details">
                  <p className="event-speaker">👤 {event.speaker}</p>
                  <p className="event-time">🕐 {event.time}</p>
                  <p className="event-location">📍 {event.location}</p>
                </div>
                <p className="event-description">{event.description}</p>
                
                <div className="event-footer">
                  <div className="event-meta">
                    <span className="attendees-count">
                      👥 {event.attendees} participantes
                    </span>
                    {event.materials && (
                      <span className="materials-badge">📎 Materiais</span>
                    )}
                    {event.certificate && (
                      <span className="certificate-badge">🏆 Certificado</span>
                    )}
                  </div>
                  {event.rating && (
                    <div className="event-rating">
                      {'⭐'.repeat(event.rating)}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {myEvents[activeTab].length === 0 && (
          <div className="empty-state">
            <div className="empty-icon">
              {activeTab === 'upcoming' ? '📅' : '📋'}
            </div>
            <h3 className="empty-title">
              {activeTab === 'upcoming' ? 'Nenhum evento agendado' : 'Nenhum histórico ainda'}
            </h3>
            <p className="empty-description">
              {activeTab === 'upcoming' 
                ? 'Explore a programação e inscreva-se em eventos interessantes!' 
                : 'Participe de eventos para ver seu histórico aqui.'}
            </p>
            <button 
              className="empty-action-button"
              onClick={() => navigate('/schedule')}
            >
              {activeTab === 'upcoming' ? '📅 Ver Programação' : '🔍 Explorar Eventos'}
            </button>
          </div>
        )}
      </div>

      {/* Modal */}
      {selectedEvent && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>×</button>
            
            <div className="modal-header">
              <div className="modal-date">
                <div className="modal-date-main">{formatDate(selectedEvent.date)}</div>
                <div className="modal-time">{selectedEvent.time}</div>
              </div>
              <div 
                className="modal-status" 
                style={{ backgroundColor: getStatusColor(selectedEvent.status) }}
              >
                {getStatusIcon(selectedEvent.status)} {getStatusText(selectedEvent.status)}
              </div>
            </div>

            <div className="modal-body">
              <h2 className="modal-title">{selectedEvent.title}</h2>
              
              <div className="modal-section">
                <h3>👤 Palestrante</h3>
                <p>{selectedEvent.speaker}</p>
              </div>

              <div className="modal-section">
                <h3>📍 Local e Horário</h3>
                <p>📅 {formatDate(selectedEvent.date)}</p>
                <p>🕐 {selectedEvent.time}</p>
                <p>📍 {selectedEvent.location}</p>
              </div>

              <div className="modal-section">
                <h3>📋 Descrição</h3>
                <p>{selectedEvent.description}</p>
              </div>

              <div className="modal-section">
                <h3>📊 Informações</h3>
                <div className="modal-info-grid">
                  <div className="info-item">
                    <span className="info-label">👥 Participantes:</span>
                    <span className="info-value">{selectedEvent.attendees}</span>
                  </div>
                  <div className="info-item">
                    <span className="info-label">📎 Materiais:</span>
                    <span className="info-value">{selectedEvent.materials ? 'Disponível' : 'Não disponível'}</span>
                  </div>
                  {selectedEvent.certificate && (
                    <div className="info-item">
                      <span className="info-label">🏆 Certificado:</span>
                      <span className="info-value">Disponível</span>
                    </div>
                  )}
                  {selectedEvent.rating && (
                    <div className="info-item">
                      <span className="info-label">⭐ Avaliação:</span>
                      <span className="info-value">{'⭐'.repeat(selectedEvent.rating)}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="modal-footer">
              {activeTab === 'upcoming' ? (
                <>
                  <button 
                    className="modal-button secondary"
                    onClick={() => handleCancelEvent(selectedEvent.id)}
                  >
                    ❌ Cancelar Inscrição
                  </button>
                  <button 
                    className="modal-button primary"
                    onClick={() => alert('🗓️ Adicionado ao calendário!')}
                  >
                    📅 Adicionar ao Calendário
                  </button>
                </>
              ) : (
                <>
                  {selectedEvent.certificate && (
                    <button 
                      className="modal-button primary"
                      onClick={() => handleDownloadCertificate(selectedEvent.id)}
                    >
                      🏆 Baixar Certificado
                    </button>
                  )}
                  <button 
                    className="modal-button secondary"
                    onClick={() => alert('⭐ Obrigado pelo feedback!')}
                  >
                    ⭐ Deixar Avaliação
                  </button>
                </>
              )}
              <button 
                className="modal-button"
                onClick={closeModal}
              >
                Fechar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default MyAgenda;