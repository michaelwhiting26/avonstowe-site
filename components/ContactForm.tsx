"use client";

import { useEffect, useRef, useState } from "react";
import { site } from "@/lib/site";

/*
 * Enquiry form, three steps in the page (docs/contact-form-spec.md, 19 Oct 2026):
 * 1 who and where, 2 the conflict-check details, 3 contact details + review.
 *
 * Delivery: POST as text/plain (no CORS preflight) to the Google Apps Script web
 * app in Michael's own Google account (docs/apps-script/Code.gs), which emails
 * michael@avonstowe.com. Spam: hidden honeypot field + a 4-second time trap,
 * checked again in the script. No third-party captcha, by Michael's choice.
 * Until site.formEndpoint is set, Send opens the visitor's email app with the
 * enquiry filled in, so the form works from day one.
 */

const ROLES = [
  "A law firm",
  "An appointed expert",
  "A contractor",
  "A subcontractor",
  "An employer or developer",
  "Other",
];
const STAGES = ["On a live project", "Adjudication", "Arbitration", "Court proceedings", "Not sure yet"];
const CONFIDENTIAL =
  "Please don't send confidential or privileged material until a conflict check is complete.";

type Values = {
  role: string;
  stage: string;
  parties: string;
  project: string;
  outline: string;
  keyDate: string;
  name: string;
  organisation: string;
  email: string;
  phone: string;
};
type Errors = Partial<Record<keyof Values, string>>;

const EMPTY: Values = {
  role: "",
  stage: "",
  parties: "",
  project: "",
  outline: "",
  keyDate: "",
  name: "",
  organisation: "",
  email: "",
  phone: "",
};

const LABELS: Record<keyof Values, string> = {
  role: "You are",
  stage: "Where the matter is now",
  parties: "Parties",
  project: "Project and country",
  outline: "Overview",
  keyDate: "Key date",
  name: "Name",
  organisation: "Organisation",
  email: "Email",
  phone: "Phone or WhatsApp",
};

function validate(step: number, v: Values): Errors {
  const e: Errors = {};
  const t = (s: string) => s.trim();
  if (step === 1) {
    if (!v.role) e.role = "Select who you are";
    if (!v.stage) e.stage = "Select where the matter is now";
  }
  if (step === 3) {
    // One optional overview box (Michael, 19 Oct 2026: "don't force them", "just have one box").
    if (v.outline.length > 1500) e.outline = "Overview must be 1,500 characters or fewer";
  }
  if (step === 2) {
    if (!t(v.name)) e.name = "Enter your name";
    if (!t(v.organisation)) e.organisation = "Enter your organisation, or say you are writing as an individual";
    if (!t(v.email)) e.email = "Enter your email address";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(t(v.email)))
      e.email = "Enter an email address in the correct format, like name@example.com";
    if (t(v.phone) && !/^\+?[0-9 ()-]{6,30}$/.test(t(v.phone)))
      e.phone = "Enter a phone number using digits, spaces and a leading +";
  }
  return e;
}

function asText(v: Values) {
  return (Object.keys(LABELS) as (keyof Values)[])
    .filter((k) => v[k].trim())
    .map((k) => `${LABELS[k]}: ${v[k].trim()}`)
    .join("\n");
}

function mailtoHref(v: Values) {
  const subject = [`Enquiry: ${v.role}`, v.organisation.trim()].filter(Boolean).join(", ").slice(0, 120);
  const body = asText(v).slice(0, 1800);
  return `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export default function ContactForm() {
  const [step, setStep] = useState(1);
  const [v, setV] = useState<Values>(EMPTY);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "failed">("idle");
  const [copied, setCopied] = useState(false);
  const started = useRef<number>(0);
  const honey = useRef<HTMLInputElement>(null);
  const top = useRef<HTMLDivElement>(null);
  const summary = useRef<HTMLDivElement>(null);
  const firstMove = useRef(true);

  useEffect(() => {
    started.current = Date.now();
  }, []);

  // Move focus to the step heading on each step change (not on first render).
  useEffect(() => {
    if (firstMove.current) {
      firstMove.current = false;
      return;
    }
    top.current?.focus();
  }, [step, status]);

  const set = (k: keyof Values) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setV((p) => ({ ...p, [k]: e.target.value }));
    if (errors[k]) setErrors((p) => ({ ...p, [k]: undefined }));
  };

  function next() {
    const e = validate(step, v);
    setErrors(e);
    if (Object.keys(e).length) {
      requestAnimationFrame(() => summary.current?.focus());
      return;
    }
    setStep((s) => s + 1);
  }

  async function send() {
    const e = { ...validate(1, v), ...validate(2, v), ...validate(3, v) };
    setErrors(e);
    if (Object.keys(e).length) {
      requestAnimationFrame(() => summary.current?.focus());
      return;
    }
    if (honey.current?.value) {
      setStatus("sent"); // bots get a quiet "success"
      return;
    }
    if (!site.formEndpoint) {
      window.location.href = mailtoHref(v);
      return;
    }
    setStatus("sending");
    const ctrl = new AbortController();
    const timer = setTimeout(() => ctrl.abort(), 20000);
    try {
      const res = await fetch(site.formEndpoint, {
        method: "POST",
        headers: { "Content-Type": "text/plain;charset=utf-8" },
        body: JSON.stringify({ ...v, elapsedMs: Date.now() - started.current, website: "" }),
        signal: ctrl.signal,
      });
      const data = await res.json().catch(() => null);
      setStatus(res.ok && data && data.ok ? "sent" : "failed");
    } catch {
      setStatus("failed");
    } finally {
      clearTimeout(timer);
    }
  }

  async function copy() {
    try {
      await navigator.clipboard.writeText(asText(v));
      setCopied(true);
    } catch {
      setCopied(false);
    }
  }

  const errList = Object.entries(errors).filter(([, m]) => m) as [keyof Values, string][];
  const firstName = v.name.trim().split(/\s+/)[0];

  if (status === "sent") {
    return (
      <div className="cf cf-done">
        <h3 tabIndex={-1} ref={top as React.RefObject<HTMLHeadingElement & HTMLDivElement>}>
          Thank you{firstName ? `, ${firstName}` : ""}.
        </h3>
        <p>
          Your enquiry has reached Michael. He will reply to {v.email.trim() || "you"} by email. If the matter is
          urgent, message him on <a href={site.whatsappUrl}>WhatsApp: {site.whatsapp}</a>.
        </p>
      </div>
    );
  }

  const field = (
    k: keyof Values,
    label: string,
    opts: { hint?: string; area?: number; type?: string; auto?: string; optional?: boolean; max: number },
  ) => {
    const id = `cf-${k}`;
    const err = errors[k];
    const describedBy = [opts.hint ? `${id}-hint` : "", err ? `${id}-err` : ""].filter(Boolean).join(" ") || undefined;
    const common = {
      id,
      name: k,
      value: v[k],
      onChange: set(k),
      "aria-invalid": err ? true : undefined,
      "aria-describedby": describedBy,
      maxLength: opts.max + 50,
      className: err ? "cf-input cf-invalid" : "cf-input",
    };
    return (
      <div className="cf-field">
        <label htmlFor={id}>
          {label}
          {opts.optional && <span className="cf-opt"> (optional)</span>}
        </label>
        {opts.hint && (
          <p className="cf-hint" id={`${id}-hint`}>
            {opts.hint}
          </p>
        )}
        {err && (
          <p className="cf-err" id={`${id}-err`}>
            {err}
          </p>
        )}
        {opts.area ? (
          <textarea rows={opts.area} {...common} />
        ) : (
          <input
            type={opts.type ?? "text"}
            autoComplete={opts.auto}
            spellCheck={opts.type === "email" ? false : undefined}
            autoCapitalize={opts.type === "email" ? "off" : undefined}
            inputMode={opts.type === "tel" ? "tel" : undefined}
            {...common}
          />
        )}
      </div>
    );
  };

  const chips = (k: "role" | "stage", legend: string, options: string[]) => (
    <fieldset className="cf-field" aria-describedby={errors[k] ? `cf-${k}-err` : undefined}>
      <legend>{legend}</legend>
      {errors[k] && (
        <p className="cf-err" id={`cf-${k}-err`}>
          {errors[k]}
        </p>
      )}
      <div className="cf-chips">
        {options.map((o) => (
          <label key={o} className={v[k] === o ? "cf-chip is-on" : "cf-chip"}>
            <input
              type="radio"
              name={k}
              value={o}
              checked={v[k] === o}
              onChange={() => {
                setV((p) => ({ ...p, [k]: o }));
                setErrors((p) => ({ ...p, [k]: undefined }));
              }}
            />
            <span>{o}</span>
          </label>
        ))}
      </div>
    </fieldset>
  );

  return (
    <form
      className="cf"
      noValidate
      onSubmit={(e) => {
        e.preventDefault();
        if (step < 3) next();
        else send();
      }}
    >
      <div className="cf-progress" aria-hidden="true">
        <span style={{ width: `${(step / 3) * 100}%` }} />
      </div>
      <div tabIndex={-1} ref={top} className="cf-step">
        Step {step} of 3
      </div>

      {errList.length > 0 && (
        <div className="cf-summary" tabIndex={-1} ref={summary}>
          <h3>There is a problem</h3>
          <ul>
            {errList.map(([k, m]) => (
              <li key={k}>
                <a href={`#cf-${k}`}>{m}</a>
              </li>
            ))}
          </ul>
        </div>
      )}

      {status === "failed" && (
        <div className="cf-summary" role="status">
          <h3>Your enquiry was not sent</h3>
          <p>Nothing you entered has been lost.</p>
          <div className="cf-row">
            <button type="button" className="btn-ghost" onClick={send}>
              Try again
            </button>
            <a className="btn-ghost" href={mailtoHref(v)}>
              Email it instead
            </a>
            <button type="button" className="btn-ghost" onClick={copy}>
              {copied ? "Copied" : "Copy my enquiry"}
            </button>
          </div>
        </div>
      )}

      {step === 1 && (
        <div className="cf-panel" key="s1">
          {chips("role", "You are…", ROLES)}
          {chips("stage", "Where is the matter now?", STAGES)}
        </div>
      )}

      {step === 2 && (
        <div className="cf-panel" key="s2">
          {field("name", "Your name", { max: 120, auto: "name" })}
          {field("organisation", "Organisation", {
            max: 160,
            auto: "organization",
            hint: "If you are writing as an individual, say so.",
          })}
          {field("email", "Email address", {
            max: 200,
            type: "email",
            auto: "email",
            hint: "Michael will reply to this address.",
          })}
          {field("phone", "Phone or WhatsApp", {
            max: 30,
            type: "tel",
            auto: "tel",
            optional: true,
            hint: "Include the country code.",
          })}
        </div>
      )}

      {step === 3 && (
        <div className="cf-panel" key="s3">
          {field("outline", "Overview", {
            area: 6,
            max: 1500,
            optional: true,
            hint: "A few basic details: the parties, the project and country, and what you need.",
          })}
          <dl className="cf-review">
            <div>
              <dt>You are</dt>
              <dd>
                {v.role} · {v.stage}{" "}
                <button type="button" className="cf-change" onClick={() => setStep(1)}>
                  Change
                </button>
              </dd>
            </div>
            <div>
              <dt>Your details</dt>
              <dd>
                {[v.name.trim(), v.organisation.trim(), v.email.trim()].filter(Boolean).join(" · ")}{" "}
                <button type="button" className="cf-change" onClick={() => setStep(2)}>
                  Change
                </button>
              </dd>
            </div>
          </dl>
          <p className="cf-note">{CONFIDENTIAL}</p>
        </div>
      )}

      {/* Honeypot: hidden from people and screen readers; bots fill it. */}
      <div className="cf-hp" aria-hidden="true">
        <label htmlFor="cf-website">Website</label>
        <input id="cf-website" name="website" type="text" tabIndex={-1} autoComplete="off" ref={honey} />
      </div>

      <div className="cf-row cf-nav">
        {step > 1 && (
          <button type="button" className="btn-ghost" onClick={() => setStep((s) => s - 1)}>
            Back
          </button>
        )}
        <button type="submit" className="btn-primary" aria-disabled={status === "sending" || undefined}>
          {step < 3 ? "Continue" : status === "sending" ? "Sending…" : "Send enquiry"}
        </button>
      </div>
      <p className="cf-legal">
        Contacting Avonstowe does not create an engagement; that only follows a conflict check and agreed terms.
      </p>
    </form>
  );
}
