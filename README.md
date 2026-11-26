# AlloCar

Vitrine de mobilité & covoiturage : Next.js, TypeScript, Leaflet. Export statique GitHub Pages à https://allocar.myoctogone.com/.

## Développement

npm ci, npm run dev. Vérification : npm test, npm run build, npm run lint.

## Périmètre

26 pages de contenu, interfaces passager/conducteur/opérations, recherche de trajets et calcul de prix fictifs. Aucun compte, paiement ou réservation. Données de profils/prix/places/horaires fictives.

## Sources

Tracés réels OSRM / OSM archivés le 26 novembre 2026, requêtes et coordonnées dans src/data/routes.json. Tuiles © OpenStreetMap. GIF original sur tracé réel, véhicule simulé. Mini-cartes : fond schématique.
Photos : A main road in Abidjan, Abdallah Hussein, CC BY 2.0 ; Pont ADO – Abidjan, Edison McCullen, CC BY 4.0. Sources et licences détaillées sur /credits/. Redimensionnement/recadrage et conversion WebP. Illustration automobile générée par IA, sans marque.

## Publication

Workflow GitHub Pages sur main. CNAME allocar.myoctogone.com. Les interactions locales ne nécessitent aucun backend.
