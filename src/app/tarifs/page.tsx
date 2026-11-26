import { Head, CTA } from "@/components/ui";
import Link from "next/link";
import { trips } from "@/data/content";
export const metadata = { title: "Tarifs de d\u00e9monstration" };
export default function Page() {
  return (
    <>
      <Head
        tag="LE PRIX EN CLAIR"
        title="Comparez des exemples. Pas des promesses."
        text="Ces montants sont fictifs et servent uniquement à tester l’interface. Aucun tarif commercial ni réservation n’est proposé sur ce site."
      />
      <section className="container trip-grid section compact">
        {trips.map((t) => (
          <article className="trip-card" key={t.slug}>
            <h3>
              {t.from} / {t.to}
            </h3>
            <p>Partagé, par place</p>
            <h2>
              {t.fare.toLocaleString("fr-FR")} <small>FCFA</small>
            </h2>
            <p>
              Privé, véhicule : {t.privateFare.toLocaleString("fr-FR")} FCFA
            </p>
            <Link className="button" href="/application">
              Comparer dans la démo
            </Link>
          </article>
        ))}
      </section>
      <CTA />
    </>
  );
}
