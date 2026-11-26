import routes from "./routes.json";
export const trips = routes.map((r, i) => ({
  ...r,
  time: ["07:30", "08:00", "17:30"][i],
  seats: [3, 2, 4][i],
  fare: [1500, 2500, 2000][i],
  privateFare: [4000, 6500, 5000][i],
  driver: ["Aïcha K.", "Koffi M.", "Fatou D."][i],
  initials: ["AK", "KM", "FD"][i],
}));
export const modules = [
  {
    slug: "passagers",
    title: "Un trajet, tout simplement.",
    label: "Pour les passagers",
    text: "Trouver un départ, comparer les places et comprendre le tarif avant de prendre la route.",
    items: [
      "Recherche par quartier",
      "Choix partagé ou privé",
      "Détail du trajet et du prix",
      "Récapitulatif lisible sur mobile",
    ],
  },
  {
    slug: "conducteurs",
    title: "Votre route a de la place.",
    label: "Pour les conducteurs",
    text: "Une vision claire du prochain départ et des places à proposer.",
    items: [
      "Publication des disponibilités",
      "Liste des passagers à confirmer",
      "Historique des courses",
      "Suivi des revenus à développer",
    ],
  },
  {
    slug: "entreprises",
    title: "La mobilité en équipe.",
    label: "Pour les entreprises",
    text: "Une interface pour visualiser les trajets domicile-travail et organiser la mobilité.",
    items: [
      "Tableau de bord des trajets",
      "Vue des conducteurs",
      "Organisation des départs",
      "Exports et politiques à développer",
    ],
  },
  {
    slug: "technologie",
    title: "Pensé pour le terrain.",
    label: "Sous le capot",
    text: "Le projet associe application Flutter, interface Angular et backend Flask. Ce site présente sa vision avec Next.js.",
    items: [
      "Interfaces web et mobile",
      "Tracés routiers OpenStreetMap",
      "Une expérience responsive",
      "Intégrations de paiement à développer",
    ],
  },
];
export const guides = [
  {
    slug: "comprendre-le-trajet",
    title: "Lire un itinéraire, avant de partir.",
    tag: "Les trajets",
    text: "Un point sur la carte ne suffit pas : vérifiez le lieu exact de rendez-vous, le sens de circulation et les conditions avec le conducteur. Les tracés de cette présentation relient des points indicatifs de quartiers. Ils ne constituent pas des instructions de navigation.",
    next: "La distance et la durée proviennent d’un calcul OSRM archivé le 26 novembre 2026. La durée ne tient pas compte des embouteillages et ne garantit pas une heure d’arrivée.",
  },
  {
    slug: "partager-la-route",
    title: "Le partage commence avant le départ.",
    tag: "Le covoiturage",
    text: "Convenez du point de rendez-vous, de l’horaire, des bagages et du nombre de places. Prévenez en cas de changement. Le respect de ces petits détails rend la route plus simple pour tout le monde.",
    next: "Dans la démonstration, les profils et les tarifs sont fictifs. Aucun véhicule ni conducteur n’est réellement réservé. Une future mise en service devra préciser vérifications, assurance, règles de sécurité et assistance.",
  },
  {
    slug: "interfaces-et-mobilite",
    title: "Une interface qui laisse respirer.",
    tag: "Le produit",
    text: "La priorité est donnée aux informations utiles : origine, destination, places et montant. La carte complète ces informations au lieu de les remplacer.",
    next: "L’expérience passager peut être explorée sur ce site. Le tableau de bord et la vue conducteur illustrent le périmètre du produit : ce ne sont pas des données opérationnelles en direct.",
  },
];
