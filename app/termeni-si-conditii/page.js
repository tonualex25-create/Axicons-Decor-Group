import Link from "next/link";
import { SITE } from "@/lib/site";
import "@/styles/legal.css";

const description =
  "Condițiile de folosire a site-ului axicons.md: cum funcționează calculatorul de preț, solicitările de consultație, drepturile de autor și legea aplicabilă.";

export const metadata = {
  title: "Termeni și condiții",
  description,
  alternates: { canonical: "/termeni-si-conditii" },
  openGraph: {
    type: "website",
    locale: "ro_MD",
    siteName: SITE.name,
    title: "Axicons Decor Grup — Termeni și condiții",
    description,
    url: "/termeni-si-conditii",
  },
};

export default function TermeniPage() {
  return (
    <main>
      <section className="legal">
        <div className="wrap legal-inner">
          <div className="legal-header">
            <h1>Termeni și condiții</h1>
            <p className="legal-body">Ultima actualizare: septembrie 2026</p>
          </div>

          <div className="legal-body">
            <p>
              Acești termeni se aplică folosirii site-ului axicons.md, administrat de{" "}
              {SITE.legalName}. Folosind site-ul, ești de acord cu ei. Dacă nu ești de
              acord, te rugăm să nu folosești site-ul.
            </p>

            <h2>1. Cine suntem</h2>
            <p>
              {SITE.legalName} (IDNO {SITE.idno}), cu sediul în {SITE.street},{" "}
              {SITE.city}, execută lucrări de fațadă la cheie: termoizolare, armarea
              pereților și finisaj decorativ. Ne poți contacta la{" "}
              <a href={`tel:${SITE.phone}`}>{SITE.phoneDisplay}</a> sau la{" "}
              <a href={`mailto:${SITE.email}`}>{SITE.email}</a>.
            </p>

            <h2>2. Informațiile de pe site</h2>
            <p>
              Textele, fotografiile și descrierile materialelor au scop informativ. Ne
              străduim să fie corecte și la zi, dar materialele concrete folosite la o
              lucrare pot varia în funcție de proiect și de disponibilitatea furnizorilor.
            </p>

            <h2>3. Calculatorul de preț</h2>
            <p>
              Prețul afișat de calculator este o estimare orientativă și nu reprezintă o
              ofertă fermă. Costul final se stabilește după evaluarea gratuită la fața
              locului, în funcție de suprafața reală, starea pereților și materialele
              alese, și îți este comunicat înainte de începerea lucrărilor.
            </p>

            <h2>4. Solicitările de consultație</h2>
            <p>
              Trimiterea formularului de contact nu te obligă la nimic și nu încheie un
              contract. Te contactăm pentru a stabili o vizită. Lucrările se execută doar pe
              baza unui contract sau deviz acceptat de ambele părți; condițiile din acel
              document au prioritate față de informațiile de pe site.
            </p>

            <h2>5. Folosirea corectă a site-ului</h2>
            <p>
              Te rugăm să nu trimiți prin formular date false sau datele altei persoane
              fără acordul ei și să nu încerci să perturbi funcționarea site-ului.
            </p>

            <h2>6. Drepturi de autor</h2>
            <p>
              Numele, logo-ul, textele și fotografiile de pe site aparțin {SITE.legalName}.
              Nu pot fi copiate sau folosite în scop comercial fără acordul nostru scris.
            </p>

            <h2>7. Linkuri externe</h2>
            <p>
              Site-ul conține linkuri spre paginile noastre de Facebook, Instagram și
              TikTok. Acele platforme au propriile reguli și politici de confidențialitate,
              pentru care nu răspundem.
            </p>

            <h2>8. Limitarea răspunderii</h2>
            <p>
              Nu răspundem pentru decizii luate doar pe baza informațiilor de pe site sau
              pentru întreruperi temporare ale acestuia. Răspunderea pentru lucrările
              executate este stabilită prin contractul semnat cu fiecare client.
            </p>

            <h2>9. Datele personale</h2>
            <p>
              Modul în care folosim datele trimise prin formular este descris în{" "}
              <Link href="/confidentialitate">Politica de confidențialitate</Link>.
            </p>

            <h2>10. Modificări</h2>
            <p>
              Putem actualiza acești termeni. Versiunea în vigoare este cea publicată pe
              această pagină, cu data ultimei actualizări afișată sus.
            </p>

            <h2>11. Legea aplicabilă</h2>
            <p>
              Acești termeni sunt guvernați de legislația Republicii Moldova. Orice
              neînțelegere o rezolvăm mai întâi pe cale amiabilă, iar dacă nu reușim,
              aceasta va fi soluționată de instanțele competente din Republica Moldova.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
