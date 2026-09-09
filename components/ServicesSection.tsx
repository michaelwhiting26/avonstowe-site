"use client";

import { commissions, PREVIEW_COUNT, type ServiceKey } from "@/lib/commissions";
import { useOverlay } from "./OverlayProvider";
import CommissionTable from "./CommissionTable";
import CommissionCards from "./CommissionCards";
import { Reveal } from "./Motion";
import CountUp from "./CountUp";

/**
 * The commission record — the proof link.
 *
 * rev3 presented this behind three practice-area tabs, which made the taxonomy
 * the navigation and forced the reader to choose a service line before seeing
 * any evidence. The tabs are gone: one list, in one continuous scroll. ServiceKey
 * survives as a data field because lib/commissions.ts is keyed by it and that
 * file is evidence and is not modified — but it no longer steers the page.
 */
const ORDER: ServiceKey[] = ["expert", "disputes", "advisory"];
const allCommissions = ORDER.flatMap((key) => commissions[key]);

export default function ServicesSection() {
  const { openCommissions } = useOverlay();

  return (
    <section className="services-section" id="commissions">
      <Reveal className="section-header">
        <p className="section-eyebrow">The record</p>
        <h2 className="section-title">Selected commissions</h2>
      </Reveal>

      <div className="service-panel">
        <p className="commissions-header">Selected Commissions (Scroll To View All)</p>

        <CommissionTable items={allCommissions} />

        <div className="mobile-list mobile-preview">
          <CommissionCards items={allCommissions.slice(0, PREVIEW_COUNT)} />
        </div>
        <button className="mobile-view-all" onClick={() => openCommissions("expert")}>
          View All Commissions (<CountUp value={allCommissions.length} />)
        </button>
      </div>
    </section>
  );
}
