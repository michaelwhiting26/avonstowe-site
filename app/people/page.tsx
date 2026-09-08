import PageHeader from "@/components/sections/PageHeader";
import ContactCTA from "@/components/sections/ContactCTA";
import PersonCard from "@/components/people/PersonCard";
import { getPublishableLead, getPublishablePanelMembers } from "@/lib/consent";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "People",
  description:
    "The people behind Avonstowe, and how the firm's professional network is presented — by consent only.",
  path: "/people",
});

/**
 * People page.
 *
 * Both lists come from the central consent filter. Anyone whose consent is pending
 * or declined is absent from this page entirely — not anonymised, not placeheld.
 * If the panel list is empty, the panel section does not render at all.
 */
export default function People() {
  const lead = getPublishableLead();
  const panel = getPublishablePanelMembers();

  return (
    <>
      <PageHeader
        eyebrow="People"
        title="Who is behind Avonstowe"
        lede="Avonstowe names the people who do the work. Members of its wider professional network appear here only where they have given consent, and only to the extent of that consent."
      />

      <section className="section" aria-labelledby="lead">
        <div className="shell">
          <hr className="rule" />
          <h2 id="lead" className="mt-5 text-[length:var(--text-h2)]">
            Lead professional
          </h2>
          <div className="mt-8 max-w-3xl">
            {lead ? (
              <PersonCard person={lead} headingLevel="h3" />
            ) : (
              <p className="prose-body">Profile information is not currently published.</p>
            )}
          </div>
        </div>
      </section>

      {/* Panel section renders only when someone has consented to appear. */}
      {panel.length > 0 && (
        <section className="section bg-[var(--color-paper-warm)]" aria-labelledby="panel">
          <div className="shell">
            <hr className="rule" />
            <h2 id="panel" className="mt-5 text-[length:var(--text-h2)]">
              Professional network
            </h2>
            <p className="lede mt-4">
              Independent professionals who work with Avonstowe on party-appointed instructions.
              They are not employees, partners or directors of Avonstowe.
            </p>
            <div className="mt-10 grid gap-6 lg:grid-cols-2">
              {panel.map((person) => (
                <PersonCard key={person.slug} person={person} headingLevel="h3" />
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="section" aria-labelledby="network-note">
        <div className="shell">
          <hr className="rule" />
          <h2 id="network-note" className="mt-5 text-[length:var(--text-h2)]">
            The professional network
          </h2>
          <p className="prose-body mt-5">
            Where an instruction calls for expert capability Avonstowe does not hold directly, it
            draws on a network of independent quantum, delay and technical professionals. Those
            individuals are engaged for specific instructions. They are not employees, partners or
            directors of Avonstowe, and Avonstowe does not hold any of them out as having accepted
            an appointment unless that is factually the case.
          </p>
          <p className="prose-body mt-4">
            Individual members are named on this website only with their consent. Details of
            available expert capability for a particular matter are provided directly, once scope
            and conflict position are known.
          </p>
        </div>
      </section>

      <ContactCTA
        heading="Speak with Michael"
        body="Enquiries are dealt with directly and treated in confidence."
      />
    </>
  );
}
