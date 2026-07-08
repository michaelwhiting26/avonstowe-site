"use client";

import { commissions, type ServiceKey } from "@/lib/commissions";
import { practiceAreas } from "@/lib/practiceAreas";
import CommissionCards from "./CommissionCards";

const overlayTitles: Record<ServiceKey, string> = practiceAreas.reduce(
  (acc, area) => {
    acc[area.key] = area.overlayTitle;
    return acc;
  },
  {} as Record<ServiceKey, string>,
);

export default function CommissionsOverlay({
  section,
  onClose,
}: {
  section: ServiceKey | null;
  onClose: () => void;
}) {
  const title = section ? overlayTitles[section] : "All Commissions";
  const items = section ? commissions[section] : [];

  return (
    <div
      id="commissions-overlay"
      className={`commissions-overlay${section ? " active" : ""}`}
    >
      <div className="overlay-header">
        <h3 className="overlay-title" id="overlay-title">
          {title}
        </h3>
        <button className="overlay-close" onClick={onClose} aria-label="Close">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>
      </div>
      <div className="overlay-content" id="overlay-content">
        {section && <CommissionCards items={items} />}
      </div>
    </div>
  );
}
