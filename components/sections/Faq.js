import "./Faq.css";

const QUESTIONS = [
  {
    q: "Cât costă fațada la cheie?",
    a: "Pachetul complet, cu termoizolare, armare și finisaj decorativ, costă 1000 lei pe metru pătrat. Cu calculatorul de mai sus vezi imediat prețul pentru suprafața casei tale.",
  },
  {
    q: "Cât durează lucrarea?",
    a: "În medie, o fațadă este gata în aproximativ 2 luni. Termenul exact îl stabilim după evaluare, în funcție de suprafață și de starea pereților.",
  },
  {
    q: "Lucrați și toamna?",
    a: "Da, lucrăm și toamna. Sună-ne și stabilim împreună când putem începe.",
  },
  {
    q: "Ce grosime are polistirenul?",
    a: "Folosim polistiren de 10–15 cm, în funcție de casă și de cât de bine vrei să fie izolată.",
  },
  {
    q: "Evaluarea este gratuită?",
    a: "Da. Venim la fața locului, măsurăm fațada și îți spunem prețul, fără nicio obligație din partea ta.",
  },
];

const faqData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: QUESTIONS.map(({ q, a }) => ({
    "@type": "Question",
    name: q,
    acceptedAnswer: { "@type": "Answer", text: a },
  })),
};

export default function Faq() {
  return (
    <section id="intrebari" className="faq">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }}
      />
      <div className="wrap faq-grid">
        <div className="faq-head">
          <h2>Întrebări frecvente</h2>
          <p>
            Lucrăm în toată Moldova. Dacă nu găsești aici răspunsul, sună-ne la{" "}
            <a href="tel:+37360364435">+373 60 364 435</a>.
          </p>
        </div>

        <div className="faq-list">
          {QUESTIONS.map(({ q, a }) => (
            <details key={q} className="faq-item">
              <summary>
                {q}
                <span className="faq-icon" aria-hidden="true"></span>
              </summary>
              <p>{a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
