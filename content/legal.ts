/**
 * Legal pages.
 *
 * ACCURACY RULE:
 * These documents must describe what the site ACTUALLY does, not what a template
 * says. As built, this site:
 *   - sets no cookies of any kind;
 *   - uses no localStorage, sessionStorage or other client-side storage;
 *   - runs no analytics, tag manager, pixel or third-party script;
 *   - has no enquiry form and no form backend;
 *   - collects no personal data through the website itself.
 *
 * If ANY of that changes, these documents must change in the same commit, and the
 * cookie banner question must be revisited. Do not state "we do not use cookies"
 * while shipping something that does.
 */

export type LegalSection = {
  heading?: string;
  paragraphs?: string[];
  list?: string[];
};

export type LegalDoc = {
  title: string;
  description: string;
  lastUpdated: string;
  sections: LegalSection[];
};

/**
 * TODO: Confirm the governing data protection regime. The previous notice cited UK
 * GDPR and the Data Protection Act 2018 while the entity is a Dubai free-zone
 * company. Both may apply depending on where clients and data subjects sit, but the
 * position should be confirmed rather than inherited. UAE Federal Decree-Law No. 45
 * of 2021 (PDPL) and any applicable free-zone regime should be considered.
 */
export const privacy: LegalDoc = {
  title: "Privacy Notice",
  description:
    "How Avonstowe handles personal data. This website collects no personal data; correspondence is handled by email.",
  lastUpdated: "15 August 2026",
  sections: [
    {
      paragraphs: [
        "Avonstowe (“we”, “us”, “our”) is committed to protecting personal data and handling it in accordance with applicable data protection law, including the UK General Data Protection Regulation and the Data Protection Act 2018 where these apply.",
      ],
    },
    {
      heading: "1. Who we are",
      paragraphs: [
        "Avonstowe FZ LLC, Dubai, United Arab Emirates. A construction and engineering disputes consultancy.",
        "Contact: michael@avonstowe.com",
      ],
    },
    {
      heading: "2. What this website collects",
      paragraphs: [
        "Nothing. This website has no enquiry form, sets no cookies, uses no analytics and stores nothing in your browser. Visiting these pages does not provide us with your personal data.",
        "Our hosting provider may process technical request data, such as IP address, as part of delivering the site and protecting it from abuse. That processing is carried out by the host under its own terms and is not used by us to build any profile of visitors.",
      ],
    },
    {
      heading: "3. What we collect when you contact us",
      paragraphs: [
        "If you email or telephone us, we hold what you choose to send: typically your name, your organisation, your contact details and whatever you tell us about your matter.",
      ],
    },
    {
      heading: "4. How we use it",
      list: [
        "To respond to your enquiry",
        "To assess a potential instruction, including conflict checking",
        "To carry out an instruction once accepted",
        "To comply with legal and professional obligations",
      ],
    },
    {
      heading: "5. Lawful basis",
      list: [
        "Legitimate interests, in responding to an enquiry and running the practice",
        "Performance of a contract, where an instruction is accepted",
        "Legal obligation, where retention or disclosure is required",
      ],
    },
    {
      heading: "6. Confidentiality and sharing",
      paragraphs: [
        "We do not sell personal data. Material relating to a matter is treated as confidential and is not disclosed except where necessary to carry out the instruction, where you instruct us to, or where we are required to by law or professional obligation.",
        "Where an assignment requires analytical support from a member of our professional network, that is agreed with the instructing party before any material is shared.",
      ],
    },
    {
      heading: "7. Retention",
      paragraphs: [
        "We retain enquiry correspondence only as long as needed to respond and to record any conflict position. Matter records are retained for the period required by our professional and legal obligations and by any applicable limitation period.",
      ],
    },
    {
      heading: "8. Your rights",
      paragraphs: [
        "Subject to the applicable regime, you may request access to your personal data, correction of inaccuracies, deletion, or restriction of processing, and you may object to processing. You may also complain to a supervisory authority, including the Information Commissioner's Office where the UK regime applies.",
      ],
    },
    {
      heading: "9. Security",
      paragraphs: [
        "We take appropriate technical and organisational measures to protect personal data and matter material.",
      ],
    },
    {
      heading: "10. Contact",
      paragraphs: ["For any privacy query: michael@avonstowe.com"],
    },
  ],
};

export const terms: LegalDoc = {
  title: "Terms of Use",
  description: "Terms governing use of the Avonstowe website.",
  lastUpdated: "15 August 2026",
  sections: [
    {
      paragraphs: ["By using this website, you agree to the following terms."],
    },
    {
      heading: "1. Information purpose",
      paragraphs: [
        "The content of this website is provided for general information only. It is not legal advice, expert evidence, or professional advice on any specific matter, and it should not be relied on as such.",
      ],
    },
    {
      heading: "2. No professional relationship",
      paragraphs: [
        "Contacting us does not create a contractual or advisory relationship. No relationship arises until an engagement is agreed in writing and any conflict check is completed.",
      ],
    },
    {
      heading: "3. Confidential material",
      paragraphs: [
        "Please do not send confidential, privileged or commercially sensitive material before an engagement is agreed and a conflict check is completed. Unsolicited material cannot be treated as confidential and may prevent us from accepting an instruction.",
      ],
    },
    {
      heading: "4. Experience described on this site",
      paragraphs: [
        "Experience is described in general terms — by sector, contract form, region and claim type — in order to preserve the confidentiality of the underlying matters. It does not identify parties or proceedings, and nothing on this site should be read as confirming the existence, subject matter or outcome of any particular matter.",
      ],
    },
    {
      heading: "5. Accuracy",
      paragraphs: [
        "While we aim to ensure accuracy, we make no representation or warranty as to the completeness or reliability of the content of this website.",
      ],
    },
    {
      heading: "6. Liability",
      paragraphs: [
        "Avonstowe shall not be liable for any loss arising from reliance on this website.",
      ],
    },
    {
      heading: "7. Intellectual property",
      paragraphs: [
        "All content is owned by Avonstowe unless otherwise stated and may not be reproduced without permission.",
      ],
    },
    {
      /** TODO: Confirm governing law. Retained from the previous site. The entity is a
       *  Dubai free-zone company, so England and Wales may or may not be the intended
       *  choice for website terms. */
      heading: "8. Governing law",
      paragraphs: ["These terms are governed by the laws of England and Wales."],
    },
  ],
};

export const cookies: LegalDoc = {
  title: "Cookie Policy",
  description: "This website sets no cookies and uses no analytics or tracking technology.",
  lastUpdated: "15 August 2026",
  sections: [
    {
      paragraphs: [
        "This website sets no cookies. It uses no analytics, no tag manager, no advertising pixel and no tracking technology of any kind, and it stores nothing in your browser — no cookies, no localStorage, no sessionStorage.",
        "Because nothing is stored and nothing is tracked, there is no consent to collect and no cookie banner to dismiss.",
      ],
    },
    {
      heading: "What we do not use",
      list: [
        "Analytics cookies or analytics scripts",
        "Advertising or retargeting pixels",
        "Tag managers",
        "Cross-site or behavioural tracking",
        "Social media embeds or third-party fonts",
      ],
    },
    {
      heading: "Hosting",
      paragraphs: [
        "Our hosting provider processes technical request data, such as IP address, in order to serve the site and protect it from abuse. This is a function of hosting rather than a cookie, and we do not use it to identify or profile visitors.",
      ],
    },
    {
      heading: "If this changes",
      paragraphs: [
        "If we later introduce any non-essential storage or measurement, this policy will be updated in the same change and an appropriate consent mechanism will be implemented before it is deployed.",
      ],
    },
    {
      heading: "Contact",
      paragraphs: ["For more information: michael@avonstowe.com"],
    },
  ],
};
