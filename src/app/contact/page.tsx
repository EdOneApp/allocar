import { Head } from "@/components/ui";
import Link from "next/link";
import Contact from "@/components/Contact";
export const metadata = { title: "Contact" };
export default function Page() {
  return (
    <>
      <Head
        tag="UN BONJOUR SUFFIT"
        title="Et si on faisait un bout de chemin ?"
        text="Une question sur le projet, une collaboration ou une application à imaginer ? Échangeons."
      />
      <section className="container contact-grid section compact">
        <div>
          <h2>Daniel Guedegbe</h2>
          <p>Conception d’applications web et mobile.</p>
          <a href="mailto:danielguedegbe10027@gmail.com">
            danielguedegbe10027@gmail.com
          </a>
          <a href="tel:+2250748733365">+225 07 48 73 33 65</a>
          <Link className="text-link" href="https://guedegbe.com">
            Découvrir le portfolio
          </Link>
        </div>
        <Contact />
      </section>
    </>
  );
}
