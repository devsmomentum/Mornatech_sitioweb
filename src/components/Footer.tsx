'use client';

import Image from 'next/image';

export default function Footer() {

    return (
        <footer className="contact-footer">
            <div className="contact-footer-container">
                {/* Logo y Redes Sociales */}
                <div className="contact-footer-logo-section">
                    <div className="footer-logo-wrapper">
                        <Image
                            src="/images/logo-sticky.webp"
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
                        <a href="https://www.instagram.com/morna.tech?igsh=anBlcmRmaWM5Ym9o" target="_blank" rel="noopener noreferrer" className="social-icon">
                            <i className="fab fa-instagram"></i>
                        </a>
                        <a href="https://youtube.com/@mornaelpodcast?si=2zjbtUZrEz9_uLhf" target="_blank" rel="noopener noreferrer" className="social-icon">
                            <i className="fab fa-youtube"></i>
                        </a>
                    </div>
                </div>

                {/* Formulario de Contacto */}
                <div className="contact-footer-form-section">
                    <h2 className="contact-footer-title">Contáctanos</h2>
                    <form
                        className="contact-footer-form"
                        onSubmit={(e) => {
                            e.preventDefault();
                            const form = e.target as HTMLFormElement;
                            const nombre = (form.elements[0] as HTMLInputElement).value;
                            const email = (form.elements[1] as HTMLInputElement).value;
                            const asunto = (form.elements[2] as HTMLInputElement).value;
                            const mensaje = (form.elements[3] as HTMLTextAreaElement).value;

                            const body = `Nombre: ${nombre}%0D%0ACorreo: ${email}%0D%0AMensaje: ${mensaje}`;
                            window.location.href = `mailto:ventas@morna.tech?subject=${encodeURIComponent(asunto)}&body=${body}`;
                        }}
                    >
                        <input
                            type="text"
                            placeholder="Nombre"
                            className="contact-input"
                            required
                            suppressHydrationWarning
                        />
                        <input
                            type="email"
                            placeholder="Correo Electrónico"
                            className="contact-input"
                            required
                            suppressHydrationWarning
                        />
                        <input
                            type="text"
                            placeholder="Asunto"
                            className="contact-input"
                            required
                            suppressHydrationWarning
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
                        <a
                            href="https://www.google.com/maps?q=10.49526,-66.83303+(Centro+Comercial+Millennium)&z=17"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ display: 'block', position: 'relative' }}
                        >
                            <iframe
                                src="https://maps.google.com/maps?q=10.49526,-66.83303&hl=es&z=17&output=embed"
                                width="100%"
                                height="180"
                                style={{ border: 0, borderRadius: '8px', pointerEvents: 'none' }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </a>
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
