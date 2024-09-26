import React from "react";
import './Footer.css';

export const Footer = (props) => {
  return (
    <footer className="footer-container">
      <div className="container">
        <div className="row">
          {/* Coluna de Contato */}
          <div className="col-12 col-md-4 text-left">
            <h3>Contatos</h3>
            <div className="contact-info">
              <p className="contact-item">
                <i className="fab fa-instagram" style={{ color: "white", fontSize: "24px" }}></i>
                <a
                  href="https://www.instagram.com/bartoon_barber/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ marginLeft: "5px", color: "white" }} // Adicionei a cor para manter a consistência visual
                >
                  Visite nosso Instagram
                </a>
              </p>


              <p className="contact-item">
                <span style={{ paddingRight: "5px" }}>Unidade 1:</span>
                <a
                  href={`https://wa.me/${props.data ? props.data.phone1 : "639992384372"}`}
                  target="_blank"
                  rel="noopener noreferrer">
                  {props.data ? props.data.phone1 : "(63) 99238-4372"}
                </a>
              </p>

              <p className="contact-item">
                <a href="https://www.google.com/maps?q=Barbearia+Bartoon,+Loja+1+ao+lado+Hotel+-+Relicario+-+Av.+Jos%C3%A9+de+Brito,+777+-+St.+Anhanguera,+Aragua%C3%ADna+-+TO,+77818-530&ftid=0x92d90d0a17103acd:0xc83425ae748214a0&entry=gps&lucs=,94224825,94227247,94227248,47071704,47069508,94218641,94203019,47084304,94208458,94208447&g_ep=CAISDTYuMTMzLjEuODU2ODAYACDXggMqWiw5NDIyNDgyNSw5NDIyNzI0Nyw5NDIyNzI0OCw0NzA3MTcwNCw0NzA2OTUwOCw5NDIxODY0MSw5NDIwMzAxOSw0NzA4NDMwNCw5NDIwODQ1OCw5NDIwODQ0N0ICQlI%3D&g_st=iw">
                  <span>
                    Av. José de Brito, 777 - St. Anhanguera, Araguaína - TO, 77818-530
                  </span>
                </a>
              </p>

              <p className="contact-item pt-3">
                <span style={{ paddingRight: "5px" }}>Unidade 2:</span>
                <a
                  href={`https://wa.me/${props.data ? props.data.phone2 : "63991088543"}`}
                  target="_blank"
                  rel="noopener noreferrer">
                  {props.data ? props.data.phone2 : "(63) 99108-8543"}
                </a>
              </p>

              <p className="contact-item">
                <a href="https://www.google.com/maps/place/Barbearia+Bartoon+II/@-7.1972002,-48.2150885,17z/data=!3m1!4b1!4m6!3m5!1s0x92d90d0fd49fec13:0xa1c6486675a419a!8m2!3d-7.1972002!4d-48.2150885!16s%2Fg%2F11vr4kg6sr?entry=ttu&g_ep=EgoyMDI0MDkyMy4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer">
                  <span>
                    Av. Marginal Neblina, 627 - Lot. Alaska, Araguaína - TO, 77817-805
                  </span>
                </a>
              </p>

            </div>
          </div>

          {/* Coluna de Horários */}
          <div className="col-12 col-md-4 text-left mt-5">
            <h3>Horários</h3>
            <div className="contact-info">
              <p className="contact-item">
                <i className="fas fa-clock" style={{ color: "white", fontSize: "24px" }}></i>
                <span style={{ marginLeft: "5px" }}>Seg - Sex: 08:00 - 20:00</span>
              </p>
              <p className="contact-item">
                <i className="fas fa-clock" style={{ color: "white", fontSize: "24px" }}></i>
                <span style={{ marginLeft: "5px" }}>Sáb: 08:00 - 18:00</span>
              </p>
            </div>
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
