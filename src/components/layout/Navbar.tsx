'use client';

import { useEffect, useState } from 'react';

const links = [
  { href: '#home', label: 'Home' }, { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' }, { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('home');

  useEffect(() => {
    const nodes = links.map((link) => document.querySelector(link.href)).filter(Boolean) as Element[];
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (visible?.target.id) setActive(visible.target.id);
    }, { rootMargin: '-20% 0px -65%', threshold: [0.05, 0.25, 0.5] });
    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  return (
    <nav className="nav-shell" aria-label="Primary navigation">
      <div className="container nav-inner">
        <a href="#home" className="brand" aria-label="Rayya Genaro home">Rayya Genaro</a>
        <div className="desktop-nav">{links.map((link) => <a key={link.href} href={link.href} aria-current={active === link.href.slice(1) ? 'location' : undefined}>{link.label}</a>)}</div>
        <a className="nav-contact" href="mailto:gennarorayya05@gmail.com">Let’s talk</a>
        <button className="menu-button" type="button" aria-label={open ? 'Close navigation' : 'Open navigation'} aria-expanded={open} onClick={() => setOpen(!open)}>
          <span className={`menu-icon ${open ? 'is-open' : ''}`} aria-hidden="true" />
        </button>
      </div>
      {open && <div className="mobile-nav">{links.map((link) => <a key={link.href} href={link.href} onClick={() => setOpen(false)}>{link.label}</a>)}</div>}
    </nav>
  );
}
