import { Head } from "@/components/ui";
import Link from "next/link";
export const metadata = { title: "Conditions de la d\u00e9monstration" };
export default function Page() {
  return (
    <>
      <Head
        tag="INFORMATIONS"
        title="Conditions de la démonstration"
        text="Présentation du projet AlloCar · 26 novembre 2026"
      />
      <section className="container editorial section compact">
        <p>
          Les interfaces sont proposées pour découvrir le projet. Elles ne
          permettent pas de réserver une course. Les profils, horaires,
          disponibilités et prix sont fictifs. Les tracés ne constituent pas une
          consigne de navigation et les durées n’intègrent pas le trafic. Toute
          mise en service réelle devra préciser les conditions applicables, les
          assurances et les mesures de sécurité.
        </p>
        <Link className="text-link" href="/contact">
          Nous contacter
        </Link>
      </section>
    </>
  );
}
