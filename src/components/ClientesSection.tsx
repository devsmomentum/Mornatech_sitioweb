'use client';

import React, { useState, useEffect } from 'react';

const clientLogos = [
    "https://morna.tech/wp-content/uploads/2025/02/bi.png",
    "https://morna.tech/wp-content/uploads/2025/02/la-fe.png",
    "https://morna.tech/wp-content/uploads/2025/02/tel-.png",
    "https://morna.tech/wp-content/uploads/2025/02/diresia.png",
    "https://morna.tech/wp-content/uploads/2025/02/bancrecer.png",
    "https://morna.tech/wp-content/uploads/2025/02/Conectium.png",
    "https://morna.tech/wp-content/uploads/2025/02/Contadores.png",
    "https://morna.tech/wp-content/uploads/2025/02/pagodirecto.png",
    "https://morna.tech/wp-content/uploads/2025/02/spidi.png",
    "https://morna.tech/wp-content/uploads/2025/02/Estilo-mendez.png",
    "https://morna.tech/wp-content/uploads/2025/02/jomi.png",
    "https://morna.tech/wp-content/uploads/2025/02/mafer-cafe.png",
    "https://morna.tech/wp-content/uploads/2025/02/pharma.png",
    "https://morna.tech/wp-content/uploads/2025/02/toyteq.png",
    "https://morna.tech/wp-content/uploads/2025/02/viajes.png",
    "https://morna.tech/wp-content/uploads/2025/02/dlm.png",
    "https://morna.tech/wp-content/uploads/2025/02/gastro.png",
    "https://morna.tech/wp-content/uploads/2025/02/ingenio.png",
    "https://morna.tech/wp-content/uploads/2025/02/labranza.png",
    "https://morna.tech/wp-content/uploads/2025/02/musica.png",
    "https://morna.tech/wp-content/uploads/2025/02/senos.png",
    "https://morna.tech/wp-content/uploads/2025/02/wings.png",
    "https://morna.tech/wp-content/uploads/2025/02/zaccaro.png",
    "https://morna.tech/wp-content/uploads/2025/02/bi.png"
];

export default function ClientesSection() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const imagesPerSlide = 6;
    const totalSlides = Math.ceil(clientLogos.length / imagesPerSlide);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % totalSlides);
        }, 5000);
        return () => clearInterval(interval);
    }, [totalSlides]);

    const getSlideItems = (slideIndex: number) => {
        const start = slideIndex * imagesPerSlide;
        return clientLogos.slice(start, start + imagesPerSlide);
    };

    return (
        <section className="clientes-section">
            <div className="clientes-container">
                <div className="clientes-top-divider"></div>
                <h2 className="clientes-title">Clientes</h2>

                <div className="clientes-carousel-wrapper">
                    <div
                        className="clientes-slider"
                        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                    >
                        {Array.from({ length: totalSlides }).map((_, slideIdx) => (
                            <div key={slideIdx} className="cliente-slide">
                                {getSlideItems(slideIdx).map((logo, imgIdx) => (
                                    <div key={imgIdx} className="cliente-card">
                                        <img
                                            src={logo}
                                            alt={`Cliente ${slideIdx * 6 + imgIdx + 1}`}
                                            className="cliente-img"
                                        />
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>

                <div className="clientes-dots">
                    {Array.from({ length: totalSlides }).map((_, i) => (
                        <div
                            key={i}
                            className={`clientes-dot ${i === currentSlide ? 'active' : ''}`}
                            onClick={() => setCurrentSlide(i)}
                        ></div>
                    ))}
                </div>
            </div>
        </section>
    );
}
