import type { Metadata } from "next";
import localFont from "next/font/local";
import "leaflet/dist/leaflet.css";
import "./globals.css";
import Shell from "@/components/Shell";
import { Footer } from "@/components/ui";
const font = localFont({
  src: [
    { path: "../../public/fonts/NeueMontreal-Regular.otf", weight: "400" },
    { path: "../../public/fonts/NeueMontreal-Bold.otf", weight: "700" },
  ],
  variable: "--font-main",
  display: "swap",
});
export const metadata: Metadata = {
  metadataBase: new URL("https://allocar.myoctogone.com"),
  title: {
    default: "AlloCar — Vos trajets. Du lien en plus.",
    template: "%s · AlloCar",
  },
  description:
    "Découvrez AlloCar : mobilité, covoiturage et interfaces web et mobile pensées pour Abidjan. Explorez la démonstration et ses vrais tracés routiers.",
  openGraph: {
    title: "AlloCar — Vos trajets. Du lien en plus.",
    images: ["/images/og-allocar.webp"],
    locale: "fr_FR",
    type: "website",
  },
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className={font.variable}>
        <a className="skip" href="#main">
          Aller au contenu
        </a>
        <Shell />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
