/**
 * Site-wide identity, contact and navigation content.
 *
 * CONTENT RULE (see also content/experience.ts):
 * Every value in this file must be independently verifiable. Nothing here may be
 * inferred, rounded, softened or invented. Where a fact is not yet confirmed it is
 * marked with a TODO and omitted from the rendered site rather than guessed.
 */

export const site = {
  name: "Avonstowe",
  url: "https://www.avonstowe.com",

  /**
   * Positioning. Fixed wording — this is the firm's stated market and is used
   * verbatim in the hero and in page metadata.
   */
  positioning: {
    headline:
      "Forensic quantum and delay analysis for international construction and engineering disputes.",
    supporting: "FIDIC, process plant and energy. Middle East, Asia-Pacific and the UK.",
  },

  /**
   * Contact details.
   * Email is evidenced throughout the previous site. No telephone number appears
   * anywhere in the source material, so none is published.
   * TODO: Confirm a public telephone number before launch, or confirm that email-only
   * contact is intended. Add as `telephone` below only once confirmed.
   */
  contact: {
    email: "michael@avonstowe.com",
    /** Broad location only — no street address is evidenced or required. */
    location: "Dubai, United Arab Emirates",
  },

  /**
   * Legal entity.
   * "Avonstowe FZ LLC" is carried forward from the previous site's privacy notice
   * and footer. It has not been verified against a licence or registry extract.
   * TODO: Confirm exact registered UAE legal entity name and free-zone licence
   * number before production.
   */
  legalEntity: "Avonstowe FZ LLC",

  /** Brand mark already present in the repository. */
  logoPath: "/CBA13159-0A15-4F65-B264-79D219268DD6.PNG",
} as const;

export type NavItem = { href: string; label: string };

/**
 * Primary navigation. Expert Support is deliberately top-level rather than nested —
 * it is a distinct commercial proposition aimed at a different buyer.
 */
export const primaryNav: NavItem[] = [
  { href: "/what-we-do", label: "What We Do" },
  { href: "/experience", label: "Experience" },
  { href: "/expert-support", label: "Expert Support" },
  { href: "/people", label: "People" },
  { href: "/contact", label: "Contact" },
];

export const legalNav: NavItem[] = [
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
  { href: "/cookies", label: "Cookies" },
];
