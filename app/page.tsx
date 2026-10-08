import Hero from "@/components/Hero";
import ServicesBand from "@/components/ServicesBand";
import MattersSection from "@/components/MattersSection";
import PersonSection from "@/components/PersonSection";
import ContactSection from "@/components/ContactSection";

/**
 * One page in the original design:
 * what the practice is -> what it does -> matters -> person -> contact.
 */
export default function Home() {
  return (
    <>
      <Hero />
      <ServicesBand />
      <MattersSection />
      <PersonSection />
      <ContactSection />
    </>
  );
}
