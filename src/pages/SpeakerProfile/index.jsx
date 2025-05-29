import React from 'react';
import { useNavigate } from 'react-router-dom';
import './styles.css';

function Speakers() {
  const navigate = useNavigate();
  
  const speakers = [
    {
      id: 1,
      name: "Ana Silva",
      role: "CTO",
      company: "Tech Solutions",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      topics: ["IA", "Machine Learning"],
      bio: "Especialista em inteligência artificial com mais de 10 anos de experiência.",
      presentation: "O Futuro da IA no Mundo Corporativo",
      schedule: "10:00 - 11:00 | Auditório Principal",
      description: "Como a inteligência artificial está transformando os negócios e criando novas oportunidades."
    },
    {
      id: 2,
      name: "Carlos Mendes", 
      role: "Head of Innovation",
      company: "Future Labs",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      topics: ["Blockchain", "Sustentabilidade"],
      bio: "Líder em inovação focado em tecnologias sustentáveis e blockchain.",
      presentation: "Blockchain para um Futuro Sustentável",
      schedule: "14:00 - 15:00 | Sala de Inovação",
      description: "Explorando como a tecnologia blockchain pode acelerar iniciativas de sustentabilidade."
    },
    {
      id: 3,
      name: "Maria Santos",
      role: "Data Scientist",
      company: "AI Corp",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop&crop=face",
      topics: ["Data Science", "Analytics"],
      bio: "Cientista de dados especializada em análise preditiva e big data.",
      presentation: "Analytics Avançado: Da Teoria à Prática",
      schedule: "11:30 - 12:30 | Auditório Principal",
      description: "Técnicas avançadas de análise de dados para tomada de decisões estratégicas."
    },
    {
      id: 4,
      name: "João Oliveira",
      role: "DevOps Engineer",
      company: "Cloud Systems",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      topics: ["DevOps", "Cloud Computing"],
      bio: "Especialista em arquitetura de nuvem e automação de processos.",
      presentation: "DevOps na Era da Nuvem",
      schedule: "15:30 - 16:30 | Sala Técnica",
      description: "Melhores práticas para implementar DevOps em ambientes de nuvem híbrida."
    }
  ];

  return (
    <div className="speakers-page">
      {/* Header */}
      <header className="speakers-header">
        <button 
          onClick={() => navigate(-1)}
          className="back-button"
        >
          ←
        </button>
        <h1 className="page-title">Palestrantes</h1>
        <div className="header-decoration"></div>
      </header>

      {/* Content */}
      <div className="speakers-content">
        <div className="speakers-intro">
          <h2>Conheça nossos especialistas</h2>
          <p>Profissionais renomados que vão compartilhar conhecimento e experiências únicas.</p>
        </div>

        <div className="speakers-grid">
          {speakers.map(speaker => (
            <div key={speaker.id} className="speaker-card">
              <div className="speaker-avatar">
                <img 
                  src={speaker.avatar} 
                  alt={speaker.name}
                  onError={(e) => {
                    e.target.src = `https://ui-avatars.com/api/?name=${speaker.name}&background=8B5CF6&color=fff&size=120`;
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
                  <p className="presentation-description">{speaker.description}</p>
                </div>
                
                <div className="speaker-topics">
                  {speaker.topics.map(topic => (
                    <span key={topic} className="topic-tag">
                      {topic}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Speakers;