import Link from "next/link";
import Image from "next/image";
import Phone from "./Phone";
import Dashboard from "./Dashboard";
import Gif from "./Gif";
import { CTA } from "./ui";
import { trips, modules, guides } from "@/data/content";
export default function Home() {
  return (
    <>
      <section className="hero container">
        <div className="hero-copy">
          <p className="eyebrow">
            <span /> LA VILLE EST PLUS BELLE À PLUSIEURS
          </p>
          <h1>
            Vos trajets.
            <br />
            Du <em>lien</em>
            <br />
            en plus.
          </h1>
          <p className="lead">
            Du premier bonjour au dernier kilomètre. AlloCar imagine une
            mobilité plus simple, plus locale, plus partagée.
          </p>
          <div className="actions">
            <Link href="/application" className="button">
              Explorer l’application
            </Link>
            <Link href="/trajets" className="text-link">
              Découvrir les trajets
            </Link>
          </div>
          <div className="hero-proof">
            <span className="proof-icon">↔</span>
            <p>
              Pensé pour Abidjan.
              <br />
              <b>Ouvert à toutes les connexions.</b>
            </p>
          </div>
        </div>
        <div className="hero-art">
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <span className="floating-label">
            Cocody <b> / </b> Plateau
          </span>
          <div className="hero-phone">
            <Phone />
          </div>
          <Image
            className="hero-car"
            src="/images/allocar-sedan.webp"
            alt="Illustration d’une berline de covoiturage"
            width={1000}
            height={660}
            priority
          />
          <div className="ride-tag">
            <span>☀</span>
            <div>
              Le départ d’une
              <br />
              <b>belle journée.</b>
            </div>
          </div>
        </div>
      </section>
      <section className="route-strip">
        <div className="container">
          <p>UNE VILLE, MILLE FAÇONS DE SE RETROUVER</p>
          <span>COCODY</span>
          <i>●</i>
          <span>PLATEAU</span>
          <i>●</i>
          <span>ANGRÉ</span>
          <i>●</i>
          <span>MARCORY</span>
        </div>
      </section>
      <section className="section container">
        <div className="section-head">
          <div>
            <p className="eyebrow">UN DÉPART PRÈS DE VOUS</p>
            <h2>
              On prend
              <br />
              la même route ?
            </h2>
          </div>
          <div>
            <p>
              Trois vrais tracés routiers d’Abidjan.
              <br />
              Des offres illustratives pour explorer l’expérience.
            </p>
            <Link href="/trajets" className="text-link">
              Voir la carte des trajets
            </Link>
          </div>
        </div>
        <div className="trip-grid">
          {trips.map((t, i) => (
            <Link
              key={t.slug}
              href={"/trajets/" + t.slug}
              className={"trip-card trip-" + i}
            >
              <div className="trip-top">
                <span>{t.time}</span>
                <span className="pill">{t.seats} PLACES · DÉMO</span>
              </div>
              <div className="route-stops">
                <h3>{t.from}</h3>
                <span />
                <h3>{t.to}</h3>
              </div>
              <div className="trip-bottom">
                <span>{(t.distance / 1000).toFixed(1)} km · tracé réel</span>
                <b>
                  {t.fare.toLocaleString("fr-FR")}
                  <small> FCFA / place*</small>
                </b>
              </div>
            </Link>
          ))}
        </div>
        <p className="fine">
          * Tarifs, horaires et places fictifs. Les tracés proviennent d’OSRM /
          OpenStreetMap, sans trafic en direct.
        </p>
      </section>
      <section className="app-section">
        <div className="container app-story">
          <div className="phone-stage">
            <div className="stage-ring" />
            <Phone />
            <span className="stage-note">
              Tout commence
              <br />
              par un bonjour.
            </span>
          </div>
          <div>
            <p className="eyebrow">L’ESSENTIEL, AU BON ENDROIT</p>
            <h2>
              Moins de détours.
              <br />
              Plus de <em>simplicité.</em>
            </h2>
            <p className="lead">
              Le quartier, le départ, les places et le prix. Les bonnes
              informations pour choisir sereinement votre prochain trajet.
            </p>
            <div className="feature-line">
              <b>Un départ qui vous ressemble</b>
              <p>
                Partagé ou privé : comparez les exemples dans l’application.
              </p>
            </div>
            <div className="feature-line">
              <b>Clair, même sur petit écran</b>
              <p>
                Une interface mobile lisible et un récapitulatif sans surprise.
              </p>
            </div>
            <Link href="/application" className="button">
              Essayer l’interface
            </Link>
          </div>
        </div>
      </section>
      <section className="section container motion-story">
        <div>
          <p className="eyebrow">DE VRAIES ROUTES, DU MOUVEMENT</p>
          <h2>
            Le lien
            <br />
            prend forme.
          </h2>
          <p className="lead">
            Suivez le tracé Cocody–Plateau. Le véhicule est simulé ; la route,
            elle, suit les rues d’Abidjan.
          </p>
          <Link className="text-link" href="/trajets">
            Explorer la carte réelle
          </Link>
        </div>
        <Gif />
      </section>
      <section className="operations section">
        <div className="container">
          <div className="section-head">
            <div>
              <p className="eyebrow">LA VILLE, VUE D’ENSEMBLE</p>
              <h2>
                Petit écran.
                <br />
                Grande vision.
              </h2>
            </div>
            <p>
              Passagers, conducteurs, opérations.
              <br />
              Une expérience cohérente, de la poche au bureau.
            </p>
          </div>
          <Dashboard />
          <div className="below-dash">
            <p>
              Tableau de bord de présentation. Changez d’onglet pour explorer
              les différentes vues.
            </p>
            <Link href="/interfaces" className="text-link">
              Toutes les interfaces
            </Link>
          </div>
        </div>
      </section>
      <section className="section container city-story">
        <div className="city-image">
          <Image
            src="/images/abidjan-road.webp"
            alt="Photographie réelle d’une grande route à Abidjan"
            width={1400}
            height={1000}
          />
          <span>ABIDJAN, CÔTE D’IVOIRE</span>
        </div>
        <div>
          <p className="eyebrow">ANCRÉ DANS LE QUOTIDIEN</p>
          <h2>
            Notre terrain.
            <br />
            Votre quotidien.
          </h2>
          <p className="lead">
            Les quartiers qui s’éveillent, les rendez-vous qui comptent et les
            gens qu’on retrouve. C’est là qu’AlloCar prend tout son sens.
          </p>
          <p>
            Une vision de la mobilité pensée pour les usages locaux, avec des
            parcours web et mobile qui se répondent.
          </p>
          <Link className="text-link" href="/projet">
            Découvrir le projet
          </Link>
          <p className="fine">
            Photo : Abdallah Hussein · CC BY 2.0 ·{" "}
            <Link href="/credits">Crédits</Link>
          </p>
        </div>
      </section>
      <section className="section container">
        <div className="section-head">
          <div>
            <p className="eyebrow">PLUSIEURS FAÇONS D’AVANCER</p>
            <h2>
              À chacun
              <br />
              sa place.
            </h2>
          </div>
          <Link href="/fonctionnalites" className="text-link">
            La vision du produit
          </Link>
        </div>
        <div className="module-grid">
          {modules.map((m, i) => (
            <Link key={m.slug} href={"/fonctionnalites/" + m.slug}>
              <span className="module-symbol">{["↔", "◎", "▦", "⌘"][i]}</span>
              <p className="eyebrow">{m.label}</p>
              <h3>{m.title}</h3>
              <p>{m.text}</p>
            </Link>
          ))}
        </div>
      </section>
      <section className="section container">
        <div className="section-head">
          <div>
            <p className="eyebrow">LE CARNET DE ROUTE</p>
            <h2>Avant de partir.</h2>
          </div>
          <Link href="/ressources" className="text-link">
            Lire le carnet
          </Link>
        </div>
        <div className="guide-grid">
          {guides.map((g, i) => (
            <Link key={g.slug} href={"/ressources/" + g.slug}>
              <div className={"guide-art art-" + i}>{["↔", "●", "▦"][i]}</div>
              <p className="eyebrow">{g.tag}</p>
              <h3>{g.title}</h3>
            </Link>
          ))}
        </div>
      </section>
      <CTA />
    </>
  );
}
