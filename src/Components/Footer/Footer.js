import React from "react";
import './Footer.css';
import Logo from '../../assets/imagens/logo bartoon.png'; // Certifique-se de que o caminho está correto

export const Footer = (props) => {
  return (
    <footer className="footer-container">
      <div className="container">
        <div className="row">
          {/* Coluna de Logo */}
          <div className="col-12 col-md-4 text-center text-md-start">
            <img src={Logo} alt="Logo" className="footer-logo" />
          </div>

          {/* Coluna de Contato */}
          <div className="col-12 col-md-4 text-left">
            <h3>Contato</h3>
            <p className="contact-item">
              <a href={`https://wa.me/${props.data ? props.data.phone : "63992791987"}`} target="_blank" rel="noopener noreferrer">
                <i className="fab fa-whatsapp" style={{ color: "white", fontSize: "24px" }}></i>
                <span className="contact-info">{props.data ? props.data.phone : "63992791987"}</span>
              </a>
            </p>
            <p className="contact-item">
              <a href="https://www.instagram.com/mindxagency/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram" style={{ color: "white", fontSize: "24px" }}></i>
                <span className="contact-info">Instagram</span>
              </a>
            </p>
            <p className="contact-item">
              <i className="fas fa-map-marker-alt" style={{ color: "white", fontSize: "24px" }}></i>
              <span className="contact-info">Rua Exemplo, 123, Bairro, Cidade, Estado, País</span>
            </p>
            <p className="contact-item">
              <i className="fas fa-clock" style={{ color: "white", fontSize: "24px" }}></i>
              <span className="contact-info">Seg - Sex: 09:00 - 18:00</span>
              <br />
              <span className="contact-info">Sáb: 09:00 - 14:00</span>
            </p>
          </div>

          {/* Coluna de Links Úteis */}
          <div className="col-12 col-md-4 links-column">
            <h3>Links Úteis</h3>
            <ul className="useful-links">
              <li><a href="/about">Sobre Nós</a></li>
              <li><a href="/services">Serviços</a></li>
              <li><a href="/contact">Contato</a></li>
              <li><a href="/privacy">Política de Privacidade</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div id="footer" className="text-center">
        <div className="container">
          <p>&copy; 2024 Desenvolvido por Ian</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
