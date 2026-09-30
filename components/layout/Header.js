"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "./Header.css";
import Logo from "@/components/ui/Logo";

const links = [
  { href: "/", id: "top", label: "Acasă" },
  { href: "/#calculator", id: "calculator", label: "Calculator" },
  { href: "/materiale", id: "materiale", label: "Materiale" },
  { href: "/#beneficii", id: "beneficii", label: "Beneficii" },
  { href: "/despre-noi", id: "despre", label: "Despre noi" },
  { href: "/#contact", id: "contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [section, setSection] = useState("top");

  const headerRef = useRef(null);

  useEffect(() => {
    const header = headerRef.current;
    if (!header) return;
    const setHeight = () =>
      document.documentElement.style.setProperty("--header-h", `${Math.ceil(header.offsetHeight)}px`);
    setHeight();
    const observer = new ResizeObserver(setHeight);
    observer.observe(header);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!isHome) return;
    let frame = 0;
    const update = () => {
      frame = 0;
      const doc = document.documentElement;
      if (window.innerHeight + window.scrollY >= doc.scrollHeight - 4) {
        setSection(links[links.length - 1].id);
        return;
      }
      const line = window.innerHeight * 0.45;
      let current = links[0].id;
      let currentTop = -Infinity;
      links.forEach(({ id }) => {
        const el = document.getElementById(id);
        const top = el ? el.getBoundingClientRect().top : Infinity;
        if (top <= line && top > currentTop) {
          current = id;
          currentTop = top;
        }
      });
      setSection(current);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [isHome]);

  const activeId = isHome
    ? section
    : pathname.startsWith("/materiale")
      ? "materiale"
      : pathname === "/despre-noi"
        ? "despre"
        : null;

  const classes = [
    isHome ? "on-hero" : "",
    isScrolled ? "scrolled" : "",
    isOpen ? "is-open" : "",
  ].filter(Boolean).join(" ");

  return (
    <header ref={headerRef} className={classes}>
      <div className="nav-wrap">
        <Link href="/" className="brand" aria-label="Axicons Decor Grup, prima pagină" onClick={() => setIsOpen(false)}>
          <Logo light />
          <span className="brand-name">AXICONS</span>
        </Link>

        <nav aria-label="Principal">
          <ul id="meniu" className="nav-links">
            {links.map((link) => (
              <li key={link.id}>
                <Link
                  href={link.href}
                  aria-current={activeId === link.id ? (isHome ? "location" : "page") : undefined}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <a className="nav-phone" href="tel:+37360364435" aria-label="Sună la +373 60 364 435">
          <span className="nav-phone-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round">
              <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2" />
            </svg>
          </span>
          <span className="nav-phone-number">+373 60 364 435</span>
        </a>

        <button
          type="button"
          className="nav-toggle"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Închide meniul" : "Deschide meniul"}
          aria-expanded={isOpen}
          aria-controls="meniu"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
            {isOpen ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 8h16M4 16h16" />}
          </svg>
        </button>
      </div>
    </header>
  );
}
