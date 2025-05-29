import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles.css';

function Schedule() {
  const navigate = useNavigate();
  const [selectedDay, setSelectedDay] = useState('day1');
  const [selectedEvent, setSelectedEvent] = useState(null);

  const scheduleData = {
    day1: [
      {
        id: 1,
        time: "09:30 - 10:30",
        title: "O Futuro da IA no Mundo Corporativo",
        speaker: "Ana Silva",
        location: "Auditório Principal",
        description: "Como a inteligência artificial está transformando os negócios e criando novas oportunidades de crescimento.",
        category: "IA",
        level: "Intermediário",
        attendees: 250,
        registered: false
      },
      {
        id: 2,
        time: "11:00 - 12:00",
        title: "Analytics Avançado: Da Teoria à Prática",
        speaker: "Maria Santos",
        location: "Auditório Principal",
        description: "Técnicas avançadas de análise de dados para transformar informações em insights acionáveis.",
        category: "Data Science",
        level: "Avançado",
        attendees: 180,
        registered: true
      },
      {
        id: 3,
        time: "14:30 - 15:30",
        title: "Blockchain para um Futuro Sustentável",
        speaker: "Carlos Mendes",
        location: "Sala de Inovação",
        description: "Explorando como a tecnologia blockchain pode acelerar iniciativas de sustentabilidade empresarial.",
        category: "Blockchain",
        level: "Iniciante",
        attendees: 120,
        registered: true
      }
    ],
    day2: [
      {
        id: 4,
        time: "09:00 - 10:00",
        title: "DevOps na Era da Nuvem",
        speaker: "João Oliveira",
        location: "Sala Técnica",
        description: "Melhores práticas para implementar DevOps em ambientes de nuvem híbrida e containers.",
        category: "DevOps",
        level: "Intermediário",
        attendees: 150,
        registered: false
      }
    ]
  };

  const getCategoryColor = (category) => {
    const colors = {
      'IA': '#8B5CF6',
      'Data Science': '#06B6D4',
      'Blockchain': '#10B981',
      'DevOps': '#F59E0B'
    };
    return colors[category] || '#6B7280';
  };

  const getLevelColor = (level) => {
    const colors = {
      'Iniciante': '#10B981',
      'Intermediário': '#F59E0B',
      'Avançado': '#EF4444'
    };
    return colors[level] || '#6B7280';
  };

  const handleRegister = (eventId) => {
    alert('Inscrição realizada com sucesso! Você receberá uma confirmação por e-mail.');
  };

  const handleUnregister = (eventId) => {
    alert('Inscrição cancelada. Você pode se inscrever novamente a qualquer momento.');
  };

  const openModal = (event) => {
    setSelectedEvent(event);
  };

  const closeModal = () => {
    setSelectedEvent(null);
  };

  return (
    <div className="schedule-page">
      {/* Header */}
      <header className="schedule-header">
        <button 
          onClick={() => navigate(-1)}
          className="back-button"
        >
          ←
        </button>
        <h1 className="page-title">Programação</h1>
        <div className="header-decoration"></div>
      </header>

      {/* Content */}
      <div className="schedule-content">
        <div className="schedule-intro">
          <h2>🗓️ Agenda do Evento</h2>
          <p>Confira toda a programação e não perca nenhuma apresentação importante</p>
        </div>

        {/* Day Tabs */}
        <div className="day-tabs">
          <button 
            className={`day-tab ${selectedDay === 'day1' ? 'active' : ''}`}
            onClick={() => setSelectedDay('day1')}
          >
            📅 Dia 1 - 15/03
          </button>
          <button 
            className={`day-tab ${selectedDay === 'day2' ? 'active' : ''}`}
            onClick={() => setSelectedDay('day2')}
          >
            📅 Dia 2 - 16/03
          </button>
        </div>

        {/* Schedule Timeline */}
        <div className="schedule-timeline">
          {scheduleData[selectedDay].map(event => (
            <div key={event.id} className="timeline-item">
              <div className="timeline-time">
                <div className="time-badge">{event.time}</div>
              </div>
              
              <div className="timeline-content">
                <div className="event-card-schedule">
                  <div className="event-header-schedule">
                    <div className="event-badges">
                      <span 
                        className="category-badge"
                        style={{ backgroundColor: getCategoryColor(event.category) }}
                      >
                        {event.category}
                      </span>
                      <span 
                        className="level-badge"
                        style={{ backgroundColor: getLevelColor(event.level) }}
                      >
                        {event.level}
                      </span>
                    </div>
                    {event.registered && (
                      <div className="registered-badge">
                        ✅ Inscrito
                      </div>
                    )}
                  </div>

                  <h3 className="event-title-schedule">{event.title}</h3>
                  
                  <div className="event-details-schedule">
                    <p className="event-speaker">👤 {event.speaker}</p>
                    <p className="event-location">📍 {event.location}</p>
                    <p className="event-attendees">👥 {event.attendees} participantes</p>
                  </div>

                  <p className="event-description-schedule">{event.description}</p>

                  <div className="event-actions">
                    <button 
                      className="details-button"
                      onClick={() => openModal(event)}
                    >
                      ℹ️ Ver Detalhes
                    </button>
                    {event.registered ? (
                      <button 
                        className="unregister-button"
                        onClick={() => handleUnregister(event.id)}
                      >
                        ❌ Cancelar Inscrição
                      </button>
                    ) : (
                      <button
                      className="register-button"
                       onClick={() => handleRegister(event.id)}
                     >
                       📝 Inscrever-se
                     </button>
                   )}
                 </div>
               </div>
             </div>
           </div>
         ))}
       </div>
     </div>

     {/* Modal */}
     {selectedEvent && (
       <div className="modal-overlay" onClick={closeModal}>
         <div className="modal-content" onClick={(e) => e.stopPropagation()}>
           <button className="modal-close" onClick={closeModal}>×</button>
           
           <div className="modal-header">
             <div className="modal-badges">
               <span 
                 className="modal-category-badge"
                 style={{ backgroundColor: getCategoryColor(selectedEvent.category) }}
               >
                 {selectedEvent.category}
               </span>
               <span 
                 className="modal-level-badge"
                 style={{ backgroundColor: getLevelColor(selectedEvent.level) }}
               >
                 {selectedEvent.level}
               </span>
             </div>
             {selectedEvent.registered && (
               <div className="modal-registered-badge">
                 ✅ Você está inscrito
               </div>
             )}
           </div>

           <div className="modal-body">
             <h2 className="modal-title">{selectedEvent.title}</h2>
             
             <div className="modal-section">
               <h3>🕐 Horário e Local</h3>
               <p>📅 {selectedDay === 'day1' ? '15 de Março' : '16 de Março'}</p>
               <p>🕐 {selectedEvent.time}</p>
               <p>📍 {selectedEvent.location}</p>
             </div>

             <div className="modal-section">
               <h3>👤 Palestrante</h3>
               <p>{selectedEvent.speaker}</p>
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
                   <span className="info-label">📚 Nível:</span>
                   <span className="info-value">{selectedEvent.level}</span>
                 </div>
                 <div className="info-item">
                   <span className="info-label">🏷️ Categoria:</span>
                   <span className="info-value">{selectedEvent.category}</span>
                 </div>
               </div>
             </div>
           </div>

           <div className="modal-footer">
             {selectedEvent.registered ? (
               <button 
                 className="modal-button secondary"
                 onClick={() => {
                   handleUnregister(selectedEvent.id);
                   closeModal();
                 }}
               >
                 ❌ Cancelar Inscrição
               </button>
             ) : (
               <button 
                 className="modal-button primary"
                 onClick={() => {
                   handleRegister(selectedEvent.id);
                   closeModal();
                 }}
               >
                 📝 Inscrever-se
               </button>
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

export default Schedule;