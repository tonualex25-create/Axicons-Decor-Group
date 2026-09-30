import { Mona_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SectionLinks from "@/components/layout/SectionLinks";
import { SITE } from "@/lib/site";

const monaSans = Mona_Sans({
  subsets: ["latin", "latin-ext"],
  axes: ["wdth"],
  variable: "--font-mona",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "Axicons Decor Grup — Termoizolare și fațade la cheie în Chișinău",
    template: "Axicons Decor Grup — %s",
  },
  description:
    "Termoizolare, armare și finisaj decorativ pentru fațade, la cheie, în Chișinău și în toată Moldova. Calculează prețul online și cere o evaluare gratuită.",
  applicationName: SITE.name,
  keywords: [
    "termoizolare fațadă Chișinău",
    "termoizolare fațadă Moldova",
    "termoizolare casă",
    "fațade la cheie",
    "finisaj decorativ fațadă",
    "tencuială decorativă",
    "polistiren fațadă",
    "Axicons Decor Grup",
  ],
  openGraph: {
    type: "website",
    locale: "ro_MD",
    siteName: SITE.name,
  },
  twitter: {
    card: "summary_large_image",
  },
  formatDetection: {
    telephone: false,
  },
};

export const viewport = {
  themeColor: "#0F2233",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ro" className={monaSans.variable}>
      <body>
        <SectionLinks />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
