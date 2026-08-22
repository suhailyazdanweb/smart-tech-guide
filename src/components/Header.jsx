"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const links = [
  ["Home", "#home"],
  ["Services", "#services"],
  ["Work", "#work"],
  ["About", "#about"],
  ["Contact", "#contact"],
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const updateScroll = () => setScrolled(window.scrollY > 24);
    updateScroll();
    window.addEventListener("scroll", updateScroll, { passive: true });
    return () => window.removeEventListener("scroll", updateScroll);
  }, []);

  return (
    <header className={`site-header ${scrolled ? "site-header-scrolled" : ""}`}>
      <div className="container header-inner">
        <a className="brand" href="#home" aria-label="Kreative Grafix home">
          <Image src="/logo.svg" alt="Kreative Grafix" width={46} height={48} priority />
          <span>Kreative<br />Grafix</span>
        </a>
        <nav className="desktop-nav" aria-label="Main navigation">
          {links.map(([label, href]) => <a key={href} href={href}>{label}</a>)}
        </nav>
        <a className="header-cta" href="#contact">Start a project <span className="arrow">↗</span></a>
        <button
          className="menu-toggle"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span>{menuOpen ? "Close" : "Menu"}</span><i aria-hidden="true">{menuOpen ? "×" : "☰"}</i>
        </button>
      </div>
      <nav id="mobile-navigation" className={`mobile-nav ${menuOpen ? "mobile-nav-open" : ""}`} aria-label="Mobile navigation">
        {links.map(([label, href]) => <a key={href} href={href} onClick={() => setMenuOpen(false)}>{label}</a>)}
        <a className="mobile-nav-cta" href="#contact" onClick={() => setMenuOpen(false)}>Start a project <span>↗</span></a>
      </nav>
    </header>
  );
}
