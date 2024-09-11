import React from 'react';
import './HeroSection.css';

const HeroSection = () => (
    <div className="hero-section">
        <h2 className="hero-title">Bem-vindo à Bartoon Barbearia</h2>
        <p className="hero-subtitle">Agende seu horário com os melhores profissionais</p>
        <a href="/agendamento" className="cta-button">Agendar agora</a>
    </div>
);

export default HeroSection;
