export function normalize(s: string) {
  return s
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
}
export function fare(
  unit: number,
  privateFare: number,
  mode: string,
  seats: number,
  capacity: number,
) {
  if (!Number.isInteger(seats) || seats < 1 || seats > capacity)
    throw new Error("Capacité invalide");
  return mode === "private" ? privateFare : unit * seats;
}
export function position(coords: number[][], t: number): number[] {
  if (!coords.length) throw new Error("Tracé vide");
  const n = Math.max(0, Math.min(1, t)) * (coords.length - 1);
  const i = Math.floor(n);
  const a = coords[i],
    b = coords[Math.min(i + 1, coords.length - 1)];
  return [a[0] + (b[0] - a[0]) * (n - i), a[1] + (b[1] - a[1]) * (n - i)];
}
