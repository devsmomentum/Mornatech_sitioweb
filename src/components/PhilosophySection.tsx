'use client';

import React from 'react';

export default function PhilosophySection() {
    return (
        <section className="philosophy-section">
            <div className="philosophy-container">
                <div className="philosophy-content">
                    <div className="philosophy-left">
                        <h2 className="philosophy-title">
                            Nuestra<br />
                            Filosofía
                        </h2>
                    </div>
                    <div className="philosophy-right">
                        <div className="philosophy-item">
                            <p>
                                <strong>Sentido de Pertenencia:</strong> Cada proyecto cuenta con nuestro total compromiso. Nos consideramos parte de tu equipo y trabajamos mano a mano para que tus objetivos se conviertan en una realidad.
                            </p>
                        </div>
                        <div className="philosophy-item">
                            <p>
                                <strong>Innovación continua:</strong> Siempre estamos actualizando nuestras tecnologías para brindar las mejores soluciones a nuestros clientes.
                            </p>
                        </div>
                        <div className="philosophy-item">
                            <p>
                                <strong>Enfoque en el cliente:</strong> Nos aseguramos de entender las necesidades únicas de cada cliente para ofrecer soluciones personalizadas.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
