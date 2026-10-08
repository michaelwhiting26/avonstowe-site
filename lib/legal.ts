/**
 * Legal text, ported from rev2:content/legal.ts with the entity corrected.
 *
 * ACCURACY RULE: these describe what the site ACTUALLY does. As built it sets no
 * cookies, stores nothing in the browser, runs no analytics or third-party
 * script, and has no form. If any of that changes, change this in the same
 * commit.
 *
 * TODO: confirm the data protection regime (UK GDPR is cited; the entity is a
 * UAE free-zone company, so UAE PDPL may also apply) and the governing law of
 * the terms (England and Wales, inherited).
 */

export type LegalSection = { heading: string; paragraphs?: string[]; list?: string[] };
export type LegalDoc = { id: string; title: string; sections: LegalSection[] };

export const lastUpdated = "8 October 2026";

export const legalDocs: LegalDoc[] = [
  {
    id: "privacy",
    title: "Privacy notice",
    sections: [
      {
        heading: "Who we are",
        paragraphs: [
          "Avonstowe FZ-LLC, registered in the Ras Al Khaimah Economic Zone, United Arab Emirates (licence 47022473). A construction and engineering disputes consultancy. Contact: michael@avonstowe.com",
          "We handle personal data in accordance with applicable data protection law, including the UK General Data Protection Regulation and the Data Protection Act 2018 where these apply.",
        ],
      },
      {
        heading: "What this website collects",
        paragraphs: [
          "Nothing. This website has no enquiry form, sets no cookies, uses no analytics and stores nothing in your browser.",
          "Our hosting provider may process technical request data, such as IP address, as part of delivering the site and protecting it from abuse. We do not use it to build any profile of visitors.",
        ],
      },
      {
        heading: "What we collect when you contact us",
        paragraphs: [
          "If you email us, we hold what you choose to send: typically your name, your organisation, your contact details and whatever you tell us about your matter.",
        ],
      },
      {
        heading: "How we use it",
        list: [
          "To respond to your enquiry",
          "To assess a potential instruction, including conflict checking",
          "To carry out an instruction once accepted",
          "To comply with legal and professional obligations",
        ],
      },
      {
        heading: "Lawful basis",
        list: [
          "Legitimate interests, in responding to an enquiry and running the practice",
          "Performance of a contract, where an instruction is accepted",
          "Legal obligation, where retention or disclosure is required",
        ],
      },
      {
        heading: "Confidentiality and sharing",
        paragraphs: [
          "We do not sell personal data. Material relating to a matter is treated as confidential and is not disclosed except where necessary to carry out the instruction, where you instruct us to, or where we are required to by law or professional obligation.",
        ],
      },
      {
        heading: "Retention",
        paragraphs: [
          "We retain enquiry correspondence only as long as needed to respond and to record any conflict position. Matter records are retained for the period required by our professional and legal obligations and by any applicable limitation period.",
        ],
      },
      {
        heading: "Your rights",
        paragraphs: [
          "Subject to the applicable regime, you may request access to your personal data, correction, deletion or restriction of processing, and you may object to processing. You may also complain to a supervisory authority, including the Information Commissioner's Office where the UK regime applies.",
        ],
      },
    ],
  },
  {
    id: "terms",
    title: "Terms of use",
    sections: [
      {
        heading: "Information only",
        paragraphs: [
          "The content of this website is provided for general information only. It is not legal advice, expert evidence, or professional advice on any specific matter, and it should not be relied on as such.",
        ],
      },
      {
        heading: "No professional relationship",
        paragraphs: [
          "Contacting us does not create a contractual or advisory relationship. No relationship arises until an engagement is agreed in writing and any conflict check is completed.",
        ],
      },
      {
        heading: "Confidential material",
        paragraphs: [
          "Please do not send confidential, privileged or commercially sensitive material before an engagement is agreed and a conflict check is completed. Unsolicited material cannot be treated as confidential and may prevent us from accepting an instruction.",
        ],
      },
      {
        heading: "Experience described on this site",
        paragraphs: [
          "Matters are described in general terms in order to preserve their confidentiality. They do not identify parties or proceedings, and nothing on this site should be read as confirming the existence, subject matter or outcome of any particular matter.",
        ],
      },
      {
        heading: "Accuracy and liability",
        paragraphs: [
          "While we aim to ensure accuracy, we make no representation or warranty as to the completeness or reliability of the content of this website, and Avonstowe shall not be liable for any loss arising from reliance on it.",
        ],
      },
      {
        heading: "Intellectual property",
        paragraphs: [
          "All content is owned by Avonstowe unless otherwise stated and may not be reproduced without permission.",
        ],
      },
      {
        heading: "Governing law",
        paragraphs: ["These terms are governed by the laws of England and Wales."],
      },
    ],
  },
  {
    id: "cookies",
    title: "Cookies",
    sections: [
      {
        heading: "None",
        paragraphs: [
          "This website sets no cookies. It uses no analytics, no tag manager, no advertising pixel and no tracking technology of any kind, and it stores nothing in your browser. Fonts are served from this site, not from a third party.",
          "Because nothing is stored and nothing is tracked, there is no consent to collect and no cookie banner to dismiss. If that changes, this notice will be updated in the same change.",
        ],
      },
    ],
  },
];
