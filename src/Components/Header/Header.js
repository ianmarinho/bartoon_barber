import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-scroll';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css';
import icone_bartoon from '../../assets/imagens/logo bartoon.png';

const Header = () => {
    return (
        <Navbar bg="black" variant="dark" expand="lg" className="custom-navbar">
            <Container>
                <Navbar.Brand href="/" className="d-flex align-items-center">
                    <img
                        src={icone_bartoon}
                        width="90"
                        height="90"
                        className="d-inline-block align-top"
                        alt="Logo"
                    />
                    <span className="ms-4 site-title">Bartoon Barber</span>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mx-auto">
                        <Nav.Link>
                            <Link to="home" smooth={true} duration={500}>Início</Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link to="about" smooth={true} duration={500}>Sobre</Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link to="services" smooth={true} duration={500}>Serviços</Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link to="contact" smooth={true} duration={500}>Contato</Link>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;
