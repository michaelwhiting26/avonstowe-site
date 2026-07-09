"use client";

import type { LegalType } from "./OverlayProvider";

const lastUpdatedStyle = {
  color: "var(--navy-300)",
  fontSize: "12px",
  marginBottom: "2rem",
} as const;

// Text below is transcribed verbatim from the original legal overlays in index.html.
export default function LegalOverlays({
  active,
  onClose,
}: {
  active: LegalType | null;
  onClose: (type: LegalType) => void;
}) {
  return (
    <>
      <div id="legal-privacy" className={`legal-overlay${active === "privacy" ? " active" : ""}`} data-lenis-prevent>
        <div className="legal-close">
          <button onClick={() => onClose("privacy")}>Close ✕</button>
        </div>
        <div className="legal-content">
          <h1>Privacy Notice</h1>
          <p style={lastUpdatedStyle}>Last updated: April 23, 2026</p>

          <p>
            Avonstowe (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;) is committed to protecting
            your personal data and handling it in accordance with the UK General Data Protection
            Regulation (UK GDPR) and the Data Protection Act 2018.
          </p>

          <h2>1. Who We Are</h2>
          <p>
            Avonstowe FZ LLC
            <br />
            Dubai, United Arab Emirates
            <br />
            Construction and engineering disputes consultancy
            <br />
            Contact: michael@avonstowe.com
          </p>

          <h2>2. What Information We Collect</h2>
          <p>We may collect:</p>
          <ul>
            <li>Name</li>
            <li>Organisation</li>
            <li>Email address</li>
            <li>Matter details submitted via enquiry forms</li>
          </ul>

          <h2>3. How We Use Your Information</h2>
          <p>We use your data to:</p>
          <ul>
            <li>Respond to enquiries</li>
            <li>Assess potential instructions</li>
            <li>Communicate with you regarding services</li>
          </ul>

          <h2>4. Lawful Basis</h2>
          <p>We process your data based on:</p>
          <ul>
            <li>Legitimate interests (responding to enquiries)</li>
            <li>Consent (where you voluntarily submit information)</li>
          </ul>

          <h2>5. Data Sharing</h2>
          <p>
            We do not sell your data.
            <br />
            We may share data with professional advisers or service providers where necessary to
            respond to your enquiry.
          </p>

          <h2>6. Data Retention</h2>
          <p>We retain enquiry data only as long as necessary to:</p>
          <ul>
            <li>Respond to your enquiry</li>
            <li>Manage potential or ongoing instructions</li>
            <li>Comply with legal obligations</li>
          </ul>

          <h2>7. Your Rights</h2>
          <p>You have the right to:</p>
          <ul>
            <li>Access your data</li>
            <li>Correct inaccuracies</li>
            <li>Request deletion</li>
            <li>Object to processing</li>
            <li>Lodge a complaint with the ICO</li>
          </ul>

          <h2>8. Data Security</h2>
          <p>We take appropriate technical and organisational measures to protect your data.</p>

          <h2>9. Contact</h2>
          <p>
            For any privacy-related queries:
            <br />
            michael@avonstowe.com
          </p>
        </div>
      </div>

      <div id="legal-terms" className={`legal-overlay${active === "terms" ? " active" : ""}`} data-lenis-prevent>
        <div className="legal-close">
          <button onClick={() => onClose("terms")}>Close ✕</button>
        </div>
        <div className="legal-content">
          <h1>Terms of Use</h1>
          <p style={lastUpdatedStyle}>Last updated: April 23, 2026</p>

          <p>By using this website, you agree to the following terms:</p>

          <h2>1. Information Purpose</h2>
          <p>
            The content on this website is provided for general information only and does not
            constitute legal, technical, or professional advice.
          </p>

          <h2>2. No Client Relationship</h2>
          <p>
            Submission of an enquiry does not create a contractual or advisory relationship.
          </p>

          <h2>3. Accuracy</h2>
          <p>
            While we aim to ensure accuracy, we make no representations or warranties regarding
            completeness or reliability.
          </p>

          <h2>4. Liability</h2>
          <p>Avonstowe shall not be liable for any loss arising from reliance on this website.</p>

          <h2>5. Intellectual Property</h2>
          <p>
            All content is owned by Avonstowe unless otherwise stated and may not be reproduced
            without permission.
          </p>

          <h2>6. Governing Law</h2>
          <p>These terms are governed by the laws of England and Wales.</p>
        </div>
      </div>

      <div id="legal-cookies" className={`legal-overlay${active === "cookies" ? " active" : ""}`} data-lenis-prevent>
        <div className="legal-close">
          <button onClick={() => onClose("cookies")}>Close ✕</button>
        </div>
        <div className="legal-content">
          <h1>Cookie Policy</h1>
          <p style={lastUpdatedStyle}>Last updated: April 23, 2026</p>

          <p>This website uses only essential cookies required for basic functionality.</p>

          <h2>What We Do Not Use</h2>
          <p>We do not currently use:</p>
          <ul>
            <li>Analytics cookies</li>
            <li>Advertising cookies</li>
            <li>Tracking technologies</li>
          </ul>

          <p>
            If this changes, this policy will be updated and appropriate consent mechanisms will be
            implemented.
          </p>

          <h2>Your Control</h2>
          <p>You can control cookies through your browser settings.</p>

          <p>For more information, contact: michael@avonstowe.com</p>
        </div>
      </div>
    </>
  );
}
