import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';
import './styles.css';

function UserProfile() {
  const navigate = useNavigate();
  const { user, setUser } = useContext(UserContext);
  const [isEditing, setIsEditing] = useState(false);
  
  // Dados do participante (usando dados reais do usuário logado)
  const [participantData, setParticipantData] = useState({
    name: user?.name || 'Usuário',
    email: user?.email || 'user@email.com',
    employeeId: user?.employeeId || 'VIS-' + Math.floor(Math.random() * 9999).toString().padStart(4, '0'),
    department: user?.department || 'Visitante',
    location: 'Recife, Pernambuco',
    phone: user?.phone || '+55 81 ****-****',
    registrationDate: user?.registrationDate || '2024-06-01',
    badge: 'Visitante',
    interests: user?.interests || ['IA', 'Cloud Computing', 'DevOps'],
    qrCode: `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(JSON.stringify({
      name: user?.name || 'Usuário',
      id: user?.employeeId || 'VIS-' + Math.floor(Math.random() * 9999).toString().padStart(4, '0'),
      event: 'Tech Conference 2024',
      location: 'Recife, Pernambuco',
      email: user?.email || 'user@email.com'
    }))}`
  });

  const [editedData, setEditedData] = useState(participantData);
  const [activeTab, setActiveTab] = useState('badge');

  const eventSchedule = [
    {
      id: 1,
      time: '09:30 - 10:30',
      title: 'O Futuro da IA no Mundo Corporativo',
      speaker: 'Ana Silva',
      location: 'Auditório Principal',
      status: 'confirmado'
    },
    {
      id: 2,
      time: '11:00 - 12:00',
      title: 'Analytics Avançado: Da Teoria à Prática',
      location: 'Auditório Principal',
      speaker: 'Maria Santos',
      status: 'confirmado'
    },
    {
      id: 3,
      time: '14:30 - 15:30',
      title: 'Blockchain para um Futuro Sustentável',
      speaker: 'Carlos Mendes',
      location: 'Sala de Inovação',
      status: 'lista_espera'
    }
  ];

  const networkingContacts = [
    {
      id: 1,
      name: 'Maria Santos',
      role: 'Data Scientist',
      company: 'AI Corp',
      connectedAt: '2024-06-15 10:30'
    },
    {
      id: 2,
      name: 'Carlos Mendes',
      role: 'Head of Innovation',
      company: 'Future Labs',
      connectedAt: '2024-06-15 14:45'
    }
  ];

  const handleInputChange = (field, value) => {
    setEditedData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const saveProfile = () => {
    setParticipantData(editedData);
    setUser(editedData);
    setIsEditing(false);
    alert('Perfil atualizado com sucesso!');
  };

  const cancelEdit = () => {
    setEditedData(participantData);
    setIsEditing(false);
  };

  const downloadQRCode = () => {
    const link = document.createElement('a');
    link.href = participantData.qrCode;
    link.download = `qr-code-${participantData.employeeId}.png`;
    link.click();
  };

  const shareProfile = () => {
    if (navigator.share) {
      navigator.share({
        title: 'Meu Perfil - Tech Conference 2024',
        text: `${participantData.name} - ${participantData.badge}`,
        url: window.location.href
      });
    } else {
      alert('Perfil copiado para área de transferência!');
    }
  };

  const logout = () => {
    if (window.confirm('Tem certeza que deseja sair?')) {
      setUser(null);
      navigate('/');
    }
  };

  return (
    <div className="profile-page">
      {/* Header */}
      <header className="profile-header">
        <button 
          onClick={() => navigate(-1)}
          className="back-button"
        >
          ←
        </button>
        <h1 className="page-title">Meu Crachá Digital</h1>
        <button 
          className="edit-button"
          onClick={() => setIsEditing(!isEditing)}
        >
          {isEditing ? '✕' : '✏️'}
        </button>
      </header>

      {/* Profile Content */}
      <div className="profile-content">
        
        {/* Digital Badge Card */}
        <div className="badge-card">
          <div className="badge-header">
            <div className="event-info">
              <h2>🎪 Tech Conference 2024</h2>
              <p>15-16 de Junho • São Paulo</p>
            </div>
            <div className="accenture-logo">
              <span>ACCENTURE</span>
            </div>
          </div>

          <div className="participant-info">
            <div className="participant-main">
              <div className="participant-avatar-placeholder">
                <div className="avatar-icon">👤</div>
              </div>
              
              <div className="participant-details">
                {isEditing ? (
                  <div className="edit-participant">
                    <input
                      type="text"
                      value={editedData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      className="edit-input name-input"
                      placeholder="Seu nome"
                    />
                    <input
                      type="text"
                      value={editedData.department}
                      onChange={(e) => handleInputChange('department', e.target.value)}
                      className="edit-input dept-input"
                      placeholder="Departamento"
                    />
                  </div>
                ) : (
                  <>
                    <h3 className="participant-name">{participantData.name}</h3>
                    <p className="participant-id">{participantData.employeeId}</p>
                    <p className="participant-dept">{participantData.department}</p>
                    <div className="participant-badge">
                      <span className="badge-type">{participantData.badge}</span>
                    </div>
                  </>
                )}
              </div>
            </div>

            <div className="qr-section">
              <div className="qr-code">
                <img 
                  src={participantData.qrCode} 
                  alt="QR Code do Participante"
                  className="qr-image"
                />
              </div>
              <div className="qr-actions">
                <button className="qr-button" onClick={downloadQRCode}>
                  💾 Baixar
                </button>
                <button className="qr-button" onClick={shareProfile}>
                  📤 Compartilhar
                </button>
              </div>
            </div>
          </div>

          {isEditing && (
            <div className="edit-actions">
              <button className="save-button" onClick={saveProfile}>
                ✅ Salvar
              </button>
              <button className="cancel-button" onClick={cancelEdit}>
                ❌ Cancelar
              </button>
            </div>
          )}
        </div>

        {/* Tabs */}
        <div className="profile-tabs">
          <button 
            className={`tab-button ${activeTab === 'badge' ? 'active' : ''}`}
            onClick={() => setActiveTab('badge')}
          >
            🎫 Crachá
          </button>
          <button 
            className={`tab-button ${activeTab === 'schedule' ? 'active' : ''}`}
            onClick={() => setActiveTab('schedule')}
          >
            📅 Minha Agenda
          </button>
          <button 
            className={`tab-button ${activeTab === 'contacts' ? 'active' : ''}`}
            onClick={() => setActiveTab('contacts')}
          >
            🤝 Contatos
          </button>
        </div>

        {/* Tab Content */}
        <div className="tab-content">
          {activeTab === 'badge' && (
            <div className="badge-tab">
              <div className="info-card">
                <h3>📋 Informações do Participante</h3>
                <div className="info-grid">
                  <div className="info-item">
                    <span className="info-label">📧 Email:</span>
                    <span className="info-value">{participantData.email}</span>
                  </div>
                  <div className="info-item">
                    <span className="info-label">📱 Telefone:</span>
                    <span className="info-value">{participantData.phone}</span>
                  </div>
                  <div className="info-item">
                    <span className="info-label">📍 Localização:</span>
                    <span className="info-value">{participantData.location}</span>
                  </div>
                  <div className="info-item">
                    <span className="info-label">📅 Inscrição:</span>
                    <span className="info-value">{new Date(participantData.registrationDate).toLocaleDateString('pt-BR')}</span>
                  </div>
                </div>
              </div>

              <div className="interests-card">
                <h3>🏷️ Interesses</h3>
                <div className="interests-display">
                  {participantData.interests.map(interest => (
                    <span key={interest} className="interest-tag">
                      {interest}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'schedule' && (
            <div className="schedule-tab">
              <h3>📅 Minha Agenda Personalizada</h3>
              <div className="schedule-list">
                {eventSchedule.map(session => (
                  <div key={session.id} className="schedule-item">
                    <div className="schedule-time">
                      <span className="time-badge">{session.time}</span>
                    </div>
                    <div className="schedule-content">
                      <h4>{session.title}</h4>
                      <p><strong>🎤 Palestrante:</strong> {session.speaker}</p>
                      <p><strong>📍 Local:</strong> {session.location}</p>
                      <div className={`status-badge ${session.status}`}>
                        {session.status === 'confirmado' ? '✅ Confirmado' : '⏳ Lista de Espera'}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'contacts' && (
            <div className="contacts-tab">
              <h3>🤝 Networking Realizado</h3>
              <div className="contacts-list">
                {networkingContacts.map(contact => (
                  <div key={contact.id} className="contact-item">
                    <div className="contact-avatar">
                      <img 
                        src={`https://ui-avatars.com/api/?name=${contact.name}&background=8B5CF6&color=fff&size=50`}
                        alt={contact.name}
                      />
                    </div>
                    <div className="contact-info">
                      <h4>{contact.name}</h4>
                      <p>{contact.role} - {contact.company}</p>
                      <span className="connected-date">
                        Conectado em: {new Date(contact.connectedAt).toLocaleString('pt-BR')}
                      </span>
                    </div>
                    <button className="contact-button">
                      💬 Conversar
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Actions */}
        <div className="profile-actions">
          <button className="action-button settings">
            ⚙️ Configurações
          </button>
          <button className="action-button help">
            ❓ Suporte
          </button>
          <button className="action-button logout" onClick={logout}>
            🚪 Sair do App
          </button>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;