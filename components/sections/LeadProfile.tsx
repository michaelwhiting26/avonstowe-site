import Link from "next/link";
import type { PublicPerson } from "@/lib/consent";
import PersonCard from "@/components/people/PersonCard";

/**
 * The named lead professional on the home page.
 *
 * This answers "who is actually behind this?" — the question a sceptical buyer asks
 * immediately after working out what the firm does. It renders from consent-filtered
 * data like every other person on the site.
 */
export default function LeadProfile({ lead }: { lead: PublicPerson | null }) {
  if (!lead) return null;

  return (
    <section className="section" aria-labelledby="lead-heading">
      <div className="shell">
        <hr className="rule" />
        <h2 id="lead-heading" className="mt-5 text-[length:var(--text-h2)]">
          Who is behind Avonstowe
        </h2>

        <div className="mt-10 max-w-3xl">
          <PersonCard person={lead} />
          <p className="mt-6 text-sm">
            <Link href="/people" className="link">
              People and professional network
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
