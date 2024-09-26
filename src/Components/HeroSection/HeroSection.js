import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { FaMapMarkerAlt } from 'react-icons/fa'; // Ícone de localização
import './HeroSection.css';

const HeroSection = () => {
    const [showPopup, setShowPopup] = useState(false);

    const handleOpenPopup = () => setShowPopup(true);
    const handleClosePopup = () => setShowPopup(false);

    const handleUnitClick = (whatsappLink) => {
        window.open(whatsappLink, '_blank', 'noopener,noreferrer');
    };

    return (
        <div className="hero-section">
            <h2 className="hero-title">Bem-vindo à Bartoon Barbearia</h2>
            <p className="hero-subtitle">Agende seu horário com os melhores profissionais</p>

            {/* Centralizando o botão com Bootstrap */}
            <div className="d-flex justify-content-center">
                <Button variant="warning" className="cta-button" onClick={handleOpenPopup}>
                    Agendar agora
                </Button>
            </div>

            {/* Pop-up customizado */}
            {showPopup && (
                <div className="popup-overlay" onClick={handleClosePopup}>
                    <div className="popup-content" onClick={(e) => e.stopPropagation()}>
                        <span className="close-icon" onClick={handleClosePopup}>×</span>
                        <h3>Selecione a unidade</h3>

                        <ul className="unit-list">
                            <li onClick={() => handleUnitClick('https://api.whatsapp.com/send/?phone=5563992384372&text&type=phone_number&app_absent=0')}>
                                <FaMapMarkerAlt className="location-icon" /> Av. José de Brito
                            </li>

                            <li onClick={() => handleUnitClick('https://api.whatsapp.com/send/?phone=5563991088543&text&type=phone_number&app_absent=0')}>
                                <FaMapMarkerAlt className="location-icon" />Av. Marginal Neblina
                            </li>
                        </ul>

                    </div>
                </div>
            )}
        </div>
    );
};

export default HeroSection;
