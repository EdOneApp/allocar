import Link from "next/link";
export function Head({
  tag,
  title,
  text,
}: {
  tag: string;
  title: string;
  text: string;
}) {
  return (
    <section className="page-head container">
      <p className="eyebrow">{tag}</p>
      <h1>{title}</h1>
      <p className="lead">{text}</p>
    </section>
  );
}
export function CTA() {
  return (
    <section className="cta container">
      <div>
        <p className="eyebrow">LE PROCHAIN DÉPART</p>
        <h2>
          Le meilleur trajet,
          <br />
          c’est celui qu’on partage.
        </h2>
      </div>
      <Link href="/application" className="button light">
        Explorer la démonstration
      </Link>
    </section>
  );
}
export function Footer() {
  return (
    <footer className="container">
      <div className="footer-top">
        <Link className="brand" href="/">
          allo<span>car.</span>
        </Link>
        <p>
          Des trajets. Des rencontres.
          <br />
          Une mobilité qui fait du lien.
        </p>
        <div>
          {[
            ["L’application", "application"],
            ["Conducteurs", "conducteurs"],
            ["Entreprises", "entreprises"],
            ["Tarifs de démo", "tarifs"],
            ["Aide", "aide"],
            ["Contact", "contact"],
          ].map(([l, h]) => (
            <Link key={h} href={"/" + h}>
              {l}
            </Link>
          ))}
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2026 AlloCar · Présentation du projet</span>
        <Link href="/credits">Crédits & sources</Link>
        <Link href="/confidentialite">Confidentialité</Link>
        <Link href="/mentions-legales">Mentions légales</Link>
      </div>
      <p className="demo-note">
        Interfaces de démonstration : profils, horaires, prix et disponibilités
        fictifs. Aucune réservation ni aucun paiement sur ce site.
      </p>
    </footer>
  );
}
