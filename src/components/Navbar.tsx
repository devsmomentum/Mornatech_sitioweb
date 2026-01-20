'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });
  const menuRef = useRef<HTMLUListElement>(null);

  const pathname = usePathname();

  useEffect(() => {
    if (!menuRef.current) return;

    // Find the link that matches the current pathname
    const links = menuRef.current.querySelectorAll('a');
    let currentActive: HTMLAnchorElement | null = null;

    // Convert NodeList to Array to safely iterate
    Array.from(links).forEach((link) => {
      // Check if href matches pathname (handling potential trailing slashes if needed, though simple equality usually works for exact matches)
      const href = link.getAttribute('href');
      if (href === pathname) {
        currentActive = link as HTMLAnchorElement;
      }
    });

    // If found, update indicator
    if (currentActive) {
      const menuRect = menuRef.current.getBoundingClientRect();
      const activeRect = (currentActive as HTMLElement).getBoundingClientRect();

      const relativeLeft = activeRect.left - menuRect.left;
      const width = 30; // Fixed width for indicator

      const itemCenter = activeRect.width / 2;
      const centeredLeft = relativeLeft + itemCenter - (width / 2);

      setIndicatorStyle({
        left: centeredLeft,
        width: width,
      });
    } else {
      setIndicatorStyle({ left: 0, width: 0 });
    }
  }, [pathname, isOpen]);

  const handleMouseEnter = (e: React.MouseEvent<HTMLLIElement>) => {
    if (menuRef.current) {
      const menuRect = menuRef.current.getBoundingClientRect();
      const target = e.currentTarget; // This is the LI
      const targetRect = target.getBoundingClientRect();

      const relativeLeft = targetRect.left - menuRect.left;
      const width = 30;

      const itemCenter = targetRect.width / 2;
      const centeredLeft = relativeLeft + itemCenter - (width / 2);

      setIndicatorStyle({
        left: centeredLeft,
        width: width,
      });
    }
  };

  const handleMouseLeave = () => {
    if (!menuRef.current) return;

    const links = menuRef.current.querySelectorAll('a');
    let currentActive: HTMLAnchorElement | null = null;

    Array.from(links).forEach((link) => {
      if (link.getAttribute('href') === pathname) {
        currentActive = link as HTMLAnchorElement;
      }
    });

    if (currentActive) {
      const menuRect = menuRef.current.getBoundingClientRect();
      const activeRect = (currentActive as HTMLElement).getBoundingClientRect();

      const relativeLeft = activeRect.left - menuRect.left;
      const width = 30;

      const itemCenter = activeRect.width / 2;
      const centeredLeft = relativeLeft + itemCenter - (width / 2);

      setIndicatorStyle({
        left: centeredLeft,
        width: width,
      });
    } else {
      setIndicatorStyle(prev => ({ ...prev, width: 0 }));
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
            <li onMouseEnter={handleMouseEnter} style={{ display: 'flex', justifyContent: 'center', width: 'auto' }}>
              <Link href="/superapi" className={`mt-navbar-link ${pathname === '/superapi' ? 'active' : ''}`}>
                SuperApi
              </Link>
            </li>
            <li onMouseEnter={handleMouseEnter} style={{ display: 'flex', justifyContent: 'center', width: 'auto' }}>
              <Link href="/planes-odoo" className={`mt-navbar-link ${pathname === '/planes-odoo' ? 'active' : ''}`}>
                Planes Odoo
              </Link>
            </li>
            <li onMouseEnter={handleMouseEnter} style={{ display: 'flex', justifyContent: 'center', width: 'auto' }}>
              <Link href="/seo-con-ia" className={`mt-navbar-link ${pathname === '/seo-con-ia' ? 'active' : ''}`}>
                Seo con IA
              </Link>
            </li>
          </ul>
          <div
            className="mt-navbar-indicator"
            style={{
              left: `${indicatorStyle.left}px`,
              width: `${indicatorStyle.width}px`,
              opacity: indicatorStyle.width > 0 ? 1 : 0
            }}
          />
        </div>
      </div>
    </nav>
  );
}
