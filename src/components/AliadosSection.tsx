'use client';

import React from 'react';
import Image from 'next/image';

const aliados = [
    {
        name: 'Fondonorma',
        src: 'https://morna.tech/wp-content/uploads/2025/02/fondonorma.png'
    },
    {
        name: 'Odoo',
        src: 'https://morna.tech/wp-content/uploads/2025/02/odoo.png'
    },
    {
        name: 'Sunmi',
        src: 'https://morna.tech/wp-content/uploads/2025/02/sunmi.png'
    }
];

export default function AliadosSection() {
    return (
        <section className="aliados-section">
            <div className="aliados-container">
                <div className="aliados-divider"></div>
                <h2 className="aliados-title">Aliados</h2>
                <div className="aliados-grid">
                    {aliados.map((aliado, index) => (
                        <div key={index} className="aliado-item">
                            <Image
                                src={aliado.src}
                                alt={aliado.name}
                                className="aliado-img"
                                width={180}
                                height={80}
                                loading="lazy"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
