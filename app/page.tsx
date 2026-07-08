import Hero from "@/components/Hero";
import IntroBand from "@/components/IntroBand";
import ServicesSection from "@/components/ServicesSection";
import GeographySection from "@/components/GeographySection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <>
      <Hero />
      <IntroBand />
      <ServicesSection />
      <GeographySection />
      <ContactSection />
    </>
  );
}
