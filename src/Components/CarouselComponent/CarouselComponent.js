import React from 'react';
import { Carousel } from 'react-bootstrap';
import Fundo1 from '../../assets/imagens/carrosel1.jpg';
import Fundo2 from '../../assets/imagens/carrosel2.jpg';
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
