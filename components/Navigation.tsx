'use client';

import { useEffect, useRef, useState } from 'react';

const links = [
  ['home', 'HOME'],
  ['about', 'ABOUT ME'],
  ['subjects', 'SUBJECT OVERVIEW'],
  ['assignments', 'ASSIGNMENTS'],
  ['contact', 'CONTACT']
] as const;

export default function Navigation() {
  const [active, setActive] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 18);

      const sectionEntries = links
        .map(([id]) => document.getElementById(id))
        .filter(Boolean)
        .map((section) => ({
          id: section?.id,
          distance: Math.abs((section as HTMLElement).getBoundingClientRect().top - 140)
        }))
        .sort((a, b) => a.distance - b.distance);

      if (sectionEntries[0]?.id) {
        setActive(sectionEntries[0].id);
      }
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false);
        return;
      }

      if (event.key === 'Tab' && closeButtonRef.current) {
        const focusable = Array.from(document.querySelectorAll('.mobile-menu button')).filter(
          (element) => !element.hasAttribute('disabled')
        ) as HTMLButtonElement[];

        if (!focusable.length) return;

        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKeyDown);
    closeButtonRef.current?.focus();
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [open]);

  const goToSection = (id: string) => {
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setOpen(false);
  };

  return (
    <>
      <header className={`nav ${scrolled ? 'scrolled' : ''}`}>
        <div className="container nav-inner">
          <button type="button" className="brand" onClick={() => goToSection('home')} aria-label="Go to home section">
            E-<span>PORTFOLIO</span>
          </button>

          <nav className="nav-links" aria-label="Main navigation">
            {links.map(([id, label]) => (
              <button
                key={id}
                type="button"
                className={`nav-link ${active === id ? 'active' : ''}`}
                onClick={() => goToSection(id)}
                aria-current={active === id ? 'page' : undefined}
              >
                {label}
              </button>
            ))}
          </nav>

          <button
            type="button"
            className="menu-btn"
            onClick={() => setOpen(true)}
            aria-label="Open mobile menu"
            aria-expanded={open}
          >
            MENU /
          </button>
        </div>
      </header>

      {open && (
        <div className="mobile-menu" aria-modal="true" role="dialog" aria-label="Mobile navigation">
          <div className="mobile-menu-inner">
            {links.map(([id, label], index) => (
              <button
                key={id}
                type="button"
                className="mobile-nav-link"
                style={{ animationDelay: `${index * 70}ms` }}
                onClick={() => goToSection(id)}
              >
                {label}
              </button>
            ))}
            <button
              ref={closeButtonRef}
              type="button"
              className="mobile-close"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
            >
              CLOSE ×
            </button>
          </div>
        </div>
      )}
    </>
  );
}
