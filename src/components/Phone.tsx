"use client";
import { useState } from "react";
import { trips } from "@/data/content";
import { fare } from "@/lib/trips";
import RouteDrawing from "./RouteDrawing";
export default function Phone({
  interactive = false,
  driver = false,
}: {
  interactive?: boolean;
  driver?: boolean;
}) {
  const [index, setIndex] = useState(0),
    [mode, setMode] = useState("shared"),
    [seats, setSeats] = useState(1),
    [done, setDone] = useState(false);
  const t = trips[index];
  return (
    <div className="phone-device">
      <div className="phone-status">
        <b>9:41</b>
        <span className="island" />
        <span>▰ ▮</span>
      </div>
      <div className="phone-app">
        <div className="phone-brand">
          allo<span>car.</span>
          <i>DG</i>
        </div>
        <small>{driver ? "ESPACE CONDUCTEUR" : "BONJOUR, DANIEL"}</small>
        <h3>{driver ? "La route vous attend." : "On vous emmène où ?"}</h3>
        {interactive ? (
          <label className="phone-search">
            Votre itinéraire
            <select
              value={index}
              onChange={(e) => {
                setIndex(+e.target.value);
                setSeats(1);
                setDone(false);
              }}
            >
              {trips.map((r, i) => (
                <option key={r.slug} value={i}>
                  {r.from} — {r.to}
                </option>
              ))}
            </select>
          </label>
        ) : (
          <div className="phone-search">
            ⌕{" "}
            <b>
              {t.from} — {t.to}
            </b>
          </div>
        )}
        <div className="phone-map">
          <RouteDrawing index={index} />
          <span className="map-chip">
            {Math.round(t.duration / 60)} min · estimation
          </span>
        </div>
        <div className="phone-sheet">
          <div className="sheet-top">
            <span className="pill">
              {driver
                ? "DÉPART PRÉVU"
                : mode === "private"
                  ? "TRAJET PRIVÉ"
                  : "TRAJET PARTAGÉ"}
            </span>
            <span>{t.time}</span>
          </div>
          <h4>
            {t.from} <span> / </span> {t.to}
          </h4>
          <p>
            {(t.distance / 1000).toFixed(1)} km · {t.seats} places proposées
          </p>
          {interactive && (
            <>
              <div className="segmented">
                {[
                  ["shared", "Partagé"],
                  ["private", "Privé"],
                ].map(([v, l]) => (
                  <button
                    key={v}
                    aria-pressed={mode === v}
                    onClick={() => {
                      setMode(v);
                      setDone(false);
                    }}
                  >
                    {l}
                  </button>
                ))}
              </div>
              <label className="seat-label">
                Places
                <select
                  value={seats}
                  onChange={(e) => {
                    setSeats(+e.target.value);
                    setDone(false);
                  }}
                >
                  {Array.from({ length: t.seats }, (_, i) => (
                    <option key={i} value={i + 1}>
                      {i + 1}
                    </option>
                  ))}
                </select>
              </label>
            </>
          )}
          <div className="driver-row">
            <span className="avatar">{t.initials}</span>
            <div>
              <b>{t.driver}</b>
              <small>Profil fictif</small>
            </div>
            <strong>
              {fare(t.fare, t.privateFare, mode, seats, t.seats).toLocaleString(
                "fr-FR",
              )}
              <small>FCFA · exemple</small>
            </strong>
          </div>
          {interactive ? (
            <>
              <button className="phone-action" onClick={() => setDone(!done)}>
                {done ? "Modifier mon exemple" : "Préparer ce trajet démo"}
              </button>
              {done && (
                <p className="success" role="status">
                  Votre exemple est prêt. Aucune réservation effectuée.
                </p>
              )}
            </>
          ) : (
            <div className="phone-action">
              {driver ? "Voir le prochain départ" : "Trouver mon trajet"}
            </div>
          )}
        </div>
        <div className="phone-tabs">
          <span>⌂ Accueil</span>
          <span>▤ Trajets</span>
          <span>◉ Profil</span>
        </div>
      </div>
    </div>
  );
}
