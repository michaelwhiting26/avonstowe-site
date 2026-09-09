import Hero from "@/components/Hero";
import ServiceIndex from "@/components/ServiceIndex";
import ServicesSection from "@/components/ServicesSection";
import GeographySection from "@/components/GeographySection";
import GeographyMap from "@/components/GeographyMap";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <>
      <Hero />
      <ServiceIndex />
      <ServicesSection />
      <GeographySection />
      <GeographyMap />
      <ContactSection />
    </>
  );
}
