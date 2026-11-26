import { Head } from "@/components/ui";
import Phone from "@/components/Phone";
export const metadata = { title: "L\u2019application" };
export default function Page() {
  return (
    <>
      <Head
        tag="LE PRODUIT, EN MAIN"
        title="Votre prochain départ commence ici."
        text="Choisissez un tracé, le mode de trajet et les places. Explorez une vraie interface mobile, sans compte ni réservation."
      />
      <section className="container demo-stage">
        <div>
          <h2>
            Faites votre trajet.
            <br />À votre façon.
          </h2>
          <p className="lead">
            Trois itinéraires, deux modes, un prix transparent. Tous les tarifs
            et profils sont des exemples.
          </p>
          <ul className="checklist">
            <li>Changez de quartier</li>
            <li>Comparez partagé et privé</li>
            <li>Ajustez le nombre de places</li>
            <li>Préparez un récapitulatif local</li>
          </ul>
          <p>
            Pas de service de transport actif sur ce site. La préparation
            n’envoie aucune demande et ne déclenche aucun paiement.
          </p>
        </div>
        <Phone interactive />
      </section>
    </>
  );
}
