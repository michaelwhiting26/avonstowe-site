import { Reveal } from "./Motion";
import GeographyExplorer, { type ActiveCountry } from "./GeographyExplorer";
import { MAP_HEIGHT, MAP_WIDTH, MOBILE_FRAME, worldPaths } from "@/lib/worldPaths";
import { ACTIVE_M49, NON_JURISDICTIONAL, OVERALL, geoAttribution } from "@/lib/geoAttribution";

/**
 * Geographic reach, drawn.
 *
 * An additive section: it sits below <GeographySection /> and above
 * <ContactSection /> and changes nothing above it. Removing it is one import and
 * one line in app/page.tsx.
 *
 * A country is drawn active if, and only if, the commission record in
 * lib/commissions.ts contains at least one row for it. Every count below is read
 * from lib/geoAttribution.ts, which is generated from that record.
 *
 * This stays a Server Component: the 177 outlines are rendered once into a <defs>
 * block here and referenced by <use> inside <GeographyExplorer />, so the heavy
 * geometry never crosses the client boundary.
 */

const activeSet = new Set(ACTIVE_M49);

/** Does any part of this country's projected geometry fall inside the frame? */
function intersects(bbox: readonly [number, number, number, number], frame: typeof MOBILE_FRAME) {
  const [x0, y0, x1, y1] = bbox;
  return (
    x1 >= frame.x && x0 <= frame.x + frame.width && y1 >= frame.y && y0 <= frame.y + frame.height
  );
}

const drawn = worldPaths.filter((c) => activeSet.has(c.m49));
const offFrame = drawn.filter((c) => !intersects(c.bbox, MOBILE_FRAME));
const offFrameNames = offFrame
  .map((c) => geoAttribution.find((a) => a.m49 === c.m49)?.name ?? c.name)
  .sort((a, b) => a.localeCompare(b));

/** Jurisdictions counted in the record but deliberately not drawn (see locationMap.ts). */
const countedNotDrawn = geoAttribution.filter((c) => !c.render);
const nonJurisdictional = NON_JURISDICTIONAL.reduce((n, e) => n + e.count, 0);
const offMapTotal = countedNotDrawn.reduce((n, c) => n + c.total, 0) + nonJurisdictional;

/**
 * Hit areas for the 27 active countries. Derived here rather than in the client
 * so the interactive layer stays a thin state machine, and because two of these
 * rules exist to fix real defects found in testing:
 *
 *  - Russia crosses the antimeridian, so its projected bounding box is
 *    0,0 -> 2000,524: the entire northern half of the map. Left alone it would
 *    capture every hover over the United Kingdom, Scandinavia, Poland, Germany,
 *    Kazakhstan and Canada. Any box wider or taller than a quarter of the map is
 *    therefore clamped around the country's centroid.
 *  - Qatar's true box is about 5 x 10 units and Bahrain's is under 1 x 3, which
 *    is a fraction of a pixel. A floor of 8 units makes them findable with a
 *    mouse. It does not make them a touch target — nothing at this scale could
 *    be — which is why the jurisdiction list is the real control on a phone.
 *
 * Rects are then ordered largest first, so the smallest country is always
 * painted last and wins the pointer where boxes overlap.
 */
const MIN_HIT = 8;
const MAX_HIT_X = MAP_WIDTH / 4;
const MAX_HIT_Y = MAP_HEIGHT / 4;

const activeGeometry: ActiveCountry[] = drawn
  .map((c) => {
    const [x0, y0, x1, y1] = c.bbox;
    const w = Math.min(Math.max(x1 - x0, MIN_HIT), MAX_HIT_X);
    const h = Math.min(Math.max(y1 - y0, MIN_HIT), MAX_HIT_Y);
    const cx = Math.min(Math.max(c.cx, w / 2), MAP_WIDTH - w / 2);
    const cy = Math.min(Math.max(c.cy, h / 2), MAP_HEIGHT - h / 2);
    return {
      m49: c.m49,
      cx: c.cx,
      cy: c.cy,
      hit: [
        Math.round((cx - w / 2) * 10) / 10,
        Math.round((cy - h / 2) * 10) / 10,
        Math.round(w * 10) / 10,
        Math.round(h * 10) / 10,
      ] as [number, number, number, number],
    };
  })
  .sort((a, b) => b.hit[2] * b.hit[3] - a.hit[2] * a.hit[3]);

/** Ordered by commission count so the keyboard reaches the United Kingdom first. */
const drawnAttribution = geoAttribution.filter((c) => c.render);

const TITLE = `World map showing the ${drawn.length} jurisdictions in which Avonstowe has been engaged.`;

const SYMBOL_ID = "avonstowe-world";

function formatList(names: string[]) {
  if (names.length < 2) return names.join("");
  return `${names.slice(0, -1).join(", ")} and ${names[names.length - 1]}`;
}

export default function GeographyMap() {
  return (
    <section className="geo-map-section" id="geographic-map">
      <Reveal>
        <p className="section-eyebrow">Where The Work Has Been</p>
        <h2 className="geo-map-title">{drawn.length} jurisdictions</h2>
        <p className="geo-map-lead">
          Every highlighted jurisdiction is one in which a commission has been recorded. The map is
          drawn from the same {OVERALL.commissions} commissions listed above, not from a target
          market.
        </p>
      </Reveal>

      {/*
        Two framings of one map. The wide frame shows the world; the narrow frame
        shows the band that carries most of the work, because a full world at
        375px renders the United Kingdom about four pixels across. Both are static
        markup — swapping the viewBox at runtime would mean shipping JavaScript to
        do what a media query already does.

        The geometry is emitted once into a <defs> block and referenced twice with
        <use>, because measurement showed a second literal copy of the paths costs
        a further 54 KB gzipped: the payload is far larger than gzip's 32 KB match
        window, so the duplicate does not compress against the original.
      */}
      <svg className="geo-map-defs" aria-hidden="true" focusable="false">
        <defs>
          <g id={SYMBOL_ID}>
            {worldPaths.map((country) => (
              <path
                key={country.m49}
                d={country.d}
                data-m49={country.m49}
                className={activeSet.has(country.m49) ? "geo-country is-active" : "geo-country"}
              />
            ))}
          </g>
        </defs>
      </svg>

      <GeographyExplorer
        symbolId={SYMBOL_ID}
        mapWidth={MAP_WIDTH}
        mapHeight={MAP_HEIGHT}
        mobileFrame={MOBILE_FRAME}
        geometry={activeGeometry}
        attribution={drawnAttribution}
        title={TITLE}
      />

      {/* Cropping must not overstate reach: say what the narrow frame leaves out. */}
      {offFrameNames.length > 0 && (
        <p className="geo-map-note geo-map-note-narrow">
          Outside this frame: {formatList(offFrameNames)}.
        </p>
      )}

      <p className="geo-map-note">
        {OVERALL.commissions} commissions across {drawn.length} jurisdictions.{" "}
        {offMapTotal > 0 && (
          <>
            A further {offMapTotal} are not tied to a single jurisdiction
            {countedNotDrawn.length > 0 &&
              ` or fall outside the map (${countedNotDrawn.map((c) => c.name).join(", ")})`}
            .
          </>
        )}
      </p>
    </section>
  );
}
