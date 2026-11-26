import { trips } from "@/data/content";
export default function RouteDrawing({ index = 0 }: { index?: number }) {
  const coords = trips[index].geometry.coordinates;
  const all = trips.flatMap((r) => r.geometry.coordinates);
  const xs = all.map((c) => c[0]),
    ys = all.map((c) => c[1]);
  const x0 = Math.min(...xs),
    x1 = Math.max(...xs),
    y0 = Math.min(...ys),
    y1 = Math.max(...ys);
  const p = (c: number[]) => [
    40 + ((c[0] - x0) / (x1 - x0)) * 480,
    390 - ((c[1] - y0) / (y1 - y0)) * 340,
  ];
  const line = (c: number[][]) => c.map((v) => p(v).join(",")).join(" ");
  const a = p(coords[0]),
    b = p(coords.at(-1)!);
  return (
    <svg
      viewBox="0 0 560 440"
      className="route-drawing"
      role="img"
      aria-label={`Tracé routier réel ${trips[index].from} vers ${trips[index].to}, fond schématique`}
    >
      <defs>
        <pattern
          id={`grid-${index}`}
          width="32"
          height="32"
          patternUnits="userSpaceOnUse"
        >
          <path d="M32 0H0V32" fill="none" stroke="#dde4f4" />
        </pattern>
      </defs>
      <rect width="560" height="440" fill="#eef2fa" />
      <rect width="560" height="440" fill={`url(#grid-${index})`} />
      {trips.map((t) => (
        <polyline
          key={t.slug}
          points={line(t.geometry.coordinates)}
          fill="none"
          stroke="#c7d1e6"
          strokeWidth="9"
          strokeLinejoin="round"
        />
      ))}
      <polyline
        points={line(coords)}
        fill="none"
        stroke="white"
        strokeWidth="14"
        strokeLinejoin="round"
      />
      <polyline
        points={line(coords)}
        fill="none"
        stroke="#3159ef"
        strokeWidth="7"
        strokeLinejoin="round"
      />
      <circle
        cx={a[0]}
        cy={a[1]}
        r="12"
        fill="#18243a"
        stroke="white"
        strokeWidth="4"
      />
      <circle
        cx={b[0]}
        cy={b[1]}
        r="12"
        fill="#ff9374"
        stroke="white"
        strokeWidth="4"
      />
      <text x="24" y="425" fontSize="12" fill="#566176">
        TRACÉ OSRM / OSM · FOND SCHÉMATIQUE
      </text>
    </svg>
  );
}
