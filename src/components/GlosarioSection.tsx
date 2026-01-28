'use client';

import React, { useState } from 'react';

const modules = [
    { title: "Compras", desc: "Gestiona pedidos, automatiza adquisiciones y controla proveedores de manera eficiente.", icon: "fas fa-shopping-cart" },
    { title: "Ventas", desc: "Administra oportunidades, cotizaciones, pedidos y facturación en un solo lugar.", icon: "fas fa-chart-line" },
    { title: "Difusión", desc: "Envía mensajes masivos por WhatsApp para campañas de marketing impactantes.", icon: "fas fa-bullhorn" },
    { title: "Inventario", desc: "Controla stock, movimientos de almacén, entregas y recepciones en tiempo real.", icon: "fas fa-boxes" },
    { title: "Facturación", desc: "Genera facturas, pagos, ingresos y egresos contables automáticamente.", icon: "fas fa-file-invoice-dollar" },
    { title: "Contactos", desc: "Base de datos de clientes y proveedores integrada y sincronizada con WhatsApp.", icon: "fas fa-address-book" },
    { title: "Contabilidad", desc: "Maneja asientos contables, informes financieros y conciliaciones bancarias.", icon: "fas fa-calculator" },
    { title: "POS (Punto de Venta)", desc: "Gestión de ventas ágil para tiendas físicas, restaurantes y comercios.", icon: "fas fa-cash-register" },
    { title: "Módulo de Chat Pendientes", desc: "Visualiza chats por orden de llegada con respuestas rápidas y organizadas.", icon: "fas fa-comments" },
    { title: "Empleados", desc: "Centraliza contratos, ausencias y toda la información de recursos humanos.", icon: "fas fa-users" },
    { title: "Nómina", desc: "Automatiza el cálculo de salarios, deducciones e impuestos de tu equipo.", icon: "fas fa-money-check-alt" },
    { title: "Módulo de Conversación", desc: "Interfaz unificada para ver todas las conversaciones y generar KPIs de atención.", icon: "fas fa-comments-dollar" },
    { title: "Mensajes Literales con Archivos", desc: "Envía contenido multimedia y documentos PDF a tus usuarios al instante.", icon: "fas fa-file-upload" },
    { title: "Súper API", desc: "IA avanzada que responde chats y asesora sobre tus productos 24/7.", icon: "fas fa-robot" },
    { title: "CRM Extracción de Datos", desc: "Extrae inteligencia de los chats para enriquecer automáticamente los perfiles.", icon: "fas fa-database" }
];

export default function GlosarioSection() {
    const [activeIdx, setActiveIdx] = useState(0);

    return (
        <div className="glosario-section" id="glosario-ia">
            {/* Injecting Font Awesome for icons if not already present globally */}
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />

            <style>{`
        #glosario-ia {
            background: #2B1A40; /* Fondo Morado Original */
            padding: 0; 
            margin-top: -140px; /* Elevación agresiva para subir el cuadro al máximo */
            margin-bottom: 0;
            font-family: 'Outfit', sans-serif;
            position: relative;
            overflow: hidden;
            color: white;
            z-index: 10;
        }

        /* Partner Footer Styles */
        .glosario-partner-footer {
            max-width: 1200px;
            margin: 120px auto 150px; /* Aumentado a 150px para mucho más aire antes del footer */
            padding: 0 40px;
            position: relative;
            z-index: 2;
        }

        .header-line {
            width: 100%;
            height: 2px;
            background-color: white;
            margin-bottom: 50px;
        }

        .partner-footer-content {
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex-wrap: wrap;
            gap: 40px;
        }

        .partner-text {
            font-size: 3.5rem; /* Ajuste a un tamaño grande pero equilibrado */
            font-weight: 900;
            text-transform: uppercase;
            letter-spacing: -1px;
            margin: 0;
            color: white;
            line-height: 1;
            flex: 1;
        }

        .partner-logo-wrapper {
            flex: 1;
            display: flex;
            justify-content: flex-end;
            max-width: 450px;
        }

        .partner-logo-img {
            width: 100%;
            height: auto;
            display: block;
        }

        @media (max-width: 768px) {
            .glosario-partner-footer {
                margin: 50px auto 60px; /* Reducido de 120px/150px */
                padding: 0 20px;
            }
            .partner-footer-content {
                flex-direction: column;
                text-align: center;
            }
            .partner-logo-wrapper {
                justify-content: center;
            }
            .partner-text {
                font-size: 2.2rem;
            }
        }

        /* Background Gloss Effect */
        #glosario-ia::before {
            content: '';
            position: absolute;
            top: -100px;
            right: -100px;
            width: 600px;
            height: 600px;
            background: radial-gradient(circle, rgba(240, 78, 138, 0.15) 0%, transparent 70%);
            border-radius: 50%;
            pointer-events: none;
        }

        .glosario-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 40px;
          display: grid;
          grid-template-columns: 35% 60%;
          gap: 5%;
          align-items: start;
        }

        /* Responsive Breakpoints */
        @media (max-width: 1024px) {
            .partner-logo-wrapper {
                max-width: 280px; /* Restaurado a un tamaño visible */
                margin: 0 auto;
            }
            .partner-logo-img {
                max-width: 100%; /* Permitir que ocupe el ancho del wrapper */
            }
            .glosario-container {
                padding: 0 20px;
                gap: 30px;
            }
            .partner-text {
                font-size: 2.8rem;
            }
        }

        @media (max-width: 968px) {
            .glosario-container {
                grid-template-columns: 1fr;
                gap: 40px;
            }
            .spotlight-wrapper {
                position: relative; /* Remove sticky on mobile for better flow */
                top: 0;
                margin-bottom: 30px; /* Reducido de 60px */
            }
            .spotlight-card {
                padding: 30px 20px;
            }
            .modules-list-wrapper h2 {
                text-align: center;
                font-size: 2rem;
                margin-top: 30px; /* Bajar el título en móviles */
            }
            .modules-list-wrapper p {
                text-align: center;
            }
        }

        /* --- LEFT SIDE: SPOTLIGHT CARD (STICKY) --- */
        .spotlight-wrapper {
            position: sticky;
            top: 100px; /* Sticky scroll effect */
            z-index: 5;
        }

        .spotlight-card {
            background: #ffffff; /* Tarjeta Grande SIEMPRE Blanca */
            border-radius: 30px;
            padding: 40px;
            text-align: center;
            box-shadow: 0 20px 50px rgba(0,0,0,0.3), 0 0 15px rgba(240, 78, 138, 0.2);
            transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
            position: relative;
            overflow: hidden;
            color: #2b1a40; /* Texto oscuro para fondo blanco */
            border: 1px solid rgba(240, 78, 138, 0.1);
            min-height: 400px; /* Consistencia de altura */
            display: flex;
            flex-direction: column;
            justify-content: center;
        }

        @media (max-width: 480px) {
            .spotlight-card {
                min-height: auto;
                padding: 30px 15px;
            }
            .spotlight-icon {
                font-size: 2rem; /* Reducido drásticamente de 3rem */
            }
            .spotlight-title {
                font-size: 1.8rem;
            }
        }

        .spotlight-card::after {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 5px;
            background: linear-gradient(90deg, #ff00ff, #00ffff);
        }

        .spotlight-icon-circles {
            position: relative;
            width: 120px;
            height: 120px;
            margin: 0 auto 30px;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        @media (max-width: 480px) {
            .spotlight-icon-circles {
                width: 60px; /* Reducido drásticamente de 90px */
                height: 60px;
                margin-bottom: 15px;
            }
        }

        .circle-pulse {
            position: absolute;
            width: 100%;
            height: 100%;
            background: rgba(240, 78, 138, 0.1);
            border-radius: 50%;
            animation: pulse-ring 2s infinite;
        }

        .spotlight-icon {
            font-size: 4rem;
            color: #f04e8a; /* Icono Rosa */
            position: relative;
            z-index: 2;
        }

        .spotlight-title {
            font-size: 2.2rem;
            color: #2b1a40; /* Título oscuro */
            margin-bottom: 15px;
            font-weight: 800;
        }

        .spotlight-desc {
            font-size: 1.1rem;
            color: #4b5563; /* Descripción gris oscuro */
            line-height: 1.6;
        }

        /* --- RIGHT SIDE: MODULE GRID --- */
        .modules-list-wrapper h2 {
            font-size: 2.5rem;
            color: white; /* Título de sección blanco (fondo morado) */
            margin-top: 60px; /* Aumentado para bajar el título notablemente */
            margin-bottom: 20px;
            font-weight: 900;
        }

        .modules-list-wrapper p {
            color: #e5e7eb; /* Texto claro */
            margin-bottom: 40px;
            font-size: 1.1rem;
        }

        .modules-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 15px;
        }

        @media (max-width: 1200px) {
            .modules-grid {
                grid-template-columns: repeat(2, 1fr);
            }
        }

        @media (max-width: 640px) {
            .modules-grid {
                grid-template-columns: repeat(2, 1fr);
                gap: 10px;
            }
            .module-btn {
                height: 100px;
                padding: 10px;
            }
            .module-btn i {
                font-size: 1.5rem;
            }
            .module-btn span {
                font-size: 0.8rem;
            }
        }
        
        @media (max-width: 380px) {
            .modules-grid {
                grid-template-columns: 1fr;
            }
        }

        /* --- MODULE BUTTONS STYLE --- */
        .module-btn {
            background: #ffffff; /* Tarjetas Blancas por defecto */
            border: none;
            border-radius: 16px;
            padding: 20px 15px;
            cursor: pointer;
            transition: all 0.3s ease;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            text-align: center;
            height: 110px;
            gap: 10px;
            box-shadow: 0 4px 6px rgba(0,0,0,0.1);
        }

        /* Hover & Active State: Pink Background */
        .module-btn:hover, .module-btn.active {
            background: #f04e8a; /* Rosa al pasar el mouse o activo */
            transform: translateY(-5px);
            box-shadow: 0 10px 20px rgba(240, 78, 138, 0.4);
        }

        .module-btn i {
            font-size: 1.8rem;
            color: #2b1a40; /* Icono oscuro por defecto */
            transition: color 0.3s;
        }
        
        /* Icono blanco al pasar el mouse */
        .module-btn:hover i, .module-btn.active i {
            color: #ffffff; 
        }

        .module-btn span {
            font-size: 0.9rem;
            font-weight: 800;
            color: #2b1a40; /* Texto oscuro por defecto */
            line-height: 1.2;
            transition: color 0.3s;
        }

        /* Texto blanco al pasar el mouse */
        .module-btn:hover span, .module-btn.active span {
            color: #ffffff;
        }

        @keyframes pulse-ring {
            0% { transform: scale(0.8); opacity: 0.5; }
            100% { transform: scale(1.5); opacity: 0; }
        }

        /* Animation */
        .fade-in {
            animation: fadeIn 0.25s ease-out; /* Más rápido y reactivo */
        }

        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(8px); }
            to { opacity: 1; transform: translateY(0); }
        }
      `}</style>

            <div className="glosario-container">
                {/* LEFT COLUMN - Sticky Spotlight */}
                <div className="spotlight-wrapper">
                    <div className="spotlight-card">
                        <div key={activeIdx} className="fade-in">
                            <div className="spotlight-icon-circles">
                                <div className="circle-pulse"></div>
                                <i className={`spotlight-icon ${modules[activeIdx].icon}`}></i>
                            </div>
                            <h3 className="spotlight-title">{modules[activeIdx].title}</h3>
                            <p className="spotlight-desc">{modules[activeIdx].desc}</p>
                        </div>
                    </div>
                </div>

                {/* RIGHT COLUMN - List */}
                <div className="modules-list-wrapper">
                    <h2>Glosario de Módulos con IA</h2>
                    <p>Selecciona un módulo para ver detalles.</p>

                    <div className="modules-grid">
                        {modules.map((mod, i) => (
                            <div
                                key={i}
                                className={`module-btn ${i === activeIdx ? 'active' : ''}`}
                                onPointerEnter={() => setActiveIdx(i)}
                                onClick={() => setActiveIdx(i)}
                                style={{ touchAction: 'manipulation' }}
                            >
                                <i className={mod.icon}></i>
                                <span>{mod.title}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="glosario-partner-footer">
                <div className="header-line"></div>
                <div className="partner-footer-content">
                    <h1 className="partner-text">PARTNER OFICIAL</h1>
                    <div className="partner-logo-wrapper">
                        <img
                            src="https://morna.tech/wp-content/uploads/2024/09/odoo_ready_partners_rgb.png"
                            alt="Odoo Ready Partner"
                            className="partner-logo-img"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
