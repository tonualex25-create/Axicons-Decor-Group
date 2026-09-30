import { SITE } from "@/lib/site";

const pages = [
  { path: "", updated: "2026-09-30", changeFrequency: "monthly", priority: 1 },
  { path: "/materiale", updated: "2026-09-30", changeFrequency: "monthly", priority: 0.8 },
  { path: "/materiale/termoizolare", updated: "2026-09-30", changeFrequency: "monthly", priority: 0.7 },
  { path: "/materiale/armare", updated: "2026-09-30", changeFrequency: "monthly", priority: 0.7 },
  { path: "/materiale/finisaj", updated: "2026-09-30", changeFrequency: "monthly", priority: 0.7 },
  { path: "/despre-noi", updated: "2026-09-30", changeFrequency: "monthly", priority: 0.7 },
  { path: "/termeni-si-conditii", updated: "2026-09-30", changeFrequency: "yearly", priority: 0.3 },
  { path: "/confidentialitate", updated: "2026-09-30", changeFrequency: "yearly", priority: 0.3 },
];

export default function sitemap() {
  return pages.map(({ path, updated, changeFrequency, priority }) => ({
    url: `${SITE.url}${path}`,
    lastModified: new Date(updated),
    changeFrequency,
    priority,
  }));
}
