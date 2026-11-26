import { Head, CTA } from "@/components/ui";
import Link from "next/link";
import { guides } from "@/data/content";
export const metadata = { title: "Le carnet de route" };
export default function Page() {
  return (
    <>
      <Head
        tag="LE CARNET DE ROUTE"
        title="Prendre le temps de bien partir."
        text="Quelques repères pour comprendre les trajets, le partage et les interfaces AlloCar."
      />
      <section className="container section compact guide-grid">
        {guides.map((g, i) => (
          <Link href={"/ressources/" + g.slug} key={g.slug}>
            <div className={"guide-art art-" + i}>{["↔", "●", "▦"][i]}</div>
            <p className="eyebrow">{g.tag}</p>
            <h3>{g.title}</h3>
          </Link>
        ))}
      </section>
      <CTA />
    </>
  );
}
