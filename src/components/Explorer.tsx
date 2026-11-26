"use client";
import { useState } from "react";
import Link from "next/link";
import { trips } from "@/data/content";
import { normalize } from "@/lib/trips";
import RouteMap from "./RouteMap";
export default function Explorer() {
  const [query, setQuery] = useState(""),
    [selected, setSelected] = useState(0);
  const visible = trips
    .map((t, i) => ({ ...t, index: i }))
    .filter((t) => normalize(t.from + " " + t.to).includes(normalize(query)));
  const current = visible.find((t) => t.index === selected) || visible[0];
  return (
    <>
      <label className="search-label">
        Rechercher un quartier
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Cocody, Plateau, Angré…"
        />
      </label>
      <div className="explorer">
        <div className="trip-list">
          {visible.map((t) => (
            <button
              key={t.slug}
              onClick={() => setSelected(t.index)}
              aria-pressed={current?.index === t.index}
            >
              <span>
                {t.time} <small>EXEMPLE DE DÉPART</small>
              </span>
              <h3>
                {t.from} / {t.to}
              </h3>
              <p>
                {(t.distance / 1000).toFixed(1)} km · {t.seats} places fictives
              </p>
              <strong>
                {t.fare.toLocaleString("fr-FR")} FCFA{" "}
                <small>/ place · exemple</small>
              </strong>
            </button>
          ))}
          {!current && (
            <div className="empty">
              <h3>Aucun exemple pour ce quartier.</h3>
              <button onClick={() => setQuery("")}>
                Voir tous les trajets
              </button>
            </div>
          )}
        </div>
        <div>
          {current && (
            <>
              <RouteMap index={current.index} />
              <Link
                className="button secondary"
                href={"/trajets/" + current.slug}
              >
                Voir le détail de ce tracé
              </Link>
            </>
          )}
        </div>
      </div>
    </>
  );
}
