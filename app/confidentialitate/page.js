import "./page.css";

export const metadata = {
  title: "Politica de confidențialitate",
  description:
    "Cum colectează, folosește și protejează Axicons Decor Grup S.R.L. datele tale personale.",
};

export default function ConfidentialitatePage() {
  return (
    <main>
      <section className="legal">
        <div className="wrap legal-inner">
          <div className="legal-header">
            <h1>Politica de confidențialitate</h1>
            <p className="legal-body">Ultima actualizare: septembrie 2026</p>
          </div>

          <div className="legal-body">
            <p>
              Axicons Decor Grup S.R.L. („noi", „firma") respectă confidențialitatea
              datelor tale personale. Acest document explică ce date colectăm prin
              intermediul site-ului axicons.md, de ce, cum le folosim și ce drepturi ai.
            </p>

            <h2>1. Ce date colectăm</h2>
            <p>
              Prin formularul de contact de pe site colectăm doar datele pe care
              le introduci chiar tu: nume, prenume și număr de telefon.
            </p>

            <h2>2. De ce colectăm aceste date</h2>
            <p>
              Folosim datele exclusiv pentru a te contacta în legătură cu solicitarea
              ta de consultație sau evaluare gratuită a lucrării. Nu folosim datele
              tale în alte scopuri și nu le vindem sau transmitem către terți.
            </p>

            <h2>3. Cum sunt stocate datele</h2>
            <p>
              Datele trimise prin formular sunt salvate într-un tabel Google Sheets,
              accesibil doar echipei Axicons Decor Grup. Transmiterea se face direct
              din browserul tău către acest tabel, printr-o conexiune securizată.
            </p>

            <h2>4. Cât timp păstrăm datele</h2>
            <p>
              Păstrăm datele atât timp cât este necesar pentru a te contacta și,
              dacă devii client, pe durata colaborării. Poți solicita oricând
              ștergerea lor mai devreme.
            </p>

            <h2>5. Drepturile tale</h2>
            <p>
              Ai dreptul să soliciți oricând acces la datele tale, corectarea lor
              sau ștergerea completă. Pentru asta, scrie-ne la adresa de mai jos.
            </p>

            <h2>6. Cookie-uri</h2>
            <p>
              Site-ul axicons.md nu folosește în prezent cookie-uri de urmărire
              sau analiză. Dacă acest lucru se va schimba în viitor, vom actualiza
              această pagină și vom cere consimțământul tău explicit.
            </p>

            <h2>7. Contact</h2>
            <p>
              Pentru orice întrebare legată de datele tale personale, ne poți scrie
              la <a href="mailto:axiconsdecorgrup@mail.ru">axiconsdecorgrup@mail.ru</a> sau
              suna la <a href="tel:+37360364435">+373 60 364 435</a>.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}