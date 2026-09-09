import type { CountryAttribution } from "@/lib/geoAttribution";
import { AREA_LABELS, OVERALL } from "@/lib/geoAttribution";

/**
 * The attribution panel. Presentational only: it renders what it is given.
 *
 * Confidentiality: this shows counts, practice areas, forums and roles — the
 * same categories the commission tables already publish on this page. It never
 * shows client names, counterparties, case references, values or dates, and must
 * not be extended to do so without a separate decision.
 */

type Props = { country: CountryAttribution | null };

const AREAS = ["disputes", "expert", "advisory"] as const;

export default function GeographyPanel({ country }: Props) {
  if (!country) {
    return (
      <div className="geo-panel">
        <p className="geo-panel-eyebrow">All jurisdictions</p>
        <p className="geo-panel-total">{OVERALL.commissions}</p>
        <p className="geo-panel-caption">commissions recorded</p>
        <dl className="geo-panel-areas">
          {AREAS.map((area) => (
            <div key={area}>
              <dt>{AREA_LABELS[area]}</dt>
              <dd>{OVERALL.byArea[area]}</dd>
            </div>
          ))}
        </dl>
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
      <dl className="geo-panel-areas">
        {AREAS.filter((area) => country.byArea[area] > 0).map((area) => (
          <div key={area}>
            <dt>{AREA_LABELS[area]}</dt>
            <dd>{country.byArea[area]}</dd>
          </div>
        ))}
      </dl>
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
