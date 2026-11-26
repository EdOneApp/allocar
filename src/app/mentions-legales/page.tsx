import { Head } from "@/components/ui";
import Link from "next/link";
export const metadata = { title: "Mentions l\u00e9gales" };
export default function Page() {
  return (
    <>
      <Head
        tag="INFORMATIONS"
        title="Mentions légales"
        text="Présentation du projet AlloCar · 26 novembre 2026"
      />
      <section className="container editorial section compact">
        <p>
          Éditeur et contact : Daniel Guedegbe, danielguedegbe10027@gmail.com,
          +225 07 48 73 33 65. Hébergement : GitHub Pages, GitHub, Inc. Ce site
          présente le projet AlloCar et n’exploite pas de service de transport.
          Les informations illustratives ne constituent pas une offre
          commerciale.
        </p>
        <Link className="text-link" href="/contact">
          Nous contacter
        </Link>
      </section>
    </>
  );
}
