import MaterialDetailPage from "@/components/templates/MaterialDetailPage";

export const metadata = {
  title: "Termoizolare fațadă: preț și etape",
  description:
    "Termoizolarea fațadei cu polistiren de 10–15 cm: materialele folosite, cum montăm sistemul, cât durează și cât costă. Lucrăm în toată Moldova.",
  alternates: { canonical: "/materiale/termoizolare" },
  openGraph: {
    title: "Axicons Decor Grup — Termoizolare fațadă: preț și etape",
    description:
      "Termoizolarea fațadei cu polistiren de 10–15 cm: materialele folosite, cum montăm sistemul, cât durează și cât costă. Lucrăm în toată Moldova.",
    type: "website",
    locale: "ro_MD",
    siteName: "Axicons Decor Grup",
    url: "/materiale/termoizolare",
  },
};

const ITEMS = [
  {
    name: "Polistiren 10cm",
    image: "/images/materiale/termoizolare/polistiren.webp",
    description:
      "Placă termoizolantă din polistiren expandat, cu grosimea de 10 cm, montată pe fațadă pentru reducerea pierderilor de căldură. Ușoară și rezistentă, cu o durată lungă de exploatare.",
  },
  {
    name: "Adeziv",
    image: "/images/materiale/termoizolare/adeziv.webp",
    description:
      "Adeziv special pentru lipirea plăcilor de polistiren pe suprafața fațadei. Asigură o aderență puternică, rezistentă la variații de temperatură și umiditate.",
  },
  {
    name: "Ciuperci",
    image: "/images/materiale/termoizolare/ciuperci.webp",
    description:
      "Dibluri de fixare mecanică a plăcilor de polistiren pe perete, montate după uscarea adezivului. Oferă rezistență suplimentară la vânt și desprindere.",
  },
  {
    name: "Capacele",
    image: "/images/materiale/termoizolare/capacele.webp",
    description:
      "Capace de acoperire pentru diblurile de fixare, montate pentru a preveni punțile termice și pentru un finisaj estetic uniform al fațadei.",
  },
  {
    name: "Spumă",
    image: "/images/materiale/termoizolare/spuma.webp",
    description:
      "Spumă poliuretanică folosită pentru etanșarea rosturilor dintre plăcile de polistiren, eliminând punțile termice și infiltrațiile de aer.",
  },
];

const ARTICLE = [
  {
    title: "Ce este termoizolarea fațadei",
    paragraphs: [
      "Termoizolarea fațadei înseamnă plăci de polistiren montate pe exteriorul pereților, peste care urmează stratul de armare și finisajul decorativ. Împreună, cele trei straturi formează un sistem care îmbracă toată casa ca o haină.",
      "Rolul ei principal este să oprească pierderea căldurii prin pereți. Iarna casa se încălzește mai repede și ține căldura mai mult, iar vara pereții nu se mai încing de la soare. Pereții rămân calzi pe partea dinspre cameră, așa că apare mai rar condens în colțuri și, odată cu el, mucegaiul.",
    ],
  },
  {
    title: "De ce izolăm la exterior",
    paragraphs: [
      "Izolația pusă pe exterior acoperă tot peretele dintr-o bucată, inclusiv stâlpii, grinzile și marginile planșeelor. Acestea sunt locurile prin care căldura fuge cel mai ușor, așa-numitele punți termice. Pusă pe interior, izolația le-ar lăsa descoperite.",
    ],
    list: [
      "nu micșorează camerele și nu trebuie mutate mobila sau prizele;",
      "zidăria rămâne în partea caldă a peretelui, ferită de îngheț și de variațiile mari de temperatură;",
      "lucrăm doar din exterior, așa că poți locui în casă cât timp suntem pe șantier.",
    ],
  },
  {
    title: "Cum montăm sistemul",
    paragraphs: [
      "Ordinea contează la fel de mult ca materialele. Așa arată lucrarea pe fațada ta, de la perete gol până la stratul gata pentru armare:",
    ],
    list: [
      "Pregătim peretele: îl curățăm, verificăm cât de drept este și reparăm zonele desprinse sau crăpate.",
      "Lipim plăcile de polistiren cu adeziv special, aplicat pe margini și în puncte pe suprafața plăcii. Plăcile se așază decalat, ca la zidărie, ca rosturile să nu cadă una sub alta.",
      "Umplem rosturile dintre plăci cu spumă poliuretanică, ca să nu rămână fante prin care să treacă aerul rece.",
      "După ce adezivul s-a întărit, fixăm plăcile mecanic cu dibluri tip ciupercă. Ele țin sistemul pe perete și la vânt puternic.",
      "Acoperim capetele diblurilor cu capace termoizolante, ca să nu se vadă mai târziu pete pe fațadă în dreptul lor.",
    ],
    after: [
      "Abia după toate acestea urmează armarea pereților, care protejează polistirenul și pregătește suprafața pentru finisaj.",
    ],
  },
  {
    title: "Ce grosime de polistiren alegem",
    paragraphs: [
      "Folosim polistiren de 10–15 cm. Pentru majoritatea caselor, 10 cm este alegerea obișnuită: izolează bine și păstrează ferestrele și glafurile în proporții firești. Plăcile mai groase, spre 15 cm, izolează și mai bine și se potrivesc caselor cu pereți subțiri sau celor unde vrei cheltuieli cât mai mici cu încălzirea.",
      "Nu există o grosime bună pentru toate casele. O stabilim împreună la evaluare, după ce vedem pereții, ferestrele și cât vrei să investești.",
    ],
  },
  {
    title: "Cât durează",
    paragraphs: [
      "O fațadă completă, cu termoizolare, armare și finisaj, este gata în medie în aproximativ 2 luni. Termoizolarea este prima etapă. Durata exactă depinde de suprafață, de forma casei și de starea pereților, și ți-o spunem după evaluare.",
    ],
  },
];

const PRICE = { label: "Doar termoizolare", perM2: 450 };

const FAQ = [
  {
    q: "Cât costă termoizolarea pe metru pătrat?",
    a: "Doar termoizolarea costă 450 lei pe metru pătrat. Pachetul complet la cheie, cu termoizolare, armare și finisaj decorativ, costă 1000 lei pe metru pătrat. Schela și transportul sunt incluse.",
  },
  {
    q: "Pot locui în casă în timpul lucrării?",
    a: "Da. Toată lucrarea se face din exterior, pe schelă, așa că poți folosi casa ca de obicei.",
  },
  {
    q: "Ce grosime de polistiren îmi trebuie?",
    a: "Folosim plăci de 10–15 cm. Pentru majoritatea caselor ajung 10 cm; grosimea potrivită pentru casa ta o stabilim la evaluarea gratuită.",
  },
  {
    q: "Lucrați și în afara Chișinăului?",
    a: "Da, lucrăm în toată Moldova. Evaluarea la fața locului este gratuită.",
  },
];

export default function TermoizolarePage() {
  return (
    <MaterialDetailPage
      path="/materiale/termoizolare"
      breadcrumb={[
        { label: "Acasă", href: "/" },
        { label: "Materiale de lucru", href: "/materiale" },
        { label: "Termoizolare" },
      ]}
      title="Termoizolare fațadă"
      subtitle="Plăcile de polistiren care opresc pierderea căldurii prin pereți: ce materiale folosim, cum le montăm și cât costă."
      items={ITEMS}
      article={ARTICLE}
      price={PRICE}
      faq={FAQ}
      next={{ href: "/materiale/armare", label: "Armarea pereților", text: "Stratul care protejează polistirenul și ține fațada fără fisuri." }}
    />
  );
}
