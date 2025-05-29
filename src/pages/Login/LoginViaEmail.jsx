import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../../context/UserContext';
import "./styles.css";
import logo from "../../assets/logo-accenture.png"; 

function LoginViaEmail() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const { updateUserData } = useUser();

  const handleContinue = (e) => {
    e.preventDefault();
    
    if (name.trim() && email.trim()) {
      updateUserData({ name: name.trim(), email: email.trim() });
      navigate("/login-code");
    } else {
      alert('Por favor, preencha todos os campos.');
    }
  };

  return (
    <div className="login-wrapper">
      <form className="login-card" onSubmit={handleContinue}>
        <img src={logo} alt="Logo Accenture" className="accenture-logo" />
        <h1 className="login-title">Bem-vindo!</h1>
        <p className="login-subtitle">Vamos começar sua jornada conosco</p>
        
        <div className="input-group">
          <input
            type="text"
            className="login-input"
            placeholder="Digite seu nome"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          
          <input
            type="email"
            className="login-input"
            placeholder="Digite seu e-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        
        <button className="login-button" type="submit">
          Continuar
        </button>
      </form>
    </div>
  );
}

export default LoginViaEmail;