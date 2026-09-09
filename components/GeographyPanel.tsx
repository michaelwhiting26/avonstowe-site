import type { CountryAttribution } from "@/lib/geoAttribution";
import { OVERALL } from "@/lib/geoAttribution";

/**
 * The attribution panel. Presentational only: it renders what it is given.
 *
 * Confidentiality: this shows counts, practice areas, forums and roles — the
 * same categories the commission tables already publish on this page. It never
 * shows client names, counterparties, case references, values or dates, and must
 * not be extended to do so without a separate decision.
 */

type Props = { country: CountryAttribution | null };

export default function GeographyPanel({ country }: Props) {
  if (!country) {
    return (
      <div className="geo-panel">
        <p className="geo-panel-eyebrow">All jurisdictions</p>
        <p className="geo-panel-total">{OVERALL.commissions}</p>
        <p className="geo-panel-caption">commissions recorded</p>
        <p className="geo-panel-caption geo-panel-sub">
          in {OVERALL.jurisdictions} jurisdictions
        </p>
        <p className="geo-panel-hint">
          Select a jurisdiction on the map or in the list to see the work recorded there.
        </p>
      </div>
    );
  }

  return (
    <div className="geo-panel">
      <p className="geo-panel-eyebrow">{country.name}</p>
      <p className="geo-panel-total">{country.total}</p>
      <p className="geo-panel-caption">
        {country.total === 1 ? "commission recorded" : "commissions recorded"}
      </p>
      <div className="geo-panel-meta">
        <p className="geo-panel-label">Forums</p>
        <p className="geo-panel-value">{country.forums.join(" · ")}</p>
      </div>
      <div className="geo-panel-meta">
        <p className="geo-panel-label">Roles</p>
        <p className="geo-panel-value">{country.roles.join(" · ")}</p>
      </div>
    </div>
  );
}
