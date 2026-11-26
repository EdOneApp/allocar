import { modules } from "@/data/content";
import { Head, CTA } from "@/components/ui";
import Phone from "@/components/Phone";
import Dashboard from "@/components/Dashboard";
import { notFound } from "next/navigation";
export function generateStaticParams() {
  return modules.map((m) => ({ slug: m.slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return { title: modules.find((m) => m.slug === slug)?.label };
}
export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const m = modules.find((m) => m.slug === slug);
  if (!m) notFound();
  return (
    <>
      <Head tag={m.label} title={m.title} text={m.text} />
      <section className="container demo-stage">
        <div>
          <h2>Une vision concrète.</h2>
          <ul className="checklist">
            {m.items.map((i) => (
              <li key={i}>{i}</li>
            ))}
          </ul>
          <p>
            Périmètre de présentation : les intégrations opérationnelles ne sont
            pas actives.
          </p>
        </div>
        <Phone driver={slug === "conducteurs"} />
      </section>
      {slug === "entreprises" && (
        <section className="container section">
          <Dashboard />
        </section>
      )}
      <CTA />
    </>
  );
}
