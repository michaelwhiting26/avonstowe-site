import Image from "next/image";
import type { PublicPerson } from "@/lib/consent";
import PersonCredentials from "./PersonCredentials";

/**
 * Renders a person from CONSENT-FILTERED fields only.
 *
 * Every field is conditional because every field is separately consented. Do not
 * add a fallback, a placeholder or an "initials" avatar for a missing field — an
 * absent field means we do not have permission to publish it, and inventing a
 * stand-in defeats the point.
 */
export default function PersonCard({
  person,
  headingLevel = "h3",
}: {
  person: PublicPerson;
  headingLevel?: "h2" | "h3";
}) {
  const Heading = headingLevel;

  return (
    <article className="border border-[var(--color-paper-line)] bg-white p-6 md:p-8">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
        {person.photoPath && (
          <Image
            src={person.photoPath}
            alt={`${person.name}`}
            width={112}
            height={112}
            className="h-28 w-28 shrink-0 object-cover"
          />
        )}
        <div className="min-w-0">
          <Heading className="text-[length:var(--text-h3)] text-[var(--color-ink)]">
            {person.name}
            {person.postNominals && person.postNominals.length > 0 && (
              // Post-nominals can be long; allow them to wrap rather than overflow.
              <span className="ml-2 font-sans text-sm font-medium tracking-wide text-[var(--color-ink-muted)]">
                {person.postNominals.join(" ")}
              </span>
            )}
          </Heading>

          {(person.role || person.affiliation) && (
            <p className="mt-1 text-sm text-[var(--color-ink-muted)]">
              {person.role}
              {person.role && person.affiliation && " · "}
              {person.affiliation}
            </p>
          )}

          {person.bio && <p className="prose-body mt-5 text-[0.9375rem]">{person.bio}</p>}

          <PersonCredentials credentials={person.credentials} />
        </div>
      </div>
    </article>
  );
}
