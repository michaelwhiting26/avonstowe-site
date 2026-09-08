import Image from "next/image";
import Link from "next/link";
import { site } from "@/content/site";
import type { PublicPerson } from "@/lib/consent";

/**
 * Home hero.
 *
 * MOBILE REQUIREMENT: the named lead professional must be visible within the
 * initial mobile viewport, not buried down the page. That is why the byline strip
 * sits inside the hero band rather than in the LeadProfile section further down —
 * a prospective instructing solicitor opening this on a phone should see who is
 * behind the firm without scrolling.
 *
 * The hero is therefore deliberately compact: no min-height:100vh, no oversized
 * display type on small screens, and no decorative imagery competing for the space.
 */
export default function Hero({ lead }: { lead: PublicPerson | null }) {
  return (
    <section className="bg-[var(--color-navy)] text-[var(--color-paper)]">
      {/*
        Flex ordering, not source order, controls the mobile sequence. On small
        screens the byline is promoted ABOVE the buttons so that it lands inside the
        initial viewport on a 375x667 device; on md+ it returns to the foot of the
        hero. Ordering is used rather than tightened margins because it holds even
        when the headline reflows to more lines on a narrow or large-text device.
      */}
      <div className="shell flex flex-col py-10 md:py-24">
        <p className="eyebrow eyebrow-on-dark order-1">Construction &amp; engineering disputes</p>

        <h1 className="order-2 mt-4 max-w-[20ch] text-[length:var(--text-display)] text-[var(--color-paper)] md:mt-5 md:max-w-[24ch]">
          {site.positioning.headline}
        </h1>

        <p className="order-3 mt-4 max-w-[46ch] leading-relaxed text-[var(--color-paper)]/75 md:mt-6 md:text-lg">
          {site.positioning.supporting}
        </p>

        <div className="order-5 mt-7 flex flex-col gap-3 sm:flex-row sm:items-center md:order-4 md:mt-9">
          <Link href="/contact" className="btn btn-on-dark">
            Discuss an instruction
          </Link>
          <Link href="/expert-support" className="btn btn-ghost-on-dark">
            Expert support
          </Link>
        </div>

        {/* Named lead professional — deliberately high on the page. */}
        {lead && (
          <div className="order-4 mt-7 border-t border-[var(--color-navy-line)] pt-5 md:order-5 md:mt-16 md:pt-6">
            {/* max-w keeps the Profile link beside the name on wide screens rather
                than stranded at the far right of the shell. */}
            <div className="flex max-w-xl items-center gap-4">
              {lead.photoPath && (
                <Image
                  src={lead.photoPath}
                  alt={lead.name ?? ""}
                  width={56}
                  height={56}
                  className="h-14 w-14 shrink-0 object-cover"
                />
              )}
              <div className="min-w-0">
                <p className="font-serif text-lg text-[var(--color-paper)]">
                  {lead.name}
                  {lead.postNominals && lead.postNominals.length > 0 && (
                    <span className="ml-2 font-sans text-xs tracking-wide text-[var(--color-brass)]">
                      {lead.postNominals.join(" ")}
                    </span>
                  )}
                </p>
                <p className="text-sm text-[var(--color-paper)]/70">
                  {lead.role}
                  {lead.role && lead.affiliation && " · "}
                  {lead.affiliation}
                </p>
              </div>
              <Link
                href="/people"
                className="link-on-dark ml-auto shrink-0 self-center text-sm whitespace-nowrap"
              >
                Profile
              </Link>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
