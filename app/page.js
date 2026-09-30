import Hero from "@/components/sections/Hero";
import Calculator from "@/components/sections/Calculator";
import Benefits from "@/components/sections/Benefits";
import Contact from "@/components/sections/Contact";
import Materials from "@/components/sections/Materials";
import Faq from "@/components/sections/Faq";
import { SITE, SOCIALS } from "@/lib/site";

export const metadata = {
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "ro_MD",
    siteName: SITE.name,
    url: "/",
    title: "Axicons Decor Grup — Termoizolare și fațade la cheie în Chișinău",
    description:
      "Termoizolare, armare și finisaj decorativ pentru fațade, la cheie, în Chișinău și în toată Moldova. Calculează prețul online și cere o evaluare gratuită.",
  },
};

const structuredData = [
  {
    "@context": "https://schema.org",
    "@type": "GeneralContractor",
    "@id": `${SITE.url}/#firma`,
    name: SITE.name,
    legalName: SITE.legalName,
    description:
      "Termoizolare, armare și finisaj decorativ pentru fațade, la cheie, în toată Moldova.",
    url: SITE.url,
    logo: `${SITE.url}/logo-icon.svg`,
    image: `${SITE.url}/opengraph-image.jpg`,
    telephone: SITE.phone,
    email: SITE.email,
    areaServed: { "@type": "Country", name: "Moldova" },
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE.street,
      addressLocality: SITE.city,
      postalCode: SITE.postalCode,
      addressCountry: SITE.country,
    },
    foundingDate: SITE.founded,
    founder: { "@type": "Person", name: SITE.founder },
    numberOfEmployees: { "@type": "QuantitativeValue", value: SITE.employees },
    identifier: { "@type": "PropertyValue", propertyID: "IDNO", value: SITE.idno },
    sameAs: SOCIALS.map((s) => s.href),
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE.name,
    url: SITE.url,
    inLanguage: "ro",
    publisher: { "@id": `${SITE.url}/#firma` },
  },
];

export default function Home() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Hero />
      <Calculator />
      <Materials />
      <Benefits />
      <Contact />
      <Faq />
    </main>
  );
}
