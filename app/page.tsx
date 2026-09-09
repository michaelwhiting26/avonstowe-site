import Hero from "@/components/Hero";
import DisciplineSection from "@/components/DisciplineSection";
import AnalysisScope from "@/components/AnalysisScope";
import ServicesSection from "@/components/ServicesSection";
import GeographyMap from "@/components/GeographyMap";
import PersonSection from "@/components/PersonSection";
import MethodSection from "@/components/MethodSection";
import ContactSection from "@/components/ContactSection";

/**
 * One page, one argument. Each section answers the question the section above it
 * provokes: claim -> proof -> person -> reassurance -> contact.
 */
export default function Home() {
  return (
    <>
      <Hero />
      <DisciplineSection />
      <AnalysisScope />
      <ServicesSection />
      <GeographyMap />
      <PersonSection />
      <MethodSection />
      <ContactSection />
    </>
  );
}
