import Hero from "@/components/Hero";
import Works from "@/components/Works";
import Calculator from "@/components/Calculator";
import Benefits from "@/components/Benefits";
import Contact from "@/components/Contact";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "GeneralContractor",
  name: "Axicons Decor Grup",
  description:
    "Amenajări de fațadă la cheie — termoizolare, fațade ventilate, vopsire și finisaje decorative.",
  url: "https://axicons.md",
  telephone: "+37360364435",
  areaServed: "Chișinău",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Chișinău",
    addressCountry: "MD",
  },
};

export default function Home() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
       < Hero />
       < Calculator />
       < Benefits />
       <Contact />
    </main>
  );
}