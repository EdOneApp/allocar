import { Head, CTA } from "@/components/ui";
export const metadata = { title: "Aide" };
export default function Page() {
  return (
    <>
      <Head
        tag="AVANT DE PARTIR"
        title="Des réponses, sans détour."
        text="Ce qui fonctionne dans la démonstration, ce qui est illustratif et comment nous contacter."
      />
      <section className="container faq">
        <details>
          <summary>Peut-on réserver une course ici ?</summary>
          <p>
            Non. Il s’agit d’une présentation de projet. Aucun trajet n’est
            réservé et aucun paiement n’est collecté.
          </p>
        </details>
        <details>
          <summary>Les routes sur la carte sont-elles réelles ?</summary>
          <p>
            Oui. Les tracés routiers proviennent d’OSRM et OpenStreetMap. Les
            points relient des quartiers indicatifs d’Abidjan.
          </p>
        </details>
        <details>
          <summary>Les prix et les conducteurs sont-ils réels ?</summary>
          <p>
            Non. Les prix, horaires, profils et disponibilités sont fictifs et
            signalés comme tels.
          </p>
        </details>
        <details>
          <summary>Le véhicule est-il géolocalisé ?</summary>
          <p>
            Non. Le point animé suit le tracé en simulation. Aucune
            géolocalisation personnelle n’est demandée.
          </p>
        </details>
        <details>
          <summary>
            L’application est-elle disponible au téléchargement ?
          </summary>
          <p>
            Cette vitrine ne fournit pas de téléchargement. Vous pouvez explorer
            la démonstration mobile dans votre navigateur.
          </p>
        </details>
        <details>
          <summary>Comment parler du projet ?</summary>
          <p>
            Contactez Daniel Guedegbe par le formulaire WhatsApp ou par email
            depuis la page contact.
          </p>
        </details>
      </section>
      <CTA />
    </>
  );
}
