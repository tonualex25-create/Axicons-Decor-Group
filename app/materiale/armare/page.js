import MaterialDetailPage from "@/components/templates/MaterialDetailPage";

export const metadata = {
  title: "Armarea fațadei: preț și etape",
  description:
    "Stratul de armare peste termoizolație: adeziv, plasă din fibră de sticlă 160 g/m², colțare, picurătoare și profile de geam, pentru o fațadă fără fisuri.",
  alternates: { canonical: "/materiale/armare" },
  openGraph: {
    title: "Axicons Decor Grup — Armarea fațadei: preț și etape",
    description:
      "Stratul de armare peste termoizolație: adeziv, plasă din fibră de sticlă 160 g/m², colțare, picurătoare și profile de geam, pentru o fațadă fără fisuri.",
    type: "website",
    locale: "ro_MD",
    siteName: "Axicons Decor Grup",
    url: "/materiale/armare",
  },
};

const ITEMS = [
  {
    name: "Adeziv",
    description:
      "Adeziv pentru armare, aplicat peste stratul de polistiren pentru a susține plasa din fibră de sticlă și a crea o suprafață uniformă pentru tencuială.",
  },
  {
    name: "Plasă 160g",
    description:
      "Plasă din fibră de sticlă, 160g/mp, înglobată în adeziv pentru a arma stratul de finisaj și a preveni apariția fisurilor.",
  },
  {
    name: "Colțare",
    description:
      "Profile de colț cu plasă incorporată, montate pe muchiile fațadei pentru a proteja colțurile și a asigura o linie dreaptă și curată.",
  },
  {
    name: "Picurătoare",
    description:
      "Profil de picurare montat la partea inferioară a fațadei, care dirijează apa de ploaie departe de perete și previne infiltrațiile.",
  },
  {
    name: "Profil de geam",
    description:
      "Profil special montat în jurul ferestrelor și ușilor, care protejează muchiile golurilor și asigură o etanșare corectă la îmbinarea cu tâmplăria.",
  },
];

const ARTICLE = [
  {
    title: "Ce este stratul de armare",
    paragraphs: [
      "Armarea este stratul subțire care se aplică peste plăcile de polistiren: un adeziv special în care se îneacă o plasă din fibră de sticlă. Pare un detaliu mic, dar de el depinde cât timp fațada rămâne fără fisuri.",
      "Polistirenul singur este moale și nu poate ține tencuiala. Stratul de armare îi dă o suprafață tare și dreaptă, preia tensiunile care apar când fațada se încălzește ziua și se răcește noaptea și o face rezistentă la lovituri, de exemplu de la o minge sau de la o scară sprijinită de perete.",
    ],
  },
  {
    title: "Colțurile, ferestrele și soclul",
    paragraphs: [
      "Fisurile apar aproape întotdeauna în aceleași locuri: pe muchii, în jurul ferestrelor și la baza fațadei. De aceea acolo folosim profile speciale, nu doar plasă:",
    ],
    list: [
      "Colțarele cu plasă întăresc muchiile casei și le păstrează drepte și ascuțite, fără ciobituri.",
      "Profilele de geam fac legătura dintre fațadă și tâmplărie. Ele închid rostul de lângă fereastră, ca apa să nu intre între toc și perete.",
      "Picurătoarele se montează la partea de jos a fațadei și deasupra golurilor. Apa de ploaie se scurge pe muchia lor și cade departe de perete, în loc să curgă pe el.",
    ],
  },
  {
    title: "Cum se execută armarea",
    paragraphs: [
      "Armarea se face după ce termoizolarea este gata și diblurile sunt acoperite. Pașii sunt aceiași pe fiecare fațadă:",
    ],
    list: [
      "Montăm colțarele, profilele de geam și picurătoarele în adeziv.",
      "Întindem un strat de adeziv pe polistiren și presăm plasa în el, astfel încât să fie complet acoperită. Fâșiile de plasă se suprapun, ca să nu rămână linii slabe între ele.",
      "La colțurile ferestrelor și ușilor punem bucăți suplimentare de plasă pe diagonală, pentru că acolo se adună cele mai mari tensiuni.",
      "Aplicăm al doilea strat de adeziv, îl nivelăm și lăsăm suprafața să se usuce complet înainte de grund.",
    ],
  },
  {
    title: "Greșeli pe care le evităm",
    paragraphs: [
      "Cele mai multe fațade fisurate pe care le vedem au avut probleme tocmai la armare. Pe șantierele noastre nu lăsăm să se întâmple asta:",
    ],
    list: [
      "plasa lipită direct pe polistiren, fără adeziv dedesubt, sau lăsată la vedere;",
      "fâșii de plasă puse cap la cap, fără suprapunere;",
      "muchii și ferestre fără colțare și profile;",
      "finisaj aplicat peste un strat de armare care încă nu s-a uscat.",
    ],
  },
  {
    title: "Cât durează",
    paragraphs: [
      "Armarea este a doua etapă a fațadei, între termoizolare și finisaj. O fațadă completă este gata în medie în aproximativ 2 luni; termenul exact pentru casa ta îl stabilim după evaluare.",
    ],
  },
];

const PRICE = { label: "Doar armarea pereților", perM2: 300 };

const FAQ = [
  {
    q: "Cât costă armarea pe metru pătrat?",
    a: "Doar armarea pereților costă 300 lei pe metru pătrat. Pachetul complet la cheie, cu termoizolare, armare și finisaj, costă 1000 lei pe metru pătrat, cu schela și transportul incluse.",
  },
  {
    q: "Se poate trece peste armare?",
    a: "Nu. Fără plasă și adeziv, tencuiala se aplică direct pe polistiren și fisurează în scurt timp. Armarea este partea care ține finisajul întreg.",
  },
  {
    q: "Ce plasă folosiți?",
    a: "Folosim plasă din fibră de sticlă de 160 g/m², făcută special pentru fațade și înecată complet în adeziv.",
  },
];

export default function ArmarePage() {
  return (
    <MaterialDetailPage
      path="/materiale/armare"
      breadcrumb={[
        { label: "Acasă", href: "/" },
        { label: "Materiale de lucru", href: "/materiale" },
        { label: "Armarea pereților" },
      ]}
      title="Armarea pereților fațadei"
      subtitle="Stratul de adeziv și plasă care ține fațada dreaptă și fără fisuri: ce materiale folosim, cum lucrăm și cât costă."
      items={ITEMS}
      article={ARTICLE}
      price={PRICE}
      faq={FAQ}
      prev={{ href: "/materiale/termoizolare", label: "Termoizolare fațadă" }}
      next={{ href: "/materiale/finisaj", label: "Finisaj decorativ", text: "Stratul final, care dă fațadei culoarea și textura." }}
    />
  );
}
