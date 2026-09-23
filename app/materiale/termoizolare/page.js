import MaterialDetailPage from "@/components/MaterialDetailPage";

export const metadata = {
  title: "Termoizolare — Axicons Decor Grup",
  description: "Materialele folosite la sistemul de termoizolație pentru fațadă.",
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

export default function TermoizolarePage() {
  return (
    <MaterialDetailPage
      breadcrumb={[
        { label: "Acasă", href: "/" },
        { label: "Materiale de lucru", href: "/#materiale" },
        { label: "Termoizolare" },
      ]}
      title="Termoizolare"
      subtitle="Din ce este format sistemul de termoizolație pe care îl aplicăm pe fațada ta."
      items={ITEMS}
    />
  );
}
