import { Head } from "@/components/ui";
import Link from "next/link";
export const metadata = { title: "Confidentialit\u00e9" };
export default function Page() {
  return (
    <>
      <Head
        tag="INFORMATIONS"
        title="Confidentialité"
        text="Présentation du projet AlloCar · 26 novembre 2026"
      />
      <section className="container editorial section compact">
        <p>
          Ce site ne crée aucun compte et ne collecte aucune réservation ni
          paiement. La démonstration conserve ses sélections en mémoire pendant
          la navigation. Aucun outil de mesure d’audience ni cookie publicitaire
          n’est intégré. Le fond de carte charge des tuiles OpenStreetMap ; le
          fournisseur reçoit les informations techniques nécessaires, dont votre
          adresse IP. Le bouton WhatsApp ouvre un service tiers, où vous
          choisissez d’envoyer votre message. Pour toute question :
          danielguedegbe10027@gmail.com.
        </p>
        <Link className="text-link" href="/contact">
          Nous contacter
        </Link>
      </section>
    </>
  );
}
