import { guides } from "@/data/content";
import { Head, CTA } from "@/components/ui";
import Link from "next/link";
import { notFound } from "next/navigation";
export function generateStaticParams() {
  return guides.map((g) => ({ slug: g.slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return { title: guides.find((g) => g.slug === slug)?.title };
}
export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const g = guides.find((g) => g.slug === slug);
  if (!g) notFound();
  return (
    <>
      <Head tag={g.tag} title={g.title} text="Le carnet de route AlloCar" />
      <article className="container section compact editorial">
        <p className="lead">{g.text}</p>
        <p>{g.next}</p>
        <Link className="text-link" href="/ressources">
          Tous les articles
        </Link>
      </article>
      <CTA />
    </>
  );
}
