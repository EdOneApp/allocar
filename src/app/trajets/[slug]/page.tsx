import { trips } from "@/data/content";
import { Head, CTA } from "@/components/ui";
import RouteMap from "@/components/RouteMap";
import Link from "next/link";
import { notFound } from "next/navigation";
export function generateStaticParams() {
  return trips.map((t) => ({ slug: t.slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const t = trips.find((t) => t.slug === slug);
  return { title: t ? t.from + " — " + t.to : "Trajet" };
}
export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const index = trips.findIndex((t) => t.slug === slug);
  if (index < 0) notFound();
  const t = trips[index];
  return (
    <>
      <Head
        tag="LE TRAJET EN DÉTAIL"
        title={t.from + " / " + t.to}
        text="Un tracé routier réel, une offre illustrative. Explorez la route et son estimation, sans réserver de transport."
      />
      <section className="container section compact">
        <RouteMap index={index} />
        <div className="detail-stats">
          <div>
            <small>DISTANCE CALCULÉE</small>
            <b>{(t.distance / 1000).toFixed(1)} km</b>
          </div>
          <div>
            <small>DURÉE SANS TRAFIC</small>
            <b>≈ {Math.round(t.duration / 60)} min</b>
          </div>
          <div>
            <small>PRIX FICTIF / PLACE</small>
            <b>{t.fare.toLocaleString("fr-FR")} FCFA</b>
          </div>
        </div>
        <p>
          Calcul OSRM / OpenStreetMap archivé le 26 novembre 2026. Origine et
          destination : points indicatifs de quartiers. Horaires, prix et
          conducteur fictifs.
        </p>
        <Link className="button" href="/application">
          Essayer ce type de trajet
        </Link>
      </section>
      <CTA />
    </>
  );
}
