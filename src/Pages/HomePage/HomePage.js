import React from 'react';

import Header from '../../Components/Header/Header';
import HeroSection from '../../Components/HeroSection/HeroSection';
import CarouselComponent from '../../Components/CarouselComponent/CarouselComponent';
import PhotoGallery from '../../Components/PhotoGallery/PhotoGallery';
import Scheduling from '../../Components/Scheduling/Scheduling';

import About from '../../Components/About/About';
import ServicesSection from '../../Components/ServicesSection/ServicesSection';
import Footer from '../../Components/Footer/Footer';
import './HomePage.css'; // Importe o CSS para estilos adicionais

const HomePage = () => {
    return (
        <div>
            <section id="home">
                <Header />
                <HeroSection />
                <CarouselComponent />
                <ServicesSection />
                <PhotoGallery />

            </section>

            <section id="about">
                <About />
            </section>

            <section id='scheduling'>
                <Scheduling />
            </section>

            <section id="ServicesSection">

            </section>

            <section id="footer">
                <Footer />
            </section>
        </div>
    );
};

export default HomePage;
