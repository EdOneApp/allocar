"use client";
import { useEffect, useRef, useState } from "react";
import type LType from "leaflet";
import { trips } from "@/data/content";
import { position } from "@/lib/trips";
export default function RouteMap({ index = 0 }: { index?: number }) {
  const el = useRef<HTMLDivElement>(null),
    map = useRef<LType.Map | null>(null),
    [ready, setReady] = useState(false),
    [moving, setMoving] = useState(false),
    [failed, setFailed] = useState(false);
  useEffect(() => {
    let cancelled = false;
    import("leaflet").then((L) => {
      if (cancelled || !el.current) return;
      map.current = L.map(el.current, { scrollWheelZoom: false });
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution:
          '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      })
        .on("tileerror", () => setFailed(true))
        .addTo(map.current);
      setReady(true);
    });
    return () => {
      cancelled = true;
      map.current?.remove();
      map.current = null;
    };
  }, []);
  useEffect(() => {
    if (!ready || !map.current) return;
    let cancelled = false,
      frame = 0;
    let layer: LType.LayerGroup;
    import("leaflet").then((L) => {
      if (cancelled || !map.current) return;
      const c = trips[index].geometry.coordinates;
      layer = L.layerGroup().addTo(map.current);
      const ll = c.map((p) => [p[1], p[0]] as [number, number]);
      L.polyline(ll, { color: "#3159ef", weight: 6 }).addTo(layer);
      [ll[0], ll.at(-1)!].forEach((p, i) =>
        L.marker(p, {
          icon: L.divIcon({
            className: "map-marker",
            html: i ? "B" : "A",
            iconSize: [30, 30],
          }),
        }).addTo(layer),
      );
      const car = L.circleMarker(ll[0], {
        radius: 9,
        color: "#fff",
        weight: 3,
        fillColor: "#ff7b55",
        fillOpacity: 1,
      }).addTo(layer);
      map.current.fitBounds(L.latLngBounds(ll), { padding: [45, 45] });
      if (moving) {
        const start = performance.now();
        const loop = (now: number) => {
          const p = position(c, ((now - start) % 14000) / 14000);
          car.setLatLng([p[1], p[0]]);
          frame = requestAnimationFrame(loop);
        };
        frame = requestAnimationFrame(loop);
      }
    });
    return () => {
      cancelled = true;
      cancelAnimationFrame(frame);
      if (layer) layer.remove();
    };
  }, [ready, index, moving]);
  return (
    <div className="map-wrap">
      <div
        className="real-map"
        ref={el}
        aria-label="Carte routière d’Abidjan"
      />
      <button
        className="map-play"
        aria-pressed={moving}
        onClick={() => setMoving(!moving)}
      >
        {moving ? "Pause du véhicule" : "Animer le véhicule"}
      </button>
      <p className="map-note">
        {failed ? "Fond de carte momentanément indisponible. " : ""}Tracé réel ·
        véhicule simulé · sans trafic en direct
      </p>
    </div>
  );
}
