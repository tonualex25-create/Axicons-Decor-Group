import Image from "next/image";
import "./Hero.css";

export default function Hero() {
  return (
    <section id="top" className="hero">
      <Image
        src="/images/hero-axicons-v2.webp"
        alt="Echipa Axicons tencuind fațada unei case noi"
        fill
        preload
        sizes="100vw"
        quality={85}
        className="hero-photo"
      />
      <div className="hero-shade" aria-hidden="true"></div>

      <div className="hero-content">
        <h1 className="hero-title">
          <span className="hero-name">Axicons</span>{" "}
          <span className="hero-legal">Decor Grup S.R.L.</span>
        </h1>
        <p className="hero-lead">Renovări și finisaje la cheie, făcute cu grijă.</p>
        <a className="hero-cta" href="#contact">
          Solicită consultație gratuită
          <span className="hero-cta-dot" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </span>
        </a>
      </div>
    </section>
  );
}
