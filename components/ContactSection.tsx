import { Reveal } from "./Motion";
import MagneticButton from "./MagneticButton";
import { site, enquiries } from "@/lib/site";

/**
 * Enquiries by email only. The original posted a form to a third-party
 * service; that is not carried forward, so the site still collects nothing.
 */
export default function ContactSection() {
  return (
    <section className="contact-section" id="contact">
      <Reveal className="contact-inner">
        <p className="section-eyebrow">Enquiries</p>
        <h2 className="contact-heading">Discuss a matter</h2>
        <p className="contact-lead">{enquiries}</p>
        <div className="contact-actions">
          <MagneticButton href={`mailto:${site.email}`} className="btn-primary">
            {site.email}
          </MagneticButton>
        </div>
        <p className="contact-note">
          Please do not send confidential or privileged material until a conflict check is complete.
        </p>
      </Reveal>
    </section>
  );
}
