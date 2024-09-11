import React from 'react';
import './ServicesSection.css';

const services = [
    {
        name: 'Corte de Cabelo',
        icon: 'fas fa-cut',
        text: 'Corte de cabelo profissional',
        description: 'Tenha o melhor corte com os melhores profissionais da cidade.'
    },
    {
        name: 'Barba',
        icon: 'fas fa-smile',
        text: 'Aparar e desenhar a barba',
        description: 'Barba aparada e desenhada com precisão e estilo.'
    },
    {
        name: 'Relaxamento',
        icon: 'fas fa-spa',
        text: 'Relaxamento capilar',
        description: 'Tratamento de relaxamento capilar com produtos de alta qualidade.'
    },
    {
        name: 'Hidratação',
        icon: 'fas fa-tint',
        text: 'Hidratação capilar',
        description: 'Cabelos hidratados e revitalizados com técnicas avançadas.'
    },
    {
        name: 'Visagismo',
        icon: 'fas fa-eye',
        text: 'Consultoria de visagismo',
        description: 'Transforme seu visual com base nas suas características faciais e estilo pessoal.'
    },
    {
        name: 'Coloração',
        icon: 'fas fa-paint-brush',
        text: 'Coloração e tintura capilar',
        description: 'Renove seu visual com técnicas de coloração modernas e seguras.'
    }
];

const ServicesSection = () => (
    <div id="services" className="text-center">
        <div className="container">
            <div className="section-title">
                <h2>Todos os Serviços</h2>
                <p>Conheça Nossos Serviços</p>
            </div>

            <div className="row">
                {services.map((service, index) => (
                    <div key={`${service.name}-${index}`} className="col-12 col-md-6 col-lg-4 mb-4">
                        <div className="service-item">
                            <i className={`${service.icon} fa-3x mb-3`}></i>

                            <div className="service-desc">
                                <h3>{service.name}</h3>
                                <p>{service.text}</p>
                                <p className="service-description">{service.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
);

export default ServicesSection;
