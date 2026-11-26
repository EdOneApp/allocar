import { Head, CTA } from "@/components/ui";
import Explorer from "@/components/Explorer";
export const metadata = { title: "Les trajets" };
export default function Page() {
  return (
    <>
      <Head
        tag="LA CARTE DES CONNEXIONS"
        title="Le bon quartier. La bonne route."
        text="Explorez trois tracés réels d’Abidjan, calculés avec OSRM et OpenStreetMap. Les départs et tarifs présentés sont fictifs."
      />
      <section className="container section compact">
        <Explorer />
        <p className="fine">
          Calcul archivé le 26 novembre 2026. Points de quartiers indicatifs,
          durée sans trafic. Ce site ne remplace pas une application de
          navigation.
        </p>
      </section>
      <CTA />
    </>
  );
}
