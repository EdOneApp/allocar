"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
export default function Gif() {
  const [playing, setPlaying] = useState(false);
  useEffect(() => {
    const m = matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setPlaying(!m.matches);
    update();
    m.addEventListener("change", update);
    return () => m.removeEventListener("change", update);
  }, []);
  return (
    <div className="gif-card">
      <Image
        src={
          playing
            ? "/animations/cocody-plateau.gif"
            : "/animations/cocody-plateau-still.png"
        }
        alt="Animation du tracé routier Cocody–Plateau, véhicule simulé"
        width={800}
        height={520}
        unoptimized
      />
      <button onClick={() => setPlaying(!playing)} aria-pressed={playing}>
        {playing ? "Mettre le GIF en pause" : "Lire le GIF du trajet"}
      </button>
    </div>
  );
}
