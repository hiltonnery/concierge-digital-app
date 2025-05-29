import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles.css';

function Speakers() {
  const navigate = useNavigate();
  const [selectedSpeaker, setSelectedSpeaker] = useState(null);

  const speakersData = [
    {
      id: 1,
      name: "Ana Silva",
      role: "Chief Technology Officer",
      company: "TechCorp Brasil",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b97c?w=150&h=150&fit=crop&crop=face",
      bio: "Especialista em IA com mais de 15 anos de experiência em transformação digital.",
      experience: "15+ anos em tecnologia",
      education: "PhD em Ciência da Computação - USP",
      presentation: "O Futuro da IA no Mundo Corporativo",
      schedule: "15/03 - 09:30-10:30",
      location: "Auditório Principal",
      description: "Como a inteligência artificial está transformando os negócios e criando novas oportunidades de crescimento.",
      topics: ["Inteligência Artificial", "Machine Learning", "Transformação Digital"],
      email: "ana.silva@techcorp.com.br",
      linkedin: "linkedin.com/in/anasilva"
    },
    {
      id: 2,
      name: "Maria Santos",
      role: "Senior Data Scientist",
      company: "DataTech Solutions",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop&crop=face",
      bio: "Pioneira em analytics avançado com especialização em big data e visualização de dados.",
      experience: "12+ anos em Data Science",
      education: "Mestrado em Estatística - UNICAMP",
      presentation: "Analytics Avançado: Da Teoria à Prática",
      schedule: "15/03 - 11:00-12:00",
      location: "Auditório Principal",
      description: "Técnicas avançadas de análise de dados para transformar informações em insights acionáveis.",
      topics: ["Data Science", "Big Data", "Analytics", "Python"],
      email: "maria.santos@datatech.com",
      linkedin: "linkedin.com/in/mariasantos"
    },
    {
      id: 3,
      name: "Carlos Mendes",
      role: "Blockchain Architect",
      company: "CryptoInnovate",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      bio: "Arquiteto blockchain focado em soluções sustentáveis e inovação tecnológica verde.",
      experience: "10+ anos em Blockchain",
      education: "Engenharia de Software - PUC-SP",
      presentation: "Blockchain para um Futuro Sustentável",
      schedule: "15/03 - 14:30-15:30",
      location: "Sala de Inovação",
      description: "Explorando como a tecnologia blockchain pode acelerar iniciativas de sustentabilidade empresarial.",
      topics: ["Blockchain", "Sustentabilidade", "Criptomoedas", "DeFi"],
      email: "carlos.mendes@cryptoinnovate.com",
      linkedin: "linkedin.com/in/carlosmendes"
    },
    {
      id: 4,
      name: "João Oliveira",
      role: "DevOps Engineer",
      company: "CloudFirst",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      bio: "Especialista em DevOps e arquitetura de nuvem com foco em automação e eficiência.",
      experience: "8+ anos em DevOps",
      education: "Sistemas de Informação - FIAP",
      presentation: "DevOps na Era da Nuvem",
      schedule: "16/03 - 09:00-10:00",
      location: "Sala Técnica",
      description: "Melhores práticas para implementar DevOps em ambientes de nuvem híbrida e containers.",
      topics: ["DevOps", "Cloud", "Docker", "Kubernetes"],
      email: "joao.oliveira@cloudfirst.com",
      linkedin: "linkedin.com/in/joaooliveira"
    }
  ];

  const openModal = (speaker) => {
    setSelectedSpeaker(speaker);
  };

  const closeModal = () => {
    setSelectedSpeaker(null);
  };

  const handleScheduleMeeting = (speaker) => {
    alert(`Reunião agendada com ${speaker.name}! Você receberá os detalhes por e-mail.`);
    closeModal();
  };

  return (
    <div className="speakers-page">
      <header className="speakers-header">
        <button 
          onClick={() => navigate(-1)}
          className="back-button"
        >
          ←
        </button>
        <h1 className="page-title">Palestrantes</h1>
        <div className="header-decoration">
          🎤
        </div>
      </header>

      <div className="speakers-content">
        <div className="speakers-intro">
          <h2>Conheça Nossos Especialistas</h2>
          <p>Profissionais renomados que compartilharão conhecimentos e experiências únicas</p>
        </div>

        <div className="speakers-grid">
          {speakersData.map(speaker => (
            <div key={speaker.id} className="speaker-card">
              <div className="speaker-avatar">
                <img 
                  src={speaker.avatar} 
                  alt={speaker.name}
                  onError={(e) => {
                    e.target.src = `https://ui-avatars.com/api/?name=${speaker.name}&background=8B5CF6&color=fff&size=80`;
                  }}
                />
                <div className="speaker-status"></div>
              </div>
              
              <div className="speaker-info">
                <h3 className="speaker-name">{speaker.name}</h3>
                <p className="speaker-role">{speaker.role}</p>
                <p className="speaker-company">{speaker.company}</p>
                <p className="speaker-bio">{speaker.bio}</p>
                
                <div className="presentation-info">
                  <h4 className="presentation-title">📋 {speaker.presentation}</h4>
                  <p className="presentation-schedule">🕐 {speaker.schedule}</p>
                </div>
                
                <div className="speaker-topics">
                  {speaker.topics.map(topic => (
                    <span key={topic} className="topic-tag">
                      {topic}
                    </span>
                  ))}
                </div>
                
                <button 
                  className="contact-button"
                  onClick={() => openModal(speaker)}
                >
                  <span className="button-icon">👁️</span>
                  <span className="button-text">Ver Detalhes</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedSpeaker && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>×</button>
            
            <div className="modal-header">
              <img 
                src={selectedSpeaker.avatar} 
                alt={selectedSpeaker.name}
                className="modal-avatar"
                onError={(e) => {
                  e.target.src = `https://ui-avatars.com/api/?name=${selectedSpeaker.name}&background=8B5CF6&color=fff&size=80`;
                }}
              />
              <div>
                <h2 className="modal-name">{selectedSpeaker.name}</h2>
                <p className="modal-role">{selectedSpeaker.role} | {selectedSpeaker.company}</p>
              </div>
            </div>

            <div className="modal-body">
              <div className="modal-section">
                <h3>👤 Sobre</h3>
                <p>{selectedSpeaker.bio}</p>
                <div className="modal-details">
                  <p><strong>Experiência:</strong> {selectedSpeaker.experience}</p>
                  <p><strong>Formação:</strong> {selectedSpeaker.education}</p>
                </div>
              </div>

              <div className="modal-section">
                <h3>🎤 Palestra</h3>
                <div className="presentation-card">
                  <h4>{selectedSpeaker.presentation}</h4>
                  <p className="presentation-details">
                    📅 {selectedSpeaker.schedule}<br/>
                    📍 {selectedSpeaker.location}
                  </p>
                  <p>{selectedSpeaker.description}</p>
                </div>
              </div>

              <div className="modal-section">
                <h3>🏷️ Especialidades</h3>
                <div className="modal-topics">
                  {selectedSpeaker.topics.map(topic => (
                    <span key={topic} className="modal-topic-tag">
                      {topic}
                    </span>
                  ))}
                </div>
              </div>

              <div className="modal-section">
                <h3>📞 Contato</h3>
                <div className="contact-info">
                  <p>📧 {selectedSpeaker.email}</p>
                  <p>💼 {selectedSpeaker.linkedin}</p>
                </div>
              </div>
            </div>

            <div className="modal-footer">
              <button 
                className="schedule-button"
                onClick={() => handleScheduleMeeting(selectedSpeaker)}
              >
                📅 Agendar Reunião
              </button>
              <button className="close-button" onClick={closeModal}>
                Fechar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Speakers;