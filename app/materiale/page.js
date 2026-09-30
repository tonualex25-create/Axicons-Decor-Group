import Link from "next/link";
import Materials from "@/components/sections/Materials";
import { SITE } from "@/lib/site";
import "./page.css";

const description =
  "Materialele cu care lucrăm la fațade: polistiren, adezivi, plasă de armare, profile, grund și tencuială decorativă Caparol. Vezi ce conține fiecare strat.";

export const metadata = {
  title: "Materiale pentru fațadă",
  description,
  alternates: { canonical: "/materiale" },
  openGraph: {
    type: "website",
    locale: "ro_MD",
    siteName: SITE.name,
    title: "Axicons Decor Grup — Materiale pentru fațadă",
    description,
    url: "/materiale",
  },
};

const breadcrumbData = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Acasă", item: `${SITE.url}/` },
    { "@type": "ListItem", position: 2, name: "Materiale de lucru", item: `${SITE.url}/materiale` },
  ],
};

export default function MaterialePage() {
  return (
    <main className="materiale-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }}
      />
      <Materials headingLevel={1} />

      <section className="mat-guide">
        <div className="wrap mat-guide-grid">
          <h2>Un sistem, trei straturi</h2>
          <div className="mat-guide-text">
            <p>
              O fațadă termoizolată nu este un singur material, ci trei straturi care lucrează
              împreună. Fiecare depinde de cel de dedesubt, așa că le aplicăm mereu în aceeași
              ordine și cu materiale care se potrivesc între ele.
            </p>
            <p>
              <Link href="/materiale/termoizolare">Termoizolarea</Link> vine prima: plăci de
              polistiren de 10–15 cm, lipite cu adeziv, fixate cu dibluri și cu rosturile umplute
              cu spumă. Ea oprește pierderea căldurii prin pereți.
            </p>
            <p>
              <Link href="/materiale/armare">Armarea pereților</Link> acoperă polistirenul cu un
              strat de adeziv și plasă din fibră de sticlă, plus colțare, profile de geam și
              picurătoare. Ea ține fațada dreaptă și o ferește de fisuri.
            </p>
            <p>
              <Link href="/materiale/finisaj">Finisajul decorativ</Link> încheie lucrarea: grund
              și tencuială decorativă Caparol, în culoarea și textura alese de tine. El dă
              aspectul final și apără straturile de dedesubt de ploaie, ger și soare.
            </p>
            <p>
              Poți comanda fiecare strat separat sau fațada completă la cheie, la 1000 lei pe
              metru pătrat, cu schela și transportul incluse. Prețul pentru casa ta îl vezi
              imediat în <Link href="/#calculator">calculator</Link>, iar evaluarea la fața
              locului este gratuită, oriunde în Moldova.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
