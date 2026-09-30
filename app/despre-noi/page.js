import Link from "next/link";
import Image from "next/image";
import { SITE } from "@/lib/site";
import "./page.css";

const description =
  "Axicons Decor Grup S.R.L. face fațade la cheie în toată Moldova din 2023: termoizolare, armare și finisaj decorativ, cu o echipă proprie de 12 oameni.";

export const metadata = {
  title: "Despre noi",
  description,
  alternates: { canonical: "/despre-noi" },
  openGraph: {
    type: "website",
    locale: "ro_MD",
    siteName: SITE.name,
    title: "Axicons Decor Grup — Despre noi",
    description,
    url: "/despre-noi",
  },
};

const SERVICES = [
  {
    title: "Termoizolare",
    text: "Plăci de polistiren lipite și fixate mecanic pe fațadă, ca iarna casa să piardă mai puțină căldură, iar vara să rămână răcoroasă.",
    href: "/materiale/termoizolare",
  },
  {
    title: "Armarea pereților",
    text: "Un strat de adeziv cu plasă din fibră de sticlă, colțare și profile, care ține fațada dreaptă și o ferește de fisuri.",
    href: "/materiale/armare",
  },
  {
    title: "Finisaj decorativ",
    text: "Grund și tencuială decorativă în culoarea și textura alese de tine, rezistente la ploaie, ger și soare.",
    href: "/materiale/finisaj",
  },
];

const aboutData = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: "Despre Axicons Decor Grup",
  url: `${SITE.url}/despre-noi`,
  inLanguage: "ro",
  about: { "@id": `${SITE.url}/#firma` },
};

export default function DesprePage() {
  return (
    <main className="about">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutData) }}
      />

      <section className="about-intro">
        <div className="wrap about-intro-grid">
          <div className="about-intro-copy">
            <h1>Despre noi</h1>
            <p className="about-lead">
              {SITE.legalName} face fațade la cheie în toată Moldova: termoizolare,
              armarea pereților și finisaj decorativ. Lucrăm cu echipa noastră, de la prima măsurătoare
              până la ultimul strat de tencuială.
            </p>
            <dl className="about-facts">
              <div>
                <dt>Din</dt>
                <dd>2023</dd>
              </div>
              <div>
                <dt>Oameni în echipă</dt>
                <dd>{SITE.employees}</dd>
              </div>
              <div>
                <dt>Lucrăm în</dt>
                <dd>Toată Moldova</dd>
              </div>
            </dl>
          </div>
          <div className="about-photo">
            <Image
              src="/images/hero-axicons-v2.webp"
              alt="Echipa Axicons la o fațadă în lucru"
              fill
              sizes="(max-width: 900px) 100vw, 560px"
              preload
            />
          </div>
        </div>
      </section>

      <section className="about-section">
        <div className="wrap about-story">
          <h2>Cine suntem</h2>
          <div className="about-text">
            <p>
              Firma a fost înființată pe {SITE.foundedDisplay} de {SITE.founder}, care o
              conduce și astăzi. Am pornit cu o echipă mică, iar în doi ani am ajuns la{" "}
              {SITE.employees} oameni care lucrează împreună pe fiecare șantier.
            </p>
            <p>
              Ne ocupăm de un singur lucru și încercăm să-l facem bine: fațada casei. Asta
              înseamnă că știm ce urmează după fiecare strat și de ce contează ordinea lor.
              O termoizolare făcută corect se vede în factura la încălzire, iar un finisaj
              făcut corect se vede ani la rând.
            </p>
            <p>
              Aceeași echipă face evaluarea, execuția și predarea. Nu dăm lucrarea mai
              departe, așa că știi mereu cu cine vorbești și cine răspunde de rezultat.
            </p>
          </div>
        </div>
      </section>

      <section className="about-section about-section--alt">
        <div className="wrap">
          <h2>Ce facem</h2>
          <div className="about-services">
            {SERVICES.map((s) => (
              <article key={s.title} className="about-service">
                <h3>{s.title}</h3>
                <p>{s.text}</p>
                <Link href={s.href}>Vezi materialele</Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="about-section">
        <div className="wrap about-company">
          <h2>Date de firmă</h2>
          <dl className="about-registry">
            <div>
              <dt>Denumire</dt>
              <dd>{SITE.legalName}</dd>
            </div>
            <div>
              <dt>IDNO</dt>
              <dd>{SITE.idno}</dd>
            </div>
            <div>
              <dt>Înregistrată</dt>
              <dd>{SITE.foundedDisplay}</dd>
            </div>
            <div>
              <dt>Sediu</dt>
              <dd>{SITE.street}, {SITE.city}, {SITE.postalCode}</dd>
            </div>
            <div>
              <dt>Administrator</dt>
              <dd>{SITE.founder}</dd>
            </div>
            <div>
              <dt>Telefon</dt>
              <dd><a href={`tel:${SITE.phone}`}>{SITE.phoneDisplay}</a></dd>
            </div>
            <div>
              <dt>Email</dt>
              <dd><a href={`mailto:${SITE.email}`}>{SITE.email}</a></dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="about-cta">
        <div className="wrap">
          <div className="about-cta-box">
            <h2>Hai să vedem fațada ta</h2>
            <p>Evaluarea la fața locului este gratuită. Lasă-ne numărul și te sunăm noi.</p>
            <div className="about-cta-actions">
              <Link href="/#contact" className="btn btn-primary">Solicită consultație gratuită</Link>
              <Link href="/#calculator" className="btn btn-ghost">Calculează prețul</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
