'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });
  const menuRef = useRef<HTMLUListElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Función para actualizar la posición de la barra blanca
  const updateIndicator = () => {
    if (typeof window === 'undefined') return;
    if (!menuRef.current || !wrapperRef.current) return;

    // Solo mostramos el indicador en pantallas grandes
    if (window.innerWidth <= 968) {
      setIndicatorStyle({ left: 0, width: 0 });
      return;
    }

    const activeLink = menuRef.current.querySelector('.mt-navbar-link.active') as HTMLElement;
    if (activeLink && activeLink.parentElement) {
      const li = activeLink.parentElement as HTMLLIElement;

      // Calculo robusto: offset del li + offset del ul
      const menuOffset = menuRef.current?.offsetLeft || 0;
      setIndicatorStyle({
        left: menuOffset + li.offsetLeft,
        width: li.offsetWidth,
      });
    } else {
      setIndicatorStyle({ left: 0, width: 0 });
    }
  };

  useEffect(() => {
    // Pequeño delay para asegurar que el DOM esté listo y estilos aplicados
    const timer = setTimeout(updateIndicator, 100);
    window.addEventListener('resize', updateIndicator);
    return () => {
      window.removeEventListener('resize', updateIndicator);
      clearTimeout(timer);
    };
  }, [pathname, isOpen]);

  const handleMouseEnter = (e: React.MouseEvent<HTMLLIElement>) => {
    if (typeof window === 'undefined') return;
    if (window.innerWidth <= 968) return;

    const li = e.currentTarget;
    const menuOffset = menuRef.current?.offsetLeft || 0;

    setIndicatorStyle({
      left: menuOffset + li.offsetLeft,
      width: li.offsetWidth,
    });
  };

  const handleMouseLeave = () => {
    updateIndicator();
  };

  return (
    <nav className={`mt-navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="mt-navbar-container">
        <Link href="/" className="mt-navbar-logo">
          <img
            src="https://morna.tech/wp-content/uploads/2024/04/logo-sticky.png"
            alt="Morna Tech Logo"
            className="mt-navbar-logo-img"
          />
        </Link>

        <div ref={wrapperRef} className="mt-navbar-menu-wrapper">
          <ul
            ref={menuRef}
            className={`mt-navbar-menu ${isOpen ? 'open' : ''}`}
            onMouseLeave={handleMouseLeave}
          >
            {/* Logo y Enlaces exclusivos para Móvil */}
            <li className="mt-navbar-mobile-logo mobile-only">
              <Link href="/" onClick={() => setIsOpen(false)}>
                <img
                  src="https://morna.tech/wp-content/uploads/2024/02/Logo-header2.png"
                  alt="Morna Tech Logo"
                />
              </Link>
            </li>
            <li className="mobile-only">
              <Link href="#hero" onClick={() => setIsOpen(false)} className="mt-navbar-link">
                Acerca De Nosotros
              </Link>
            </li>

            {/* Enlaces compartidos (Desktop y Móvil) */}
            <li onMouseEnter={handleMouseEnter} className="mt-navbar-item">
              <Link href="/superapi" onClick={() => setIsOpen(false)} className={`mt-navbar-link ${pathname === '/superapi' ? 'active' : ''}`}>
                <span>SuperApi</span>
                <span className="mobile-only mobile-arrow">›</span>
              </Link>
            </li>
            <li onMouseEnter={handleMouseEnter} className="mt-navbar-item">
              <Link href="/planes-odoo" onClick={() => setIsOpen(false)} className={`mt-navbar-link ${pathname === '/planes-odoo' ? 'active' : ''}`}>
                <span>Planes Odoo</span>
                <span className="mobile-only mobile-arrow">›</span>
              </Link>
            </li>
            <li onMouseEnter={handleMouseEnter} className="mt-navbar-item">
              <Link href="/seo-con-ia" onClick={() => setIsOpen(false)} className={`mt-navbar-link ${pathname === '/seo-con-ia' ? 'active' : ''}`}>
                <span className="desktop-only">Seo con IA</span>
                <span className="mobile-only">Servicios Con IA</span>
                <span className="mobile-only mobile-arrow">›</span>
              </Link>
            </li>

            {/* Enlaces finales exclusivos para Móvil */}
            <li className="mobile-only">
              <Link href="#" onClick={() => setIsOpen(false)} className="mt-navbar-link">
                Servicios Adicionales <span className="mobile-arrow">›</span>
              </Link>
            </li>
          </ul>

          {/* Barra indicadora (Solo visible en escritorio) */}
          <div
            className="mt-navbar-indicator desktop-only"
            style={{
              left: `${indicatorStyle.left}px`,
              width: `${indicatorStyle.width}px`,
              opacity: (indicatorStyle.width > 0 && !isOpen) ? 1 : 0
            }}
          />
        </div>

        <button
          className={`mt-navbar-mobile-toggle ${isOpen ? 'open' : ''}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
}
