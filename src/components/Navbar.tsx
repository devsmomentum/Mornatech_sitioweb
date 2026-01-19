'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });
  const menuRef = useRef<HTMLUListElement>(null);
  const activeRef = useRef<HTMLAnchorElement>(null);

  // Set initial indicator position on the active item
  useEffect(() => {
    if (activeRef.current && menuRef.current) {
      const menuRect = menuRef.current.getBoundingClientRect();
      const activeRect = activeRef.current.getBoundingClientRect();
      setIndicatorStyle({
        left: activeRect.left - menuRect.left,
        width: 30,
      });
    }
  }, []);

  const handleMouseEnter = (e: React.MouseEvent<HTMLElement>) => {
    if (menuRef.current) {
      const menuRect = menuRef.current.getBoundingClientRect();
      const targetRect = e.currentTarget.getBoundingClientRect();
      setIndicatorStyle({
        left: targetRect.left - menuRect.left,
        width: 30,
      });
    }
  };

  const handleMouseLeave = () => {
    // Return to active item
    if (activeRef.current && menuRef.current) {
      const menuRect = menuRef.current.getBoundingClientRect();
      const activeRect = activeRef.current.getBoundingClientRect();
      setIndicatorStyle({
        left: activeRect.left - menuRect.left,
        width: 30,
      });
    }
  };

  return (
    <nav className="mt-navbar">
      <div className="mt-navbar-container">
        <Link href="/" className="mt-navbar-logo">
          <img
            src="https://morna.tech/wp-content/uploads/2024/04/logo-sticky.png"
            alt="Morna Tech Logo"
            className="mt-navbar-logo-img"
          />
        </Link>

        <button
          className="mt-navbar-mobile-toggle"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div className="mt-navbar-menu-wrapper">
          <ul
            ref={menuRef}
            className={`mt-navbar-menu ${isOpen ? 'open' : ''}`}
            onMouseLeave={handleMouseLeave}
          >
            <li onMouseEnter={handleMouseEnter}>
              <Link href="/superapi" className="mt-navbar-link active" ref={activeRef}>
                SuperApi
              </Link>
            </li>
            <li onMouseEnter={handleMouseEnter}>
              <Link href="/planes-odoo" className="mt-navbar-link">
                Planes Odoo
              </Link>
            </li>
            <li onMouseEnter={handleMouseEnter}>
              <Link href="/seo-con-ia" className="mt-navbar-link">
                Seo con IA
              </Link>
            </li>
            {/* <li onMouseEnter={handleMouseEnter}>
              <Link href="/#microapps" className="mt-navbar-link">
                Microapps
              </Link>
            </li> */}
          </ul>
          <div
            className="mt-navbar-indicator"
            style={{
              left: `${indicatorStyle.left}px`,
              width: `${indicatorStyle.width}px`,
            }}
          />
        </div>
      </div>
    </nav>
  );
}
