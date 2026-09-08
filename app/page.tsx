import Hero from "@/components/sections/Hero";
import ServiceGrid from "@/components/sections/ServiceGrid";
import Method from "@/components/sections/Method";
import SectorStrip from "@/components/sections/SectorStrip";
import LeadProfile from "@/components/sections/LeadProfile";
import ContactCTA from "@/components/sections/ContactCTA";
import { getPublishableLead } from "@/lib/consent";

/**
 * Home page sequence answers, in order:
 *   1. What does Avonstowe do?          → Hero
 *   2. In what sort of disputes?        → ServiceGrid
 *   3. Why believe the numbers?         → Method
 *   4. In what sectors?                 → SectorStrip
 *   4. Who is actually behind it?       → LeadProfile (and the hero byline on mobile)
 *   5. How do I make contact?           → ContactCTA
 */
export default function Home() {
  const lead = getPublishableLead();

  return (
    <>
      <Hero lead={lead} />
      <ServiceGrid />
      <Method />
      <SectorStrip />
      <LeadProfile lead={lead} />
      <ContactCTA />
    </>
  );
}
