import React from "react";
import "./styles.css";
import logo from "../../assets/logo-accenture.png";
import concierge from "../../assets/concierge.png" ;

function Home() {
  return (
    <div className="home-container">
      <img src={logo} alt="Accenture Logo" className="logo" />
      <div className="main-content">
        <img src={concierge} alt="Concierge" className="concierge-img" />
        <h1>Olá! Eu sou o concierge virtual</h1>
        <p>Vamos começar sua jornada?</p>
        <button className="start-button">Começar</button>
      </div>
      <footer>© 2025 Accenture Concierge</footer>
    </div>
  );
}

export default Home;
