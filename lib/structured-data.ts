/**
 * JSON-LD structured data.
 *
 * RULE: emit only facts that appear on the page and can be checked. Structured data
 * is not a place to make claims the visible site will not support.
 *
 * Deliberately NOT emitted: aggregateRating, review, award, priceRange,
 * foundingDate, numberOfEmployees, and any postal address beyond the city. None is
 * evidenced, and fabricating them is both a trust problem and a search-quality one.
 *
 * The searches that matter here are people's names, so Person is modelled carefully
 * and linked to the organisation both ways (employee / worksFor).
 */

import { site } from "@/content/site";
import { services } from "@/content/services";
import type { PublicPerson } from "@/lib/consent";

type Json = Record<string, unknown>;

const ORG_ID = `${site.url}/#organisation`;

/** Person schema, built only from consent-filtered fields. */
export function personSchema(person: PublicPerson): Json {
  const schema: Json = {
    "@type": "Person",
    "@id": `${site.url}/people#${person.slug}`,
    name: person.name,
    url: `${site.url}/people`,
  };

  if (person.role) schema.jobTitle = person.role;
  if (person.bio) schema.description = person.bio;
  if (person.photoPath) schema.image = `${site.url}${person.photoPath}`;

  // Post-nominals map to honorificSuffix; credentials to hasCredential. Only emit
  // where they exist — an empty hasCredential array is worse than none.
  if (person.postNominals?.length) schema.honorificSuffix = person.postNominals.join(" ");
  if (person.credentials?.length) {
    schema.hasCredential = person.credentials.map((c) => ({
      "@type": "EducationalOccupationalCredential",
      name: c,
    }));
  }

  if (person.affiliation) {
    schema.worksFor = { "@id": ORG_ID };
  }

  return schema;
}

/** The organisation. ProfessionalService is a subtype of LocalBusiness. */
export function professionalServiceSchema(lead: PublicPerson | null): Json {
  const schema: Json = {
    "@type": "ProfessionalService",
    "@id": ORG_ID,
    name: site.name,
    legalName: site.legalEntity,
    url: site.url,
    email: site.contact.email,
    description: `${site.positioning.headline} ${site.positioning.supporting}`,
    logo: `${site.url}${site.logoPath}`,
    // City-level only. No street address is evidenced and none is needed.
    address: {
      "@type": "PostalAddress",
      addressLocality: "Dubai",
      addressCountry: "AE",
    },
    areaServed: [
      { "@type": "Place", name: "Middle East" },
      { "@type": "Place", name: "Asia-Pacific" },
      { "@type": "Place", name: "United Kingdom" },
    ],
    knowsAbout: [
      "Forensic quantum analysis",
      "Delay analysis",
      "Construction and engineering disputes",
      "International arbitration",
      "FIDIC contracts",
      "Prolongation and disruption claims",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Services",
      itemListElement: services.map((s) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: s.title, description: s.summary },
      })),
    },
  };

  if (lead) schema.employee = { "@id": `${site.url}/people#${lead.slug}` };

  return schema;
}

/** Wrap nodes in a single @graph document so entities can reference each other. */
export function graph(nodes: Json[]): Json {
  return { "@context": "https://schema.org", "@graph": nodes };
}
