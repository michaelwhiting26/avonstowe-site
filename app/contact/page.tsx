import PageHeader from "@/components/sections/PageHeader";
import { site } from "@/content/site";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Contact",
  description: `Contact Avonstowe. Enquiries by email to ${site.contact.email}.`,
  path: "/contact",
});

/**
 * Contact page — direct details only.
 *
 * DO NOT ADD AN ENQUIRY FORM. Instructing solicitors and appointed experts use
 * email, and a form routes potentially privileged material through a third-party
 * processor before any conflict check has been carried out. If a form is ever
 * introduced, it must carry a prominent warning against sending confidential,
 * privileged or commercially sensitive material.
 *
 * TODO: Add a telephone number here once one is confirmed for publication.
 */
export default function Contact() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Discuss an instruction"
        lede="Enquiries are dealt with directly. There is no enquiry form on this site — email reaches us fastest and keeps your material out of a third-party processing chain."
      />

      <section className="section">
        <div className="shell">
          <div className="grid gap-12 md:grid-cols-2 md:gap-16">
            <div>
              <hr className="rule" />
              <h2 className="mt-5 text-[length:var(--text-h2)]">Direct contact</h2>

              <dl className="mt-8 space-y-6">
                <div className="border-t border-[var(--color-paper-line)] pt-4">
                  <dt className="eyebrow">Email</dt>
                  <dd className="mt-2 text-lg">
                    <a href={`mailto:${site.contact.email}`} className="link">
                      {site.contact.email}
                    </a>
                  </dd>
                </div>

                <div className="border-t border-[var(--color-paper-line)] pt-4">
                  <dt className="eyebrow">Location</dt>
                  <dd className="mt-2 text-[0.9375rem] text-[var(--color-ink-muted)]">
                    {site.contact.location}
                  </dd>
                </div>

                <div className="border-t border-[var(--color-paper-line)] pt-4">
                  <dt className="eyebrow">Entity</dt>
                  <dd className="mt-2 text-[0.9375rem] text-[var(--color-ink-muted)]">
                    {site.legalEntity}
                  </dd>
                </div>
              </dl>

              <a href={`mailto:${site.contact.email}`} className="btn btn-primary mt-10">
                Email Avonstowe
              </a>
            </div>

            <div>
              <hr className="rule" />
              <h2 className="mt-5 text-[length:var(--text-h2)]">Before you write</h2>

              <div className="mt-8 border border-[var(--color-paper-line)] bg-[var(--color-paper-warm)] p-6">
                <p className="text-[0.9375rem] font-medium text-[var(--color-ink)]">
                  Please do not send confidential, privileged or commercially sensitive material
                  before an engagement is agreed and a conflict check is completed.
                </p>
                <p className="mt-3 text-[0.9375rem] leading-relaxed text-[var(--color-ink-muted)]">
                  Unsolicited material cannot be treated as confidential, and receiving it may
                  prevent us from accepting an instruction.
                </p>
              </div>

              <h3 className="eyebrow mt-10">What helps in a first email</h3>
              <ul className="mt-4 space-y-2">
                {[
                  "The parties, so a conflict check can be run",
                  "The forum and procedural stage",
                  "The nature of the issues — quantum, delay, or both",
                  "The timetable you are working to",
                  "Whether you need expert support or a party-appointed expert",
                ].map((item) => (
                  <li
                    key={item}
                    className="border-t border-[var(--color-paper-line)] pt-2 text-[0.9375rem] text-[var(--color-ink-muted)]"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
