import { Bebas_Neue, Manrope, Roboto_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const bebasNeue = Bebas_Neue({
  subsets: ["latin", "latin-ext"],
  weight: "400",
  variable: "--font-display",
});

const manrope = Manrope({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-body",
});

const robotoMono = Roboto_Mono({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600"],
  variable: "--font-mono",
});

export const metadata = {
  title: {
    default: "Axicons Decor Grup — Fațade, termoizolare și finisaje exterioare",
    template: "%s — Axicons Decor Grup",
  },
  description:
    "Amenajări de fațadă la cheie în Chișinău — termoizolare, fațade ventilate, vopsire și finisaje decorative. Consultanță gratuită și deviz transparent.",
  keywords: [
    "fațade axicons",
    "termoizolare fațadă",
    "fațade ventilate",
    "renovare fațadă",
    "Axicons Decor Grup",
    "axicons",
    "companie de constructii",
    "constructii",
  ],
  openGraph: {
  title: "Axicons Decor Grup — Fațade, termoizolare și finisaje exterioare",
  description:
    "Amenajări de fațadă la cheie în Chișinău — termoizolare, fațade ventilate, vopsire și finisaje decorative.",
  url: "https://axicons.md",
  siteName: "Axicons Decor Grup",
  images: [
    {
      url: "https://axicons.md/og-image.jpg",
      width: 1200,
      height: 630,
      alt: "Axicons Decor Grup — Fațade, termoizolare și finisaje exterioare",
    },
  ],
  locale: "ro_RO",
  type: "website",
},
};

export default function RootLayout({ children }) {
  return (
    <html lang="ro" className={`${bebasNeue.variable} ${manrope.variable} ${robotoMono.variable}`}>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}