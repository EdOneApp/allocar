"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
const links = [
  ["Le concept", "/projet"],
  ["Les trajets", "/trajets"],
  ["Les interfaces", "/interfaces"],
  ["Le carnet", "/ressources"],
];
export default function Shell() {
  const [open, setOpen] = useState(false);
  const path = usePathname();
  useEffect(() => {
    const close = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", close);
    return () => document.removeEventListener("keydown", close);
  }, []);
  return (
    <header className="header">
      <Link className="brand" href="/" onClick={() => setOpen(false)}>
        allo<span>car.</span>
        <i />
      </Link>
      <nav aria-label="Navigation principale">
        {links.map(([l, h]) => (
          <Link
            key={h}
            href={h}
            aria-current={path.startsWith(h) ? "page" : undefined}
          >
            {l}
          </Link>
        ))}
      </nav>
      <Link href="/application" className="button nav-cta">
        Explorer l’app
      </Link>
      <button
        className="menu"
        aria-expanded={open}
        aria-controls="mobile-nav"
        onClick={() => setOpen(!open)}
      >
        {open ? "Fermer" : "Menu"}
      </button>
      {open && (
        <nav
          id="mobile-nav"
          className="mobile-nav"
          aria-label="Navigation mobile"
        >
          {[
            ...links,
            ["Explorer l’app", "/application"],
            ["Contact", "/contact"],
          ].map(([l, h]) => (
            <Link key={h} href={h} onClick={() => setOpen(false)}>
              {l}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
