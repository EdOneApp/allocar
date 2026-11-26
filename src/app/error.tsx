"use client";
export default function ErrorPage({ reset }: { reset: () => void }) {
  return (
    <section className="container section page-head">
      <h1>Un arrêt imprévu.</h1>
      <p>Réessayez de charger cette page.</p>
      <button className="button" onClick={reset}>
        Réessayer
      </button>
    </section>
  );
}
