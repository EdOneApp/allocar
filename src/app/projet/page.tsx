import { Head, CTA } from "@/components/ui";
import Link from "next/link";
import Image from "next/image";
export const metadata = { title: "Le projet" };
export default function Page() {
  return (
    <>
      <Head
        tag="DEPUIS ABIDJAN"
        title="Faire de la route un point commun."
        text="AlloCar est un projet de mobilité et de covoiturage pensé autour des usages locaux. Ce site en présente l’univers, les interfaces et la vision."
      />
      <section className="container project-photo">
        <Image
          src="/images/abidjan-bridge.webp"
          alt="Le pont Alassane Ouattara à Abidjan, photographie réelle"
          width={1600}
          height={1000}
        />
        <p className="fine">
          Photo : Edison McCullen · CC BY 4.0 ·{" "}
          <Link href="/credits">Source et licence</Link>
        </p>
      </section>
      <section className="container section editorial">
        <h2>
          Le numérique
          <br />
          au service du lien.
        </h2>
        <p>
          La vision : aider à découvrir un trajet, comprendre ses conditions et
          proposer des places sur une même route. Une expérience qui relie
          passagers, conducteurs et organisations.
        </p>
        <h3>Un projet, plusieurs interfaces.</h3>
        <p>
          Le projet présenté dans le portfolio s’appuie sur Flutter, Angular et
          Flask. Cette vitrine Next.js illustre les parcours sans connecter de
          backend de réservation.
        </p>
        <h3>Clair sur ce qui est réel.</h3>
        <p>
          Les photographies sont prises à Abidjan et les tracés suivent de
          vraies rues. Les offres, prix, horaires et profils sont fictifs.
          Paiement, comptes, vérification des conducteurs et suivi réel ne sont
          pas activés.
        </p>
      </section>
      <CTA />
    </>
  );
}
