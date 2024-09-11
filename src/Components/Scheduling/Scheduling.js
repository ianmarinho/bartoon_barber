import React from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';
import './Scheduling.css'; // Certifique-se de que este arquivo CSS está no mesmo diretório
import AgendeAgora from '../../assets/imagens/rostoo.jpeg'; // Corrija o caminho se necessário

const Scheduling = () => {
    return (
        <Container fluid className="text-center py-5 d-md-none">
            <Row>
                <Col>
                    <h1>FAÇA SEU AGENDAMENTO ONLINE</h1>
                    <p>Experimente o melhor em cuidados masculinos com nossos serviços de alta qualidade e comodidades exclusivas.</p>
                </Col>
            </Row>

            <Row className="my-4">
                <Col md={6} lg={4}>
                    <Button className="agendar-btn" size="lg" href="/agendar">
                        Agendar Agora
                    </Button>
                </Col>

                <Col md={6} lg={4}>
                    <img src={AgendeAgora} alt="Barbearia" className="agendeAgoraImage" />
                </Col>
            </Row>
        </Container>
    );
};

export default Scheduling;
