/**
 * Machine-readable description of the practice for search and AI engines.
 * Built ONLY from the existing site copy (lib/site.ts, lib/person.ts): no new
 * claims. Matters are deliberately excluded until every one is evidenced.
 * In-progress qualifications are excluded from hasCredential.
 */
import { site, services } from "@/lib/site";
import { person } from "@/lib/person";

const ORG = `${site.url}/#org`;
const PERSON = `${site.url}/#michael`;

export function structuredData() {
  const held = person.credentials.filter((c) => !c.inProgress && !c.text.startsWith("Member"));
  const membership = person.credentials.find((c) => c.text.startsWith("Member, "));
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfessionalService",
        "@id": ORG,
        name: site.name,
        legalName: site.legalEntity,
        url: `${site.url}/`,
        email: site.email,
        description: site.description,
        logo: `${site.url}/mark.png`,
        image: `${site.url}/og.png`,
        identifier: { "@type": "PropertyValue", propertyID: "RAKEZ licence", value: site.licence.replace(/\D+/g, "") },
        address: { "@type": "PostalAddress", addressCountry: "AE" },
        areaServed: [
          { "@type": "Country", name: "United Kingdom" },
          { "@type": "Place", name: "Middle East" },
          { "@type": "Place", name: "North Africa" },
        ],
        founder: { "@id": PERSON },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Services",
          itemListElement: services.map((s) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name: s.title, description: s.text, provider: { "@id": ORG } } })),
        },
      },
      {
        "@type": "Person",
        "@id": PERSON,
        name: person.name,
        jobTitle: person.role,
        url: `${site.url}/#michael`,
        description: person.bio,
        worksFor: { "@id": ORG },
        hasCredential: held.map((c) => ({ "@type": "EducationalOccupationalCredential", name: c.text })),
        ...(membership ? { memberOf: { "@type": "Organization", name: membership.text.replace("Member, ", "") } } : {}),
      },
      { "@type": "WebSite", "@id": `${site.url}/#website`, url: `${site.url}/`, name: site.name, publisher: { "@id": ORG }, inLanguage: "en-GB" },
    ],
  };
}
