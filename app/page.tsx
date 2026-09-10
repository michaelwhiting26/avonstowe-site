import Hero from "@/components/Hero";
import DisciplineSection from "@/components/DisciplineSection";
import ScopeSection from "@/components/ScopeSection";
import MattersSection from "@/components/MattersSection";
import GeographyMap from "@/components/GeographyMap";
import PersonSection from "@/components/PersonSection";
import MethodSection from "@/components/MethodSection";
import ContactSection from "@/components/ContactSection";

/**
 * One page, one argument. Each section answers the question the section above it
 * provokes: claim -> scope -> proof -> person -> reassurance -> contact.
 */
export default function Home() {
  return (
    <>
      <Hero />
      <DisciplineSection />
      <ScopeSection />
      <MattersSection />
      <GeographyMap />
      <PersonSection />
      <MethodSection />
      <ContactSection />
    </>
  );
}
