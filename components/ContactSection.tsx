"use client";

import { useState, type FormEvent } from "react";

const headingStyle = {
  fontFamily: "var(--font-serif), 'Cormorant Garamond', Georgia, serif",
  fontSize: "2.4rem",
  fontWeight: 300,
  color: "#fff",
  marginBottom: "0.8rem",
} as const;

const leadStyle = { fontSize: "14px", color: "#8aaee8", lineHeight: 1.8 } as const;
const statusBaseStyle = { marginTop: "1rem", color: "#d4b56a" } as const;

const SUCCESS =
  "Thank you. Your enquiry has been sent. You will have a reply within one business day.";
const ERROR =
  "There was a problem sending your enquiry. Please email michael@avonstowe.com directly.";
const TIMEOUT =
  "The enquiry did not send within 15 seconds. Please email michael@avonstowe.com directly.";

/** FormSubmit is a third party with no uptime commitment to us; without this the
 *  button can sit on "Sending..." indefinitely and the enquiry is silently lost. */
const SUBMIT_TIMEOUT_MS = 15000;

/**
 * `aside` is passed in from the server page rather than imported here: this is a
 * client component, and importing the rail would pull it and its data into the
 * client bundle for no reason. Keeping the boundary narrow is a rev4 rule.
 */
export default function ContactSection({ aside }: { aside?: React.ReactNode }) {
  const [status, setStatus] = useState<string>("");
  const [statusVisible, setStatusVisible] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  // Submit handler preserved from the original inline script: posts the form
  // straight to FormSubmit (https://formsubmit.co/ajax/...) with no backend.
  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setStatusVisible(false);
    setSubmitting(true);
    const controller = new AbortController();
    const timer = window.setTimeout(() => controller.abort(), SUBMIT_TIMEOUT_MS);
    try {
      const res = await fetch(form.action, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
        signal: controller.signal,
      });
      if (res.ok) {
        form.reset();
        setStatus(SUCCESS);
      } else {
        setStatus(ERROR);
      }
      setStatusVisible(true);
    } catch (err) {
      setStatus((err as Error)?.name === "AbortError" ? TIMEOUT : ERROR);
      setStatusVisible(true);
    } finally {
      window.clearTimeout(timer);
      setSubmitting(false);
    }
  }

  return (
    <section className="contact-section" id="contact">
      <div className="contact-grid">
      <div className="contact-inner">
        <p className="section-eyebrow">Enquiries</p>
        <h2 style={headingStyle}>Discuss a matter</h2>
        <p style={leadStyle}>
          Outline the issue and what is in dispute. You will get a straight view on whether the
          quantum can be supported, and what it would take to build it. Documents are not uploaded
          here — once the enquiry is acknowledged, a secure route for the papers is agreed. All
          enquiries are treated in confidence.
        </p>
        <form
          className="contact-form"
          id="contact-form"
          action="https://formsubmit.co/ajax/michael@avonstowe.com"
          method="POST"
          onSubmit={handleSubmit}
        >
          <input type="hidden" name="_subject" value="New Avonstowe enquiry" />
          <input type="hidden" name="_captcha" value="false" />
          {/* Honeypot: hidden from real users; if a bot fills it, FormSubmit
              discards the submission. Reduces automated spam/phishing. */}
          <input
            type="text"
            name="_honey"
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
            style={{ display: "none" }}
          />
          <div className="form-row">
            <div className="form-field">
              <label className="form-label" htmlFor="name">
                Name
              </label>
              <input
                className="form-input"
                id="name"
                name="name"
                type="text"
                placeholder="Your name"
                required
              />
            </div>
            <div className="form-field">
              <label className="form-label" htmlFor="organisation">
                Organisation
              </label>
              <input
                className="form-input"
                id="organisation"
                name="organisation"
                type="text"
                placeholder="Your firm"
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-field">
              <label className="form-label" htmlFor="email">
                Email
              </label>
              <input
                className="form-input"
                id="email"
                name="email"
                type="email"
                placeholder="your@email.com"
                required
              />
            </div>
            <div className="form-field">
              <label className="form-label" htmlFor="matter">
                Nature Of Matter
              </label>
              <input
                className="form-input"
                id="matter"
                name="matter"
                type="text"
                placeholder="e.g. Variations, Prolongation, Disruption, Final Account"
                required
              />
            </div>
          </div>
          <div className="form-field">
            <label className="form-label" htmlFor="description">
              Brief Description
            </label>
            <textarea
              className="form-input"
              id="description"
              name="description"
              placeholder="Outline the key issues and how we may assist"
              required
            ></textarea>
          </div>
          <div>
            <button className="btn-primary" id="submit-button" type="submit" disabled={submitting}>
              {submitting ? "Sending..." : "Submit Enquiry"}
            </button>
          </div>
          {/* role="status" + aria-live: a screen reader user otherwise gets no
              signal that the submission succeeded or failed. The element stays
              in the DOM so the live region exists before the text arrives. */}
          <p
            id="form-status"
            role="status"
            aria-live="polite"
            style={{ ...statusBaseStyle, display: statusVisible ? "block" : "none" }}
          >
            {status}
          </p>
        </form>
      </div>
      {aside}
      </div>
    </section>
  );
}
