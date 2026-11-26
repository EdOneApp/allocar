import { Head, CTA } from "@/components/ui";
import Link from "next/link";
import Phone from "@/components/Phone";
import Dashboard from "@/components/Dashboard";
export const metadata = { title: "Entreprises" };
export default function Page() {
  return (
    <>
      <Head
        tag="ENTREPRISES"
        title="Ensemble, au bon endroit."
        text="Une vision de la mobilité partagée pour les départs du quotidien. Fonctionnalités de présentation, à confirmer lors du développement opérationnel."
      />
      <section className="container demo-stage">
        <div>
          <h2>Une vue claire de vos connexions.</h2>
          <ul className="checklist">
            <li>Organiser les trajets domicile-travail</li>
            <li>Connaître les places proposées</li>
            <li>Comprendre le parcours et ses conditions</li>
            <li>Préparer les futures intégrations</li>
          </ul>
          <Link className="button" href="/contact">
            Parlons du projet
          </Link>
        </div>
        <Phone />
      </section>
      <section className="container section compact">
        <Dashboard />
      </section>
      <CTA />
    </>
  );
}
