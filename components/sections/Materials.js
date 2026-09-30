import Link from "next/link";
import Image from "next/image";
import "./Materials.css";

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
    href: "/materiale/armare",
  },
  {
    key: "finisaj",
    title: "Finisaj decorativ",
    image: "/images/materiale/finisaj.webp",
    href: "/materiale/finisaj",
  },
];

export default function Materials({ headingLevel = 2 }) {
  const Heading = headingLevel === 1 ? "h1" : "h2";

  return (
    <section id="materiale" className="materials">
      <div className="wrap">
        <div className="mat-head">
          <Heading>Materiale de lucru</Heading>
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
                <Image
                  src={m.image}
                  alt={`Materiale pentru ${m.title.toLowerCase()}`}
                  fill
                  sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 400px"
                />
              </div>
              <div className="mat-body">
                <h3>{m.title}</h3>
                <Link href={m.href} className="mat-btn" aria-label={`Vezi produsele pentru ${m.title.toLowerCase()}`}>
                  Vezi produse
                  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M3 8h10M9 4l4 4-4 4" />
                  </svg>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
