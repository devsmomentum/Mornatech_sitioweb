'use client';

import React from 'react';
import Link from 'next/link';
import Icon from '@mdi/react';
import { mdiHammer, mdiHeartOutline, mdiMessageOutline, mdiCheckBold } from '@mdi/js';

const beneficios = [
    {
        icon: (
            <svg viewBox="0 0 24 24" fill="white">
                <path d="M12 4V1L8 5l4 4V6c3.31 0 6 2.69 6 6 0 1.01-.25 1.97-.7 2.8l1.46 1.46C19.54 15.03 20 13.57 20 12c0-4.42-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6 0-1.01.25-1.97.7-2.8L5.24 7.74C4.46 8.97 4 10.43 4 12c0 4.42 3.58 8 8 8v3l4-4-4-4v3z" />
            </svg>
        ),
        text: 'Sincronización perfecta',
    },
    {
        icon: (
            <svg viewBox="0 0 24 24" fill="white">
                <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z" />
            </svg>
        ),
        text: 'Análisis detallado',
    },
    {
        icon: <Icon path={mdiHammer} size={2.5} color="white" />,
        text: 'Decisiones estratégicas',
    }
];

const caracteristicas = [
    {
        icon: (
            <svg viewBox="0 0 24 24" fill="white">
                <path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zM4 18V6h16v12H4zm9-1h2v-2h-2v2zm-4 0h2v-2H9v2zm-4 0h2v-2H5v2zm9-4h2v-2h-2v2zm-4 0h2v-2H9v2zm-4 0h2v-2H5v2zM12 8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
            </svg>
        ),
        text: 'bajo costo operativo',
    },
    {
        icon: (
            <svg viewBox="0 0 24 24" fill="white">
                <path d="M12 2C7.58 2 4 3.79 4 6s3.58 4 8 4 8-1.79 8-4-3.58-4-8-4zm0 2c3.31 0 6 1.34 6 2s-2.69 2-6 2-6-1.34-6-2 2.69-2 6-2zM4 9v3c0 2.21 3.58 4 8 4s8-1.79 8-4V9c-1.17 1.25-3.41 2-6 2s-4.83-.75-6-2zm0 5v3c0 2.21 3.58 4 8 4s8-1.79 8-4v-3c-1.17 1.25-3.41 2-6 2s-4.83-.75-6-2z" />
            </svg>
        ),
        text: 'Conexión con CRM ODOO',
    },
    {
        icon: (
            <svg viewBox="0 0 24 24" fill="white">
                {/* Document shape with negative space for speaker and waves */}
                <path fillRule="evenodd" d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zm-1 7V3.5L18.5 9H13zM9 11v6l2-2h2v-2h-2l-2-2zm6 1.5c.8 0 1.5.7 1.5 1.5s-.7 1.5-1.5 1.5v-3zm0-2c2 0 3.5 1.5 3.5 3.5s-1.5 3.5-3.5 3.5v-7z" clipRule="evenodd" />
            </svg>
        ),
        text: 'Procesamiento de audios',
    },
    {
        icon: (
            <svg viewBox="0 0 24 24" fill="white">
                <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z" />
            </svg>
        ),
        text: 'Responde 24/7',
    },
    {
        icon: (
            <svg viewBox="0 0 24 24" fill="white">
                {/* Square Robot Head - Larger and Centered */}
                <rect x="4" y="5" width="16" height="14" rx="3" />
                <rect x="2" y="9" width="2" height="6" rx="1" />
                <rect x="20" y="9" width="2" height="6" rx="1" />
                <rect x="11.5" y="1" width="1" height="4" rx="0.5" />
                {/* Eyes and mouth as holes (using the magenta background color) */}
                <circle cx="8" cy="11" r="1.5" fill="#ff00ff" />
                <circle cx="16" cy="11" r="1.5" fill="#ff00ff" />
                <rect x="7.5" y="15" width="2.5" height="1" fill="#ff00ff" />
                <rect x="10.75" y="15" width="2.5" height="1" fill="#ff00ff" />
                <rect x="14" y="15" width="2.5" height="1" fill="#ff00ff" />
            </svg>
        ),
        text: 'No es un bot',
    },
];

export default function SuperAPISection() {
    return (
        <section className="superapi-section" id="superapi">
            <div className="superapi-container">
                <div className="superapi-banner">
                    {/* Header Part */}
                    <div className="superapi-content-top">
                        <h2 className="superapi-title">La Revolución de la atención al Cliente</h2>
                        <div className="superapi-logo">
                            <img
                                src="https://morna.tech/wp-content/uploads/2025/01/Recurso-1desliza.png"
                                alt="SuperAPI Logo"
                                className="superapi-logo-img"
                            />
                        </div>
                        <p className="superapi-description">
                            SuperAPI mejora la atención al cliente en WhatsApp con inteligencia artificial ofreciendo interacciones
                            fluidas que elevan la experiencia del usuario y aseguran el éxito empresarial.
                        </p>
                    </div>

                    {/* Features Part */}
                    <div className="superapi-features">
                        <h3 className="caracteristicas-title">Caracteristicas Claves</h3>
                        <div className="caracteristicas-grid">
                            {caracteristicas.map((item, index) => (
                                <div key={index} className="caracteristica-card">
                                    <div className="caracteristica-icon">
                                        {item.icon}
                                    </div>
                                    <p className="caracteristica-text">{item.text}</p>
                                </div>
                            ))}
                        </div>
                        <div className="ver-mas-container">
                            <button className="ver-mas-btn">Ver más</button>
                        </div>
                        <div className="caracteristicas-divider"></div>
                    </div>

                    {/* Odoo Part */}
                    <div className="superapi-odoo">
                        <div className="odoo-recurso-container">
                            <img
                                src="https://morna.tech/wp-content/uploads/2025/01/Recurso-25desliza.png"
                                alt="Integración Odoo"
                                className="odoo-recurso-img"
                            />
                        </div>
                        <p className="odoo-description">
                            Optimiza tus procesos empresariales con la integración de Odoo y<br />
                            nuestra SuperAPI. Mejora la gestión de recursos y la conexión con tus<br />
                            clientes.
                        </p>
                    </div>

                    {/* Beneficios Section */}
                    <div className="superapi-beneficios">
                        <h3 className="beneficios-title">Beneficios</h3>
                        <div className="beneficios-grid">
                            {beneficios.map((item, index) => (
                                <div key={index} className="caracteristica-card">
                                    <div className="caracteristica-icon">
                                        {item.icon}
                                    </div>
                                    <p className="caracteristica-text">{item.text}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* ERP Solutions Section */}
                    <div className="erp-solutions-banner">
                        <h3 className="erp-solutions-title">Soluciones ERP para impulsar tu negocio.</h3>
                        <div className="erp-btn-container">
                            <Link href="/planes-odoo" className="erp-btn">VER PLANES ODOO</Link>
                        </div>
                    </div>

                    <div className="section-bottom-divider"></div>

                    {/* IA Extras Titles Section */}
                    <div className="ia-extras-section">
                        {/* Eventos con IA Title/Desc Column */}
                        <div className="ia-extra-card">
                            <h2 className="ia-extra-title">Eventos con IA</h2>
                            <p className="ia-extra-description">
                                Eventos memorables con tecnología y experiencia. Nuestra SuperAPI garantizará interacciones efectivas y recopilación de datos para futuras estrategias.
                            </p>
                        </div>

                        {/* Espacios con IA Title/Desc Column */}
                        <div className="ia-extra-card">
                            <h2 className="ia-extra-title">Espacios con IA</h2>
                            <p className="ia-extra-description">
                                Diseñamos espacios que fomentan la colaboración y creatividad. Equipados con tecnología avanzada, nuestros espacios impulsan la productividad.
                            </p>
                        </div>
                    </div>

                    {/* Interactive Comparison Sliders */}
                    <div className="ia-comparisons-grid">
                        <SliderComponent
                            img1="https://morna.tech/wp-content/uploads/2024/11/2.png"
                            img2="https://morna.tech/wp-content/uploads/2024/11/1.png"
                        />
                        <SliderComponent
                            img1="https://morna.tech/wp-content/uploads/2024/11/7.png"
                            img2="https://morna.tech/wp-content/uploads/2024/11/6.png"
                        />
                    </div>

                    {/* IA Extras Benefits Section - Now Below Images */}
                    <div className="ia-extras-section" style={{ marginTop: '0' }}>
                        <div className="ia-extra-card">
                            <div className="ia-extra-sub-beneficios">
                                <h3 className="ia-sub-title">Beneficios</h3>
                                <ul className="ia-beneficio-list">
                                    <li className="ia-beneficio-item">
                                        <div className="ia-check-icon"><Icon path={mdiCheckBold} size={0.7} /></div>
                                        Experiencias personalizadas.
                                    </li>
                                    <li className="ia-beneficio-item">
                                        <div className="ia-check-icon"><Icon path={mdiCheckBold} size={0.7} /></div>
                                        Interacción en tiempo real.
                                    </li>
                                </ul>
                                <button className="ia-ver-mas-btn">VER MÁS</button>
                            </div>
                        </div>

                        <div className="ia-extra-card">
                            <div className="ia-extra-sub-beneficios">
                                <h3 className="ia-sub-title">Beneficios</h3>
                                <ul className="ia-beneficio-list">
                                    <li className="ia-beneficio-item">
                                        <div className="ia-check-icon"><Icon path={mdiCheckBold} size={0.7} /></div>
                                        Ambientes productivos.
                                    </li>
                                    <li className="ia-beneficio-item">
                                        <div className="ia-check-icon"><Icon path={mdiCheckBold} size={0.7} /></div>
                                        Tecnología para la colaboración.
                                    </li>
                                </ul>
                                <button className="ia-ver-mas-btn">VER MÁS</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

interface SliderProps {
    img1: string;
    img2: string;
}

function SliderComponent({ img1, img2 }: SliderProps) {
    const containerRef = React.useRef<HTMLDivElement>(null);
    const [mounted, setMounted] = React.useState(false);
    const [isDragging, setIsDragging] = React.useState(false);

    React.useEffect(() => {
        setMounted(true);

        const handleGlobalMouseUp = () => setIsDragging(false);
        window.addEventListener('mouseup', handleGlobalMouseUp);
        window.addEventListener('touchend', handleGlobalMouseUp);

        return () => {
            window.removeEventListener('mouseup', handleGlobalMouseUp);
            window.removeEventListener('touchend', handleGlobalMouseUp);
        };
    }, []);

    const updatePos = (clientX: number) => {
        const container = containerRef.current;
        if (!container) return;
        const rect = container.getBoundingClientRect();
        const x = Math.max(0, Math.min(100, ((clientX - rect.left) / rect.width) * 100));
        container.style.setProperty('--slider-pos', `${x}%`);
    };

    if (!mounted) return <div className="ia-comparison-container"></div>;

    return (
        <div
            ref={containerRef}
            className="ia-comparison-container"
            onMouseDown={(e) => {
                setIsDragging(true);
                updatePos(e.clientX);
            }}
            onMouseMove={(e) => {
                if (isDragging) updatePos(e.clientX);
            }}
            onTouchStart={(e) => {
                setIsDragging(true);
                updatePos(e.touches[0].clientX);
            }}
            onTouchMove={(e) => {
                if (isDragging) updatePos(e.touches[0].clientX);
            }}
            style={{ '--slider-pos': '50%', userSelect: 'none' } as any}
        >
            <img src={img1} alt="Before" className="ia-comparison-image" style={{ zIndex: 1 }} />
            <div className="ia-comparison-overlay">
                <img src={img2} alt="After" className="ia-comparison-image" />
            </div>
            <div className="ia-comparison-slider">
                <div className="ia-comparison-handle">
                    <Icon path={mdiHeartOutline} size={1} />
                    <Icon path={mdiMessageOutline} size={1} />
                </div>
            </div>
        </div>
    );
}
