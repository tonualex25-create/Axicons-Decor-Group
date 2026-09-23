"use client";

import Link from "next/link";
import "./components/Materials.css";

const MATERIALS = [
  {
    key: "termoizolare",
    title: "Termoizolare",
    image: "/images/materiale/termoizolare.webp",
    badge: "CEL MAI CĂUTAT",
    href: "/materiale/termoizolare",
  },
  {
    key: "armare",
    title: "Armarea pereților",
    image: "/images/materiale/armare.webp",
  },
  {
    key: "finisaj",
    title: "Finisaj decorativ",
    image: "/images/materiale/finisaj.webp",
  },
];

export default function Materials() {
  return (
    <section id="materiale" className="materials">
      <div className="wrap">
        <div className="mat-head">
          <div>
            <p className="eyebrow">
              <span className="tag">
                <svg viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M6 0v4M6 8v4M0 6h4M8 6h4" />
                </svg>
                AXI-04
              </span>
              <span>/</span>
              <span>MATERIALE</span>
            </p>
            <h2>Materiale de lucru</h2>
          </div>
          <p>
            Folosim doar materiale verificate, potrivite pentru fiecare etapă a lucrării — de la
            termoizolație până la finisajul decorativ.
          </p>
        </div>

        <div className="mat-grid">
          {MATERIALS.map((m) => (
            <article className="mat-card" key={m.key}>
              {m.badge && <span className="mat-badge">{m.badge}</span>}
              <div className="mat-image">
                <img src={m.image} alt={m.title} loading="lazy" />
              </div>
              <div className="mat-body">
                <h3>{m.title}</h3>
                {m.href ? (
                  <Link href={m.href} className="mat-btn">
                    Vezi produse
                    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M3 8h10M9 4l4 4-4 4" />
                    </svg>
                  </Link>
                ) : (
                  <button type="button" className="mat-btn">
                    Vezi produse
                    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M3 8h10M9 4l4 4-4 4" />
                    </svg>
                  </button>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
