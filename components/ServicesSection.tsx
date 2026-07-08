"use client";

import { useState } from "react";
import { practiceAreas } from "@/lib/practiceAreas";
import { commissions, PREVIEW_COUNT, type ServiceKey } from "@/lib/commissions";
import { useOverlay } from "./OverlayProvider";
import CommissionTable from "./CommissionTable";
import CommissionCards from "./CommissionCards";

export default function ServicesSection() {
  const [active, setActive] = useState<ServiceKey>("disputes");
  // The two inactive tabs pulse ("tab-hint") until the first interaction,
  // exactly as the original showServicePanel() cleared the hint on first click.
  const [interacted, setInteracted] = useState(false);
  const { openCommissions } = useOverlay();

  function selectTab(key: ServiceKey) {
    setActive(key);
    setInteracted(true);
  }

  return (
    <section className="services-section" id="services">
      <div className="section-header">
        <p className="section-eyebrow">What We Do</p>
        <h2 className="section-title">Our practice areas</h2>
      </div>

      <div className="service-tabs" role="tablist" aria-label="Our practice areas">
        {practiceAreas.map((area) => {
          const isActive = area.key === active;
          const hint = !interacted && !isActive;
          const className = `tab-btn${isActive ? " active" : ""}${hint ? " tab-hint" : ""}`;
          return (
            <button
              key={area.key}
              className={className}
              type="button"
              role="tab"
              onClick={() => selectTab(area.key)}
              aria-selected={isActive}
            >
              {area.title}
            </button>
          );
        })}
      </div>

      {practiceAreas.map((area) => {
        const items = commissions[area.key];
        const isActive = area.key === active;
        return (
          <div
            className="service-panel"
            id={`panel-${area.key}`}
            style={{ display: isActive ? "block" : "none" }}
            key={area.key}
          >
            <div className="service-intro">
              <div className="service-number">{area.number}</div>
              <div>
                <h3 className="service-title">{area.title}</h3>
                <p className="service-desc">{area.desc}</p>
                <div className="service-tags">
                  {area.tags.map((tag) => (
                    <span className="tag" key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <p className="commissions-header">Selected Commissions (Scroll To View All)</p>

            <CommissionTable items={items} />

            <div className="mobile-list mobile-preview" id={`${area.key}-mobile-preview`}>
              <CommissionCards items={items.slice(0, PREVIEW_COUNT)} />
            </div>
            <button
              className="mobile-view-all"
              onClick={() => openCommissions(area.key)}
            >
              View All Commissions ({items.length})
            </button>
          </div>
        );
      })}
    </section>
  );
}
