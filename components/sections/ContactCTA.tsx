import Link from "next/link";
import { site } from "@/content/site";

/**
 * Closing call to action.
 *
 * Direct contact only. There is no enquiry form anywhere on this site: instructing
 * solicitors and appointed experts use email, and an uncontrolled form invites
 * confidential or privileged material into a third-party processing chain before
 * any conflict check has been done.
 */
export default function ContactCTA({
  heading = "Discuss an instruction",
  body = "Enquiries are dealt with directly and treated in confidence.",
}: {
  heading?: string;
  body?: string;
}) {
  return (
    <section className="bg-[var(--color-navy)] text-[var(--color-paper)]" aria-labelledby="cta-heading">
      <div className="shell py-14 md:py-20">
        <hr className="rule rule-on-dark" />
        <h2 id="cta-heading" className="mt-5 max-w-[24ch] text-[length:var(--text-h2)] text-[var(--color-paper)]">
          {heading}
        </h2>
        <p className="mt-4 max-w-[52ch] text-[var(--color-paper)]/75">{body}</p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
          <a href={`mailto:${site.contact.email}`} className="btn btn-on-dark">
            {site.contact.email}
          </a>
          <Link href="/contact" className="btn btn-ghost-on-dark">
            Contact details
          </Link>
        </div>

        <p className="mt-8 text-sm text-[var(--color-paper)]/60">
          Please do not send confidential or privileged material before an engagement is agreed and
          a conflict check is completed.
        </p>
      </div>
    </section>
  );
}
