import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import About_Image from '../../assets/imagens/About.jpg';

const About = () => {
    return (
        <section id="sobre-nos" className="py-5 bg-black text-light">
            <Container>
                <Row className="justify-content-center mb-4">
                    <Col md={8} className="text-center">
                        <h2 className="mb-4 font-weight-bold display-4">Sobre a Bartoon Barbearia</h2>
                        <p className="lead mb-4">
                            Na Bartoon Barbearia, nossa missão é proporcionar mais do que um simples corte de cabelo — queremos
                            oferecer uma experiência de primeira classe. Com uma equipe altamente qualificada e apaixonada pelo que
                            faz, nosso objetivo é garantir que cada cliente saia não apenas satisfeito, mas renovado.
                        </p>
                    </Col>
                </Row>
                <Row className="align-items-center">
                    <Col md={5} className="mb-4">
                        <Image
                            src={About_Image}
                            alt="Equipe da barbearia"
                            fluid
                            rounded
                            className="shadow-lg"
                        />
                    </Col>

                    <Col md={6}>
                        <h3 className="mt-3 font-weight-bold">Nossa História</h3>
                        <p className="mb-3">
                            Fundada em 2010, a Bartoon Barbearia nasceu com a ideia de resgatar o charme e a tradição das
                            barbearias clássicas, adicionando um toque moderno para os homens que buscam estilo e sofisticação.
                            Hoje, somos reconhecidos por nosso compromisso com a qualidade, e isso é visto em cada corte de cabelo,
                            barba e atendimento que oferecemos.
                        </p>
                        <h3 className="mt-4 font-weight-bold">Nosso Compromisso</h3>
                        <p>
                            Valorizamos cada detalhe para garantir que nossos clientes recebam não apenas um ótimo corte de cabelo,
                            mas também um momento de relaxamento e bem-estar. Nossa equipe está sempre atualizada com as últimas
                            tendências, oferecendo um atendimento personalizado para cada estilo.
                        </p>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default About;
