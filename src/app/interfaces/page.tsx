import { Head, CTA } from "@/components/ui";
import Phone from "@/components/Phone";
import Dashboard from "@/components/Dashboard";
export const metadata = { title: "Les interfaces" };
export default function Page() {
  return (
    <>
      <Head
        tag="DE LA POCHE AU BUREAU"
        title="Un seul lien. Tous vos écrans."
        text="Une application passager, une vue conducteur et un tableau de bord. Explorez les interfaces de présentation du projet."
      />
      <section className="container section compact">
        <Dashboard />
      </section>
      <section className="container two-phones section">
        <div>
          <p className="eyebrow">CÔTÉ PASSAGER</p>
          <Phone />
        </div>
        <div>
          <p className="eyebrow">CÔTÉ CONDUCTEUR</p>
          <Phone driver />
        </div>
      </section>
      <CTA />
    </>
  );
}
