import MaterialDetailPage from "@/components/templates/MaterialDetailPage";

export const metadata = {
  title: "Finisaj decorativ fațadă: preț și etape",
  description:
    "Stratul final al fațadei: grund de amorsare și tencuială decorativă rezistentă la intemperii și UV, în culoarea și textura alese de tine.",
  alternates: { canonical: "/materiale/finisaj" },
  openGraph: {
    title: "Axicons Decor Grup — Finisaj decorativ fațadă: preț și etape",
    description:
      "Stratul final al fațadei: grund de amorsare și tencuială decorativă rezistentă la intemperii și UV, în culoarea și textura alese de tine.",
    type: "website",
    locale: "ro_MD",
    siteName: "Axicons Decor Grup",
    url: "/materiale/finisaj",
  },
};

const ITEMS = [
  {
    name: "Grunt",
    description:
      "Grund de amorsare aplicat înainte de tencuiala decorativă, pentru a uniformiza absorbția suprafeței și a îmbunătăți aderența finisajului.",
  },
  {
    name: "Tencuială",
    description:
      "Tencuială decorativă aplicată ca strat final, care dă textura și culoarea fațadei, rezistentă la intemperii și radiații UV.",
  },
];

const ARTICLE = [
  {
    title: "Ce este finisajul decorativ",
    paragraphs: [
      "Finisajul este stratul pe care îl vede toată lumea: culoarea și textura casei tale. Se aplică peste stratul de armare și are două părți, grundul și tencuiala decorativă.",
      "Pe lângă aspect, finisajul protejează tot ce este dedesubt. El ține piept ploii, înghețului și soarelui, ca straturile de armare și termoizolare să rămână uscate și întregi ani la rând.",
    ],
  },
  {
    title: "Grundul, primul strat",
    paragraphs: [
      "Grundul se aplică pe suprafața armată, după ce s-a uscat complet. El face ca peretele să absoarbă uniform, ca tencuiala să se prindă bine și să se usuce la fel pe toată suprafața. Fără grund, pe fațadă pot apărea pete și diferențe de nuanță.",
    ],
  },
  {
    title: "Tencuiala decorativă",
    paragraphs: [
      "Pentru stratul final folosim tencuială decorativă Caparol, rezistentă la intemperii și la radiațiile UV, așa că își păstrează culoarea în timp.",
      "Textura și culoarea le alegi tu, din mostre. Textura se formează chiar la aplicare, din granulele tencuielii, așa că fațada are aceeași textură pe toată suprafața.",
    ],
  },
  {
    title: "Cum alegi culoarea",
    paragraphs: [
      "Culoarea arată altfel pe mostra mică decât pe o fațadă întreagă, în lumina zilei. Câteva sfaturi care ajută:",
    ],
    list: [
      "privește mostra afară, pe peretele casei, dimineața și seara;",
      "culorile deschise se încălzesc mai puțin la soare și se potrivesc cu majoritatea acoperișurilor și tâmplăriilor;",
      "gândește-te la soclu, glafuri și tâmplărie: o fațadă arată bine când toate se potrivesc între ele.",
    ],
  },
  {
    title: "Cum aplicăm finisajul",
    paragraphs: [
      "Protejăm ferestrele, ușile și pervazurile, apoi aplicăm grundul. După uscare urmează tencuiala, pe care o întindem pe fiecare perete dintr-o dată, de la un capăt la altul. Dacă lucrul se oprește la jumătatea unui perete, locul de îmbinare rămâne vizibil, așa că planificăm fiecare zi ca să nu se întâmple asta.",
      "La final scoatem protecțiile, curățăm și verificăm fațada împreună cu tine.",
    ],
  },
  {
    title: "Cât durează",
    paragraphs: [
      "Finisajul este ultima etapă a fațadei. O fațadă completă, cu termoizolare, armare și finisaj, este gata în medie în aproximativ 2 luni.",
    ],
  },
];

const PRICE = { label: "Doar finisaj decorativ", perM2: 470 };

const FAQ = [
  {
    q: "Cât costă finisajul decorativ pe metru pătrat?",
    a: "Doar finisajul decorativ costă 470 lei pe metru pătrat. Pachetul complet la cheie, cu termoizolare, armare și finisaj, costă 1000 lei pe metru pătrat, cu schela și transportul incluse.",
  },
  {
    q: "Ce tencuială folosiți?",
    a: "Folosim tencuială decorativă Caparol, rezistentă la intemperii și la radiațiile UV. Culoarea și textura le alegi din mostre.",
  },
  {
    q: "Pot alege orice culoare?",
    a: "Culoarea și textura le alegi tu din mostre. Te ajutăm să vezi cum arată nuanța pe peretele casei, în lumina zilei, înainte să începem.",
  },
];

export default function FinisajPage() {
  return (
    <MaterialDetailPage
      path="/materiale/finisaj"
      breadcrumb={[
        { label: "Acasă", href: "/" },
        { label: "Materiale de lucru", href: "/materiale" },
        { label: "Finisaj decorativ" },
      ]}
      title="Finisaj decorativ pentru fațadă"
      subtitle="Stratul final, care dă fațadei culoarea și textura și o apără de vreme: ce materiale folosim, cum lucrăm și cât costă."
      items={ITEMS}
      article={ARTICLE}
      price={PRICE}
      faq={FAQ}
      prev={{ href: "/materiale/armare", label: "Armarea pereților" }}
      next={{ href: "/#calculator", label: "Calculează prețul fațadei", text: "Toate cele trei etape, la cheie, la 1000 lei pe metru pătrat." }}
    />
  );
}
