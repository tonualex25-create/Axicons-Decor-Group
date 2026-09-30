import { SITE } from "@/lib/site";

export default function manifest() {
  return {
    name: SITE.name,
    short_name: "Axicons",
    description: "Termoizolare, armare și finisaj decorativ pentru fațade, la cheie, în toată Moldova.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#0F2233",
    lang: "ro",
    icons: [
      { src: "/icon.svg", sizes: "any", type: "image/svg+xml" },
      { src: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  };
}
