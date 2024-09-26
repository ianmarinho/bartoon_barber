import React, { useState } from 'react';
import { Button, Container, Row, Col, Image } from 'react-bootstrap';
import { FaMapMarkerAlt } from 'react-icons/fa';
import './Scheduling.css';
import AgendeAgoraImage from '../../assets/imagens/Scheduling.jpg';

const Scheduling = () => {
    const [showPopup, setShowPopup] = useState(false);

    const handleOpenPopup = () => setShowPopup(true);
    const handleClosePopup = () => setShowPopup(false);

    const handleUnitClick = (whatsappLink) => {
        window.open(whatsappLink, '_blank', 'noopener,noreferrer');
    };

    return (
        <Container fluid className="text-center py-5 d-md-none"> {/* Visível apenas em dispositivos móveis */}
            <Row>
                <Col>
                    <h1 className="display-4 mb-3">FAÇA SEU AGENDAMENTO ONLINE</h1>
                    <p className="lead">
                        Experimente o melhor em cuidados masculinos com nossos serviços de alta qualidade e comodidades exclusivas.
                    </p>
                </Col>
            </Row>

            <Row className="my-4 justify-content-center">
                <Col md={5} className="mb-4">
                    <Image
                        src={AgendeAgoraImage}
                        alt="Equipe da barbearia"
                        fluid
                        rounded
                        className="shadow-lg"
                    />
                </Col>
            </Row>

            <Row>
                <Col>
                    <Button
                        className="custom-button"
                        size="lg"
                        onClick={handleOpenPopup}>
                        Agende Agora
                    </Button>



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
                                        <FaMapMarkerAlt className="location-icon" /> Av. Marginal Neblina
                                    </li>
                                </ul>
                            </div>
                        </div>
                    )}
                </Col>
            </Row>
        </Container>
    );
};

export default Scheduling;
