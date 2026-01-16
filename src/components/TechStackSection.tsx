'use client';

import React, { useState, useEffect } from 'react';

const logos = [
    "https://morna.tech/wp-content/uploads/2024/05/1-1.png",
    "https://morna.tech/wp-content/uploads/2024/05/2.png",
    "https://morna.tech/wp-content/uploads/2024/05/3.png",
    "https://morna.tech/wp-content/uploads/2024/05/4.png",
    "https://morna.tech/wp-content/uploads/2024/05/6.png",
    "https://morna.tech/wp-content/uploads/2024/05/7.png",
    "https://morna.tech/wp-content/uploads/2024/05/8.png",
    "https://morna.tech/wp-content/uploads/2024/11/flutter-logo.png"
];

// Duplicamos el array para el efecto de bucle infinito sin huecos
const extendedLogos = [...logos, ...logos];

export default function TechStackSection() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [visibleItems, setVisibleItems] = useState(7);
    const [transitionEnabled, setTransitionEnabled] = useState(true);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        const handleResize = () => {
            if (window.innerWidth <= 480) setVisibleItems(2);
            else if (window.innerWidth <= 768) setVisibleItems(3);
            else if (window.innerWidth <= 1024) setVisibleItems(4);
            else setVisibleItems(7);
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            handleNext();
        }, 4000);
        return () => clearInterval(interval);
    }, [currentIndex]);

    const handleNext = () => {
        if (currentIndex >= logos.length) {
            // Saltamos al inicio sin animación para el efecto infinito
            setTransitionEnabled(false);
            setCurrentIndex(0);

            // Re-habilitamos la animación en el siguiente frame
            setTimeout(() => {
                setTransitionEnabled(true);
                setCurrentIndex(1);
            }, 50);
        } else {
            setCurrentIndex(prev => prev + 1);
        }
    };

    return (
        <section className="tech-stack-section">
            <h2 className="tech-stack-title">
                Nuestro Stack<br />
                Tecnológico
            </h2>
            <div className="tech-stack-subtitle-container">
                <div className="tech-stack-line"></div>
                <span className="tech-stack-subtitle">Mejora Continua</span>
                <div className="tech-stack-line"></div>
            </div>

            <div className="tech-stack-carousel-container">
                <div
                    className="tech-stack-slider"
                    style={mounted ? {
                        transform: `translateX(-${currentIndex * (100 / visibleItems)}%)`,
                        transition: transitionEnabled ? 'transform 1s cubic-bezier(0.4, 0, 0.2, 1)' : 'none'
                    } : {}}
                >
                    {extendedLogos.map((logo, index) => (
                        <div key={index} className="tech-logo-item">
                            <img
                                src={logo}
                                alt={`Tech ${index % logos.length}`}
                                className="tech-logo-img"
                                onError={(e) => {
                                    // Fallback si una imagen falla
                                    (e.target as HTMLImageElement).src = "https://morna.tech/wp-content/uploads/2024/05/1-1.png";
                                }}
                            />
                        </div>
                    ))}
                </div>

                <div className="tech-dots">
                    {logos.map((_, i) => (
                        <div
                            key={i}
                            className={`tech-dot ${i === (currentIndex % logos.length) ? 'active' : ''}`}
                            onClick={() => {
                                setTransitionEnabled(true);
                                setCurrentIndex(i);
                            }}
                        ></div>
                    ))}
                </div>
            </div>
        </section>
    );
}
