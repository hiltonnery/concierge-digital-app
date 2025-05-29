import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles.css';
import logo from '../../assets/logo-accenture.png';

function LoginViaCode() {
  const [code, setCode] = useState(Array(6).fill(''));
  const inputsRef = useRef([]);
  const navigate = useNavigate();

  const handleChange = (index, value) => {
    if (/^\d$/.test(value) || value === '') {
      const newCode = [...code];
      newCode[index] = value;
      setCode(newCode);
      if (value && index < 5) {
        inputsRef.current[index + 1]?.focus();
      }
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === 'Backspace' && !code[index] && index > 0) {
      inputsRef.current[index - 1]?.focus();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const fullCode = code.join('');
    if (fullCode.length === 6) {
      navigate('/loading');
    } else {
      alert('Digite o código completo.');
    }
  };

  return (
    <div className="login-wrapper">
      <form className="login-card" onSubmit={handleSubmit}>
        <img src={logo} alt="Accenture Logo" className="accenture-logo" />
        <h1 className="login-title">Enviamos um código para seu e-mail</h1>
        <p className="login-subtitle">Digite o código de 6 dígitos que você recebeu</p>

        <div className="code-input-container">
          {code.map((digit, index) => (
            <input
              key={index}
              type="text"
              maxLength="1"
              className="code-input"
              value={digit}
              onChange={(e) => handleChange(index, e.target.value)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              ref={(el) => (inputsRef.current[index] = el)}
            />
          ))}
        </div>

        <button className="login-button" type="submit">
          Confirmar Código
        </button>
      </form>
    </div>
  );
}

export default LoginViaCode;