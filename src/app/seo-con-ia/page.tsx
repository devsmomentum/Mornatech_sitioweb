'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

import { useState, useEffect } from 'react';

export default function SEOConIAPage() {
    const [mounted, setMounted] = useState(false);
    useEffect(() => {
        setMounted(true);

        // Accordion logic
        if (mounted) {
            const acc = document.getElementsByClassName("accordion-header");
            const handleClick = function (this: HTMLElement) {
                this.classList.toggle("active");
                const panel = this.nextElementSibling as HTMLElement;
                if (panel) {
                    if (panel.style.maxHeight) {
                        panel.style.maxHeight = "";
                    } else {
                        panel.style.maxHeight = panel.scrollHeight + "px";
                    }
                }
            };

            for (let i = 0; i < acc.length; i++) {
                acc[i].addEventListener("click", handleClick);
            }

            return () => {
                for (let i = 0; i < acc.length; i++) {
                    acc[i].removeEventListener("click", handleClick);
                }
            };
        }
    }, [mounted]);

    if (!mounted) {
        return (
            <>
                <Navbar />
                <div style={{ minHeight: '100vh', background: '#F5F5DC' }}></div>
                <Footer />
                <WhatsAppButton />
            </>
        );
    }

    return (
        <>
            <Navbar />
            <div suppressHydrationWarning dangerouslySetInnerHTML={{
                __html: `
<style>
    /* --- ESTILOS GENERALES --- */
    .seo-page :root {
        --primary-color: #2b1a40;
        --accent-color: #01A17F;
        --pink-title: #E3467E;
        --divider-color: #f04e8a;
        --card-front-bg: #f04e8a;
        --text-color: #404040;
        --bg-light: #f9f9f9;
        --bg-beige: #F5F5DC;
        --white: #ffffff;
        --black: #000000;
    }

    .seo-page {
        font-family: 'Exo 2', sans-serif;
        color: #404040;
        line-height: 1.6;
    }

    .seo-page h1, 
    .seo-page h2, 
    .seo-page h3, 
    .seo-page h4 {
        font-weight: 700;
        margin-bottom: 1rem;
    }
    
    .seo-page h1, 
    .seo-page h2 { color: #2b1a40; }

    .seo-page a { text-decoration: none; color: inherit; }
    
    .seo-page .container {
        max-width: 1170px;
        margin: 0 auto;
        padding: 0 20px;
    }

    /* --- HERO SECTION --- */
    .seo-page .hero {
        padding: 80px 0;
        background-color: #F5F5DC;
        display: flex;
        align-items: center;
    }
    .seo-page .hero .container {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 50px;
        align-items: center;
    }
    .seo-page .hero h1 { font-size: 3rem; line-height: 1.2; }
    .seo-page .hero p { font-size: 1.1rem; margin-bottom: 20px; }
    .seo-page .hero-img img { width: 100%; border-radius: 10px; }

    /* --- GRID FLIP CARDS --- */
    .seo-page .features { padding: 80px 0; background: #F5F5DC; }
    .seo-page .features h2 { text-align: center; font-size: 2.5rem; margin-bottom: 50px; }
    
    .seo-page .grid-4 {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 20px;
        max-width: 900px;
        margin: 0 auto;
    }

    .seo-page .card { background-color: transparent; height: 200px; perspective: 1000px; }
    .seo-page .card-inner {
        position: relative; width: 100%; height: 100%; text-align: center;
        transition: transform 0.6s; transform-style: preserve-3d;
        border-radius: 15px; box-shadow: 0 4px 8px rgba(0,0,0,0.1);
    }
    .seo-page .card:hover .card-inner { transform: rotateY(180deg); }
    .seo-page .card-front, 
    .seo-page .card-back {
        position: absolute; width: 100%; height: 100%;
        -webkit-backface-visibility: hidden; backface-visibility: hidden;
        border-radius: 15px; display: flex; flex-direction: column;
        align-items: center; justify-content: center; padding: 15px; box-sizing: border-box;
    }
    .seo-page .card-front { background-color: #f04e8a; color: white; }
    .seo-page .card-front i { color: white; margin-bottom: 10px; }
    .seo-page .card-front h3 { font-size: 1.4rem; color: white; margin: 5px 0 0 0; line-height: 1.2; }
    .seo-page .card-back { background-color: #2b1a40; color: white; transform: rotateY(180deg); }
    .seo-page .card-back p { font-size: 0.95rem; line-height: 1.4; margin: 0; }

    /* --- CÓMO FUNCIONA --- */
    .seo-page .how-it-works { padding: 80px 0; background: #F5F5DC; }
    .seo-page .how-it-works .container {
        display: grid; grid-template-columns: 1fr 1fr; gap: 50px; align-items: flex-start;
    }
    .seo-page .accordion-item { margin-bottom: 10px; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 5px rgba(0,0,0,0.05); }
    .seo-page .accordion-header {
        background-color: #2b1a40; color: white; cursor: pointer; padding: 18px; width: 100%; border: none; text-align: left; outline: none; font-size: 1.1rem; font-weight: 700; display: flex; justify-content: space-between; align-items: center; transition: background-color 0.3s; font-family: 'Exo 2', sans-serif;
    }
    .seo-page .accordion-header:hover { background-color: #3d255a; }
    .seo-page .accordion-header .icon { font-size: 1.5rem; transition: transform 0.3s ease; }
    .seo-page .accordion-header.active .icon { transform: rotate(45deg); color: #01A17F; }
    .seo-page .accordion-content {
        padding: 0 18px; background-color: white; max-height: 0; overflow: hidden; transition: max-height 0.3s ease-out; border: 1px solid #ddd; border-top: none; border-bottom-left-radius: 8px; border-bottom-right-radius: 8px;
    }
    .seo-page .accordion-content p { margin: 15px 0; color: #404040; }

    /* --- ELEMENTOS COMUNES --- */
    .seo-page .divider-line {
        width: 80%; 
        height: 4px; 
        background-color: var(--divider-color);
        margin: 0 auto 40px auto; 
        border-radius: 2px;
    }

    /* --- SECCIÓN IMPULSA --- */
    .seo-page .impulsa-section {
        padding: 80px 0;
        background-color: #F5F5DC;
        text-align: center;
    }
    .seo-page .impulsa-section h2 { font-size: 3rem; line-height: 1.2; margin-bottom: 30px; max-width: 900px; margin-left: auto; margin-right: auto; }
    .seo-page .impulsa-section p { font-size: 1.1rem; max-width: 800px; margin: 0 auto; }

    /* --- BENEFICIOS --- */
    .seo-page .benefits { padding: 80px 0; background-color: #F5F5DC; }
    .seo-page .benefits .container { display: grid; grid-template-columns: 1fr 1fr; gap: 50px; align-items: center; }
    .seo-page .benefits img { width: 100%; height: auto; border-radius: 15px; object-fit: cover; }
    .seo-page .benefit-text { padding: 20px 0; }
    .seo-page .benefit-text h2 { font-size: 2.5rem; margin-bottom: 30px; }
    .seo-page .benefit-item { margin-bottom: 25px; }
    .seo-page .benefit-item strong { display: block; font-size: 1.2rem; color: #2b1a40; margin-bottom: 5px; }

    /* --- CARACTERÍSTICAS DEL SERVICIO --- */
    .seo-page .features-list { 
        padding: 80px 0; 
        background-color: #F5F5DC;
    }
    .seo-page .features-list h2 { 
        text-align: center; 
        font-size: 2.5rem; 
        margin-bottom: 50px;
        font-weight: 900; 
        color: #2b1a40;
    }
    
    .seo-page .features-wrapper {
        background-color: #ffffff;
        border-radius: 20px;
        padding: 40px;
        display: flex;
        justify-content: space-between;
        gap: 20px;
        box-shadow: 0 10px 30px rgba(0,0,0,0.05);
    }

    .seo-page .feature-strip {
        flex: 1;
        padding: 10px;
        text-align: left;
    }

    .seo-page .feature-strip h4 { 
        color: #E3467E;
        margin-bottom: 15px; 
        font-size: 1.5rem; 
        line-height: 1.2;
        font-weight: 900;
    }
    
    .seo-page .feature-strip p { 
        margin: 0; 
        font-size: 1rem; 
        color: #2b1a40; 
        font-weight: 600;
    }

    /* --- CTA FINAL --- */
    .seo-page .cta-section { text-align: center; padding: 80px 0; background: #F5F5DC; }
    .seo-page .btn {
        display: inline-block; 
        background: #01A17F; 
        color: white; 
        padding: 20px 70px;
        border-radius: 60px; 
        font-weight: bold; 
        font-size: 1.5rem; 
        margin-top: 30px; 
        transition: transform 0.3s ease, background 0.3s ease;
    }
    .seo-page .btn:hover { 
        background: #018a6c; 
        transform: scale(0.95);
    }
    .seo-page .btn i {
        margin-right: 10px;
    }

    /* --- MOBILE --- */
    @media (max-width: 768px) {
        .seo-page .hero .container, 
        .seo-page .how-it-works .container, 
        .seo-page .benefits .container { grid-template-columns: 1fr; text-align: center; }
        .seo-page .features-wrapper { flex-direction: column; }
        .seo-page .feature-strip { margin-bottom: 30px; text-align: center; }
        .seo-page .hero h1, 
        .seo-page .impulsa-section h2 { font-size: 2.2rem; }
        .seo-page .grid-4 { grid-template-columns: 1fr; max-width: 100%; }
    }
</style>


<main class="seo-page">
    <section class="hero">
        <div class="container">
            <div class="hero-text">
                <h1>¡Potencia tu Visibilidad Online!</h1>
                <p>¿Estás listo para hacer que tu negocio destaque? Con nuestro servicio de SEO con Inteligencia Artificial, mejorarás tu posicionamiento en los motores de búsqueda.</p>
                <p><strong>3 primeras key words GRATIS.</strong></p>
            </div>
            <div class="hero-img">
                <img src="/images/seo-hero.webp" alt="SEO con IA" width="1024" height="1024" fetchpriority="high" decoding="async">
            </div>
        </div>
    </section>

    <section class="features">
        <div class="container">
            <h2>¿Qué Ofrecemos?</h2>
            <div class="grid-4">
                <div class="card"><div class="card-inner"><div class="card-front"><i class="fas fa-envelope-open-text fa-3x"></i><h3>Contenido Personalizado</h3></div><div class="card-back"><p>Creamos experiencias únicas a través de contenido que conecta con tu audiencia.</p></div></div></div>
                <div class="card"><div class="card-inner"><div class="card-front"><i class="fas fa-database fa-3x"></i><h3>Optimización Eficiente</h3></div><div class="card-back"><p>Analizamos datos en tiempo real para ajustar tus estrategias al instante.</p></div></div></div>
                <div class="card"><div class="card-inner"><div class="card-front"><i class="fas fa-traffic-light fa-3x"></i><h3>Aumento de Tráfico</h3></div><div class="card-back"><p>Atrae más visitantes calificados a tu sitio web con nuestras estrategias.</p></div></div></div>
                <div class="card"><div class="card-inner"><div class="card-front"><i class="fas fa-search-dollar fa-3x"></i><h3>Mejor Conversión</h3></div><div class="card-back"><p>Dirige tráfico relevante a tu página, maximizando las ventas.</p></div></div></div>
            </div>
        </div>
    </section>

    <section class="how-it-works">
        <div class="container">
            <div class="accordion-container">
                <h2>¿Cómo Funciona?</h2>
                <div class="accordion-item"><button class="accordion-header">1. Análisis en Tiempo Real<span class="icon">+</span></button><div class="accordion-content"><p>Monitoreamos y ajustamos tus estrategias para mantener una presencia fuerte.</p></div></div>
                <div class="accordion-item"><button class="accordion-header">2. Búsqueda de Palabras Clave<span class="icon">+</span></button><div class="accordion-content"><p>Localizamos las palabras clave más efectivas para tu nicho.</p></div></div>
                <div class="accordion-item"><button class="accordion-header">3. Informes Claros<span class="icon">+</span></button><div class="accordion-content"><p>Te mantenemos al tanto con informes detallados de rendimiento.</p></div></div>
            </div>
            <div class="cta-block" style="text-align:center;">
                <h2>¡Actúa Ahora!</h2>
                <p style="font-size: 1.2rem;">¿Listo para darle un impulso a tu estrategia digital? Contáctanos.</p>
                <a href="https://wa.me/584241222233" class="btn"><i class="fab fa-whatsapp"></i> Contáctanos</a>
            </div>
        </div>
    </section>

    <section class="impulsa-section">
        <div class="container">
            <h2>Impulsa tu Visibilidad Online con SEO Eficiente e Inteligente</h2>
            <p>Nuestro servicio de SEO con inteligencia artificial combina tecnología avanzada y estrategias personalizadas para mejorar el posicionamiento de tu sitio web en los motores de búsqueda.</p>
        </div>
    </section>

    <section class="benefits">
        <div class="container">
            <div class="benefit-img">
                <img src="/images/seo-benefits.webp" alt="Análisis SEO" width="800" height="600" loading="lazy" decoding="async">
            </div>
            <div class="benefit-text">
                <h2>Beneficios Clave</h2>
                <div class="benefit-item"><strong>Optimización Eficiente</strong><p>IA para analizar datos y ajustes en tiempo real.</p></div>
                <div class="benefit-item"><strong>Aumento de Tráfico</strong><p>SEO mejorado para atraer más visitantes.</p></div>
                <div class="benefit-item"><strong>Mejor Conversión</strong><p>Visibilidad que impacta en las ventas.</p></div>
                <div class="benefit-item"><strong>Personalización del Contenido</strong><p>Contenido atractivo que resuena con la audiencia.</p></div>
            </div>
        </div>
    </section>

    <section class="features-list">
        <div class="container">
            <h2>Características del Servicio</h2>
            <div class="features-wrapper">
                <div class="feature-strip">
                    <h4>Análisis de Datos en Tiempo Real</h4>
                    <p>Descripción de cómo se utilizan herramientas de IA para monitorear y ajustar estrategias de SEO.</p>
                </div>
                <div class="feature-strip">
                    <h4>Investigación de Palabras Clave</h4>
                    <p>Explicar que la IA ayuda a encontrar las mejores palabras clave para el nicho del cliente.</p>
                </div>
                <div class="feature-strip">
                    <h4>Optimización del Contenido</h4>
                    <p>Detallar cómo se optimizan títulos, descripciones y otros elementos para cumplir con las mejores prácticas.</p>
                </div>
                <div class="feature-strip">
                    <h4>Informes Detallados</h4>
                    <p>Proveer informes claros sobre el rendimiento y recomendaciones mensuales.</p>
                </div>
            </div>
        </div>
    </section>

    <section class="cta-section">
        <div class="container">
          <div class="divider-line"></div>
            <h1>¡Potencia tu estrategia digital hoy!</h1>
            <p>Contáctanos para obtener más información sobre nuestros servicios de SEO con IA.</p>
            <a href="https://wa.me/584241222233" class="btn"><i class="fab fa-whatsapp"></i> Contáctanos</a>
        </div>
    </section>
</main>

            ` }} />
            <Footer />
            <WhatsAppButton />
        </>
    );
}
