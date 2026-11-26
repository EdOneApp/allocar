import { Head, CTA } from "@/components/ui";
import Link from "next/link";
import Phone from "@/components/Phone";
export const metadata = { title: "Conducteurs" };
export default function Page() {
  return (
    <>
      <Head
        tag="CONDUCTEURS"
        title="Votre route a de la place."
        text="Une vision de la mobilité partagée pour les départs du quotidien. Fonctionnalités de présentation, à confirmer lors du développement opérationnel."
      />
      <section className="container demo-stage">
        <div>
          <h2>Les bonnes informations avant le départ.</h2>
          <ul className="checklist">
            <li>Visualiser un prochain trajet</li>
            <li>Connaître les places proposées</li>
            <li>Comprendre le parcours et ses conditions</li>
            <li>Préparer les futures intégrations</li>
          </ul>
          <Link className="button" href="/contact">
            Parlons du projet
          </Link>
        </div>
        <Phone driver />
      </section>
      <CTA />
    </>
  );
}
