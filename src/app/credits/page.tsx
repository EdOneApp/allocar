import { Head } from "@/components/ui";
export const metadata = { title: "Cr\u00e9dits & sources" };
export default function Page() {
  return (
    <>
      <Head
        tag="LES SOURCES, EN CLAIR"
        title="De vrais lieux. Des crédits visibles."
        text="Photographies, tracés et éléments de démonstration utilisés sur ce site."
      />
      <section className="container editorial section compact">
        <h2>Photographies d’Abidjan</h2>
        <h3>A main road in Abidjan</h3>
        <p>
          Abdallah Hussein, 27 septembre 2017.{" "}
          <a href="https://commons.wikimedia.org/wiki/File:A_main_road_in_Abidjan.jpg">
            Source Wikimedia Commons
          </a>{" "}
          · <a href="https://creativecommons.org/licenses/by/2.0/">CC BY 2.0</a>
          . Image recadrée et convertie en WebP.
        </p>
        <h3>Pont ADO – Abidjan</h3>
        <p>
          Edison McCullen, 21 février 2026.{" "}
          <a href="https://commons.wikimedia.org/wiki/File:Pont_ADO_%E2%80%93_Abidjan.jpg">
            Source Wikimedia Commons
          </a>{" "}
          · <a href="https://creativecommons.org/licenses/by/4.0/">CC BY 4.0</a>
          . Image redimensionnée et convertie en WebP. Les auteurs ne parrainent
          pas le projet.
        </p>
        <h2>Cartographie & itinéraires</h2>
        <p>
          Fond de carte : ©{" "}
          <a href="https://www.openstreetmap.org/copyright">
            OpenStreetMap contributors
          </a>
          , données sous ODbL. Calcul :{" "}
          <a href="https://project-osrm.org/">OSRM</a>, profil driving, archivé
          le 26 novembre 2026. Les requêtes et coordonnées sont conservées dans
          le dépôt, src/data/routes.json.
        </p>
        <p>
          La carte miniature et le GIF utilisent ces tracés sur un fond
          schématique. Le déplacement du véhicule est simulé, sans trafic ni
          position réelle. La durée est une estimation théorique.
        </p>
        <h2>Illustration & interfaces</h2>
        <p>
          Berline illustrative créée avec l’IA, sans marque. Interfaces, GIF et
          graphismes originaux réalisés pour cette présentation. Profils,
          horaires, disponibilités et prix fictifs.
        </p>
      </section>
    </>
  );
}
