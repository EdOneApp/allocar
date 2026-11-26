import { trips, modules, guides } from "@/data/content";
export const dynamic = "force-static";
export default function sitemap() {
  return [
    ...[
      "",
      "application",
      "trajets",
      "interfaces",
      "projet",
      "fonctionnalites",
      "conducteurs",
      "entreprises",
      "tarifs",
      "aide",
      "ressources",
      "contact",
      "credits",
      "mentions-legales",
      "confidentialite",
      "conditions",
    ],
    ...trips.map((t) => "trajets/" + t.slug),
    ...modules.map((m) => "fonctionnalites/" + m.slug),
    ...guides.map((g) => "ressources/" + g.slug),
  ].map((p) => ({
    url: "https://allocar.myoctogone.com/" + p + (p ? "/" : ""),
    lastModified: "2026-11-26",
  }));
}
