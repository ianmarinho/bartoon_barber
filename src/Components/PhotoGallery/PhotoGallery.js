import React from 'react';
import './PhotoGallery.css';

// Importe suas imagens
import Photo1 from '../../assets/imagens/Captura de tela 2024-09-09 161334.png';
import Photo2 from '../../assets/imagens/Captura de tela 2024-09-09 161528.png';
import Photo3 from '../../assets/imagens/Captura de tela 2024-09-09 161428.png';
import Photo4 from '../../assets/imagens/Captura de tela 2024-09-09 161443.png';

const PhotoGallery = () => {
    const photos = [
        { src: Photo1, alt: 'Foto 1' },
        { src: Photo2, alt: 'Foto 2' },
        { src: Photo3, alt: 'Foto 3' },
        { src: Photo4, alt: 'Foto 4' }
    ];

    return (
        <div className="container gallery-container">
            <div className="section-title">
                <h2>Conheça Alguns de Nossos Cortes.</h2>
            </div>

            <div className="row">
                {photos.map((photo, index) => (
                    <div key={index} className="col-md-3 col-sm-6 mb-4">
                        <img src={photo.src} alt={photo.alt} className="gallery-img" />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PhotoGallery;
