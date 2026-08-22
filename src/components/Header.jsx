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
    <header className={`absolute left-0 right-0 top-0 z-10 ${scrolled ? "fixed border-b border-[var(--line)] bg-[var(--background)]/95 backdrop-blur-md" : ""}`}>
      <div className={`mx-auto flex h-[92px] w-full max-w-[1280px] items-center justify-between px-8 transition-[height] duration-200 max-[640px]:h-[74px] ${scrolled ? "max-[640px]:h-16" : ""}`}>
        <a className="flex items-center gap-2.5 text-xs font-bold uppercase leading-[.95]" href="#home" aria-label="Kreative Grafix home">
          <Image className="h-11 w-[43px]" src="/logo.svg" alt="Kreative Grafix" width={46} height={48} priority />
          <span>Kreative<br />Grafix</span>
        </a>
        <nav className="ml-auto mr-[42px] flex gap-7 max-[900px]:hidden" aria-label="Main navigation">
          {links.map(([label, href]) => <a className="text-[11px] font-bold uppercase tracking-[.08em] text-[#4f5753] transition-colors hover:text-[var(--coral)]" key={href} href={href}>{label}</a>)}
        </nav>
        <a className="flex min-h-[42px] items-center gap-3 bg-[var(--ink)] px-4 text-[11px] font-bold uppercase tracking-[.08em] text-[var(--surface)] transition hover:-translate-y-0.5 hover:bg-[var(--teal-dark)] max-[900px]:hidden" href="#contact">Start a project <span className="text-[17px] text-[var(--teal)]">↗</span></a>
        <button
          className="flex cursor-pointer items-center gap-3 border-0 bg-transparent p-2.5 text-[11px] font-bold uppercase tracking-[.1em] text-[var(--ink)] min-[901px]:hidden"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span>{menuOpen ? "Close" : "Menu"}</span><i className="text-xl not-italic leading-[.5] text-[var(--coral)]" aria-hidden="true">{menuOpen ? "×" : "☰"}</i>
        </button>
      </div>
      <nav id="mobile-navigation" className={`flex max-h-0 flex-col overflow-hidden border-b border-[var(--line)] bg-[var(--surface)] px-8 opacity-0 transition-all duration-200 min-[901px]:hidden max-[640px]:px-5 ${menuOpen ? "max-h-[380px] px-8 py-2.5 opacity-100 max-[640px]:px-5" : ""}`} aria-label="Mobile navigation">
        {links.map(([label, href]) => <a className="border-b border-[var(--line)] py-3.5 font-serif text-[28px]" key={href} href={href} onClick={() => setMenuOpen(false)}>{label}</a>)}
        <a className="border-b border-[var(--line)] py-3.5 font-serif text-[28px] text-[var(--teal-dark)]" href="#contact" onClick={() => setMenuOpen(false)}>Start a project <span>↗</span></a>
      </nav>
    </header>
  );
}
