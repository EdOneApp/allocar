import Link from "next/link";
export default function NotFound() {
  return (
    <section className="container section page-head">
      <p className="eyebrow">404 · PETIT DÉTOUR</p>
      <h1>
        Cette route
        <br />
        n’existe pas.
      </h1>
      <p className="lead">Reprenons le bon chemin.</p>
      <Link href="/" className="button">
        Retour à l’accueil
      </Link>
    </section>
  );
}
