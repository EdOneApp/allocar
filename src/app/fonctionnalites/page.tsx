import { Head, CTA } from "@/components/ui";
import Link from "next/link";
import { modules } from "@/data/content";
export const metadata = { title: "La vision produit" };
export default function Page() {
  return (
    <>
      <Head
        tag="LA VISION DU PRODUIT"
        title="Chaque trajet a plusieurs visages."
        text="Un aperçu du périmètre fonctionnel imaginé pour AlloCar. Les interfaces présentées illustrent le projet, sans service de transport en production."
      />
      <section className="container section compact module-grid">
        {modules.map((m) => (
          <Link href={"/fonctionnalites/" + m.slug} key={m.slug}>
            <p className="eyebrow">{m.label}</p>
            <h3>{m.title}</h3>
            <p>{m.text}</p>
          </Link>
        ))}
      </section>
      <CTA />
    </>
  );
}
