import React from 'react';
import { Carousel } from 'react-bootstrap';
import Fundo1 from '../../assets/imagens/Carrosel1.jpeg';
import Fundo2 from '../../assets/imagens/Carrosel2.jpeg';

import './CarouselComponent.css';

const CarouselComponent = () => (
    <Carousel fade className="hero-carousel">
        <Carousel.Item>
            <img
                className="d-block w-100"
                src={Fundo1}
                alt="Primeira imagem"
            />
        </Carousel.Item>

        <Carousel.Item>
            <img
                className="d-block w-100"
                src={Fundo2}
                alt="Segunda imagem"
            />
        </Carousel.Item>


    </Carousel>
);

export default CarouselComponent;
