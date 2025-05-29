import React, { useState, useRef, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../../components/Header';
import { conversations, chatMessages } from '../../data/messages';
import './styles.css';

function ChatConversation() {
  const { userId } = useParams();
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const messagesEndRef = useRef(null);
  
  const conversation = conversations.find(c => c.id === parseInt(userId));
  
  useEffect(() => {
    // Carrega mensagens da conversa
    const conversationMessages = chatMessages[parseInt(userId)] || [];
    setMessages(conversationMessages);
  }, [userId]);

  useEffect(() => {
    // Auto scroll para a última mensagem
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  if (!conversation) {
    return (
      <div className="chat-conversation-page">
        <Header title="Conversa não encontrada" />
        <div className="error-message">
          <p>Esta conversa não existe ou foi removida.</p>
        </div>
      </div>
    );
  }

  const handleSendMessage = () => {
    if (message.trim()) {
      const newMessage = {
        id: messages.length + 1,
        text: message.trim(),
        sender: 'me',
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        read: true
      };
      
      setMessages(prev => [...prev, newMessage]);
      setMessage('');
      
      // Simula resposta automática após 2 segundos
      setTimeout(() => {
        const autoReply = {
          id: messages.length + 2,
          text: `Obrigado(a) pela mensagem! Vou responder em breve.`,
          sender: 'other',
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          read: false
        };
        setMessages(prev => [...prev, autoReply]);
      }, 2000);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="chat-conversation-page">
      <Header 
        title={conversation.name}
        rightComponent={
          <div className="header-actions">
            <button className="header-action-btn">📞</button>
            <button className="header-action-btn">📹</button>
            <button className="header-action-btn">ℹ️</button>
          </div>
        }
      />
      
      <div className="conversation-content">
        {/* Messages Area */}
        <div className="messages-area">
          {messages.map(msg => (
            <div 
              key={msg.id} 
              className={`message ${msg.sender === 'me' ? 'message-sent' : 'message-received'}`}
            >
              <div className="message-bubble">
                <p className="message-text">{msg.text}</p>
                <div className="message-info">
                  <span className="message-time">{msg.time}</span>
                  {msg.sender === 'me' && (
                    <span className={`message-status ${msg.read ? 'read' : 'sent'}`}>
                      {msg.read ? '✓✓' : '✓'}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        {/* Message Input */}
        <div className="message-input-area">
          <div className="input-container">
            <button className="attachment-btn">📎</button>
            
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Digite sua mensagem..."
              className="message-input"
              rows="1"
            />
            
            <button 
              className="send-btn"
              onClick={handleSendMessage}
              disabled={!message.trim()}
            >
              {message.trim() ? '🚀' : '🎤'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChatConversation;