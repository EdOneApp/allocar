"use client";
import { useState } from "react";
import { trips } from "@/data/content";
import RouteDrawing from "./RouteDrawing";
export default function Dashboard() {
  const [tab, setTab] = useState("Trajets");
  return (
    <div className="dashboard">
      <aside>
        <b className="dash-brand">
          allocar<span>.</span>
        </b>
        <small>ESPACE OPÉRATIONS</small>
        {["Trajets", "Conducteurs", "Activité"].map((t) => (
          <button key={t} aria-pressed={tab === t} onClick={() => setTab(t)}>
            {t}
          </button>
        ))}
        <div className="dash-person">
          DG{" "}
          <span>
            Daniel
            <br />
            <small>Vue de démonstration</small>
          </span>
        </div>
      </aside>
      <div className="dash-main">
        <div className="dash-head">
          <div>
            <small>VUE D’ENSEMBLE</small>
            <h3>
              {tab === "Trajets"
                ? "Une ville. Des connexions."
                : tab === "Conducteurs"
                  ? "Les visages du trajet."
                  : "Le mouvement, en clair."}
            </h3>
          </div>
          <span className="pill">DONNÉES FICTIVES</span>
        </div>
        <div className="metrics">
          <div>
            <small>TRACÉS ROUTIERS</small>
            <b>3</b>
          </div>
          <div>
            <small>PROFILS DE DÉMO</small>
            <b>3</b>
          </div>
          <div>
            <small>PLACES ILLUSTRÉES</small>
            <b>9</b>
          </div>
        </div>
        {tab === "Conducteurs" ? (
          <div className="driver-cards">
            {trips.map((t) => (
              <div key={t.slug}>
                <span className="avatar">{t.initials}</span>
                <h4>{t.driver}</h4>
                <p>
                  {t.from} / {t.to}
                </p>
                <small>Profil fictif, non vérifié</small>
              </div>
            ))}
          </div>
        ) : (
          <div className="dash-content">
            <div className="table-wrap">
              <h4>
                {tab === "Trajets"
                  ? "Les prochains départs"
                  : "Les exemples du jour"}
              </h4>
              <table>
                <thead>
                  <tr>
                    <th>Itinéraire</th>
                    <th>Départ</th>
                    <th>Places</th>
                  </tr>
                </thead>
                <tbody>
                  {trips.map((t) => (
                    <tr key={t.slug}>
                      <td>
                        <b>{t.from}</b>
                        <small>{t.to}</small>
                      </td>
                      <td>{t.time}</td>
                      <td>{t.seats}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="dash-map">
              <RouteDrawing index={tab === "Activité" ? 1 : 0} />
            </div>
          </div>
        )}
        <p className="dash-foot">
          Maquette interactive · aucune flotte ni course suivie en temps réel
        </p>
      </div>
    </div>
  );
}
