"use client";

import { useState, useEffect } from "react";
import "./components/Header.css";
import Logo from "@/components/Logo";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={isScrolled ? "scrolled" : ""}>
      <div className="wrap nav-wrap">
        <a href="#top" className="brand">
          <Logo />
          <span className="brand-text">
            <b>AXICONS</b>
            <small>DECOR GRUP</small>
          </span>
        </a>

        <nav>
          <ul className={`nav-links ${isOpen ? "open" : ""}`}>
            <li><a href="#top" onClick={() => setIsOpen(false)}>Acasă</a></li>
            <li><a href="#calculator" onClick={() => setIsOpen(false)}>Calculator</a></li>
            <li><a href="#beneficii" onClick={() => setIsOpen(false)}>Beneficii</a></li>
            <li><a href="#contact" onClick={() => setIsOpen(false)}>Contact</a></li>
          </ul>
        </nav>

        <a className="nav-phone" href="tel:+37360364435">
          +373 60 364 435
        </a>

        <button
          className="nav-toggle"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Deschide meniul"
          aria-expanded={isOpen}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </header>
  );
}