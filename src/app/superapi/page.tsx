'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

import { useState, useEffect } from 'react';

export default function SuperAPIPage() {
    const [mounted, setMounted] = useState(false);
    useEffect(() => {
        setMounted(true);

        if (mounted) {
            // ACORDEÓN logic
            const acc = document.getElementsByClassName("accordion-header");
            const handleAccordionClick = function (this: HTMLElement) {
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
                acc[i].addEventListener("click", handleAccordionClick);
            }

            // SLIDER logic
            let slideIndex = 1;
            const slides = document.getElementsByClassName("slide");
            const dots = document.getElementsByClassName("dot");
            const wrapper = document.querySelector(".slides-wrapper") as HTMLElement;

            const showSlides = (n: number) => {
                if (!wrapper || slides.length === 0) return;
                if (n > slides.length) { slideIndex = 1; }
                if (n < 1) { slideIndex = slides.length; }

                const percentage = -(slideIndex - 1) * 100;
                wrapper.style.transform = `translateX(${percentage}%)`;

                for (let i = 0; i < dots.length; i++) {
                    dots[i].className = dots[i].className.replace(" active", "");
                }
                if (dots[slideIndex - 1]) {
                    dots[slideIndex - 1].className += " active";
                }
            };

            const plusSlides = (n: number) => { showSlides(slideIndex += n); };

            const handleDotClick = (index: number) => {
                slideIndex = index;
                showSlides(slideIndex);
                clearInterval(slideInterval);
                slideInterval = setInterval(() => { plusSlides(1); }, 3000);
            };

            for (let i = 0; i < dots.length; i++) {
                dots[i].addEventListener("click", () => handleDotClick(i + 1));
            }

            // ODOO TITLE SPLITTING
            const odooTitles = document.querySelectorAll('.odoo-card h4');
            odooTitles.forEach(title => {
                const text = title.textContent || '';
                title.innerHTML = '';
                [...text].forEach((char, i) => {
                    const span = document.createElement('span');
                    span.textContent = char === ' ' ? '\u00A0' : char;
                    span.className = 'letter';
                    title.appendChild(span);
                });
            });

            showSlides(slideIndex);
            let slideInterval = setInterval(() => { plusSlides(1); }, 3000);

            // CHAT LOGIC
            const chatMessages = document.getElementById("chat-messages");
            const chatInput = document.getElementById("chat-input") as HTMLInputElement;
            const chatSend = document.getElementById("chat-send");
            const typingIndicator = document.getElementById("typing-indicator");

            const addMessage = (text: string, isUser: boolean) => {
                if (!chatMessages) return;
                const msg = document.createElement("div");
                msg.className = `chat-message ${isUser ? 'message-user' : 'message-bot'}`;
                msg.textContent = text;
                chatMessages.appendChild(msg);
                chatMessages.scrollTop = chatMessages.scrollHeight;
            };

            const botResponses: Record<string, string> = {
                "¿Qué es la SuperAPI?": "La SuperAPI es nuestra solución de inteligencia artificial avanzada que se integra directamente en tu WhatsApp para automatizar la atención al cliente con lenguaje natural.",
                "¿Cómo ayuda a mi negocio?": "Optimiza tiempos de respuesta, atiende 24/7 sin errores, reduce costos operativos y recolecta datos valiosos de cada conversación para tus KPI.",
                "¿Se integra con Odoo?": "¡Absolutamente! Somos expertos en Odoo. La SuperAPI puede consultar inventarios, registrar pedidos, crear leads y mucho más, todo desde el chat.",
                "default": "¡Qué buena pregunta! La SuperAPI está diseñada para adaptarse a cualquier flujo de negocio. ¿Te gustaría agendar una demo real?"
            };

            const handleBotResponse = (userText: string) => {
                if (!typingIndicator || !chatMessages) return;
                typingIndicator.style.display = "flex";
                chatMessages.scrollTop = chatMessages.scrollHeight;

                setTimeout(() => {
                    typingIndicator.style.display = "none";
                    const response = botResponses[userText] || botResponses["default"];
                    addMessage(response, false);
                }, 1500);
            };

            const sendMessage = () => {
                const text = chatInput?.value.trim();
                if (text) {
                    addMessage(text, true);
                    chatInput.value = "";
                    handleBotResponse(text);
                }
            };

            (window as any).sendDemoMessage = (text: string) => {
                addMessage(text, true);
                handleBotResponse(text);
            };

            chatSend?.addEventListener("click", sendMessage);
            chatInput?.addEventListener("keypress", (e) => {
                if (e.key === "Enter") sendMessage();
            });

            return () => {
                for (let i = 0; i < acc.length; i++) {
                    acc[i].removeEventListener("click", handleAccordionClick);
                }
                clearInterval(slideInterval);
                // Note: Dot listeners are local, so they are cleaned up when the component unmounts
            };
        }
    }, [mounted]);

    if (!mounted) {
        return (
            <>
                <Navbar />
                <div style={{ minHeight: '100vh', background: '#F5F5DC' }}></div>
                <Footer />
            </>
        );
    }

    return (
        <>
            <Navbar />
            <div suppressHydrationWarning dangerouslySetInnerHTML={{
                __html: `
<style>
    /* --- VARIABLES --- */
    :root {
        --primary-color: #2b1a40;
        --accent-color: #f04e8a;
        --card-front-bg: #f04e8a; 
        --divider-color: #f04e8a;
        --secondary-btn: #1a0f26; 
        --text-color: #404040;
        --bg-beige: #F5F5DC;      
        --white: #ffffff;
        --black: #000000;
        --line-color: #e112ee;
    }

    /* --- GENERAL --- */
    .superapi-page * { box-sizing: border-box; }
    .superapi-page {
        font-family: 'Exo 2', sans-serif;
        color: var(--text-color);
        line-height: 1.6;
        background-color: var(--white);
    }
    .superapi-page h1, 
    .superapi-page h2, 
    .superapi-page h3, 
    .superapi-page h4 { 
        color: var(--primary-color); 
        font-weight: 900; 
        margin-top: 0; 
    }
    .superapi-page a { text-decoration: none; color: inherit; transition: 0.3s; }
    .superapi-page img { max-width: 100%; height: auto; display: block; }
    .superapi-page .container { max-width: 1170px; margin: 0 auto; padding: 0 20px; }

    /* --- HERO --- */
    .superapi-page .hero { padding: 80px 0; background-color: var(--bg-beige); display: flex; align-items: center; min-height: 600px; }
    .superapi-page .hero .container { display: grid; grid-template-columns: 1fr 1fr; gap: 60px; align-items: center; }
    .superapi-page .hero h1 { font-size: 4rem; font-weight: 900; line-height: 1.1; margin-bottom: 25px; color: var(--primary-color); }
    .superapi-page .hero p { font-size: 1.25rem; margin-bottom: 35px; font-weight: 500; }
    .superapi-page .hero-img img { width: 100%; border-radius: 20px; }
    .superapi-page .hero-buttons { display: flex; gap: 20px; flex-wrap: wrap; }

    /* --- BOTONES --- */
    .superapi-page .btn {
        display: inline-flex; align-items: center; justify-content: center;
        background: var(--accent-color); color: white;
        padding: 18px 40px; border-radius: 50px;
        font-weight: 800; font-size: 1.1rem; text-transform: uppercase;
        box-shadow: 0 10px 20px rgba(216, 25, 225, 0.3); transition: all 0.3s ease;
    }
    .superapi-page .btn:hover { transform: scale(0.95); box-shadow: 0 5px 10px rgba(216, 25, 225, 0.2); }
    .superapi-page .btn-secondary { background: var(--secondary-btn); box-shadow: 0 10px 20px rgba(43, 26, 64, 0.3); }
    .superapi-page .btn-secondary:hover { transform: scale(0.95); background: #000; }

    /* --- INTRO --- */
    .superapi-page .intro-section { padding: 100px 0; background-color: var(--bg-beige); text-align: center; }
    .superapi-page .intro-section h2 { font-size: 3rem; margin-bottom: 30px; }
    .superapi-page .intro-section p { font-size: 1.2rem; max-width: 900px; margin: 0 auto; line-height: 1.8; }

    /* --- CARACTERÍSTICAS --- */
    .superapi-page .features-list { padding: 80px 0; background: var(--bg-beige); }
    .superapi-page .features-layout { display: grid; grid-template-columns: 40% 55%; gap: 5%; align-items: center; }
    .superapi-page .features-info h2 { font-size: 3rem; margin-bottom: 20px; font-weight: 900; line-height: 1.1; text-align: left; }
    .superapi-page .features-intro { font-size: 1.1rem; color: var(--text-color); text-align: left; }
    .superapi-page .features-intro strong { color: var(--accent-color); font-weight: 800; }
    .superapi-page .features-wrapper { display: grid; grid-template-columns: repeat(2, 1fr); gap: 15px; }
    
    .superapi-page .card { background-color: transparent; height: 120px; perspective: 1000px; }
    .superapi-page .card-inner { position: relative; width: 100%; height: 100%; text-align: center; transition: transform 0.6s; transform-style: preserve-3d; border-radius: 15px; box-shadow: 0 5px 15px rgba(0,0,0,0.08); }
    .superapi-page .card:hover .card-inner { transform: rotateY(180deg); }
    .superapi-page .card-front, 
    .superapi-page .card-back { position: absolute; width: 100%; height: 100%; -webkit-backface-visibility: hidden; backface-visibility: hidden; border-radius: 15px; display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 15px; }
    .superapi-page .card-front { background-color: var(--card-front-bg); color: white; }
    .superapi-page .card-front i { color: var(--black); margin-bottom: 6px; font-size: 1.5rem; }
    .superapi-page .card-front h4 { color: white; font-size: 0.9rem; margin: 0; line-height: 1.1; font-weight: 800; }
    .superapi-page .card-back { background-color: var(--primary-color); color: white; transform: rotateY(180deg); }
    .superapi-page .card-back p { font-size: 0.75rem; line-height: 1.2; margin: 0; }
    .superapi-page .features-wrapper .card:last-child { grid-column: 1 / -1; width: 100%; }

    /* --- SLIDER --- */
    .superapi-page .slider-section { padding: 80px 0; background: var(--bg-beige); text-align: center; }
    .superapi-page .slider-section h2 { font-size: 3rem; margin-bottom: 50px; }
    .superapi-page .slider-container { max-width: 800px; margin: 0 auto; position: relative; overflow: hidden; background: transparent; box-shadow: none; }
    .superapi-page .slides-wrapper { display: flex; transition: transform 0.5s ease-in-out; width: 100%; }
    .superapi-page .slide { min-width: 100%; display: flex; justify-content: center; align-items: center; }
    .superapi-page .slide img { width: 100%; height: auto; display: block; border-radius: 20px; }
    .superapi-page .slider-dots { margin-top: 30px; display: flex; justify-content: center; gap: 12px; }
    .superapi-page .dot { width: 12px; height: 12px; background-color: #ccc; border-radius: 50%; cursor: pointer; transition: background-color 0.3s, transform 0.3s; }
    .superapi-page .dot.active { background-color: var(--accent-color); transform: scale(1.3); }

    /* --- FAQ --- */
    .superapi-page .faq-section { padding: 100px 0; background: var(--bg-beige); }
    .superapi-page .faq-section .container { display: grid; grid-template-columns: 1fr 1fr; gap: 60px; align-items: center; }
    .superapi-page .faq-img img { width: 100%; border-radius: 20px; }
    .superapi-page .accordion-item { margin-bottom: 15px; border-radius: 10px; overflow: hidden; box-shadow: 0 4px 10px rgba(0,0,0,0.05); }
    .superapi-page .accordion-header { background-color: var(--primary-color); color: white; cursor: pointer; padding: 20px 25px; width: 100%; border: none; text-align: left; outline: none; font-size: 1.2rem; font-weight: 700; display: flex; justify-content: space-between; align-items: center; transition: background 0.3s; font-family: 'Exo 2', sans-serif; }
    .superapi-page .accordion-header:hover { background-color: #3d255a; }
    .superapi-page .accordion-header .icon { font-size: 1.5rem; transition: 0.3s; }
    .superapi-page .accordion-header.active .icon { transform: rotate(45deg); color: var(--accent-color); }
    .superapi-page .accordion-content { padding: 0 25px; background-color: white; max-height: 0; overflow: hidden; transition: max-height 0.3s ease-out, padding 0.3s; }
    .superapi-page .accordion-header.active + .accordion-content { padding-top: 20px; padding-bottom: 20px; }
    .superapi-page .accordion-content p { margin: 0; color: var(--text-color); font-size: 1.05rem; }

    /* --- QR SECTION --- */
    .superapi-page .qr-gradient-section {
        padding: 80px 0;
        background: linear-gradient(180deg, var(--accent-color) 0%, var(--primary-color) 100%);
        text-align: center;
        color: white;
    }
    .superapi-page .qr-layout { display: grid; grid-template-columns: 1fr 1fr 1fr; align-items: center; gap: 20px; max-width: 1200px; margin: 0 auto; }
    .superapi-page .qr-text-left h2 { color: white; font-size: 3.5rem; line-height: 1.2; text-align: right; margin: 0; font-weight: 900; }
    .superapi-page .qr-image-center img { max-width: 350px; width: 100%; margin: 0 auto; filter: drop-shadow(0 20px 30px rgba(0,0,0,0.3)); transition: transform 0.3s ease; }
    .superapi-page .qr-image-center img:hover { transform: scale(1.05) rotate(2deg); }
    .superapi-page .qr-text-right p { color: white; font-size: 1.3rem; line-height: 1.5; text-align: left; font-weight: 600; margin: 0; }

    /* --- ODOO SECTION --- */
    .superapi-page .odoo-section { 
        padding: 80px 0; 
        background-color: var(--primary-color);
        color: white; 
    }
    .superapi-page .odoo-header { text-align: center; margin-bottom: 60px; }
    .superapi-page .odoo-header h2 { 
        color: white; 
        font-size: 3.5rem; 
        margin-bottom: 10px; 
        font-weight: 900; 
    }
    .superapi-page .odoo-subtitle {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 20px;
        color: var(--line-color);
        font-size: 1.8rem;
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: 1px;
    }
    .superapi-page .odoo-subtitle::before, 
    .superapi-page .odoo-subtitle::after {
        content: "";
        height: 3px;
        width: 80px;
        background-color: var(--line-color);
        display: block;
    }
    .superapi-page .odoo-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 60px; align-items: center; }
    .superapi-page .odoo-text h3 { color: var(--accent-color); font-size: 2rem; margin-bottom: 20px; font-weight: 800; line-height: 1.2; }
    .superapi-page .odoo-text p { font-size: 1.1rem; line-height: 1.7; color: rgba(255,255,255,0.9); margin-bottom: 20px; }
    .superapi-page .odoo-text p strong { color: var(--accent-color); }
    .superapi-page .odoo-img img { width: 100%; border-radius: 15px; box-shadow: 0 10px 30px rgba(0,0,0,0.3); }

    .superapi-page .odoo-cards-container {
        background: white;
        border-radius: 24px;
        padding: 60px 40px;
        margin-top: 0; /* Eliminamos el margen superior para evitar el hueco blanco */
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        gap: 30px;
        box-shadow: 0 25px 50px rgba(0,0,0,0.5);
        position: relative;
        z-index: 2;
        border: 2px solid rgba(216, 25, 225, 0.1);
    }
    .superapi-page .odoo-cards-section {
        background-color: var(--primary-color) !important;
        margin: 0;
        padding: 40px 0 100px 0;
    }
    .superapi-page .odoo-card {
        text-align: center;
        transition: transform 0.3s ease;
    }
    .superapi-page .odoo-card:hover {
        transform: translateY(-10px);
    }
    .superapi-page .odoo-card h4 {
        color: var(--accent-color);
        font-size: 2.2rem;
        margin-bottom: 25px;
        font-weight: 900;
        line-height: 1;
        transition: all 0.4s ease;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
    }
    .superapi-page .odoo-card h4 .letter {
        display: inline-block;
        transition: all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    }
    .superapi-page .odoo-card:hover h4 .letter {
        transform: translateY(-10px) rotate(360deg) scale(1.2);
        color: var(--primary-color);
        text-shadow: 0 5px 15px rgba(240, 78, 138, 0.4);
    }
    .superapi-page .odoo-card:hover h4 .letter:nth-child(even) {
        transform: translateY(10px) rotate(-360deg) scale(0.8);
    }
    .superapi-page .odoo-card:hover h4 .letter:nth-child(3n) {
        transform: translateX(10px) translateY(-5px) rotate(15deg);
    }
    .superapi-page .odoo-card:hover h4 .letter:nth-child(3n+1) {
        transform: translateX(-10px) translateY(5px) rotate(-15deg);
    }
    .superapi-page .odoo-card p {
        color: #2b1a40;
        font-size: 1.1rem;
        line-height: 1.4;
        margin: 0;
        font-weight: 600;
        transition: all 0.4s ease;
    }
    .superapi-page .odoo-card:hover p {
        transform: translateY(5px);
        opacity: 0.8;
    }

    /* --- OPTIMIZATION SECTION --- */
    .superapi-page .opt-section {
        background-color: var(--primary-color);
        padding: 40px 0 100px 0;
        color: white;
    }
    .superapi-page .opt-section h2 {
        text-align: center;
        font-size: 3.5rem;
        font-weight: 950;
        margin-bottom: 60px;
        color: white;
    }
    .superapi-page .opt-flex {
        display: flex;
        gap: 60px;
        align-items: flex-start;
        margin-bottom: 60px;
    }
    .superapi-page .opt-text {
        flex: 1.2;
    }
    .superapi-page .opt-text p {
        font-size: 1.15rem;
        line-height: 1.7;
        color: rgba(255, 255, 255, 0.95);
        margin: 0;
    }
    .superapi-page .opt-visuals {
        flex: 1;
        display: flex;
        flex-direction: column;
        gap: 20px;
    }
    .superapi-page .opt-boxes {
        display: flex;
        gap: 20px;
    }
    .superapi-page .opt-box {
        background: white;
        flex: 1;
        aspect-ratio: 1.4 / 1;
        border-radius: 18px;
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: 0 10px 30px rgba(0,0,0,0.3);
    }
    .superapi-page .opt-box i {
        font-size: 5rem;
        color: #000;
    }
    .superapi-page .opt-label-bar {
        background: white;
        color: black;
        padding: 20px 30px;
        border-radius: 12px;
        font-weight: 800;
        font-size: 1.1rem;
        box-shadow: 0 10px 25px rgba(0,0,0,0.3);
    }
    .superapi-page .opt-footer-text {
        text-align: center;
        margin-top: 40px;
        font-weight: 800;
        font-size: 1.2rem;
        color: white;
        max-width: 1100px;
        margin-left: auto;
        margin-right: auto;
        line-height: 1.5;
    }

    /* --- TIMELINE --- */
    .superapi-page .timeline-header {
        background-color: var(--primary-color); 
        padding: 60px 0 20px 0;
        text-align: center;
        color: white;
    }
    .superapi-page .timeline-header h2 {
        color: white;
        font-size: 3.5rem;
        margin: 0;
        font-weight: 900;
    }
    .superapi-page .timeline-body {
        padding: 40px 0 120px 0;
        background-color: var(--primary-color);
        position: relative;
        overflow: hidden;
    }
    .superapi-page .wgl-timeline-vertical {
        position: relative;
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 20px;
    }
    
    /* Línea vertical principal central */
    .superapi-page .wgl-timeline-vertical::before {
        content: '';
        position: absolute;
        left: 50%;
        top: 0;
        bottom: 0;
        width: 8px;
        background-color: var(--accent-color);
        transform: translateX(-50%);
        z-index: 1;
    }
    
    .superapi-page .time_line-items_wrap {
        position: relative;
        padding: 0;
        margin: 0;
        z-index: 2;
    }
    
    /* Círculos O-Ring de los extremos (Con punto central) */
    .superapi-page .time_line-start_image, 
    .superapi-page .time_line-end_image {
        width: 50px;
        height: 50px;
        border: 10px solid var(--accent-color);
        border-radius: 50%;
        background: var(--primary-color);
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        z-index: 10;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .superapi-page .time_line-start_image::after, 
    .superapi-page .time_line-end_image::after {
        content: '';
        width: 12px;
        height: 12px;
        background: var(--accent-color);
        border-radius: 50%;
    }
    .superapi-page .time_line-start_image { top: -30px; }
    .superapi-page .time_line-end_image { bottom: -30px; }
    
    /* Contenedor de cada paso */
    .superapi-page .time_line-item {
        position: relative;
        display: flex;
        align-items: center;
        width: 100%;
        min-height: 220px;
        margin: 0;
    }
    
    /* Posicionamiento de tarjetas alternas */
    .superapi-page .time_line-item:nth-child(odd) {
        justify-content: flex-end;
        padding-left: calc(50% + 120px);
    }
    .superapi-page .time_line-item:nth-child(even) {
        justify-content: flex-start;
        padding-right: calc(50% + 120px);
    }
    
    /* Círculo indicador junto a la tarjeta */
    .superapi-page .time_line-pointer {
        position: absolute;
        top: 50%;
        width: 16px;
        height: 16px;
        background: var(--primary-color);
        border: 4px solid var(--accent-color);
        border-radius: 50%;
        z-index: 15;
        transform: translateY(-50%);
    }
    .superapi-page .time_line-item:nth-child(odd) .time_line-pointer {
        left: calc(50% + 100px);
    }
    .superapi-page .time_line-item:nth-child(even) .time_line-pointer {
        right: calc(50% + 100px);
    }
    
    /* CURVAS COMPACTAS (Redondeado total) */
    .superapi-page .time_line-curve {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translateY(-50%);
        height: 80px; 
        width: 60px;  
        z-index: 5;
    }

    /* Línea horizontal que sale de la curva (Alargada para conectar) */
    .superapi-page .time_line-curve::after {
        content: '';
        position: absolute;
        top: 50%;
        height: 8px;
        width: 55px; /* Aumentado de 40px a 55px */
        background-color: var(--accent-color);
        z-index: 5;
        transform: translateY(-50%);
        border-radius: 4px 0 0 4px; /* Redondeado solo en el inicio (dentro de la curva) */
    }

    /* Curva Derecha */
    .superapi-page .time_line-item:nth-child(odd) .time_line-curve {
        margin-left: -4px;
        border-right: 8px solid var(--accent-color);
        border-top: 8px solid var(--accent-color);
        border-bottom: 8px solid var(--accent-color);
        border-radius: 0 40px 40px 0;
    }
    .superapi-page .time_line-item:nth-child(odd) .time_line-curve::after {
        right: -55px; /* Ajustado al nuevo ancho */
    }

    /* Curva Izquierda */
    .superapi-page .time_line-item:nth-child(even) .time_line-curve {
        margin-left: calc(-60px + 4px);
        border-left: 8px solid var(--accent-color);
        border-top: 8px solid var(--accent-color);
        border-bottom: 8px solid var(--accent-color);
        border-radius: 40px 0 0 40px;
    }
    .superapi-page .time_line-item:nth-child(even) .time_line-curve::after {
        left: -55px; /* Ajustado al nuevo ancho */
    }

    /* Máscara con bordes suaves */
    .superapi-page .time_line-curve::before {
        content: '';
        position: absolute;
        top: 0px;
        bottom: 0px;
        width: 12px;
        background-color: var(--primary-color);
        z-index: -1;
    }
    .superapi-page .time_line-item:nth-child(odd) .time_line-curve::before { left: -4px; }
    .superapi-page .time_line-item:nth-child(even) .time_line-curve::before { right: -4px; }
    
    /* Estilo de las tarjetas (Bordes redondeados de 24px) */
    .superapi-page .time_line-content {
        background: white;
        padding: 30px;
        border-radius: 24px; /* Más redondeado */
        border: 2px solid rgba(216, 25, 225, 0.2); /* Borde sutil magenta */
        box-shadow: 0 12px 35px rgba(0,0,0,0.4);
        max-width: 420px;
        width: 100%;
        position: relative;
        z-index: 20;
        transition: all 0.3s ease;
    }
    .superapi-page .time_line-content:hover {
        border-color: var(--accent-color);
        transform: translateY(-5px);
    }
    .superapi-page .time_line-title {
        color: var(--primary-color);
        font-size: 1.5rem;
        margin-bottom: 10px;
        font-weight: 800;
    }
    .superapi-page .time_line-text p {
        color: var(--text-color);
        font-size: 1rem;
        margin: 0;
        line-height: 1.6;
    }

    /* --- DIVIDER --- */
    .superapi-page .section-divider {
        width: 80%; height: 4px; background-color: var(--divider-color); margin: 0 auto; border-radius: 2px;
        position: relative; top: -2px; 
    }

    /* MOBILE */
    @media (max-width: 900px) {
        .superapi-page .hero .container, 
        .superapi-page .faq-section .container, 
        .superapi-page .features-layout, 
        .superapi-page .odoo-grid { grid-template-columns: 1fr; text-align: center; }
        .superapi-page .hero h1 { font-size: 2.8rem; }
        .superapi-page .features-info { margin-bottom: 40px; }
        .superapi-page .features-wrapper { grid-template-columns: 1fr; }
        .superapi-page .features-wrapper .card:last-child { width: 100%; }
        .superapi-page .hero-buttons { justify-content: center; }
        .superapi-page .slider-container { width: 95%; }
        .superapi-page .qr-layout { grid-template-columns: 1fr; gap: 40px; }
        .superapi-page .qr-text-left h2, 
        .superapi-page .qr-text-right p { text-align: center; }
        .superapi-page .qr-image-center img { max-width: 250px; }
        .superapi-page .odoo-text h3 { text-align: center; }
        .superapi-page .odoo-text p { text-align: left; }
        .superapi-page .odoo-cards-container {
            grid-template-columns: 1fr;
            padding: 40px 20px;
            gap: 40px;
        }
        .superapi-page .odoo-card h4 { font-size: 1.8rem; }
        .superapi-page .opt-flex { flex-direction: column; gap: 40px; }
        .superapi-page .opt-section h2 { font-size: 2.2rem; }
        .superapi-page .opt-box i { font-size: 3.5rem; }
        .superapi-page .opt-footer-text { font-size: 1rem; }
        /* Timeline responsive */
        .superapi-page .time_line-item {
            justify-content: flex-start !important;
            padding-left: 100px !important;
            padding-right: 20px !important;
            margin-bottom: 80px;
        }
        
        .superapi-page .time_line-start_image,
        .superapi-page .time_line-end_image {
            left: 30px;
        }
        
        .superapi-page .time_line-pointer {
            left: 30px;
        }
        
        /* Curvas en móvil - todas hacia la derecha */
        .superapi-page .time_line-item:nth-child(odd) .time_line-curve,
        .superapi-page .time_line-item:nth-child(even) .time_line-curve {
            left: 30px;
            right: auto;
            border-left: none;
            border-right: 6px solid var(--accent-color);
            border-bottom: 6px solid var(--accent-color);
            border-bottom-right-radius: 60px;
            border-top-right-radius: 60px;
            border-bottom-left-radius: 0;
            border-top-left-radius: 0;
            width: 80px;
            height: 140px;
            top: -50px;
        }
        
        .superapi-page .time_line-item:first-child .time_line-curve {
            top: -70px;
            height: 160px;
        }
        
        .superapi-page .time_line-content {
            max-width: 100%;
        }
        
        .superapi-page .odoo-subtitle { font-size: 1.2rem; flex-direction: column; gap: 10px; }
        .superapi-page .odoo-subtitle::before, 
        .superapi-page .odoo-subtitle::after { width: 50px; }
    }

    /* --- CHAT DEMO --- */
    .chat-demo-section { padding: 100px 0; background: var(--bg-beige); text-align: center; }
    .chat-demo-section h2 { font-size: 3.5rem; }
    .chat-demo-container { max-width: 900px; margin: 0 auto; display: grid; grid-template-columns: 1fr 1fr; gap: 40px; align-items: center; }
    .chat-interface { 
        background: white; 
        border-radius: 24px; 
        box-shadow: 0 20px 40px rgba(0,0,0,0.1); 
        overflow: hidden; 
        display: flex; 
        flex-direction: column; 
        height: 500px; 
        border: 1px solid rgba(0,0,0,0.05);
        animation: float 6s ease-in-out infinite;
    }
    @keyframes float {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(-10px); }
    }
    .chat-header { 
        background: var(--primary-color); 
        color: white; 
        padding: 20px; 
        display: flex; 
        align-items: center; 
        gap: 15px; 
        text-align: left;
    }
    .chat-header-avatar { width: 40px; height: 40px; background: var(--accent-color); border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 900; }
    .chat-header-info h3 { color: white; margin: 0; font-size: 1.1rem; }
    .chat-header-info p { margin: 0; font-size: 0.8rem; opacity: 0.8; color: white !important; }
    .chat-messages { flex: 1; padding: 20px; overflow-y: auto; display: flex; flex-direction: column; gap: 15px; scroll-behavior: smooth; background: #fafafa; }
    .chat-message { max-width: 80%; padding: 12px 16px; border-radius: 18px; font-size: 0.95rem; line-height: 1.4; position: relative; animation: fadeInMsg 0.4s ease-out; }
    @keyframes fadeInMsg { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
    .message-bot { align-self: flex-start; background: white; color: var(--text-color); border-bottom-left-radius: 4px; border: 1px solid #eee; }
    .message-user { align-self: flex-end; background: var(--accent-color); color: white; border-bottom-right-radius: 4px; text-align: left; }
    .chat-input-area { padding: 20px; background: white; border-top: 1px solid #eee; display: flex; gap: 10px; align-items: center; }
    .chat-input { 
        flex: 1; 
        border: 2px solid #e0e0e0; 
        padding: 14px 25px; 
        border-radius: 30px; 
        outline: none; 
        transition: 0.3s; 
        font-size: 1rem;
        background-color: #f9f9f9; 
        box-shadow: inset 0 2px 5px rgba(0,0,0,0.03); 
    }
    .chat-input:focus { 
        border-color: var(--accent-color); 
        background-color: white;
        box-shadow: 0 0 0 4px rgba(240, 78, 138, 0.1); 
    }
    .chat-send { width: 45px; height: 45px; background: var(--accent-color); border-radius: 50%; border: none; color: white; display: flex; align-items: center; justify-content: center; cursor: pointer; transition: 0.3s; }
    .chat-send:hover { transform: scale(1.1); }
    .chat-suggestions { display: flex; flex-direction: column; gap: 15px; text-align: left; }
    .chat-suggestion-btn { 
        background: white; 
        border: 2px solid var(--accent-color); 
        color: var(--accent-color); 
        padding: 15px 25px; 
        border-radius: 15px; 
        cursor: pointer; 
        font-weight: 700; 
        transition: 0.3s; 
        font-family: inherit;
        font-size: 1rem;
    }
    .chat-suggestion-btn:hover { background: var(--accent-color); color: white; transform: translateX(10px); }
    .typing-indicator { display: flex; gap: 4px; padding: 12px 16px; background: #f0f0f0; border-radius: 18px; width: fit-content; align-self: flex-start; margin-bottom: 10px; display: none; }
    .typing-dot { width: 6px; height: 6px; background: #999; border-radius: 50%; animation: typing 1s infinite ease-in-out; }
    .typing-dot:nth-child(2) { animation-delay: 0.2s; }
    .typing-dot:nth-child(3) { animation-delay: 0.4s; }
    @keyframes typing { 0%, 100% { opacity: 0.3; transform: scale(1); } 50% { opacity: 1; transform: scale(1.2); } }

    @media (max-width: 900px) {
        .chat-demo-container { grid-template-columns: 1fr; }
        .chat-suggestions { order: 2; }
        .chat-interface { order: 1; height: 400px; }
    }

</style>


<main class="superapi-page">
    <section class="hero">
        <div class="container">
            <div class="hero-text">
                <h1>La Revolución de la atención al Cliente</h1>
                <p>En la era digital actual, la eficiencia y la capacidad de respuesta son cruciales para el éxito de cualquier negocio.</p>

            </div>
            <div class="hero-img">
                <img src="https://morna.tech/wp-content/uploads/2024/08/ai_chat3.png" alt="SuperApi Chat">
            </div>
        </div>
    </section>

    <section class="intro-section">
        <div class="container">
            <h2>Sobre la SUPERAPI</h2>
            <p>La SuperAPI es una innovadora solución de inteligencia artificial que optimiza la atención al cliente a través de WhatsApp, el canal de comunicación más popular. Integrada con tecnologías avanzadas como ChatGPT, ofrece interacciones naturales y fluidas, mejorando la experiencia del cliente y asegurando el éxito empresarial en la era digital.</p>
        </div>
    </section>

    <section class="features-list">
        <div class="container features-layout">
            <div class="features-info">
                <h2>Características Claves</h2>
                <p class="features-intro"><strong>Conecte su Whatsapp:</strong> La SuperAPI es una herramienta de inteligencia artificial avanzada que optimiza la atención al cliente ofreciendo conversaciones naturales y fluidas.</p>
            </div>
            <div class="features-wrapper">
                <div class="card"><div class="card-inner"><div class="card-front"><i class="fas fa-database"></i><h4>Conexión con CRM ODOO</h4></div><div class="card-back"><p>Su información es vital. Podemos analizarla y proporcionarle KPI y datos relevantes.</p></div></div></div>
                <div class="card"><div class="card-inner"><div class="card-front"><i class="fas fa-clock"></i><h4>Responde 24/7</h4></div><div class="card-back"><p>Ya no se preocupe si usted tiene días libres. ¿Desea mejorar la calidad de vida?</p></div></div></div>
                <div class="card"><div class="card-inner"><div class="card-front"><i class="fas fa-money-bill-wave"></i><h4>Baja tus costos operativos</h4></div><div class="card-back"><p>Invierte tus recursos humanos donde realmente importa. ¿Quieres optimizar recursos?</p></div></div></div>
                <div class="card"><div class="card-inner"><div class="card-front"><i class="fas fa-file-audio"></i><h4>Procesamos Audios</h4></div><div class="card-back"><p>Ya no te preocupes por esos audios engorrosos que limitan tu tiempo.</p></div></div></div>
                <div class="card"><div class="card-inner"><div class="card-front"><i class="fas fa-robot"></i><h4>No somos un bot</h4></div><div class="card-back"><p>No aburras a tus clientes con opciones limitadas. Odiamos los bots restrictivos.</p></div></div></div>
            </div>
        </div>
    </section>

    <section class="slider-section" id="escanear_qr">
        <div class="container">
            <h2>¿Cómo empezar?</h2>
            <div class="slider-container">
                <div class="slides-wrapper">
                    <div class="slide"><img src="https://morna.tech/wp-content/uploads/2024/08/s_Paso-1.png" alt="Paso 1"></div>
                    <div class="slide"><img src="https://morna.tech/wp-content/uploads/2024/08/s_Paso-2.png" alt="Paso 2"></div>
                    <div class="slide"><img src="https://morna.tech/wp-content/uploads/2024/08/s_Paso-3-1.png" alt="Paso 3"></div>
                    <div class="slide"><img src="https://morna.tech/wp-content/uploads/2024/08/s_Paso-4-1.png" alt="Paso 4"></div>
                </div>
            </div>
            <div class="slider-dots">
                <span class="dot active" onclick="currentSlide(1)"></span>
                <span class="dot" onclick="currentSlide(2)"></span>
                <span class="dot" onclick="currentSlide(3)"></span>
                <span class="dot" onclick="currentSlide(4)"></span>
            </div>
        </div>
    </section>

    <section class="chat-demo-section">
        <div class="container">
            <div class="chat-demo-container">
                <div class="chat-suggestions">
                    <h2 style="text-align: left; margin-bottom: 20px;">Interactúa con nuestra IA</h2>
                    <p style="text-align: left; margin-bottom: 30px; font-size: 1.1rem;">Haz clic en cualquiera de las opciones para ver cómo responde la SuperAPI en tiempo real. Experimenta la fluidez y precisión de nuestra tecnología.</p>
                    <button class="chat-suggestion-btn" onclick="sendDemoMessage('¿Qué es la SuperAPI?')">¿Qué es la SuperAPI?</button>
                    <button class="chat-suggestion-btn" onclick="sendDemoMessage('¿Cómo ayuda a mi negocio?')">¿Cómo ayuda a mi negocio?</button>
                    <button class="chat-suggestion-btn" onclick="sendDemoMessage('¿Se integra con Odoo?')">¿Se integra con Odoo?</button>
                </div>
                <div class="chat-interface">
                    <div class="chat-header">
                        <div class="chat-header-avatar">M</div>
                        <div class="chat-header-info">
                            <h3>Morna AI Assistant</h3>
                            <p>En línea • SuperAPI</p>
                        </div>
                    </div>
                    <div id="chat-messages" class="chat-messages">
                        <div class="chat-message message-bot">¡Hola! Soy el asistente virtual de Morna Tech. ¿En qué puedo ayudarte hoy? 😊</div>
                    </div>
                    <div id="typing-indicator" class="typing-indicator">
                        <div class="typing-dot"></div>
                        <div class="typing-dot"></div>
                        <div class="typing-dot"></div>
                    </div>
                    <div class="chat-input-area">
                        <input type="text" id="chat-input" class="chat-input" placeholder="Escribe un mensaje..." autocomplete="off">
                        <button class="chat-send" id="chat-send">
                            <i class="fas fa-paper-plane"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </section>




    <section class="qr-gradient-section">
        <div class="container">
            <div class="qr-layout">
                <div class="qr-text-left">
                    <h2>Escanea nuestro código QR</h2>
                </div>
                <div class="qr-image-center">
                    <img src="https://morna.tech/wp-content/uploads/2025/06/Recursos-necesarios_Sticker-impresion-copia-3-1024x1024.png" alt="Escanea el código QR">
                </div>
                <div class="qr-text-right">
                    <p>y no te pierdas de la SuperAPI. Realiza las pruebas que quieras y contáctanos para contratar tu SuperAPI.</p>
                </div>
            </div>
        </div>
    </section>

    <section class="odoo-section">
        <div class="container">
            <div class="odoo-header">
                <h2>Más Posibilidades</h2>
                <div class="odoo-subtitle">de la Super Api+Odoo</div>
            </div>
            <div class="odoo-grid">
                <div class="odoo-text">
                    <h3>¿Cómo lo hacemos? El CRM del futuro</h3>
                    <p>La integración de la Super API de IA con Odoo CRM transforma tu negocio al automatizar acciones y optimizar la interacción con clientes en WhatsApp. Permite:</p>
                    <p>
                        <strong>–</strong> Respuestas en tiempo real con IA.<br>
                        <strong>–</strong> Conexión de pedidos al CRM.<br>
                        <strong>–</strong> Análisis de datos de conversaciones.<br>
                        <strong>–</strong> Embudo de ventas automatizado.
                    </p>
                    <p>Mejora la atención al cliente y optimiza procesos internos con los módulos de Odoo.</p>
                </div>
                <div class="odoo-img">
                    <img src="https://morna.tech/wp-content/uploads/2024/08/Recurso-22@2x-1024x502.png" alt="SuperApi Odoo Dashboard">
                </div>
            </div>
        </div>
    </section>

    <section class="timeline-header">
        <div class="container">
            <h2>Nuestro Proceso</h2>
        </div>
    </section>
    
    <section class="timeline-body">
        <div class="container">
            <div class="wgl-timeline-vertical">
                <div class="time_line-start_image"></div>
                <div class="time_line-items_wrap">
                    <div class="time_line-item">
                        <div class="time_line-pointer"></div>
                        <div class="time_line-curve"></div>
                        <div class="time_line-content">
                            <h3 class="time_line-title">1. Interacción Eficiente:</h3>
                            <div class="time_line-text"><p>La IA Super API te permite comunicarte con tus clientes a través de WhatsApp, utilizando inteligencia artificial avanzada para responder de forma efectiva y recolectar datos de cada interacción.</p></div>
                        </div>
                    </div>
                    <div class="time_line-item">
                        <div class="time_line-pointer"></div>
                        <div class="time_line-curve"></div>
                        <div class="time_line-content">
                            <h3 class="time_line-title">2. Análisis de Intención:</h3>
                            <div class="time_line-text"><p>La inteligencia artificial analiza las conversaciones, categorizando a los clientes según su nivel de importancia e intención de compra, permitiéndote tomar decisiones estratégicas.</p></div>
                        </div>
                    </div>
                    <div class="time_line-item">
                        <div class="time_line-pointer"></div>
                        <div class="time_line-curve"></div>
                        <div class="time_line-content">
                            <h3 class="time_line-title">3. Campañas Inteligentes:</h3>
                            <div class="time_line-text"><p>Con miles de clientes segmentados en categorías relevantes, puedes enfocar tus campañas de publicidad directamente al público más receptivo, aumentando la efectividad y el rendimiento de tus campañas.</p></div>
                        </div>
                    </div>
                    <div class="time_line-item">
                        <div class="time_line-pointer"></div>
                        <div class="time_line-curve"></div>
                        <div class="time_line-content">
                            <h3 class="time_line-title">4. Anticipación de Tendencias:</h3>
                            <div class="time_line-text"><p>Gracias a la base de datos alimentada automáticamente, puedes anticipar tendencias de mercado, proyectando el crecimiento de productos y descartando aquellos que no ofrecen oportunidades.</p></div>
                        </div>
                    </div>
                </div>
                <div class="time_line-end_image"></div>
            </div>
        </div>
    </section>

    <section class="odoo-cards-section" style="background-color: var(--primary-color); padding-bottom: 60px;">
        <div class="container">
            <div class="odoo-cards-container">
                <div class="odoo-card">
                    <h4>Base de datos</h4>
                    <p>Recolectar datos de los clientes es solo el primer paso. Esta información es esencial para crear estrategias de marketing efectivas y tomar decisiones clave en el embudo de ventas.</p>
                </div>
                <div class="odoo-card">
                    <h4>Comandos</h4>
                    <p>La Super API + Odoo ofrece además un control total de solicitudes a través de comandos de voz o mensajes de texto e imágenes directamente en WhatsApp.</p>
                </div>
                <div class="odoo-card">
                    <h4>Registro Automatizado</h4>
                    <p>Desde aquí, puedes solicitar proyecciones, KPIs y enviar cadenas de tareas a departamentos o personas específicas, registrando todas las acciones en Odoo para un mejor control sin necesidad de acceso manual.</p>
                </div>
            </div>
        </div>
    </section>

    <section class="opt-section">
        <div class="container">
            <h2>Optimización Ventas Odoo</h2>
            <div class="opt-flex">
                <div class="opt-text">
                    <p>La Super API conectada a Odoo facilita la conciliación automática de pagos, integrándolos en los módulos de cobranza y facturación, ofreciendo una experiencia fluida desde la compra hasta la factura y el seguimiento del envío. Esta integración, disponible gracias a Morna Tech, optimiza tu CRM Odoo al automatizar la extracción de información de las conversaciones con clientes para:</p>
                </div>
                <div class="opt-visuals">
                    <div class="opt-boxes">
                        <div class="opt-box">
                            <i class="fa-solid fa-note-sticky"></i>
                        </div>
                        <div class="opt-box">
                            <i class="fa-solid fa-people-arrows"></i>
                        </div>
                    </div>
                    <div class="opt-label-bar">
                        Generar etiquetas precisas para gestionar información.
                    </div>
                </div>
            </div>
            <p class="opt-footer-text">
                Maximiza productividad y eficiencia en ventas. Nos encargamos de la implementación desde cero; solo proporciona la información de tu negocio y te entregamos una solución lista y operativa.
            </p>
        </div>
    </section>


</main>
            ` }} />
            <Footer />
        </>
    );
}
