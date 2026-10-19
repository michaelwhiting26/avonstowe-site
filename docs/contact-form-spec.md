# Contact form specification: avonstowe.com

Status: specification only, nothing built. Written 19 October 2026.
Applies to: `~/avonstowe-rev4` (Next.js 15.5.4, `output: "export"`, GitHub Pages, no server).
Research screenshots (390 px, iPhone 13 profile, Playwright 1.63 Chromium): `/private/tmp/claude-501/-Users-michaelwhiting/4ee071dc-c6e5-4e02-9b6a-35a9e59c6765/scratchpad/forms-research/` (the scratchpad is temporary; copy the folder somewhere permanent if it is worth keeping).

---

## 1. What makes a superb form: the evidence

The best forms are short, clearly labelled and calm. Visual flair matters far less. Every point below is sourced. Where sources disagree, the conflict is stated and resolved.

| # | Finding | Source |
|---|---|---|
| 1 | **The number of fields matters more than the number of steps.** Baymard found the average checkout has 11.3 fields when 8 would do, and that field count "impacts overall usability far more than the number of steps". | https://baymard.com/blog/checkout-flow-average-form-fields |
| 2 | **One thing per page helps on mobile and helps people recover from errors.** GOV.UK: "Start by splitting the form across multiple pages with each page containing just one thing". It lists mobile use and error recovery as benefits, and says to merge pages where research supports it. | https://www.gov.uk/service-manual/design/form-structure |
| 3 | **Ask once.** "Only ask for a piece of information once within a single journey" (GOV.UK). WCAG 2.2 SC 3.3.7 Redundant Entry says the same. | https://design-system.service.gov.uk/patterns/question-pages/ ; https://www.w3.org/WAI/WCAG22/Understanding/redundant-entry |
| 4 | **Labels must be visible and sit outside the field. Placeholders are not labels.** Placeholder text strains short-term memory, hinders checking entries, often fails contrast, and some screen readers do not read it out. | https://www.nngroup.com/articles/form-design-placeholders/ ; https://adamsilver.io/blog/form-design-from-zero-to-hero-all-in-one-blog-post/ |
| 5 | **Use a single column with labels above the fields. Mark optional fields, keep them to one or two, and have no Reset or Clear buttons.** | https://www.nngroup.com/articles/web-form-design/ |
| 6 | **When to validate is disputed.** NN/g says validate once the user leaves a field, never before. GOV.UK and Adam Silver say validate on submit and never disable the submit button. **Resolution for this form:** validate when the user presses *Continue* or *Send*. After a field has shown an error, re-check it as the user types so the error clears the moment it is fixed. Never show an error on a field the user has not yet left. | https://www.nngroup.com/articles/errors-forms-design-guidelines/ ; https://adamsilver.io/blog/form-design-from-zero-to-hero-all-in-one-blog-post/ |
| 7 | **Wording of error messages.** Say what went wrong and how to fix it. Reuse the label's words. Avoid "please", "sorry", "valid/invalid", "this field is required" and humour. Keep entered values when showing errors. List all errors in a summary at the top with the same wording as next to the fields. | https://design-system.service.gov.uk/components/error-message/ |
| 8 | **Showing errors.** Put each error next to its field with an icon, not colour alone. Do not animate the error text. A summary must never be the only signal. | https://www.nngroup.com/articles/errors-forms-design-guidelines/ |
| 9 | **WCAG 2.2 AA criteria this form must meet:** 1.3.5 Identify Input Purpose (`autocomplete`), 1.4.11 Non-text Contrast (field borders at 3:1 or more), 2.4.11 Focus Not Obscured (the sticky header and on-screen keyboard must not hide the focused field), 2.5.8 Target Size (Minimum) (24×24 CSS px or more), 3.3.1 Error Identification, 3.3.2 Labels or Instructions, 3.3.3 Error Suggestion, 3.3.7 Redundant Entry, 3.3.8 Accessible Authentication (no puzzle CAPTCHA), 4.1.3 Status Messages (sending, sent and failed are announced without moving focus). | https://www.w3.org/TR/WCAG22/ |
| 10 | **"Mad Libs" fill-in-the-sentence forms: the evidence is weak.** The often-quoted "25–40% uplift" comes from one 2010 Vast.com test that changed many things at once. A counter-test by Patrick McKenzie saw conversion *fall*. Primary write-up not reached; secondary reporting only. | https://mac.konigi.com/blog/mad-libs-style-form-increases-conversion-25-40 ; https://tynerblain.com/blog/2010/03/01/measuring-interaction-design/ |
| 11 | **iOS Safari zooms the page when a focused input's font is under 16 px.** Seen in the audit: Vercel and HKA inputs are 14 px. This is well-known WebKit behaviour; no primary Apple source was fetched. | audit, section 2 |

**What this means for Avonstowe.** Aim for about 8 required answers with very little typing. Use visible labels in Inter at 16 px or larger, and errors in GOV.UK style. The polish comes from the type, spacing and one carefully judged motion system, not from novel input patterns.

---

## 2. Exemplars (audited at 390 px on 19 October 2026)

Field data comes from a DOM audit of the visible controls (`audit-run2.json` covers the second batch; the first batch's figures were recorded at run time). Motion was **not** assessed, because the captures are static, and no form was submitted, so **success states are not observed**. Awwwards or FWA award status was **not verified** for any of these sites. They were chosen as studio and agency exemplars, plus four from the disputes sector.

| Site | URL | Pattern | Fields | Mobile notes | Validation / spam | Lesson for us | Screenshot |
|---|---|---|---|---|---|---|---|
| Stripe | stripe.com/contact/sales | Progressive steps: email and country first, then *Continue* | 2 on step 1 | Labels above fields, 48 px inputs, 16 px text, one full-width CTA | `required`, `autocomplete=email` | Easy first step; a heading that says why you are being asked ("Let's get you to the right place") | `stripe-390-top.png`, `stripe-390-form.png` |
| Linear | linear.app/contact/sales | Single page | 4 (name, work email, company size, requirements) | Dark theme, visible labels, 16 px, email fallback printed beside *Send message* | `required`, `autocomplete` on name and email | **Closest tonal match**: dark, quiet, and the email alternative sits next to the button | `linear-390-top.png`, `linear-390-form.png` |
| Vercel | vercel.com/contact/sales | Single page | 5, plus a marketing opt-in | 14 px inputs, so iOS zooms on focus; 36 px height | All required | Anti-pattern: small inputs; a marketing opt-in in a sales enquiry | `vercel-390-top.png`, `vercel-390-form.png` |
| Cuberto | cuberto.com/contacts/ | Multi-select chips ("I'm interested in…"), then underline fields, budget radios, file upload | 8 chips + 3 text + 5 radios + file | Large pill chips (51 px), placeholder-as-label on text fields | reCAPTCHA (Google) | Chips make the first answer a tap. Placeholder labels are the flaw | `cuberto-390-top.png`, `cuberto-390-form.png` |
| Büro (Bürocratik) | burocratik.com/lets-talk | Numbered questions (01, 02, 03…), radio rows, sentence prompts ("Brief Adriano on what you need") | about 22 controls | Full-width hairline rows, large type | No CAPTCHA detected | Numbered questions read as a calm conversation; addressing a named person suits a one-principal practice | `burocratik-390-top.png`, `burocratik-390-form.png` |
| basement.studio | basement.studio/contact | Single page, underline fields | 5 (budget optional) | Very low-contrast placeholder-as-label on black | None detected | Anti-pattern: placeholders fail contrast on a dark background, the exact risk on our navy | `basement-390-top.png`, `basement-390-form.png` |
| AREA 17 | area17.com/contact | Form behind a *Get in touch* disclosure; enquiry type (radios) decides the fields | 3 types, then 6–8 fields | Branches by purpose | `required` marked in the label text | Ask what kind of enquiry it is first, then show only the fields that apply | `area17-390-top.png`, `area17-390-form.png` |
| Lusion | lusion.co (contact redirects home) | One email field | 1 | 61 px input, 17.5 px text | none | The minimum possible ask; too thin for a conflict check | `lusion-390-top.png`, `lusion-390-form.png` |
| **Fenwick Elliott** (construction law) | fenwickelliott.com/contact/ | Single page, card | 4 (name, company, email; message optional) | Visible labels, 55 px fields, but 13.3 px text, so iOS zooms | **Cloudflare Turnstile** | Sector benchmark: short and labelled, with Turnstile rather than reCAPTCHA. No confidentiality warning | `fenwick-elliott-390-top.png`, `fenwick-elliott-390-form.png` |
| **HKA** (disputes experts) | hka.com/contact/ | Single page | 6 (first, last, email, phone, how did you hear, enquiry) | Placeholder-as-label, 14 px text, reCAPTCHA badge overlaps a field | reCAPTCHA; privacy line above the form | Good: a plain privacy statement before the fields. Bad: everything else | `hka-390-top.png`, `hka-390-form.png` |
| **Secretariat** (disputes experts) | secretariat-intl.com/contact/ | Single page | 4 (first, last, email, message) | 60 px fields, 16 px | CAPTCHA script detected (vendor unclear) | Sector norm is a generic 4-field form, with no conflict or privilege guidance. **Our opening** | `secretariat-390-top.png`, `secretariat-390-form.png` |
| **Mishcon de Reya** (law) | mishcon.com/contact | HubSpot embed (iframe, not audited) | n/a | n/a | reCAPTCHA + HubSpot | Embedded marketing forms bring tracking; avoid | `mishcon-390-top.png`, `mishcon-390-form.png` |
| GOV.UK Design System | design-system.service.gov.uk/patterns/question-pages/ | One question per page (pattern reference) | n/a | Reference standard for labels, hints, errors and *Continue* | n/a | Copy its rules on errors, hints and Back | `govuk-question-pages-390-top.png`, `govuk-question-pages-390-form.png` |

Captured but **no form found at 390 px** (kept for reference only): Locomotive (`locomotive-390-top.png`, WebGL hero, reCAPTCHA present, form not reached), Clay (`clay-390-top.png`), Instrument (`instrument-390-top.png`), Dogstudio (`dogstudio-*`, video controls only), Keating Chambers (`keating-*`, phone and email only). Obys, Immersive Garden and Typeform returned 404 at the URLs tried.

**Gap in the sector.** None of the four disputes-sector forms tells the enquirer not to send privileged material, or asks who the parties are. A form that does both, with no clutter, stands out in the sector, and it is the honest version of the "premium" feel.

---

## 3. Recommended pattern and why

**Recommendation: a three-step form placed in the page, opening with taps on option chips.** It is not a full-screen chat-style flow and not a Mad Libs sentence form.

```
Step 1  About you and the matter   [chips] You are…   [chips] Where is it now?
Step 2  Conflict check             parties · project and country · short outline · key date (optional)
Step 3  Your details               name · organisation · email · phone (optional)  → summary → Send
```

Your hunch tested against the evidence:

- **Steps are justified here, though not because steps raise completion in general.** Baymard says steps cost little when the field count is low (finding 1), and GOV.UK says one topic per screen helps on mobile and with error recovery (finding 2). The real reason is that **step 2 needs its own explanation**: why the parties are needed (the conflict check) and what not to send (privilege). On a single long page that warning gets lost among the fields.
- **Chips work for the role question, as radios underneath.** Six roles, choose one: native `<input type="radio">` in a `<fieldset>`/`<legend>`, styled as chips. The first screen becomes two taps and no typing. Cuberto and AREA 17 do the same.
- **Three steps, not one-thing-per-page (about 9 screens).** Nine screens for nine answers would feel slow to busy solicitors. Group by topic, as GOV.UK allows once research supports merging.
- **Mad Libs rejected.** The evidence is thin (finding 10), labels inside sentences are hard to get right for screen readers, and a playful sentence suits a design studio better than a disputes practice. Borrow only the conversational *question headings*.
- **Same component at every width.** No separate desktop layout: one code path, one set of tests. The form sits in the existing 720/880 px measure.
- **No-JS behaviour follows the site's existing rule** (`components/Motion.tsx`: the resting state is visible). The form renders only under `html.js`. The current email and WhatsApp buttons stay on the page as the route that always works, now below the form under "Or contact Michael directly".

---

## 4. Fields, copy, validation and error messages

Copy is plain British English. It makes no claims beyond `lib/site.ts` and `lib/person.ts`. The word "expert witness" does not appear anywhere.

### Section heading (replaces the current "Contact Michael" block)

- Eyebrow: `Contact`
- H2: `Discuss a matter` (matches the hero CTA, so the click lands on the words it promised)
- Lede (muted, 15 px): `Tell Michael a little about the matter. He will reply by email. Contacting Avonstowe does not create an engagement; that only follows a conflict check and agreed terms.` (Legal basis: the existing "No professional relationship" section. **Response-time wording is open decision 3.**)
- Step indicator: `Step 1 of 3` (text, plus a 1 px brass progress rule)

### Step 1: About you and the matter

| Field | Control | Required | Values / notes | Error message |
|---|---|---|---|---|
| `role`: legend **"You are…"** | Radio chips | Yes | `A law firm` · `An appointed expert` · `A contractor` · `A subcontractor` · `An employer or developer` · `Other` | `Select who you are` |
| `stage`: legend **"Where is the matter now?"** | Radio chips | Yes | `On a live project` · `Adjudication` · `Arbitration` · `Court proceedings` · `Not sure yet` (taken from the bio's "arbitration, adjudication and court proceedings, and on live projects") | `Select where the matter is now` |

Button: `Continue`.

### Step 2: Conflict check

Intro paragraph at the top of the step (in a brass-ruled note box, not an alert colour):

> **Please don't send confidential or privileged material until a conflict check is complete.**
> Michael needs the parties' names to check for conflicts before he can discuss the matter. A brief outline is enough at this stage. The form does not take attachments.

| Field | Control | Required | Hint (visible, below the label) | Error messages |
|---|---|---|---|---|
| `parties`: **"Who are the parties?"** | `<textarea rows=3>` | Yes, 3–600 chars | `Name each party, including the other side. For example: Employer Ltd v Contractor Ltd; subcontractor Smith Ltd.` | Empty: `Enter the names of the parties`. Over the limit: `Parties must be 600 characters or fewer` |
| `project`: **"Project and country"** | `<input type=text>` | Yes, max 160 | `For example: hospital extension, Leeds, UK` | Empty: `Enter the project and country`. Too long: `Project and country must be 160 characters or fewer` |
| `outline`: **"What do you need help with?"** | `<textarea rows=5>` with a live character count (`aria-live=polite`, announced only when 100 or fewer are left) | Yes, 20–1,500 | `A short, non-confidential outline: the issue, the sums involved if known, and what you need.` | Empty: `Describe what you need help with`. Too short: `Add a little more detail, at least 20 characters`. Too long: `Outline must be 1,500 characters or fewer` |
| `keyDate`: **"Any key date? (optional)"** | `<input type=text>` (free text, not a date picker) | No, max 120 | `For example: expert report due 12 December 2026` | Too long: `Key date must be 120 characters or fewer` |

Buttons: `Continue` (primary), `Back` (text link style, to the left; it keeps all entered values).

### Step 3: Your details

| Field | `autocomplete` / `inputmode` | Required | Hint | Error messages |
|---|---|---|---|---|
| `name`: **"Your name"** | `name` | Yes, max 120 | none | `Enter your name` |
| `organisation`: **"Organisation"** | `organization` | Yes, max 160 | `If you are writing as an individual, say so.` | `Enter your organisation, or say you are writing as an individual` |
| `email`: **"Email address"** | `email`, `type=email`, `spellcheck=false`, `autocapitalize=off` | Yes, simple `x@y.z` check | `Michael will reply to this address.` | Empty: `Enter your email address`. Format: `Enter an email address in the correct format, like name@example.com` |
| `phone`: **"Phone or WhatsApp (optional)"** | `tel`, `type=tel` | No, 6–30 of `+0-9 ()-` | `Include the country code.` | `Enter a phone number using digits, spaces and a leading +` |

Then a **summary** (GOV.UK "check answers", condensed): a `<dl>` showing role, stage, parties, project and outline (outline cut to 2 lines), each with a `Change` link that returns to the right step and focuses that field (no re-typing: WCAG 3.3.7).

Under the summary, above the button, in muted 14 px:

> **Please don't send confidential or privileged material until a conflict check is complete.**
> Avonstowe uses these details to reply and to check for conflicts, as set out in the [privacy notice](/legal/#privacy).

No consent checkbox (open decision 4). No marketing opt-in, ever.

Buttons: `Send enquiry` (primary) · `Back`.

**No attachments.** There is no file input, and no upload route exists.

**Hidden fields and payload extras:** `company_website` (honeypot; see §7.5), `elapsedMs` (milliseconds since the form mounted, worked out in memory, never stored), `turnstileToken` (from the widget, `action: "enquiry"`).

### Error summary (on any failed Continue or Send)

A box at the top of the step: H3 `There is a problem`, then a list of links using the exact wording of the inline errors, each linking to its field. Focus moves to the box (`tabindex=-1`, `role=alert` not used, so it is not announced twice; it is announced by receiving focus). Inline messages sit **above** the input (Adam Silver) with a 16 px warning icon and the colour `#ff8f87` (8.2:1 on `--navy-900`). The field border also turns to that colour, so colour is never the only signal.

### States after sending

- **Sending:** the button label becomes `Sending…`, with `aria-disabled=true`, keeping its width. A polite live region announces `Sending your enquiry`.
- **Sent** (replaces the form; focus goes to the heading): H2 `Thank you, {first word of name}.`, then `Your enquiry has reached Michael. He will reply to {email}.`, then `If the matter is urgent, message him on WhatsApp: +44 7762 124220.` No reference number, no auto-reply email (see §7).
- **Failed** (network error, a 5xx, or Turnstile failure): an error panel at the top, `Your enquiry was not sent. Nothing you entered has been lost.`, with two actions: `Try again` and `Email it instead`. The second opens `mailto:` with subject `Enquiry: {role}, {project}` and the answers in the body (shortened if needed: some mail apps cut long `mailto` bodies; keep it under about 1,800 characters). It also offers `Copy my enquiry` (Clipboard API) as a third route.

---

## 5. Interaction and motion

All motion uses the site's existing curve `cubic-bezier(0.16, 1, 0.3, 1)` (call it `--ease-out-expo`), built with CSS transitions and `data-state` attributes. **No new animation library.** `motion` is already a dependency (`^12.42.2`; latest is 14.4.0, do not upgrade as part of this work) but is not needed for this form.

| Moment | Spec |
|---|---|
| Section entry | Existing `<Reveal>`; nothing new. |
| Chip select | Background goes from transparent to `--brass` and text to `--navy-900`, 180 ms ease-out. A 12 px tick draws in via `stroke-dashoffset`, 240 ms, 60 ms delay. No scale bounce. |
| Chip hover (pointer: fine only) | Border to `--brass`, 200 ms. |
| Field focus | The border goes from `#6b82a8` to `--brass`, and a 2 px brass outline appears with 3 px offset (matches the existing `:focus-visible`), 150 ms. The label does not move (no floating labels). |
| Step change | Outgoing step: opacity 1→0, translateY 0→−8 px, 180 ms ease-in. Incoming step: opacity 0→1, translateY 16 px→0, 480 ms `--ease-out-expo`, starting when the outgoing one ends. The container height animates between steps over 480 ms (measured with `ResizeObserver` and set as an explicit `height`, then cleared). The progress rule's width goes 33%→66%→100% over 600 ms. |
| After a step change | The page scrolls the form's top to 80 px below the viewport top (clearing the sticky header) via Lenis `scrollTo(el, { offset: -80 })`. Focus moves to the step heading (`<h3 tabindex=-1>`). |
| Error appearance | Message opacity 0→1 over 150 ms. **No shake, no sliding text** (NN/g). The summary box appears with no animation. |
| Send | The label cross-fades to `Sending…` (120 ms). Three 3 px brass dots pulse in sequence (900 ms loop). |
| Sent | The form fades out (200 ms). The success block plays the existing `av-reveal-in` keyframe, and the 48 px brass `.hero-rule` draws in left to right (`scaleX` 0→1, 600 ms). |
| Magnetic button | Leave `MagneticButton` as an `<a>`; the form's submit is a real `<button type=submit>`. If wanted, add a `MagneticSubmit` variant using the same spring (stiffness 220, damping 18, mass 0.4), applied only for `pointerType === "mouse"`. |

**Reduced motion** (`prefers-reduced-motion: reduce`): all of the above become instant (`transition: none`, no keyframes, no height animation, no dot pulse; the label changes to `Sending…` with no fade). Lenis is already off, so use native `scrollIntoView({ block: "start" })` with `scroll-margin-top: 80px`. Done in CSS, as in the existing reveal rules, so it is correct on first paint.

**Mobile specifics**
- All inputs are 16 px or larger, so iOS does not zoom.
- Chips are at least 44 px high (well above the 24 px of SC 2.5.8) with at least 8 px gaps, and wrap with `flex-wrap`.
- Buttons are full width under 640 px. `Back` sits above `Continue`, so a thumb on the bottom edge hits the primary action.
- `enterkeyhint="next"` on single-line inputs and `enterkeyhint="send"` on the phone field.
- Textareas get the `data-lenis-prevent` attribute, so their inner scrolling is not taken over by Lenis.
- `scroll-margin-top: 96px` on inputs, plus `scrollIntoView({ block: "center" })` on focus when `visualViewport.height` < 500 (keyboard open). Together these meet SC 2.4.11.
- **Browser back:** each step change calls `history.pushState({ step }, "", "#contact")`, and a `popstate` handler moves back a step without losing values. This is tested.
- **No draft persistence.** Nothing goes to `localStorage` or `sessionStorage`. That keeps the privacy notice true and keeps possibly sensitive text off shared devices. State lives in React memory only.

---

## 6. Accessibility checklist (all must pass before merge)

- [ ] Every control has a visible `<label>` or a `<legend>`. Hints are linked via `aria-describedby`, and errors are added to `aria-describedby` with `aria-invalid="true"`.
- [ ] Chip groups are a native radio `<fieldset>`: arrow keys move between options, Space selects, and there is one tab stop per group.
- [ ] `autocomplete` on name, organisation, email and phone (1.3.5).
- [ ] Text contrast is at least 4.5:1: `--text` 15.6:1, `--muted` 8.6:1, `--brass` 7.7:1, error `#ff8f87` 8.2:1, all on `--navy-900`. **Field borders `#6b82a8` (4.65:1) and focus outlines are at least 3:1 (1.4.11).** Do not reuse `--line` (about 1.7:1) for input borders.
- [ ] Targets are at least 44×44 px (exceeds 2.5.8).
- [ ] Focus is visible at all times, and the focused field is never hidden by the sticky glass header or the keyboard (2.4.11).
- [ ] Errors are identified in text, give a suggestion, appear in the summary and next to the field, and entered values are kept (3.3.1, 3.3.3).
- [ ] The step heading takes focus on step change; the "Step x of 3" text is part of the heading.
- [ ] Sending, sent and failed states are announced (4.1.3) through a single `role=status` live region.
- [ ] No cognitive test: Turnstile in **managed / non-interactive** mode, never a puzzle (3.3.8).
- [ ] The summary's `Change` links return to the field with its value intact (3.3.7).
- [ ] Works at 320 px wide and at 200% text zoom without horizontal scrolling.
- [ ] Screen reader pass with VoiceOver on iOS (Safari) and NVDA or JAWS (Chrome) before launch: manual, logged.

---

## 7. Delivery architecture, spam and privacy

**Decision (Michael, 19 October 2026):** the backend is a **Google Apps Script web app in his own Google Workspace account (michael@avonstowe.com)**. It receives the POST, verifies a Cloudflare Turnstile token, validates the input, rate-limits, and emails him. Resend, Web3Forms and Formspree are not used. **No attachments**: the form has no file input, and the script never sends one.

### 7.1 Flow

```
Browser (www.avonstowe.com, static, GitHub Pages)
  │  fetch(ENDPOINT, { method: "POST", redirect: "follow",
  │                    headers: { "Content-Type": "text/plain;charset=utf-8" },
  │                    body: JSON.stringify(payload) })
  ▼
https://script.google.com/macros/s/<DEPLOYMENT_ID>/exec   → doPost(e)
  1. Size guard: e.postData.length > 20,000 → {ok:false, code:"too_large"}
  2. JSON.parse(e.postData.contents); on failure → {ok:false, code:"bad_request"}
  3. Honeypot company_website filled → {ok:true} and STOP (silent drop, no email)
  4. Time trap: elapsedMs < 4000 → {ok:true} and STOP (silent drop)
  5. Turnstile: UrlFetchApp POST to https://challenges.cloudflare.com/turnstile/v0/siteverify
       payload { secret: <Script Property>, response: token, idempotency_key: Utilities.getUuid() }
       require success === true, hostname ∈ ALLOWED_HOSTNAMES, action === "enquiry"
       else → {ok:false, code:"verification_failed"}
  6. validate(payload): the same rules and limits as lib/enquiry.ts → {ok:false, code:"invalid", fields:{…}}
  7. Rate limit (under LockService.getScriptLock().tryLock(5000)) → {ok:false, code:"busy"}
  8. MailApp.sendEmail({ to: OWNER_EMAIL, replyTo: payload.email, name: "Avonstowe website",
                          subject, body })   // plain text only, no htmlBody, no attachments
  9. → {ok:true}
  ◀── 302 to script.googleusercontent.com/macros/echo?…  (the browser follows it; JSON body)
```

`doGet` returns `{ok:true, service:"avonstowe-enquiry"}` and does nothing else, as a health check.

### 7.2 CORS: what is true and what to do

- **No preflight.** Apps Script cannot answer an `OPTIONS` request or set response headers, and `doPost` receives no request headers (the event object has `postData`, `parameter`/`parameters`, `contentLength`, `pathInfo`, and no headers, no client IP: https://developers.google.com/apps-script/guides/web). So the browser must send a **CORS "simple request"**: `POST` with `Content-Type: text/plain;charset=utf-8` (a JSON string in the body) **or** a `URLSearchParams` body (`application/x-www-form-urlencoded`). Never `application/json` and no custom headers; either would trigger a preflight that fails.
  - `text/plain` + JSON (preferred): the server reads `JSON.parse(e.postData.contents)`.
  - `URLSearchParams`: the server reads `e.parameter.name` etc. (first value only per key).
- **Reading the response.** ContentService output is "redirected to a one-time URL at `script.googleusercontent.com`" (https://developers.google.com/apps-script/guides/content). `fetch` follows it (`redirect: "follow"`, the default). The response is then read with `await res.json()`, inside `try/catch`.
  - It is widely reported that the googleusercontent echo response carries `Access-Control-Allow-Origin: *`, so the JSON can be read from avonstowe.com. **Google's docs do not say this: unverified.** Acceptance test A1 (§8) must prove it against the real deployment *before* the UI is built on it.
  - **If A1 fails:** switch to a hidden-iframe POST. A real `<form target="enquiry-frame">` posts to `/exec`, and `doPost` returns `HtmlService` output with `setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL)`, which calls `window.top.postMessage({ok, code}, "https://www.avonstowe.com")`. Same server logic; only the transport changes.
- **The HTTP status is always 200** for ContentService replies, so success and failure live only in the JSON `{ok, code, fields?}`. If the script throws before replying, Google serves an HTML error page. `res.json()` then throws, and the client treats that as **failed** (§7.8).
- **The Origin cannot be checked** (no headers). Its substitute is the **Turnstile `hostname`**, which siteverify returns: reject anything not in `ALLOWED_HOSTNAMES` (`www.avonstowe.com,avonstowe.com`).
- **Client timeout:** an `AbortController` at 20 s. Apps Script start-up adds latency (typical cold-start times not verified), so the `Sending…` state must stay calm for up to about 10 s.

### 7.3 Deployment steps (Michael, in his own account)

1. Signed in as **michael@avonstowe.com**, create a standalone project at https://script.google.com: `Avonstowe enquiry endpoint`. Keep its source in the repo under `apps-script/` and push it with `clasp`, or paste it in by hand. The repo is the record either way.
2. `appsscript.json`: set explicit, minimal scopes, so the consent screen asks for no more than needed:
   ```json
   {
     "timeZone": "Asia/Dubai",
     "runtimeVersion": "V8",
     "exceptionLogging": "STACKDRIVER",
     "oauthScopes": [
       "https://www.googleapis.com/auth/script.send_mail",
       "https://www.googleapis.com/auth/script.external_request"
     ],
     "webapp": { "executeAs": "USER_DEPLOYING", "access": "ANYONE_ANONYMOUS" }
   }
   ```
   `MailApp` (send-only scope) rather than `GmailApp`, which would ask for read access to the whole mailbox. Whether CacheService, PropertiesService and LockService need any extra scope was not checked; the consent screen will show it.
3. **Project Settings › Script properties** (never in code, never in the repo):
   - `TURNSTILE_SECRET` = the Turnstile widget's secret key
   - `OWNER_EMAIL` = `michael@avonstowe.com`
   - `ALLOWED_HOSTNAMES` = `www.avonstowe.com,avonstowe.com`
   - `DAILY_CAP` = `30`
4. Run `selfTest()` once from the editor to grant consent. It emails Michael "Endpoint authorised" and checks that the properties exist.
5. **Deploy › New deployment › type: Web app.** Description `v1`. **Execute as: Me (michael@avonstowe.com). Who has access: Anyone.** "Anyone" is the anonymous option; "Anyone with Google account" would make every visitor sign in. Copy the `/exec` URL.
6. Put the `/exec` URL in `lib/site.ts` as `enquiryEndpoint`. It is public by nature; the security comes from Turnstile and the server checks, not from secrecy.
7. **Updating code:** use **Deploy › Manage deployments › (edit) › Version: New version**. This keeps the same `/exec` URL. Creating a *new deployment* would change the URL and break the site.
8. **Workspace admin check:** a Workspace admin can stop users publishing web apps to "Anyone" (Drive and sharing settings). If the option is greyed out, Michael changes it in admin.google.com (he is presumably his own admin: **status to confirm**).
9. In the Cloudflare dashboard, create a Turnstile widget: hostnames `www.avonstowe.com`, `avonstowe.com` (add `localhost` only on a separate dev widget), mode **Managed**. Put the site key in `lib/site.ts`; the secret goes to step 3.

### 7.4 Quotas (Google Workspace account, from https://developers.google.com/apps-script/guides/services/quotas, checked 19 October 2026)

| Item | Workspace | (consumer gmail.com, for contrast) |
|---|---|---|
| Email recipients per day (MailApp) | **1,500** | 100 |
| URL Fetch calls per day (Turnstile siteverify) | 100,000 | 20,000 |
| Properties read/write per day | 500,000 | 50,000 |
| Script runtime | 6 min per execution | 6 min |
| Simultaneous executions per user | **30** (every run executes as Michael, so 30 at once in total) | 30 |
| Email body size | 400 KB per message | 200 KB |

The recipient figures carry a footnote on Google's page that the fetch did not return, so check the footnote's wording on the page. One enquiry = one recipient, so real enquiry volume will never come near these limits. The rate limits in §7.5 exist to stop abuse, not to stay inside quota.

### 7.5 Spam and abuse controls

1. **Turnstile** (Cloudflare, free plan: unlimited challenges, 20 widgets; https://developers.cloudflare.com/turnstile/plans/):
   - Managed mode, `appearance: "interaction-only"`, `action: "enquiry"`.
   - Loaded lazily on the first interaction with the form, so nothing third-party loads with the page.
   - Tokens are **valid for 300 seconds and single-use** (https://developers.cloudflare.com/turnstile/get-started/server-side-validation/). The client therefore calls `turnstile.reset()` and gets a fresh token when *Send* is pressed if more than about 4 minutes have passed, and always after a failed send.
   - `remoteip` is not sent, because Apps Script cannot see the client IP.
2. **Honeypot:** a text input `company_website` inside a wrapper with `position:absolute; left:-10000px`, `aria-hidden="true"`, `tabindex="-1"` and `autocomplete="off"`. If it is filled, the server returns `{ok:true}` and sends nothing, so bots learn nothing.
3. **Time trap:** the client sends `elapsedMs` (time since the form mounted). Under 4 s gives a silent drop. It is spoofable and only a cheap first filter; Turnstile is the real gate.
4. **Rate limits** (no IP is available, so the limits are global and per address):
   - Global: no more than 5 accepted enquiries per 10 minutes, counted in `CacheService.getScriptCache()`.
   - Global: no more than `DAILY_CAP` (30) per day, in `PropertiesService.getScriptProperties()` under the key `count:YYYY-MM-DD`; old keys are deleted on each run.
   - Per sender: no more than 3 per day per email address. The cache key is a **SHA-256 hash** of the lower-cased address (`Utilities.computeDigest`), never the address itself.
   - Breach → `{ok:false, code:"busy"}`, and the client shows the failed panel with the email fallback.
5. **Header-injection hygiene:**
   - Strip CR/LF from every value used in `subject`, `name` and `replyTo`.
   - `replyTo` must pass the email check.
   - The body is plain text only (no `htmlBody`), so there is no HTML injection into Michael's mailbox.
6. **Input caps:** the server enforces the §4 limits again, plus the 20 KB body cap.

### 7.6 The email Michael receives

```
Subject: Enquiry: A law firm · Arbitration · hospital extension, Leeds, UK

PARTIES (for conflict check)
Employer Ltd v Contractor Ltd; subcontractor Smith Ltd

ROLE        A law firm
STAGE       Arbitration
PROJECT     hospital extension, Leeds, UK
KEY DATE    expert report due 12 December 2026

OUTLINE
…

FROM        Jane Smith, Smith & Co LLP
EMAIL       jane@smithco.example   (reply to this message to answer)
PHONE       +44 …

Sent from the avonstowe.com enquiry form, 19 Oct 2026 14:02 (Asia/Dubai).
```

### 7.7 What Google stores, and what the code must never log

- **The enquiry email** goes to Michael's Gmail inbox and stays under his Workspace retention settings until he deletes it. Whether `MailApp` also leaves a copy in *Sent* was not verified; check after `selfTest()`.
- **Apps Script execution records** (function, start time, duration, status) appear on the project's *Executions* page. Google does not document a retention period for that page; a secondary source says about 7 days (**unverified**). The payload is not shown there unless the code logs it.
- **Cloud Logging:** `console.*` / `Logger` output and unhandled exceptions (exception logging is on by default; https://developers.google.com/apps-script/guides/logging) go to the `_Default` bucket, kept **30 days by default** (https://docs.cloud.google.com/logging/quotas).
  - **Rule: never log the payload, the email address, or any field value.** Log only `code` and duration.
  - Wrap `doPost` in `try/catch`, so an exception message never contains user text.
- **Script Properties:** secrets, the daily counter keys (date strings only) and nothing personal.
- **CacheService:** rate-limit counters and hashed address keys only, expiring within hours.
- **Cloudflare (Turnstile):** processes IP address, TLS fingerprint, User-Agent, sitekey and origin. It is a **processor** for bot detection, and a **controller** when it uses those signals to improve Turnstile (https://www.cloudflare.com/turnstile-privacy-policy/).
- Google's role and location terms for Workspace (data processing terms, data regions by edition) were **not checked**. Confirm against Michael's Workspace edition before writing the privacy notice.

### 7.8 Fallback when the script fails

Any of these counts as **failed**: a network error, a timeout (20 s), JSON that cannot be read, `{ok:false}` with a code other than `invalid`, or Turnstile failing to load.

- The failed panel keeps every value and offers three ways out:
  1. `Try again` (with a fresh Turnstile token)
  2. **`Email it instead`**: `mailto:michael@avonstowe.com?subject=Enquiry: {role}, {project}&body=…`. The body is the §7.6 text, URL-encoded and shortened to about 1,800 characters with "(outline shortened)" if needed.
  3. `Copy my enquiry` (Clipboard API)
- `invalid` maps the returned `fields` back onto the inline errors, so the user can fix and resend.
- The email and WhatsApp links below the form are always visible, with or without JavaScript.

### 7.9 Confidentiality copy (exact)

Shown at the top of step 2 and again directly above *Send enquiry*:

> **Please don't send confidential or privileged material until a conflict check is complete.**

followed, on step 2 only, by: *"Michael needs the parties' names to check for conflicts before he can discuss the matter. A brief outline is enough at this stage. The form does not take attachments."*

### 7.10 Alternatives considered (short; limits checked 19 October 2026)

| Option | Verified limits | Who keeps the enquiry | Why not chosen |
|---|---|---|---|
| Cloudflare Worker + Resend + Turnstile | Workers Free 100,000 requests/day; Resend Free 3,000 emails/month, 100/day | **Resend keeps sent-email content and logs**; its docs say account data, metadata and logs are stored in the US even when sending from `eu-west-1` | A second vendor holding enquiry text; new DNS records |
| Web3Forms | Free 250/month, 30-day history, hCaptcha; Turnstile **Pro only** | Web3Forms (AWS, region not stated) | Third-party copy; no Turnstile on free |
| Formspree | Free 50/month (30-day archive); Personal $15/month | Formspree | reCAPTCHA by default; low cap |
| Basin | Free 50/month, 30-day retention; Starter $12.50/month (annual) | Basin | Third-party copy |
| Forminit (formerly Getform) | Free 100/month; Pro $16/month | Forminit | Third-party copy |
| MailChannels free Worker sending | **Ended 31 August 2024** | n/a | Gone |

### 7.11 Changes needed in `lib/legal.ts` (same commit as the form; not to be made before then)

1. Header comment: remove "and has no form"; describe the form, Turnstile and the Apps Script endpoint.
2. `lastUpdated`: change to the release date.
3. Privacy › "What this website collects": replace "Nothing. This website has no enquiry form…" with: *"If you use the enquiry form, we collect what you enter: your role, the stage of the matter, the names of the parties, the project and country, your outline, your name, organisation, email address and, if you give it, your phone number. The form takes no attachments and stores nothing in your browser. It is sent to us by email through Google, which provides our email service. To protect the form from automated abuse it uses Cloudflare Turnstile, which processes technical signals such as your IP address, browser details and TLS fingerprint to tell people from bots."*
4. New section, "Service providers": *"Google (our email and the service that delivers the form) and Cloudflare, Inc. (Turnstile). Cloudflare also uses Turnstile signals to improve its bot detection, for which it is an independent controller."*
5. "International transfers": wording depends on the unresolved UK GDPR / UAE PDPL question (the existing TODO).
6. Retention: *"Enquiries that do not become an instruction are deleted within [12] months, keeping only the record needed for the conflict position."* (open decision 5)
7. Cookies: whether the interaction-only Turnstile widget sets a cookie on this site is **unverified**. Test 12 records it, and the notice then states exactly what was observed, only on the contact form.
8. Also update the comment in `next.config.mjs` ("no client-side code and no form") and `app/llms.txt` if it says there is no form.

---

## 8. Component and file plan, and acceptance tests

### Files (new unless marked)

```
components/enquiry/EnquiryForm.tsx     "use client"; step state machine (1 → 2 → 3 → sending → sent | failed); history handling
components/enquiry/ChipGroup.tsx       radio fieldset styled as chips
components/enquiry/Field.tsx           label + hint + error + input/textarea, aria wiring
components/enquiry/ErrorSummary.tsx
components/enquiry/Summary.tsx         check-answers <dl> with Change links
components/enquiry/turnstile.ts        lazy loader + explicit render, returns token promise
lib/enquiry-rules.json                 limits, option values and error strings: the ONE source for client and Apps Script
lib/enquiry.ts                         typed wrapper: validate(values) → errors, payload builder, mailto builder (no dependency)
app/enquiry.css                        imported from globals.css; the form's own tokens (--field-border:#6b82a8; --error:#ff8f87)
app/page.tsx              (edit)       contact section: <EnquiryForm/> + "Or contact Michael directly" + existing buttons
components/SmoothScroll.tsx (edit)     expose the Lenis instance (module singleton or window.__lenis) for step scrolling
lib/legal.ts, next.config.mjs, app/llms.txt (edit)   per §7
apps-script/Code.js                    doGet, doPost, verifyTurnstile, rateLimit, buildEmail, selfTest
apps-script/rules.js                   GENERATED from lib/enquiry-rules.json by scripts/sync-rules.mjs (do not edit)
apps-script/validate.js                plain-JS port of validate(), tested against the same fixtures as lib/enquiry.ts
apps-script/appsscript.json            manifest per §7.3 (scopes, webapp executeAs/access)
apps-script/.clasp.json                scriptId only (no secrets); push with clasp, or paste by hand
scripts/sync-rules.mjs                 copies the rules JSON into apps-script/rules.js
tests/fixtures/enquiry-cases.json      valid and invalid payloads shared by client and server tests
tests/enquiry.spec.ts                  Playwright
```

**Dependencies:** none added to the site. Validation is a hand-written, typed `validate()` covering about 10 fields. Its limits and messages come from `lib/enquiry-rules.json`, which is also generated into the Apps Script project, and both sides are tested against the same fixtures, so client and server rules cannot drift. **react-hook-form 7.90.0 + zod 4.6.7 + @hookform/resolvers 6.0.0** were considered and rejected: they are good libraries, but too much for one 10-field form on a site that currently ships almost no JavaScript. **Radix / Ark UI** were rejected because native radios already give the right keyboard behaviour. Dev-only additions: `@playwright/test` 1.64.1, `@axe-core/playwright` 4.14.0. Apps Script: no libraries. `@google/clasp` (dev, optional) for pushing code from the repo.

### Acceptance tests (Playwright; run on WebKit "iPhone 13" **and** Chromium "Pixel 7"; per the house note, WebKit is the real iPhone check)

The endpoint is mocked with `page.route("https://script.google.com/macros/s/**")` returning `{ok:…}` JSON unless stated.

**A1 (run first, against the real deployment, before any UI work):** from a page served on `https://www.avonstowe.com` (or a Turnstile test sitekey on a staging host listed in `ALLOWED_HOSTNAMES`), `fetch` the `/exec` URL with `Content-Type: text/plain;charset=utf-8` and a JSON body with the honeypot filled. Expected: no preflight in the network log, the redirect is followed, and `await res.json()` returns `{ok:true}` with no CORS error. Record the response headers of the googleusercontent hop. If it fails, switch to the iframe/postMessage transport in §7.2 before building further.

1. **Layout:** at 320, 390 and 1280 px, `document.documentElement.scrollWidth <= innerWidth` on every step.
2. **Inputs at least 16 px:** for each input and textarea, computed `font-size >= 16px`.
3. **Targets:** every chip and button bounding box is at least 44×44.
4. **Happy path:** tap role, tap stage, Continue, fill step 2, Continue, fill step 3, Send. The mocked 200 is received; the request body contains every field; the sent heading has focus and contains the first name; the live region reads "Sending your enquiry".
5. **Validation:** pressing Continue on an empty step 1 shows the summary with 2 links; focus is on the summary; clicking a link focuses the chip group; selecting a chip clears its error with no further submit.
6. **Messages:** each error string in §4 appears exactly as written (snapshot of `lib/enquiry.ts`).
7. **Back and history:** values survive the Back button **and** `page.goBack()`, and a `Change` link in the summary lands on the right field with its value intact.
8. **Failure fallback:** a mocked HTML error page (unreadable JSON), a mocked `{ok:false, code:"busy"}` and an aborted request (20 s timeout, faked clock) each show the failed panel; all values are still in memory; the `Email it instead` href starts with `mailto:michael@avonstowe.com?subject=Enquiry` and contains the parties; `Try again` resends.
9. **Reduced motion:** with `page.emulateMedia({ reducedMotion: "reduce" })`, computed `transition-duration` on the step container and chips is `0s`.
10. **No JS:** with `javaScriptEnabled: false`, the form is not rendered, and the email and WhatsApp links are visible and correct.
11. **No storage:** after a full journey, `localStorage.length === 0 && sessionStorage.length === 0`.
12. **Third parties:** no request goes to `challenges.cloudflare.com` before the first form interaction; record `context.cookies()` after Turnstile renders and **write the result into the cookie notice**.
13. **axe:** `@axe-core/playwright` reports 0 violations (WCAG 2.2 AA tags) on each step, the error state and the sent state.
14. **Keyboard only** (Chromium desktop): the whole journey with Tab, arrow keys, Space and Enter; focus is always visible and never under the sticky header (the focused element's top is at or below the header's bottom).
15. **Apps Script tests** (a `runTests()` function in the editor, plus `curl -L` against `/exec`, as the Apps Script docs recommend): honeypot filled → `{ok:true}` and no `MailApp` call (stub `MailApp` in tests); `elapsedMs` under 4000 → same; bad or reused Turnstile token → `verification_failed`; wrong `hostname` → `verification_failed`; every case in `enquiry-cases.json` gives the same verdict as the client `validate()`; the sixth enquiry within 10 minutes → `busy`; subject and replyTo contain no CR/LF; a search of Cloud Logging after the test run finds no field values.
15a. **Live smoke test** after each new version: one real enquiry from the live site on an iPhone reaches michael@avonstowe.com, with Reply-To set to the enquirer; then delete it.
16. **Build check:** `next build` still produces a static `out/` with no API routes, and the Lighthouse accessibility score on mobile stays at 100 (record the before and after scores).

---

## 9. Open decisions for Michael

1. **Delivery route: decided 19 October 2026: Google Apps Script in michael@avonstowe.com + Turnstile.** Still open: confirm he can publish a web app to "Anyone" in Workspace admin, and that he is willing to create a free Cloudflare account just for Turnstile.
2. **Roles and stages:** are the six roles and five stages in §4 right? (For example, add "An insurer" or "A consultant"; split "Court proceedings" into TCC / DIFC Courts?)
3. **Reply promise:** say nothing about timing (current draft), or commit to something you will always meet, e.g. "within two working days"?
4. **Privilege confirmation:** keep the plain statement above *Send* (draft), or require a tick box, "I have not included privileged or confidential material"? A tick box adds one more step for everyone, but gives a clearer record.
5. **Retention period** for enquiries that do not become instructions (placeholder: 12 months), and whether the legal notice cites UK GDPR, UAE PDPL or both. This is the existing TODO in `lib/legal.ts`.

---

### Facts not verified (carry into build)
- Awwwards, CSSDA or FWA award status of every exemplar; motion and success states of the exemplars (static capture, nothing submitted).
- Web3Forms Pro price in USD (the page localised to THB 446/month); the region where Web3Forms, Formspree, Basin and Forminit store data.
- Whether Turnstile's interaction-only widget sets cookies on this site (test 12 decides).
- **Apps Script CORS:** that the googleusercontent echo response is readable cross-origin (`Access-Control-Allow-Origin: *`). Widely reported, not in Google's docs. Test A1 decides.
- Apps Script *Executions* page retention (a secondary source says about 7 days); whether `MailApp` leaves a copy in *Sent*; the footnote on the 1,500/day recipient quota; whether Cache, Properties or Lock services add consent scopes.
- Michael's Workspace edition, its data-region and processing terms, and whether he is his own Workspace admin.
- The Mad Libs 25–40% figure: secondary reporting only. The 16 px iOS zoom threshold: established WebKit behaviour, no primary source fetched.
