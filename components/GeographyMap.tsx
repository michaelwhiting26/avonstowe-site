import { MAP_HEIGHT, MAP_WIDTH, MOBILE_FRAME, continentPaths, worldPaths } from "@/lib/worldPaths";
import { EXCLUDED_FROM_MAP, HEADQUARTERS, REGIONS } from "@/lib/publishedRegions";

/**
 * The map, and nothing else.
 *
 * A COVERAGE map. The regions Avonstowe works in — the United Kingdom and
 * Europe, the Middle East, and Africa — are filled, with their country borders
 * visible inside the fill. Everywhere else is a dissolved continent silhouette
 * with no internal borders, so the covered regions are the only thing with
 * detail in them.
 *
 * It does not claim a matter in every country shown, and is not read that way.
 * The per-matter evidence is in Selected Matters, which names forum,
 * jurisdiction and heads in issue for each.
 *
 * Two earlier attempts are recorded so they are not repeated. Tiering the
 * continents by FILL failed on measurement — navy-800 against navy-700 on this
 * ground is 1.17:1, which nobody can see, and widening it dropped the brass-to-
 * base contrast below 3:1. Outlining the continents beneath the countries failed
 * too: the outline is coincident with the country borders, so each country's own
 * stroke drew straight over it. Dropping the inactive country borders solved
 * both — they carried no information, and their absence lets the brass do the work.
 *
 * Server Component. No client JavaScript.
 */

const excluded = new Set<string>(EXCLUDED_FROM_MAP);
const published = REGIONS.filter((r) => r.published);

/** Web Mercator, matching scripts/build-world-map.mjs. */
const K = MAP_WIDTH / (2 * Math.PI);
const mercY = (lat: number) => K * Math.log(Math.tan(Math.PI / 4 + (lat * Math.PI) / 180 / 2));
const projX = (lon: number) => MAP_WIDTH / 2 + (K * lon * Math.PI) / 180;
const projY = (lat: number) => mercY(80) - mercY(lat);

const windows = published.map((r) => {
  const [w, s, e, n] = r.bounds;
  return { x0: projX(w), x1: projX(e), y0: projY(n), y1: projY(s) };
});

/**
 * Natural Earth ships overseas territories inside their parent country's
 * polygon — French Guiana with France, Svalbard with Norway. A path is a series
 * of `M…Z` subpaths, so the fix is to drop the subpaths that fall outside every
 * published region's bounds, not to drop the country.
 */
function clipToRegions(d: string): string {
  return d
    .split(/(?=M)/)
    .filter((sub) => {
      const nums = sub.match(/-?\d+(?:\.\d+)?/g);
      if (!nums || nums.length < 4) return false;
      let minX = Infinity;
      let maxX = -Infinity;
      let minY = Infinity;
      let maxY = -Infinity;
      for (let i = 0; i + 1 < nums.length; i += 2) {
        const x = Number(nums[i]);
        const y = Number(nums[i + 1]);
        if (x < minX) minX = x;
        if (x > maxX) maxX = x;
        if (y < minY) minY = y;
        if (y > maxY) maxY = y;
      }
      return windows.some(
        (win) => maxX >= win.x0 && minX <= win.x1 && maxY >= win.y0 && minY <= win.y1,
      );
    })
    .join("");
}

const inPublishedRegion = (name: string, continent: string) =>
  published.some(
    (r) => r.continents?.includes(continent) || r.countries?.includes(name),
  );

/** Every country inside a covered region, whether or not it carries a matter. */
const covered = worldPaths
  .filter((c) => !excluded.has(c.name) && inPublishedRegion(c.name, c.continent))
  .map((c) => ({ ...c, d: clipToRegions(c.d) }))
  .filter((c) => c.d.length > 0);

const coveredContinents = new Set(covered.map((c) => c.continent));

/**
 * The one point on an otherwise region-level map. Both frames render at almost
 * exactly the same pixels-per-unit — 0.55 wide, 0.56 narrow — so a single fixed
 * radius reads at the same size in each without needing to be scaled.
 */
const hq = worldPaths.find((c) => c.m49 === HEADQUARTERS.m49);

const TITLE = `World map. The highlighted regions are the United Kingdom and Europe, the Middle East, and Africa. Avonstowe is headquartered in the United Arab Emirates, marked with a point.`;
const SYMBOL_ID = "avonstowe-world";

export default function GeographyMap() {
  return (
    <section className="geo-map-section" id="geographic-map">
      {/*
        The geometry is emitted once into a <defs> block and referenced twice with
        <use>: the wide frame shows the world, the narrow frame a tighter window,
        and swapping the viewBox at runtime would mean shipping JavaScript to do
        what a media query already does. A second literal copy of the paths was
        measured at a further 54 KB gzipped — the payload is larger than gzip's
        32 KB match window, so a duplicate does not compress against the original.
      */}
      <svg className="geo-map-defs" aria-hidden="true" focusable="false">
        <defs>
          {/*
            A single gradient in user space, so all 102 covered countries share
            one continuous wash rather than each carrying its own flat fill. It
            runs top to bottom across the covered band — lighter through northern
            Europe, deeper through southern Africa — which gives the mass depth
            and stops it reading as one slab of colour.
          */}
          <linearGradient
            id={`${SYMBOL_ID}-brass`}
            gradientUnits="userSpaceOnUse"
            x1="0"
            y1="200"
            x2="0"
            y2="1000"
          >
            <stop offset="0" stopColor="#c9a44a" />
            <stop offset="0.45" stopColor="#9a7428" />
            <stop offset="1" stopColor="#856526" />
          </linearGradient>
          <g id={SYMBOL_ID}>
            <g className="geo-continents">
              {continentPaths.map((c) => (
                <path
                  key={c.continent}
                  className={
                    coveredContinents.has(c.continent) ? "geo-continent is-covered" : "geo-continent"
                  }
                  data-continent={c.continent}
                  d={c.d}
                />
              ))}
            </g>
            <g className="geo-covered">
              {covered.map((country) => (
                <path
                  key={country.m49}
                  className="geo-country is-covered"
                  data-m49={country.m49}
                  d={country.d}
                />
              ))}
            </g>
            {hq && (
              <g className="geo-hq" aria-hidden="true">
                {/* A dark halo cut into the brass, so the point separates from
                    the region it sits inside rather than competing with it. */}
                <circle className="geo-hq-halo" cx={hq.cx} cy={hq.cy} r={11} />
                <circle className="geo-hq-ring" cx={hq.cx} cy={hq.cy} r={11} />
                <circle className="geo-hq-dot" cx={hq.cx} cy={hq.cy} r={3.75} />
              </g>
            )}
          </g>
        </defs>
      </svg>

      <div className="geo-map-frame geo-map-frame-wide">
        <svg
          className="geo-map-svg"
          viewBox={`0 0 ${MAP_WIDTH} ${MAP_HEIGHT}`}
          preserveAspectRatio="xMidYMid meet"
          role="img"
        >
          <title>{TITLE}</title>
          <use href={`#${SYMBOL_ID}`} />
        </svg>
      </div>

      <div className="geo-map-frame geo-map-frame-narrow">
        <svg
          className="geo-map-svg"
          viewBox={`${MOBILE_FRAME.x} ${MOBILE_FRAME.y} ${MOBILE_FRAME.width} ${MOBILE_FRAME.height}`}
          preserveAspectRatio="xMidYMid meet"
          role="img"
        >
          <title>{TITLE}</title>
          <use href={`#${SYMBOL_ID}`} />
        </svg>
      </div>

      <p className="geo-map-legend">
        <span className="geo-map-legend-dot" aria-hidden="true" />
        {HEADQUARTERS.label} — {HEADQUARTERS.country}
      </p>
    </section>
  );
}
