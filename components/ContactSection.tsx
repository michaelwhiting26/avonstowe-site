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
  "Thank you for contacting Avonstowe. Your enquiry has been submitted successfully. A senior expert will respond within one business day.";
const ERROR =
  "There was a problem submitting your enquiry. Please email michael@avonstowe.com directly.";

export default function ContactSection() {
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
    try {
      const res = await fetch(form.action, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        form.reset();
        setStatus(SUCCESS);
      } else {
        setStatus(ERROR);
      }
      setStatusVisible(true);
    } catch {
      setStatus(ERROR);
      setStatusVisible(true);
    }
    setSubmitting(false);
  }

  return (
    <section className="contact-section" id="contact">
      <div className="contact-inner">
        <p className="section-eyebrow">Enquiries</p>
        <h2 style={headingStyle}>Discuss Your Matter</h2>
        <p style={leadStyle}>
          All enquiries are treated in confidence. We will review your matter and respond directly.
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
                placeholder="e.g. Arbitration, Adjudication, Expert Appointment, Project Advisory"
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
          <p id="form-status" style={{ ...statusBaseStyle, display: statusVisible ? "block" : "none" }}>
            {status}
          </p>
        </form>
      </div>
    </section>
  );
}
