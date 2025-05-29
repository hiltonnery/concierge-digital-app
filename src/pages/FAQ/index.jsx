import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles.css';

function FAQ() {
  const navigate = useNavigate();
  const [openItems, setOpenItems] = useState(new Set());
  const [activeCategory, setActiveCategory] = useState('all');

  const faqData = [
    {
      id: 1,
      category: "eventos",
      categoryName: "Eventos",
      icon: "🎪",
      question: "Como encontro eventos disponíveis?",
      answer: "Na tela inicial, você verá todos os eventos organizados pela Accenture em 2025. Use os filtros por data, localização ou categoria para encontrar eventos do seu interesse."
    },
    {
      id: 2,
      category: "eventos",
      categoryName: "Eventos",
      icon: "🎪",
      question: "Os eventos são gratuitos?",
      answer: "A maioria dos eventos da Accenture são gratuitos para participantes. Alguns eventos premium podem ter taxa de inscrição, que será claramente indicada na descrição do evento."
    },
    {
      id: 3,
      category: "eventos",
      categoryName: "Eventos", 
      icon: "🎪",
      question: "Posso participar de eventos em outras cidades?",
      answer: "Sim! Oferecemos eventos presenciais em várias cidades do Brasil e eventos online que podem ser acessados de qualquer lugar. Verifique o formato na descrição de cada evento."
    },
    {
      id: 4,
      category: "eventos",
      categoryName: "Eventos",
      icon: "🎪",
      question: "Como recebo atualizações sobre novos eventos?",
      answer: "Ative as notificações push no app e configure suas preferências de interesse. Você receberá alertas sobre novos eventos relacionados aos seus tópicos favoritos."
    },
    {
      id: 5,
      category: "app",
      categoryName: "Aplicativo",
      icon: "📱",
      question: "Como faço minha inscrição nos eventos?",
      answer: "Selecione o evento desejado, clique em 'Inscrever-se', preencha as informações solicitadas e confirme. Você receberá um email de confirmação com todos os detalhes."
    },
    {
      id: 6,
      category: "app",
      categoryName: "Aplicativo",
      icon: "📱",
      question: "Para que serve o QR Code Scanner?",
      answer: "O QR Scanner permite fazer check-in nos eventos, trocar contatos com outros participantes, acessar materiais exclusivos e validar sua participação para certificados."
    },
    {
      id: 7,
      category: "app",
      categoryName: "Aplicativo",
      icon: "📱",
      question: "Como acesso a programação dos eventos?",
      answer: "Na seção 'Programação', você encontra a agenda completa dos eventos em que está inscrito, com horários, palestrantes e descrições detalhadas de cada atividade."
    },
    {
      id: 8,
      category: "app",
      categoryName: "Aplicativo",
      icon: "📱",
      question: "Posso cancelar minha inscrição?",
      answer: "Sim, você pode cancelar sua inscrição até 24 horas antes do evento. Acesse 'Meus Eventos' no perfil e clique em 'Cancelar Inscrição'."
    },
    {
      id: 9,
      category: "networking",
      categoryName: "Networking",
      icon: "🤝",
      question: "Como funciona o networking nos eventos?",
      answer: "Use o QR Code do seu perfil para trocar contatos rapidamente. O app também sugere participantes com interesses similares e facilita conexões através do chat interno."
    },
    {
      id: 10,
      category: "networking",
      categoryName: "Networking",
      icon: "🤝",
      question: "Meus dados ficam seguros no networking?",
      answer: "Sim! Você controla quais informações compartilhar. Apenas dados que você autorizar serão visíveis para outros participantes durante o networking."
    },
    {
      id: 11,
      category: "certificados",
      categoryName: "Certificados",
      icon: "🏆",
      question: "Como recebo certificados de participação?",
      answer: "Certificados são gerados automaticamente após confirmação de presença via QR Code. Eles ficam disponíveis na seção 'Meu Perfil' dentro de 48 horas após o evento."
    },
    {
      id: 12,
      category: "certificados",
      categoryName: "Certificados",
      icon: "🏆",
      question: "Os certificados são válidos para horas complementares?",
      answer: "Sim! Todos os certificados da Accenture são válidos para horas complementares acadêmicas e desenvolvimento profissional, com carga horária especificada em cada evento."
    },
    {
      id: 13,
      category: "conta",
      categoryName: "Minha Conta",
      icon: "👤",
      question: "Como atualizo meus dados pessoais?",
      answer: "Vá para 'Meu Perfil', clique no botão de edição (✏️) e atualize suas informações. Lembre-se de salvar as alterações antes de sair da tela."
    },
    {
      id: 14,
      category: "conta",
      categoryName: "Minha Conta",
      icon: "👤",
      question: "Esqueci minha senha, como recuperar?",
      answer: "Na tela de login, clique em 'Esqueci minha senha', digite seu email e siga as instruções enviadas para redefinir sua senha de acesso."
    },
    {
      id: 15,
      category: "conta",
      categoryName: "Minha Conta",
      icon: "👤",
      question: "Como excluo minha conta?",
      answer: "Entre em contato com nosso suporte através do botão 'Contato' nesta seção. Por questões de segurança, exclusões de conta precisam ser confirmadas via email."
    }
  ];

  const categories = [
    { id: 'all', name: 'Todas', icon: '📋', count: faqData.length },
    { id: 'eventos', name: 'Eventos', icon: '🎪', count: faqData.filter(item => item.category === 'eventos').length },
    { id: 'app', name: 'App', icon: '📱', count: faqData.filter(item => item.category === 'app').length },
    { id: 'networking', name: 'Networking', icon: '🤝', count: faqData.filter(item => item.category === 'networking').length },
    { id: 'certificados', name: 'Certificados', icon: '🏆', count: faqData.filter(item => item.category === 'certificados').length },
    { id: 'conta', name: 'Minha Conta', icon: '👤', count: faqData.filter(item => item.category === 'conta').length }
  ];

  const filteredFAQ = activeCategory === 'all' 
    ? faqData 
    : faqData.filter(item => item.category === activeCategory);

  const toggleItem = (id) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(id)) {
      newOpenItems.delete(id);
    } else {
      newOpenItems.add(id);
    }
    setOpenItems(newOpenItems);
  };

  const handleContact = () => {
    alert('📧 Entre em contato:\n\nEmail: suporte@accenture-events.com\nWhatsApp: (11) 99999-8888\n\nHorário de atendimento:\nSeg-Sex: 8h às 18h\nSáb: 9h às 14h\n\n🌟 Accenture Events 2025');
  };

  return (
    <div className="faq-page">
      {/* Header */}
      <header className="faq-header">
        <div className="header-content">
          <button className="back-button" onClick={() => navigate(-1)}>
            ←
          </button>
          <h1 className="page-title">Perguntas Frequentes</h1>
          <button className="contact-button" onClick={handleContact}>
            💬
          </button>
        </div>
      </header>

      {/* Content */}
      <div className="faq-content">
        {/* Intro */}
        <div className="faq-intro">
          <h2>❓ Como podemos ajudar?</h2>
          <p>Encontre respostas para as dúvidas mais comuns sobre os eventos Accenture 2025</p>
        </div>

        {/* Categories Filter */}
        <div className="categories-filter">
          {categories.map(category => (
            <button
              key={category.id}
              className={`category-button ${activeCategory === category.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(category.id)}
            >
              <span className="category-icon">{category.icon}</span>
              <span className="category-name">{category.name}</span>
              <span className="category-count">{category.count}</span>
            </button>
          ))}
        </div>

        {/* FAQ Items */}
        <div className="faq-list">
          {filteredFAQ.map((item) => (
            <div key={item.id} className={`faq-item ${openItems.has(item.id) ? 'open' : ''}`}>
              <button
                className="faq-question"
                onClick={() => toggleItem(item.id)}
              >
                <div className="question-content">
                  <span className="question-icon">{item.icon}</span>
                  <span className="question-text">{item.question}</span>
                </div>
                <span className={`expand-icon ${openItems.has(item.id) ? 'rotated' : ''}`}>
                  ▼
                </span>
              </button>
              
              {openItems.has(item.id) && (
                <div className="faq-answer">
                  <p>{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact Section */}
        <div className="contact-section">
          <h3>🤔 Não encontrou sua resposta?</h3>
          <p>Nossa equipe está pronta para ajudar você!</p>
          <button className="contact-support-button" onClick={handleContact}>
            📞 Entrar em Contato
          </button>
        </div>
      </div>
    </div>
  );
}

export default FAQ;