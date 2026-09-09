/**
 * What the analysis covers. Six items, deliberately.
 *
 * rev3 put 43 services in this position and it failed twice over: it advertised
 * three businesses instead of one, and 18 staggered items in a column took 2.3
 * seconds to finish appearing — slower than a reader scrolls. Six is the ceiling.
 *
 * Copy is approved: docs/site-copy-forensic-quantum.md.
 */
export type ScopeItem = { title: string; body: string };

export const analysisScope: ScopeItem[] = [
  {
    title: "Valuation of variations and change",
    body: "Contract rates, star rates and fair valuation, tested against what the work actually cost.",
  },
  {
    title: "Prolongation and time-related cost",
    body: "Site overheads and head office overheads over the period of critical delay, built from the cost ledger rather than a formula.",
  },
  {
    title: "Disruption and lost productivity",
    body: "Labour and plant productivity quantified against the project's own records.",
  },
  {
    title: "Final accounts and cross-charges",
    body: "Contract sum, change, credits, payments, retention, set-off and backcharges reconciled to a single net figure.",
  },
  {
    title: "Financial and consequential loss",
    body: "Bonds, financing, interest, inflation, currency and lost profit.",
  },
  {
    title: "Testing and rebuttal",
    body: "Sampling, causation linkage, double recovery and global claim analysis — the tests a claim has to survive before a tribunal will award on it.",
  },
];
