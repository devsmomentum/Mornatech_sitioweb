'use client';

import Image from 'next/image';
import { useEffect } from 'react';

export default function Footer() {
    useEffect(() => {
        // Cargar Font Awesome solo en el cliente
        if (!document.querySelector('link[href*="font-awesome"]')) {
            const link = document.createElement('link');
            link.rel = 'stylesheet';
            link.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css';
            link.integrity = 'sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA==';
            link.crossOrigin = 'anonymous';
            link.referrerPolicy = 'no-referrer';
            document.head.appendChild(link);
        }
    }, []);

    return (
        <footer className="contact-footer">
            <div className="contact-footer-container">
                {/* Logo y Redes Sociales */}
                <div className="contact-footer-logo-section">
                    <div className="footer-logo-wrapper">
                        <Image
                            src="https://morna.tech/wp-content/uploads/2024/04/logo-sticky.png"
                            alt="Morna Tech Logo"
                            width={160}
                            height={60}
                            className="footer-contact-logo"
                        />
                    </div>
                    <div className="footer-social-icons">
                        <a href="https://wa.me/584241222233" target="_blank" rel="noopener noreferrer" className="social-icon">
                            <i className="fab fa-whatsapp"></i>
                        </a>
                        <a href="https://www.instagram.com/mornatech/" target="_blank" rel="noopener noreferrer" className="social-icon">
                            <i className="fab fa-instagram"></i>
                        </a>
                        <a href="https://www.youtube.com/@mornatech" target="_blank" rel="noopener noreferrer" className="social-icon">
                            <i className="fab fa-youtube"></i>
                        </a>
                    </div>
                </div>

                {/* Formulario de Contacto */}
                <div className="contact-footer-form-section">
                    <h2 className="contact-footer-title">Contáctanos</h2>
                    <form className="contact-footer-form">
                        <input
                            type="text"
                            placeholder="Nombre"
                            className="contact-input"
                            required
                        />
                        <input
                            type="email"
                            placeholder="Correo Electrónico"
                            className="contact-input"
                            required
                        />
                        <input
                            type="text"
                            placeholder="Asunto"
                            className="contact-input"
                            required
                        />
                        <textarea
                            placeholder="Mensaje"
                            className="contact-textarea"
                            rows={5}
                            required
                        ></textarea>
                        <button type="submit" className="contact-submit-btn">
                            Enviar
                        </button>
                    </form>
                </div>

                {/* Ubicación y Mapa */}
                <div className="contact-footer-location-section">
                    <h2 className="contact-footer-title">Ubicación</h2>
                    <div className="location-info">
                        <p><strong>Dirección:</strong> C.C Millenium, torre empresarial, piso 4 oficina 4-01 Miranda- Los dos caminos.</p>
                        <p><strong>Correo:</strong> <a href="mailto:ventas@morna.tech">ventas@morna.tech</a></p>
                        <p><strong>Teléfono:</strong> <a href="tel:+584241222233">+58 424-1222233</a></p>
                    </div>
                    <div className="location-map">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3922.7837469238254!2d-66.85466708514605!3d10.48850016686168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8c2a58f3e0000001%3A0x1234567890abcdef!2sC.C.%20Millennium!5e0!3m2!1ses!2sve!4v1234567890123!5m2!1ses!2sve"
                            width="100%"
                            height="180"
                            style={{ border: 0, borderRadius: '8px' }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>
            </div>

            {/* Copyright/Bottom Text */}
            <div className="footer-copyright">
                <p>&copy; 2024 Morna Tech. Todos los derechos reservados.</p>
            </div>
        </footer>
    );
}
